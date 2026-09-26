"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-[#0d0f12] text-zinc-300 font-sans antialiased selection:bg-zinc-800 selection:text-white">
      {/* Header */}
      <header className="border-b border-zinc-800/80 sticky top-0 bg-[#0d0f12]/90 backdrop-blur-md z-50">
        <div className="max-w-3xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-zinc-100 font-semibold tracking-tight text-base hover:text-white transition">
            Arum Dahlia
          </a>
          <a
            href="mailto:arumdahlia67@gmail.com"
            className="text-xs text-zinc-400 hover:text-zinc-100 transition border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md"
          >
            Hubungi
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Hero / Header Ringkas */}
        <section className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight leading-snug">
            Arum Dahlia
          </h1>
          <p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed">
            Lulusan SMK Negeri 2 Blora (2025) jurusan Akuntansi & Keuangan Lembaga. Saat ini bekerja di PT PxxxxWxxx Indonesia, serta mengeksplorasi penerapannya dalam teknologi web dan keuangan digital dengan bantuan AI.
          </p>
        </section>

        {/* Navigation Tabs Filter Tools */}
        <section className="border-y border-zinc-800/80 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "about"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Tentang
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "skills"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Keahlian
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "work"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Pekerjaan
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "education"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Pendidikan
            </button>
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "achievements"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Prestasi
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-3.5 py-1.5 rounded-md transition font-medium whitespace-nowrap ${
                activeTab === "certifications"
                  ? "bg-zinc-100 text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
              }`}
            >
              Sertifikat
            </button>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-12 min-h-[400px]">
          {/* Tentang Saya */}
          {(activeTab === "all" || activeTab === "about") && (
            <section className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Tentang Saya
              </h2>
              <div className="space-y-3 text-zinc-300 leading-relaxed font-normal text-sm md:text-base">
                <p>
                  Nama saya Arum Dahlia. Saya merupakan lulusan SMK Negeri 2 Blora tahun 2025 dari jurusan Akuntansi dan Keuangan Lembaga. Meskipun tidak berlatar belakang pendidikan IT, saya memiliki ketertarikan tinggi di bidang <span className="text-zinc-100 font-medium">web development</span>.
                </p>
                <p>
                  Dalam proses pembuatan dan pengembangan web, saya memanfaatkan kecerdasan buatan (AI) sebagai mitra bertukar pikiran, penyelesaian masalah, dan akselerasi pembelajaran. Saat ini saya berfokus mempelajari ekosistem <span className="text-zinc-100 font-medium">keuangan digital</span> serta pemanfaatan AI untuk efisiensi kerja. Di luar kegiatan profesional, saya gemar membaca dan tertarik mempelajari hal-hal baru.
                </p>
              </div>
            </section>
          )}

          {/* Keahlian & Keterampilan */}
          {(activeTab === "all" || activeTab === "skills") && (
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Keahlian & Keterampilan
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Akuntansi & Keuangan Lembaga",
                  "Public Speaking / Penyiaran",
                  "Komunikasi & Kerja Sama Tim",
                  "Pemanfaatan AI (AI-Assisted Workflow)",
                  "Keuangan Digital",
                  "Next.js & React",
                  "Tailwind CSS",
                  "Git & GitHub",
                  "Vercel Deployment"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-zinc-300 bg-zinc-900/60 border border-zinc-800/80 px-3 py-1.5 rounded-md hover:border-zinc-700 hover:text-zinc-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Pekerjaan */}
          {(activeTab === "all" || activeTab === "work") && (
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Pengalaman Kerja Saat Ini
              </h2>
              <div className="space-y-2 border border-zinc-800/80 p-5 rounded-lg bg-zinc-900/30">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-base font-semibold text-zinc-100">
                    PT PxxxxWxxx Indonesia
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">Sekarang</span>
                </div>
                <p className="text-xs text-zinc-400 font-medium">Staf Operasional</p>
                <p className="text-sm text-zinc-400 leading-relaxed pt-1">
                  Membantu kelancaran operasional perusahaan dan bekerja sesuai dengan Standar Operasional Prosedur (SOP) yang berlaku.
                </p>
              </div>
            </section>
          )}

          {/* Pendidikan */}
          {(activeTab === "all" || activeTab === "education") && (
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Riwayat Pendidikan
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-zinc-800/40 pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">SMK Negeri 2 Blora</h3>
                    <p className="text-sm text-zinc-400">Akuntansi dan Keuangan Lembaga</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">Lulus 2025</span>
                </div>
                <div className="flex justify-between items-start border-b border-zinc-800/40 pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">MTs N Blora</h3>
                    <p className="text-sm text-zinc-400">Pendidikan Menengah Pertama</p>
                  </div>
                </div>
                <div className="flex justify-between items-start border-b border-zinc-800/40 pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-100">SDN Pxxxx</h3>
                    <p className="text-sm text-zinc-400">Pendidikan Dasar</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Prestasi */}
          {(activeTab === "all" || activeTab === "achievements") && (
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Rekam Prestasi
              </h2>
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">MTs N Blora</h3>
                  <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                    <span className="text-zinc-200">Medali Perunggu Olimpiade Pendidikan Agama Islam</span>
                    <span className="text-xs font-mono text-zinc-500">2022</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">SDN Pxxxx</h3>
                  <div className="space-y-1">
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara 1 Pencak Silat O2SN (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2017</span>
                    </div>
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara 2 Pencak Silat O2SN (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2018</span>
                    </div>
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara 2 Pencak Silat POPDA (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2018</span>
                    </div>
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara 1 Tim Bola Volly Putri (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2019</span>
                    </div>
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara 3 Macapat Islami Lomba MAPSI (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2018</span>
                    </div>
                    <div className="py-2 border-b border-zinc-800/40 flex justify-between items-center">
                      <span className="text-zinc-200">Juara Harapan 3 Lomba Tari Klasik (Kecamatan)</span>
                      <span className="text-xs font-mono text-zinc-500">2016</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Sertifikasi */}
          {(activeTab === "all" || activeTab === "certifications") && (
            <section className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                / Sertifikasi & Pelatihan
              </h2>
              <div className="space-y-3 text-sm">
                <div className="p-4 border border-zinc-800/60 rounded-lg flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-zinc-100">Uji Kompetensi Keahlian (UKK)</h3>
                    <p className="text-xs text-zinc-400 mt-1">Akuntansi dan Keuangan Lembaga (SMK N 2 Blora)</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Kompeten
                  </span>
                </div>
                <div className="p-4 border border-zinc-800/60 rounded-lg flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-zinc-100">PKL Penyiar Radio</h3>
                    <p className="text-xs text-zinc-400 mt-1">Praktik Kerja Lapangan Penyiaran</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded">
                    Sangat Bagus
                  </span>
                </div>
                <div className="p-4 border border-zinc-800/60 rounded-lg flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-zinc-100">Sertifikat Viva Beauty</h3>
                    <p className="text-xs text-zinc-400 mt-1">Pelatihan & Pengembangan</p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 mt-20 py-8 text-center text-zinc-600 text-xs">
        <p>© {new Date().getFullYear()} Arum Dahlia. Minimal Portfolio Design.</p>
      </footer>
    </main>
  );
}
