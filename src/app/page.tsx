"use client";

import * as React from "react";
import { FooterSection } from "@/components/ui/footer-section";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ExternalLink, AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background to-secondary/10 font-sans">
      <DottedSurface />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Creating AI Influencers
          </h1>
          <p className="text-xl md:text-2xl mb-3 text-foreground">A Complete Step-by-Step Guide</p>
          <p className="text-base md:text-lg italic text-muted-foreground mb-8">Panduan Lengkap Membuat AI Influencer Langkah demi Langkah</p>
          <div className="inline-block bg-secondary/50 rounded-full px-6 py-3 backdrop-blur-sm border border-border">
            <p className="font-semibold text-sm">For Beginners & Non-Technical Users</p>
            <p className="text-xs italic text-muted-foreground mt-1">Untuk Pemula & Pengguna Non-Teknis</p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-12" id="toc">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl font-bold mb-2">Table of Contents</h2>
            <p className="text-sm text-muted-foreground italic mb-6">Daftar Isi</p>

            <div className="space-y-3">
              {[
                { num: "1", en: "Find Reference Images", id: "Cari Gambar Referensi" },
                { num: "2", en: "Generate AI Influencer Prompt", id: "Hasilkan Prompt AI Influencer" },
                { num: "3", en: "Create AI Influencer in Google Flow", id: "Buat AI Influencer di Google Flow" },
                { num: "4", en: "Customize Character Details", id: "Sesuaikan Detail Karakter" },
                { num: "5", en: "Add Product Review Pose", id: "Tambahkan Pose Review Produk" },
                { num: "6", en: "Generate Video Script with VEO 3", id: "Hasilkan Skrip Video dengan VEO 3" },
                { num: "7", en: "Create Final Video in Flow", id: "Buat Video Final di Flow" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 p-3 border-l-4 border-border hover:border-blue-500 hover:bg-secondary/50 transition-all rounded-r">
                  <div className="flex-shrink-0 w-7 h-7 bg-blue-500 text-white rounded-md flex items-center justify-center font-semibold text-sm">
                    {item.num}
                  </div>
                  <div>
                    <p className="font-medium">{item.en}</p>
                    <p className="text-xs text-muted-foreground italic mt-1">{item.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">Introduction</h2>
          <p className="text-sm text-muted-foreground italic mb-6">Pengantar</p>

          <div className="space-y-4 mb-8">
            <p className="text-base leading-relaxed">
              This guide will walk you through the complete process of creating an AI influencer from scratch. You'll learn how to generate realistic character images, customize their appearance, create product review scenarios, and generate video content with scripts.
            </p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              Panduan ini akan memandu Anda melalui proses lengkap membuat AI influencer dari awal. Anda akan belajar cara menghasilkan gambar karakter yang realistis, menyesuaikan penampilan mereka, membuat skenario review produk, dan menghasilkan konten video dengan skrip.
            </p>
          </div>

          <CalloutBox type="success" title="✅ What You'll Need" titleId="Yang Anda Perlukan">
            <ul className="space-y-3">
              <BulletItem en="Access to Google Gemini custom apps" id="Akses ke aplikasi kustom Google Gemini" />
              <BulletItem en="Google Flow (for image generation)" id="Google Flow (untuk pembuatan gambar)" />
              <BulletItem en="Reference images (from Pinterest, Google, or free sources)" id="Gambar referensi (dari Pinterest, Google, atau sumber gratis)" />
              <BulletItem en="Basic understanding of prompts and image descriptions" id="Pemahaman dasar tentang prompt dan deskripsi gambar" />
            </ul>
          </CalloutBox>

          <CalloutBox type="warning" title="⚠️ Important Note" titleId="Catatan Penting">
            <p className="mb-2">
              Make sure you have permission to use any reference images you download. Only use images from sources that allow free downloads and commercial use.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Pastikan Anda memiliki izin untuk menggunakan gambar referensi yang Anda unduh. Hanya gunakan gambar dari sumber yang mengizinkan unduhan gratis dan penggunaan komersial.
            </p>
          </CalloutBox>
        </div>
      </section>

      {/* Steps */}
      <section className="container mx-auto px-4 py-12 space-y-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Step 1 */}
          <StepCard number="1" title="Find Reference Images" titleId="Cari Gambar Referensi">
            <p className="mb-2">
              The first step is to find a reference image of the model you want to create as your AI influencer. This image will serve as the foundation for generating your character's appearance.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Langkah pertama adalah menemukan gambar referensi dari model yang ingin Anda buat sebagai AI influencer. Gambar ini akan menjadi dasar untuk menghasilkan penampilan karakter Anda.
            </p>

            <h4 className="text-lg font-semibold mb-2">Where to Find Images</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Di Mana Menemukan Gambar</p>

            <ul className="space-y-3 mb-6">
              <BulletItem
                en={<><strong>Pinterest:</strong> Search for fashion models, lifestyle photography, or portrait images</>}
                id="Cari model fashion, fotografi gaya hidup, atau gambar potret"
              />
              <BulletItem
                en={<><strong>Google Images:</strong> Use specific search terms like "lifestyle portrait" or "casual model photography"</>}
                id='Gunakan istilah pencarian spesifik seperti "lifestyle portrait" atau "casual model photography"'
              />
              <BulletItem
                en={<><strong>Free Stock Photo Sites:</strong> Unsplash, Pexels, Pixabay (these allow free commercial use)</>}
                id="Situs foto stok gratis: Unsplash, Pexels, Pixabay (ini mengizinkan penggunaan komersial gratis)"
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
          <StepCard number="2" title="Generate AI Influencer Prompt" titleId="Hasilkan Prompt AI Influencer">
            <p className="mb-2">
              Upload your reference image to the custom Gemini app to generate a detailed prompt that describes all the characteristics of your AI influencer.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Unggah gambar referensi Anda ke aplikasi Gemini kustom untuk menghasilkan prompt detail yang menggambarkan semua karakteristik AI influencer Anda.
            </p>

            <h4 className="text-lg font-semibold mb-2">Access the Custom Gemini App</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Akses Aplikasi Gemini Kustom</p>

            <UrlBox url="https://gemini.google.com/gem/1nZxj4nOhcQ8KJuItTJMl0KnSNOFJZzd5?usp=sharing" />

            <h4 className="text-lg font-semibold mb-2 mt-6">How to Use</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Cara Menggunakan</p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open the Gemini custom app link above" id="Buka link aplikasi kustom Gemini di atas" />
              <OrderedItem en="Upload your reference image" id="Unggah gambar referensi Anda" />
              <OrderedItem en='Click "Generate" or simply press Enter' id='Klik "Generate" atau tekan Enter' />
              <OrderedItem en="The app will automatically analyze the image and generate a comprehensive JSON prompt" id="Aplikasi akan secara otomatis menganalisis gambar dan menghasilkan prompt JSON yang komprehensif" />
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
          <StepCard number="3" title="Create AI Influencer in Google Flow" titleId="Buat AI Influencer di Google Flow">
            <p className="mb-2">
              Now that you have the detailed prompt, you'll use Google Flow to generate the actual AI influencer image.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Sekarang setelah Anda memiliki prompt detail, Anda akan menggunakan Google Flow untuk menghasilkan gambar AI influencer yang sebenarnya.
            </p>

            <h4 className="text-lg font-semibold mb-2">Steps</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Langkah-langkah</p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open Google Flow (access through your Google account)" id="Buka Google Flow (akses melalui akun Google Anda)" />
              <OrderedItem en="Create a new flow or use an existing image generation flow" id="Buat flow baru atau gunakan flow pembuatan gambar yang sudah ada" />
              <OrderedItem en="Paste the entire JSON prompt generated from Step 2" id="Tempel seluruh prompt JSON yang dihasilkan dari Langkah 2" />
              <OrderedItem en="Run the flow to generate your AI influencer image" id="Jalankan flow untuk menghasilkan gambar AI influencer Anda" />
            </ol>

            <CalloutBox type="info" title="⏱️ Processing Time" titleId="Waktu Pemrosesan">
              <p className="mb-2">
                Image generation typically takes 30-60 seconds depending on complexity. Wait for the process to complete before proceeding to the next step.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Pembuatan gambar biasanya memakan waktu 30-60 detik tergantung kompleksitas. Tunggu proses selesai sebelum melanjutkan ke langkah berikutnya.
              </p>
            </CalloutBox>
          </StepCard>

          {/* Step 4 */}
          <StepCard number="4" title="Customize Character Details (Optional)" titleId="Sesuaikan Detail Karakter (Opsional)">
            <p className="mb-2">
              Before generating the final image, you can modify the prompt to customize specific details about your AI influencer to better match your brand or target audience.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Sebelum menghasilkan gambar final, Anda dapat memodifikasi prompt untuk menyesuaikan detail spesifik tentang AI influencer Anda agar lebih sesuai dengan merek atau target audiens Anda.
            </p>

            <h4 className="text-lg font-semibold mb-2">Common Customizations</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Kustomisasi Umum</p>

            <ul className="space-y-3 mb-6">
              <BulletItem
                en={<><strong>Ethnicity:</strong> Change to "Indonesian", "Asian", "Middle Eastern", etc.</>}
                id='Etnis: Ubah ke "Indonesia", "Asia", "Timur Tengah", dll.'
              />
              <BulletItem
                en={<><strong>Skin Tone:</strong> Adjust to "Medium tan", "Deep brown", "Fair", etc.</>}
                id='Warna Kulit: Sesuaikan ke "Sawo matang", "Coklat gelap", "Cerah", dll.'
              />
              <BulletItem
                en={<><strong>Hair Style:</strong> Modify length, texture, or color</>}
                id="Gaya Rambut: Modifikasi panjang, tekstur, atau warna"
              />
              <BulletItem
                en={<><strong>Clothing Style:</strong> Change to match your brand aesthetic</>}
                id="Gaya Pakaian: Ubah agar sesuai dengan estetika merek Anda"
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
          <StepCard number="5" title="Add Product Review Pose" titleId="Tambahkan Pose Review Produk">
            <p className="mb-2">
              Once you have your base AI influencer image, you can modify it to create product review scenarios. This involves adding a new prompt to change the pose, angle, or situation.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Setelah Anda memiliki gambar dasar AI influencer, Anda dapat memodifikasinya untuk membuat skenario review produk. Ini melibatkan penambahan prompt baru untuk mengubah pose, sudut, atau situasi.
            </p>

            <h4 className="text-lg font-semibold mb-2">Process</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Proses</p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Click on the generated AI influencer image in Google Flow" id="Klik gambar AI influencer yang dihasilkan di Google Flow" />
              <OrderedItem en='Select "Add Prompt" or similar option' id='Pilih "Add Prompt" atau opsi serupa' />
              <OrderedItem en="Enter a modification prompt describing the new pose or scenario" id="Masukkan prompt modifikasi yang menggambarkan pose atau skenario baru" />
              <OrderedItem en="Generate the modified image" id="Hasilkan gambar yang dimodifikasi" />
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
          <StepCard number="6" title="Generate Video Script with VEO 3" titleId="Hasilkan Skrip Video dengan VEO 3">
            <p className="mb-2">
              After creating your product review image, the next step is to generate a comprehensive video script using another custom Gemini app. This will provide you with a detailed VEO 3 prompt for video generation.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Setelah membuat gambar review produk, langkah selanjutnya adalah menghasilkan skrip video yang komprehensif menggunakan aplikasi Gemini kustom lainnya. Ini akan memberikan Anda prompt VEO 3 yang detail untuk pembuatan video.
            </p>

            <h4 className="text-lg font-semibold mb-2">Access the Video Script Generator</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Akses Generator Skrip Video</p>

            <UrlBox url="https://gemini.google.com/gem/1WSq0kIS_5MS707GF00Zws-MUYAjeOulN?usp=sharing" />

            <h4 className="text-lg font-semibold mb-2 mt-6">Steps</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Langkah-langkah</p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Open the video script generator Gemini app" id="Buka aplikasi Gemini generator skrip video" />
              <OrderedItem en="Upload your product review image (from Step 5)" id="Unggah gambar review produk Anda (dari Langkah 5)" />
              <OrderedItem en="Type a prompt describing the video you want to create" id="Ketik prompt yang menggambarkan video yang ingin Anda buat" />
              <OrderedItem en="The app will generate a complete VEO 3 video prompt with script and specifications" id="Aplikasi akan menghasilkan prompt video VEO 3 lengkap dengan skrip dan spesifikasi" />
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
          <StepCard number="7" title="Create Final Video in Flow" titleId="Buat Video Final di Flow">
            <p className="mb-2">
              The final step is to take your generated VEO 3 prompt and use it in Google Flow to create the actual video content.
            </p>
            <p className="text-sm text-muted-foreground italic mb-6">
              Langkah terakhir adalah mengambil prompt VEO 3 yang dihasilkan dan menggunakannya di Google Flow untuk membuat konten video yang sebenarnya.
            </p>

            <h4 className="text-lg font-semibold mb-2">Process</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Proses</p>

            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <OrderedItem en="Return to your Google Flow workspace" id="Kembali ke workspace Google Flow Anda" />
              <OrderedItem en='Select "Add Prompt" on your product review image' id='Pilih "Add Prompt" pada gambar review produk Anda' />
              <OrderedItem en={<>Copy the <code className="text-xs bg-secondary px-1 py-0.5 rounded">veo3_prompt</code> field from the generated JSON</>} id={<>Salin field <code className="text-xs bg-secondary px-1 py-0.5 rounded">veo3_prompt</code> dari JSON yang dihasilkan</>} />
              <OrderedItem en="Paste the VEO 3 prompt into the Flow prompt input" id="Tempel prompt VEO 3 ke input prompt Flow" />
              <OrderedItem en={<>Set video parameters: Model: <code className="text-xs bg-secondary px-1 py-0.5 rounded">veo-3.1-generate-preview</code>, Duration: 8s, Aspect Ratio: 9:16, Resolution: 1080p</>} id="Atur parameter video sesuai spesifikasi" />
              <OrderedItem en="Generate the video and wait for processing (may take several minutes)" id="Hasilkan video dan tunggu pemrosesan (mungkin beberapa menit)" />
            </ol>

            <CalloutBox type="warning" title="⚙️ Important Settings" titleId="Pengaturan Penting">
              <ul className="space-y-2">
                <BulletItem en={<>Always use the <strong>negative_prompt</strong> to avoid facial morphing or distorted hands</>} id={<>Selalu gunakan <strong>negative_prompt</strong> untuk menghindari morfing wajah atau tangan terdistorsi</>} />
                <BulletItem en={<>Check <strong>character_consistency_rules</strong> to ensure consistent appearance</>} id={<>Periksa <strong>character_consistency_rules</strong> untuk memastikan penampilan konsisten</>} />
              </ul>
            </CalloutBox>

            <h4 className="text-lg font-semibold mb-2 mt-6">Post-Production</h4>
            <p className="text-sm text-muted-foreground italic mb-4">Pasca-Produksi</p>

            <p className="mb-2">After generating the video, you can:</p>
            <p className="text-sm text-muted-foreground italic mb-4">Setelah menghasilkan video, Anda dapat:</p>

            <ul className="space-y-2 mb-6">
              <BulletItem en="Add the Indonesian voiceover using the provided script" id="Menambahkan voiceover Indonesia menggunakan skrip yang disediakan" />
              <BulletItem en="Include background music (lo-fi or acoustic guitar)" id="Menyertakan musik latar (lo-fi atau gitar akustik)" />
              <BulletItem en="Add subtle sound effects" id="Menambahkan efek suara halus" />
              <BulletItem en="Use the provided Instagram caption and hashtags" id="Menggunakan caption Instagram dan hashtag yang disediakan" />
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
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3 italic">
                Please download the video to see the full quality and better example result
              </p>
              <p className="text-center text-xs text-muted-foreground italic">
                Silakan unduh video untuk melihat kualitas penuh dan contoh hasil yang lebih baik
              </p>
            </div>
          </StepCard>

        </div>
      </section>

      {/* Best Practices */}
      <section className="container mx-auto px-4 py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 border-b-2 pb-3">Best Practices & Tips</h2>
          <p className="text-sm text-muted-foreground italic mb-8">Praktik Terbaik & Tips</p>

          <div className="grid md:grid-cols-1 gap-6">
            <BestPracticeCard title="Character Consistency" titleId="Konsistensi Karakter">
              <p className="mb-2">
                Maintaining consistent appearance across multiple images and videos is crucial for building a recognizable AI influencer brand.
              </p>
              <p className="text-sm text-muted-foreground italic mb-4">
                Mempertahankan penampilan yang konsisten di berbagai gambar dan video sangat penting untuk membangun merek AI influencer yang dapat dikenali.
              </p>
              <ul className="space-y-2">
                <BulletItem en="Always save your base character prompt for future use" id="Selalu simpan prompt karakter dasar untuk penggunaan masa depan" />
                <BulletItem en="Use the same facial features, skin tone, and hair in all modifications" id="Gunakan fitur wajah, warna kulit, dan rambut yang sama di semua modifikasi" />
                <BulletItem en="Test multiple generations to find consistent results" id="Uji beberapa generasi untuk menemukan hasil yang konsisten" />
              </ul>
            </BestPracticeCard>

            <BestPracticeCard title="Content Quality" titleId="Kualitas Konten">
              <ul className="space-y-2">
                <BulletItem en={<><strong>Lighting:</strong> Natural, soft lighting works best for lifestyle content</>} id="Pencahayaan alami dan lembut paling cocok untuk konten lifestyle" />
                <BulletItem en={<><strong>Background:</strong> Keep backgrounds simple and uncluttered</>} id="Pertahankan latar belakang yang sederhana dan tidak berantakan" />
                <BulletItem en={<><strong>Authenticity:</strong> Use natural poses - avoid overly posed looks</>} id="Gunakan pose alami - hindari tampilan yang terlalu diatur" />
              </ul>
            </BestPracticeCard>

            <BestPracticeCard title="Technical Optimization" titleId="Optimasi Teknis">
              <ul className="space-y-2">
                <BulletItem en={<><strong>Aspect Ratios:</strong> Use 9:16 for Reels/Stories, 1:1 for feed posts</>} id="Rasio Aspek: Gunakan 9:16 untuk Reels/Stories, 1:1 untuk feed" />
                <BulletItem en={<><strong>Resolution:</strong> Always generate at 1080p minimum</>} id="Resolusi: Selalu hasilkan minimal 1080p" />
                <BulletItem en={<><strong>Negative Prompts:</strong> Always use them to avoid common issues</>} id="Negative Prompt: Selalu gunakan untuk menghindari masalah umum" />
              </ul>
            </BestPracticeCard>
          </div>

          <CalloutBox type="success" title="🎯 Final Checklist" titleId="Daftar Periksa Akhir" className="mt-8">
            <ul className="space-y-2">
              <BulletItem en="✓ Reference image is high quality and properly licensed" id="Gambar referensi berkualitas tinggi dan berlisensi tepat" />
              <BulletItem en="✓ Character prompt is detailed and saved" id="Prompt karakter detail dan tersimpan" />
              <BulletItem en="✓ Product is clearly visible and recognizable" id="Produk terlihat jelas dan dapat dikenali" />
              <BulletItem en="✓ Script is natural and authentic" id="Skrip alami dan autentik" />
              <BulletItem en="✓ Video settings are optimized" id="Pengaturan video teroptimasi" />
            </ul>
          </CalloutBox>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © 2026 Decrude AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Helper Components
function StepCard({ number, title, titleId, children }: { number: string; title: string; titleId: string; children: React.ReactNode }) {
  return (
    <div className="bg-background border rounded-2xl p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground italic mt-1">{titleId}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function CalloutBox({ type, title, titleId, children, className = "" }: { type: 'success' | 'warning' | 'info'; title: string; titleId?: string; children: React.ReactNode; className?: string }) {
  const styles = {
    success: "bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500",
    warning: "bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500",
    info: "bg-blue-50 dark:bg-blue-950/30 border-l-4 border-cyan-500"
  };

  return (
    <div className={`${styles[type]} rounded-lg p-5 my-6 ${className}`}>
      <div className="font-semibold mb-2">{title}</div>
      {titleId && <p className="text-sm text-muted-foreground italic mb-3">{titleId}</p>}
      {children}
    </div>
  );
}

function BulletItem({ en, id }: { en: React.ReactNode; id: React.ReactNode }) {
  return (
    <li>
      <div className="text-base">{en}</div>
      <div className="text-sm text-muted-foreground italic mt-1">{id}</div>
    </li>
  );
}

function OrderedItem({ en, id }: { en: React.ReactNode; id: React.ReactNode }) {
  return (
    <li className="ml-5">
      <div className="text-base">{en}</div>
      <div className="text-sm text-muted-foreground italic mt-1">{id}</div>
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

function BestPracticeCard({ title, titleId, children }: { title: string; titleId: string; children: React.ReactNode }) {
  return (
    <div className="bg-background border p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground italic mb-4">{titleId}</p>
      {children}
    </div>
  );
}
