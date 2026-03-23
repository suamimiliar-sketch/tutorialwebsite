"use client";

import * as React from "react";
import { FooterSection } from "@/components/ui/footer-section";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ExternalLink, AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
    <div className="relative min-h-screen bg-gradient-to-b from-background to-secondary/10 font-sans">
      <DottedSurface />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-8 md:py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Creating AI Influencers
          </h1>
          <p className="text-xl md:text-2xl mb-3 text-foreground">A Complete Step-by-Step Guide</p>
          <div className="inline-block bg-secondary/50 rounded-full px-6 py-3 backdrop-blur-sm border border-border">
            <p className="font-semibold text-sm">For Beginners & Non-Technical Users</p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-6" id="toc">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl font-bold mb-2">Table of Contents</h2>

            <div className="space-y-3">
              {[
                { num: "1", en: "Find Reference Images" },
                { num: "2", en: "Generate AI Influencer Prompt" },
                { num: "3", en: "Create AI Influencer in Google Flow" },
                { num: "4", en: "Customize Character Details" },
                { num: "5", en: "Add Product Review Pose" },
                { num: "6", en: "Generate Video Script with VEO 3" },
                { num: "7", en: "Create Final Video in Flow" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-3 border-l-4 border-border hover:border-blue-500 hover:bg-secondary/50 transition-all rounded-r">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center font-semibold text-sm">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-medium">{item.en}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">Introduction</h2>

          <div className="space-y-4 mb-8">
            <p className="text-base leading-relaxed">
              This guide will walk you through the complete process of creating an AI influencer from scratch. You'll learn how to generate realistic character images, customize their appearance, create product review scenarios, and generate video content with scripts.
            </p>
          </div>

          <CalloutBox type="success" title="✅ What You'll Need">
            <ul className="space-y-3">
              <BulletItem en="Access to Google Gemini custom apps" />
              <BulletItem en="Google Flow (for image generation)" />
              <BulletItem en="Reference images (from Pinterest, Google, or free sources)" />
              <BulletItem en="Basic understanding of prompts and image descriptions" />
            </ul>
          </CalloutBox>

          <CalloutBox type="warning" title="⚠️ Important Note">
            <p className="mb-2">
              Make sure you have permission to use any reference images you download. Only use images from sources that allow free downloads and commercial use.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-6 space-y-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Step 1 */}
          <StepCard number="1" title="Find Reference Images">
            <p className="mb-6">
              The first step is to find a reference image of the model you want to create as your AI influencer. This image will serve as the foundation for generating your character's appearance.
            </p>

            <h4 className="text-lg font-semibold mb-4">Where to Find Images</h4>

            <ul className="space-y-3 mb-6">
              <BulletItem
                en={<><strong>Pinterest:</strong> Search for fashion models, lifestyle photography, or portrait images</>}
              />
              <BulletItem
                en={<><strong>Google Images:</strong> Use specific search terms like "lifestyle portrait" or "casual model photography"</>}
              />
              <BulletItem
                en={<><strong>Free Stock Photo Sites:</strong> Unsplash, Pexels, Pixabay (these allow free commercial use)</>}
              />
            </ul>

            <div className="mt-8">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/images/1.jpg"
                  alt="Reference Image Example"
                  fill
                  className="object-contain bg-secondary/20"
                />
              </div>
            </div>
          </StepCard>

          {/* Step 2 */}
          <StepCard number="2" title="Generate AI Influencer Prompt">
            <p className="mb-6">
              Upload your reference image to the custom Gemini app to generate a detailed prompt that describes all the characteristics of your AI influencer.
            </p>

            <h4 className="text-lg font-semibold mb-4">Access the Custom Gemini App</h4>

            <UrlBox url="https://gemini.google.com/gem/1nZxj4nOhcQ8KJuItTJMl0KnSNOFJZzd5?usp=sharing" />

            <h4 className="text-lg font-semibold mb-4 mt-6">How to Use</h4>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open the Gemini custom app link above" />
              <OrderedItem en="Upload your reference image" />
              <OrderedItem en='Click "Generate" or simply press Enter' />
              <OrderedItem en="The app will automatically analyze the image and generate a comprehensive JSON prompt" />
            </ol>

            <h4 className="text-lg font-semibold mb-4 mt-8">Example Prompt Output</h4>
            <CodeBlock>
              {`{
  "photography_style": "Lifestyle Portrait / Social Media Aesthetic",
  "camera_angle": {
    "view_type": "Eye-level to slightly high angle",
    "perspective": "Three-quarter view turned slightly towards camera",
    "framing": "Close-up / Medium close-up"
  },
  "subject": {
    "face": {
      "age_range": "Early 20s, approximately 20-24 years old",
      "ethnicity": "Caucasian / White",
      "skin_tone": "Fair to light complexion with warm pink undertones",
      "skin_texture": "Smooth, radiant finish",
      "face_shape": "Oval with soft jawline",
      "expression": "Relaxed, confident, slight soft smile",
      "eye_contact": "Direct eye contact with camera",
      "eyes": "Hazel or light brown, almond-shaped",
      "nose": "Straight bridge, slightly upturned tip",
      "lips": "Full, glossy finish, rose-pink color",
      "eyebrows": "Arched, well-groomed, medium thickness",
      "cheekbones": "Highlighted, rosy cheeks with blush"
    },
    "hair": {
      "style": "Long loose waves, layered cut",
      "color": "Dark chocolate brown",
      "texture": "Wavy / Softly curled",
      "length": "Long, extending past shoulders",
      "volume": "Medium to high volume, bouncy",
      "part": "Center part"
    }
  },
  "lighting": {
    "type": "Natural window light / Golden hour",
    "quality": "Soft, diffused but directional warm light",
    "mood": "Warm, intimate, cozy, inviting"
  }
}`}
            </CodeBlock>
          </StepCard>

          {/* Step 3 */}
          <StepCard number="3" title="Create AI Influencer in Google Flow">
            <p className="mb-6">
              Now that you have the detailed prompt, you'll use Google Flow to generate the actual AI influencer image.
            </p>

            <h4 className="text-lg font-semibold mb-4">Steps</h4>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open Google Flow (access through your Google account)" />
              <OrderedItem en="Create a new flow or use an existing image generation flow" />
              <OrderedItem en="Paste the entire JSON prompt generated from Step 2" />
              <OrderedItem en="Run the flow to generate your AI influencer image" />
            </ol>

            <CalloutBox type="info" title="⏱️ Processing Time">
              <p className="mb-2">
                Image generation typically takes 30-60 seconds depending on complexity. Wait for the process to complete before proceeding to the next step.
              </p>
            </CalloutBox>
          </StepCard>

          {/* Step 4 */}
          <StepCard number="4" title="Customize Character Details (Optional)">
            <p className="mb-6">
              Before generating the final image, you can modify the prompt to customize specific details about your AI influencer to better match your brand or target audience.
            </p>

            <h4 className="text-lg font-semibold mb-4">Common Customizations</h4>

            <ul className="space-y-3 mb-6">
              <BulletItem
                en={<><strong>Ethnicity:</strong> Change to "Indonesian", "Asian", "Middle Eastern", etc.</>}
              />
              <BulletItem
                en={<><strong>Skin Tone:</strong> Adjust to "Medium tan", "Deep brown", "Fair", etc.</>}
              />
              <BulletItem
                en={<><strong>Hair Style:</strong> Modify length, texture, or color</>}
              />
              <BulletItem
                en={<><strong>Clothing Style:</strong> Change to match your brand aesthetic</>}
              />
            </ul>

            <div className="mt-8">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/images/4.jpg"
                  alt="Customized Character Example"
                  fill
                  className="object-contain bg-secondary/20"
                />
              </div>
            </div>
          </StepCard>

          {/* Step 5 */}
          <StepCard number="5" title="Add Product Review Pose">
            <p className="mb-6">
              Once you have your base AI influencer image, you can modify it to create product review scenarios. This involves adding a new prompt to change the pose, angle, or situation.
            </p>

            <h4 className="text-lg font-semibold mb-4">Process</h4>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Click on the generated AI influencer image in Google Flow" />
              <OrderedItem en='Select "Add Prompt" or similar option' />
              <OrderedItem en="Enter a modification prompt describing the new pose or scenario" />
              <OrderedItem en="Generate the modified image" />
            </ol>

            <div className="mt-8">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src="/images/5.jpg"
                  alt="Product Review Pose Example"
                  fill
                  className="object-contain bg-secondary/20"
                />
              </div>
            </div>
          </StepCard>

          {/* Step 6 */}
          <StepCard number="6" title="Generate Video Script with VEO 3">
            <p className="mb-6">
              After creating your product review image, the next step is to generate a comprehensive video script using another custom Gemini app. This will provide you with a detailed VEO 3 prompt for video generation.
            </p>

            <h4 className="text-lg font-semibold mb-4">Access the Video Script Generator</h4>

            <UrlBox url="https://gemini.google.com/gem/1WSq0kIS_5MS707GF00Zws-MUYAjeOulN?usp=sharing" />

            <h4 className="text-lg font-semibold mb-4 mt-6">Steps</h4>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open the video script generator Gemini app" />
              <OrderedItem en="Upload your product review image (from Step 5)" />
              <OrderedItem en="Type a prompt describing the video you want to create" />
              <OrderedItem en="The app will generate a complete VEO 3 video prompt with script and specifications" />
            </ol>

            <h4 className="text-lg font-semibold mb-4 mt-8">Example VEO 3 Prompt Output</h4>
            <CodeBlock>
              {`{
  "product_name": "Chanel Coco Mademoiselle Intense",
  "video_title": "Daily Scent Review - Elegant & Cozy",
  "duration": "8 seconds",
  "model": "veo-3.1-generate-preview",
  "technical_specs": {
    "setting": "Cozy Bedroom Floor",
    "lighting": {
      "type": "Natural Window Light",
      "quality": "Diffused and Soft"
    },
    "camera_work": {
      "angle": "Eye-level, slightly above",
      "movement": "Static shot with subtle zoom in"
    },
    "aspect_ratio": "9:16",
    "resolution": "1080p"
  },
  "veo3_prompt": "A young woman sits cross-legged on a cozy bedroom floor, holding the Chanel Coco Mademoiselle Intense perfume bottle. She gently brings it close to her nose, smelling it with a soft, genuine smile. Natural window light creates a warm, intimate atmosphere. Her expression is authentic and relaxed. The camera slowly zooms in slightly to emphasize the product and her genuine reaction.",
  "script": {
    "voiceover_indonesian": "Jujur, wanginya Chanel Coco Mademoiselle ini timeless banget. Cocok buat daily atau acara formal. Aromanya elegant tapi tetep cozy.",
    "voiceover_english": "Honestly, Chanel Coco Mademoiselle has such a timeless scent. Perfect for daily wear or formal events. The aroma is elegant yet cozy."
  },
  "negative_prompt": "no facial morphing, no distorted hands, no unnatural movements, no brand logo changes",
  "character_consistency_rules": "Maintain same facial features, skin tone, and hair style as base character"
}`}
            </CodeBlock>
          </StepCard>

          {/* Step 7 */}
          <StepCard number="7" title="Create Final Video in Flow">
            <p className="mb-6">
              The final step is to take your generated VEO 3 prompt and use it in Google Flow to create the actual video content.
            </p>

            <h4 className="text-lg font-semibold mb-4">Process</h4>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Return to your Google Flow workspace" />
              <OrderedItem en='Select "Add Prompt" on your product review image' />
              <OrderedItem en={<>Copy the <code className="text-xs bg-secondary px-1 py-0.5 rounded">veo3_prompt</code> field from the generated JSON</>} />
              <OrderedItem en="Paste the VEO 3 prompt into the Flow prompt input" />
              <OrderedItem en={<>Set video parameters: Model: <code className="text-xs bg-secondary px-1 py-0.5 rounded">veo-3.1-generate-preview</code>, Duration: 8s, Aspect Ratio: 9:16, Resolution: 1080p</>} />
              <OrderedItem en="Generate the video and wait for processing (may take several minutes)" />
            </ol>

            <CalloutBox type="warning" title="⚙️ Important Settings">
              <ul className="space-y-2">
                <BulletItem en={<>Always use the <strong>negative_prompt</strong> to avoid facial morphing or distorted hands</>} />
                <BulletItem en={<>Check <strong>character_consistency_rules</strong> to ensure consistent appearance</>} />
              </ul>
            </CalloutBox>

            <h4 className="text-lg font-semibold mb-4 mt-6">Post-Production</h4>

            <p className="mb-4">After generating the video, you can:</p>

            <ul className="space-y-2 mb-6">
              <BulletItem en="Add the Indonesian voiceover using the provided script" />
              <BulletItem en="Include background music (lo-fi or acoustic guitar)" />
              <BulletItem en="Add subtle sound effects" />
              <BulletItem en="Use the provided Instagram caption and hashtags" />
            </ul>

            <div className="mt-8">
              <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border shadow-lg bg-secondary/20">
                <video
                  src="/images/7.mp4"
                  controls
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:12px;padding:24px;text-align:center;">
                          <div style="font-size:48px;">🎬</div>
                          <p style="font-weight:600;font-size:15px;">Example Video</p>
                          <p style="font-size:13px;color:#888;line-height:1.6;">
                            Generate your AI influencer video using the VEO 3 prompt above.<br/>
                            Your result will look similar to the example output shown.
                          </p>
                        </div>
                      `;
                    }
                  }}
                >
                  <source src="/images/7.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                Please download the video to see the full quality and better example result
              </p>
            </div>
          </StepCard>

        </div>
      </section>

      {/* Example Results Gallery */}
      <section className="container mx-auto px-4 py-10 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">Example Results</h2>
          <p className="text-muted-foreground mt-3 mb-8">
            Real outputs generated using this exact guide and workflow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/1.jpg", label: "Reference Image", step: "Step 1" },
              { src: "/images/4.jpg", label: "Generated Character", step: "Step 3-4" },
              { src: "/images/5.jpg", label: "Product Review Pose", step: "Step 5" },
            ].map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden border bg-background shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-xs font-semibold text-blue-500">{item.step}</p>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          <CalloutBox type="info" title="ℹ️ These are real AI-generated outputs">
            <p className="text-sm">
              All images above were generated using the exact tools and prompts included in this guide —
              Google Gemini, Google Flow, and VEO 3. No Photoshop, no manual editing.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">What Buyers Say</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              {
                stars: 5,
                text: "Super easy to follow, I created my first AI influencer in under an hour. The Gemini prompts work perfectly!",
                name: "Rina S.",
                location: "Jakarta, Indonesia",
                initials: "RS"
              },
              {
                stars: 5,
                text: "Very detailed step-by-step guide. The JSON prompt output from Gemini was exactly what I needed for Google Flow.",
                name: "Michael T.",
                location: "Singapore",
                initials: "MT"
              },
              {
                stars: 5,
                text: "Worth every penny. I've already made 3 product review videos using this workflow. Highly recommend!",
                name: "Dita P.",
                location: "Surabaya, Indonesia",
                initials: "DP"
              }
            ].map((review, i) => (
              <div key={i} className="bg-background border rounded-xl p-5 shadow-sm">
                <div className="flex text-yellow-400 mb-3 text-sm">
                  {"★".repeat(review.stars)}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-4">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3 pt-3 border-t">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="container mx-auto px-4 py-10 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">Best Practices & Tips</h2>

          <div className="grid md:grid-cols-1 gap-6 mt-8">
            <BestPracticeCard title="Character Consistency">
              <p className="mb-4">
                Maintaining consistent appearance across multiple images and videos is crucial for building a recognizable AI influencer brand.
              </p>
              <ul className="space-y-2">
                <BulletItem en="Always save your base character prompt for future use" />
                <BulletItem en="Use the same facial features, skin tone, and hair in all modifications" />
                <BulletItem en="Test multiple generations to find consistent results" />
              </ul>
            </BestPracticeCard>

            <BestPracticeCard title="Content Quality">
              <ul className="space-y-2">
                <BulletItem en={<><strong>Lighting:</strong> Natural, soft lighting works best for lifestyle content</>} />
                <BulletItem en={<><strong>Background:</strong> Keep backgrounds simple and uncluttered</>} />
                <BulletItem en={<><strong>Authenticity:</strong> Use natural poses - avoid overly posed looks</>} />
              </ul>
            </BestPracticeCard>

            <BestPracticeCard title="Technical Optimization">
              <ul className="space-y-2">
                <BulletItem en={<><strong>Aspect Ratios:</strong> Use 9:16 for Reels/Stories, 1:1 for feed posts</>} />
                <BulletItem en={<><strong>Resolution:</strong> Always generate at 1080p minimum</>} />
                <BulletItem en={<><strong>Negative Prompts:</strong> Always use them to avoid common issues</>} />
              </ul>
            </BestPracticeCard>
          </div>

          <CalloutBox type="success" title="🎯 Final Checklist" className="mt-8">
            <ul className="space-y-2">
              <BulletItem en="✓ Reference image is high quality and properly licensed" />
              <BulletItem en="✓ Character prompt is detailed and saved" />
              <BulletItem en="✓ Product is clearly visible and recognizable" />
              <BulletItem en="✓ Script is natural and authentic" />
              <BulletItem en="✓ Video settings are optimized" />
            </ul>
          </CalloutBox>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 mt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Decrude AI. All rights reserved.
        </p>
      </footer>
    </div>
    </PasswordGate>
  );
}

// Helper Components
function StepCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-background border rounded-2xl p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function CalloutBox({ type, title, children, className = "" }: { type: 'success' | 'warning' | 'info'; title: string; children: React.ReactNode; className?: string }) {
  const styles = {
    success: "bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500",
    warning: "bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500",
    info: "bg-blue-50 dark:bg-blue-950/30 border-l-4 border-cyan-500"
  };

  return (
    <div className={`${styles[type]} rounded-lg p-5 my-6 ${className}`}>
      <div className="font-semibold mb-2">{title}</div>
      {children}
    </div>
  );
}

function BulletItem({ en }: { en: React.ReactNode }) {
  return (
    <li>
      <div className="text-base">{en}</div>
    </li>
  );
}

function OrderedItem({ en }: { en: React.ReactNode }) {
  return (
    <li className="ml-5">
      <div className="text-base">{en}</div>
    </li>
  );
}

function UrlBox({ url }: { url: string }) {
  return (
    <div className="bg-secondary/50 border rounded-lg p-4 my-4 font-mono text-sm break-all">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
        {url}
        <ExternalLink className="w-4 h-4 flex-shrink-0" />
      </a>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-xl border border-gray-800 my-6">
      <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="ml-4 text-xs text-gray-400 font-mono">prompt.json</span>
      </div>
      <div className="p-6 overflow-x-auto max-h-96 overflow-y-auto">
        <pre className="font-mono text-sm leading-relaxed text-gray-300">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

function BestPracticeCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-background border p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}
