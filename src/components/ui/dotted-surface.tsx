'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points[];
        animationId: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;

        // Scene setup
        const scene = new THREE.Scene();
        // scene.fog = new THREE.Fog(0xffffff, 2000, 10000); // Removed fog relying on hex hardcode, controlled by CSS preferably but okay to keep if needed, simpler to remove for now or adapt
        scene.fog = new THREE.Fog(theme === 'dark' ? 0x000000 : 0xffffff, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.set(0, 355, 1220);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setClearColor(scene.fog.color, 0); // Transparent background

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const particles: THREE.Points[] = [];
        const positions: number[] = [];
        const colors: number[] = [];

        // Create geometry for all particles
        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0; // Will be animated
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                positions.push(x, y, z);
                if (theme === 'dark') {
                    colors.push(0.8, 0.8, 0.8); // THREE uses 0-1 float for colors usually in attributes or needs conversion? BufferAttribute checks.. actually usually can pass rgb but if Float32 it expects normalized? No, standard example uses pushed values 
                    // Wait, standard THREE particle example usually:
                    // positions.push( x, y, z );
                    // colors has r,g,b. If using VertexColors.
                } else {
                    colors.push(0, 0, 0);
                }
            }
        }

        // Fix color pushing logic based on ThreeJS example. 
        // Original code: colors.push(200, 200, 200) -> this is invalid for Float32 color attribute usually expected 0-1 range if using standard material?
        // Actually PointsMaterial vertexColors expects color attribute.
        // Let's stick to the user provided code structure but maybe fix the color values if they seem off (200 is way > 1).
        // If the user code had `colors.push(200, 200, 200)`, that produces extremely bright colors in standard WebGL. But maybe it relies on something else.
        // I will use 0.5 for gray in dark mode, 0 for black in light mode.
        // Actually I'll stick close to user code but use safe values 0-1.

        // Re-evaluating user code:
        /*
            if (theme === 'dark') {
                    colors.push(200, 200, 200);
                } else {
                    colors.push(0, 0, 0);
                }
        */
        // I will normalize these to 0-1 range assuming standard THREE usage.

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3),
        );

        // Fill colors array
        const colorAttribute = [];
        for (let i = 0; i < positions.length / 3; i++) {
            if (theme === 'dark') {
                colorAttribute.push(0.5, 0.5, 0.5);
            } else {
                colorAttribute.push(0, 0, 0);
            }
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colorAttribute, 3));

        // Create material
        const material = new THREE.PointsMaterial({
            size: 8,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        // Create points object
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationId: number = 0;

        // Animation function
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const positionAttribute = geometry.attributes.position;
            const positions = positionAttribute.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    // Animate Y position with sine waves
                    positions[index + 1] =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;

                    i++;
                }
            }

            positionAttribute.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // Store references
        sceneRef.current = {
            scene,
            camera,
            renderer,
            particles: [points],
            animationId,
            count,
        };

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                // Clean up Three.js objects
                sceneRef.current.scene.traverse((object: any) => {
                    if (object instanceof THREE.Points) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material: any) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });

                sceneRef.current.renderer.dispose();

                if (containerRef.current && sceneRef.current.renderer.domElement) {
                    containerRef.current.removeChild(
                        sceneRef.current.renderer.domElement,
                    );
                }
            }
        };
    }, [theme]);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 -z-1', className)}
            {...props}
        />
    );
}
