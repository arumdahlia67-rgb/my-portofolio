"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "Semua Cerita" },
    { id: "origin", label: "Awal Mula" },
    { id: "craft", label: "Eksplorasi & Kode" },
    { id: "experience", label: "Jejak Kerja" },
    { id: "achievements", label: "Rekam Prestasi" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Header Bar */}
      <header className="border-b border-slate-200/80 sticky top-0 bg-[#fafafa]/90 backdrop-blur-md z-50 transition-all">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-serif font-bold flex items-center justify-center text-sm shadow-sm">
              A
            </div>
            <div>
              <span className="font-semibold text-slate-900 text-sm block leading-none">Arum Dahlia</span>
              <span className="text-[11px] text-slate-500 font-mono">Developer & Explorer</span>
            </div>
          </div>
          <a
            href="mailto:arumdahlia67@gmail.com"
            className="text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:border-slate-400 px-4 py-2 rounded-full transition shadow-sm hover:shadow"
          >
            Sapa Saya ↗
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12">
        {/* Editorial Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Terbuka untuk Kolaborasi & Proyek Baru
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
            Menjalin Logika & Estetika melalui Kode dan Eksplorasi Digital.
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            Selamat datang di sudut kecil internet saya. Saya Arum Dahlia—seorang pemelajar mandiri yang memadukan kedisiplinan latar belakang keuangan dengan rasa ingin tahu tinggi di dunia *web development*.
          </p>

          {/* Featured Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="md:col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                alt="Workspace Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-mono">01 / Meja Kerja & Lingkungan Koding</span>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Code editor setup"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-mono">02 / Eksplorasi Kode Modern</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filter Pills */}
        <section className="sticky top-16 z-40 bg-[#fafafa]/95 backdrop-blur-md py-3 -mx-2 px-2 border-b border-slate-200/60">
          <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs md:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Dynamic Story Sections */}
        <div className="space-y-16">
          {/* Section 01: Awal Mula */}
          {(activeTab === "all" || activeTab === "origin") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">01</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Perjalanan & Perspektif</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                <p>
                  Perjalanan saya tidak dimulai dari ruang kuliah ilmu komputer konvensional. Sebagai lulusan jurusan Akuntansi & Keuangan Lembaga dari SMK Negeri 2 Blora (2025), saya diajarkan untuk teliti terhadap detail, disiplin mengelola data, serta berpikir terstruktur. Namun, di balik angka-angka tersebut, saya menemukan ketertarikan mendalam pada bagaimana sebuah aplikasi dan sistem di balik layar bekerja.
                </p>
                <p>
                  Rasa penasaran itu mendorong saya menjelajahi dunia pemrograman secara mandiri. Ketika banyak orang melihat koding sebagai deretan teks yang rumit, saya melihatnya sebagai kanvas tempat pemecahan masalah dan kreasi bertemu.
                </p>
                <p>
                  Memanfaatkan perkembangan alat bantu modern dan kecerdasan buatan (AI) sebagai rekan berdiskusi, saya mempercepat proses belajar—memahami arsitektur web, memperbaiki kesalahan logika (*debugging*), hingga membangun antarmuka pengguna yang bersih dan nyaman digunakan.
                </p>
              </div>
            </section>
          )}

          {/* Section 02: Eksplorasi & Kode */}
          {(activeTab === "all" || activeTab === "craft") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">02</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Teknologi & Pendekatan Kerja</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-800">
                    &lt;&gt;
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base">Web Development Modern</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Fokus membangun antarmuka web yang efisien menggunakan React, Next.js, dan Tailwind CSS dengan struktur komponen yang rapi dan mudah dirawat.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-sm hover:shadow-md transition">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono text-xs font-bold text-slate-800">
                    AI
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base">AI-Augmented Development</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Mengintegrasikan AI ke dalam alur kerja harian untuk merancang ide, mengeksekusi iterasi kode lebih cepat, dan memecahkan tantangan teknis secara kontekstual.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 p-6 rounded-2xl space-y-3">
                <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Keahlian Pendukung</h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "JavaScript / TypeScript",
                    "Git & GitHub Workflow",
                    "Public Speaking",
                    "Penyiaran Radio",
                    "Analisis Keuangan & Akuntansi",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section 03: Jejak Kerja */}
          {(activeTab === "all" || activeTab === "experience") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">03</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Pengalaman & Lapangan</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-2 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Pekerjaan Utama
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2">PT PxxxxWxxx Indonesia</h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">2025 — Sekarang</span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2">
                    Bertanggung jawab menjaga operasional harian berjalan dengan teliti, mematuhi standar prosedur (SOP) perusahaan, serta mengasah disiplin kerja profesional dalam tim.
                  </p>
                </div>

                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-2 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                        Pengalaman Komunikasi
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2">Penyiar Radio (PKL)</h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Nilai: Sangat Bagus</span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2">
                    Mengasah keahlian *public speaking*, pembawaan diri yang komunikatif, serta menyampaikan pesan secara efektif kepada publik melalui media penyiaran radio.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Section 04: Rekam Prestasi */}
          {(activeTab === "all" || activeTab === "achievements") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">04</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Pencapaian & Kedisiplinan</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900">Sertifikasi Akademik & Kompetensi</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span>Uji Kompetensi Keahlian (UKK) Akuntansi</span>
                      <span className="font-mono text-emerald-700 font-semibold">Kompeten</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span>Praktik Kerja Penyiaran Radio</span>
                      <span className="font-mono text-slate-900 font-medium">Sangat Bagus</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span>Pelatihan Viva Beauty</span>
                      <span className="font-mono text-slate-500">Tersertifikasi</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900">Kompetensi Olahraga & Akademik</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="font-semibold text-slate-900 block">Olimpiade PAI</span>
                      <span className="text-slate-500 text-[11px]">Medali Perunggu</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="font-semibold text-slate-900 block">Pencak Silat O2SN</span>
                      <span className="text-slate-500 text-[11px]">Juara 1 & 2</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="font-semibold text-slate-900 block">POPDA Silat</span>
                      <span className="text-slate-500 text-[11px]">Juara 2</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="font-semibold text-slate-900 block">Volly Putri</span>
                      <span className="text-slate-500 text-[11px]">Juara 1 Tim</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 text-center text-slate-500 text-xs font-mono mt-20">
        <p>© {new Date().getFullYear()} Arum Dahlia. Dirancang dengan Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
