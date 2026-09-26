"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "✨ Seluruh Profil" },
    { id: "about", label: "💡 Filosofi & Persona" },
    { id: "focus", label: "🎯 Fokus & Keahlian" },
    { id: "career", label: "💼 Jejak Langkah" },
    { id: "accolades", label: "🏆 Pencapaian" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0d14] text-slate-100 font-sans antialiased relative overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Lighting Effects */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 blur-[130px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-[45%] -left-[150px] w-[500px] h-[500px] bg-teal-500/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] -right-[150px] w-[500px] h-[500px] bg-purple-600/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Header / Brand Bar */}
      <header className="border-b border-slate-800/40 sticky top-0 bg-[#0a0d14]/80 backdrop-blur-xl z-50 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-teal-300 p-[1px] shadow-lg shadow-indigo-500/10 group-hover:shadow-indigo-500/30 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-cyan-300 text-sm">
                AD
              </div>
            </div>
            <div>
              <span className="font-semibold text-slate-100 text-sm block tracking-wide">Arum Dahlia</span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Digital Explorer</span>
            </div>
          </div>
          <a
            href="mailto:arumdahlia67@gmail.com"
            className="text-xs font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/50 px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-cyan-500/10 hover:scale-105"
          >
            Mari Terhubung ✦
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-12 relative z-10">
        
        {/* Personal Branding Hero Banner */}
        <section className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              FINANCE & CREATIVE TECH STRATEGIST
            </div>
            
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
              Ketelitian Keuangan, <br className="hidden md:inline" />
              Dipadukan dengan <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Eksplorasi AI & Web</span>.
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Saya memadukan presisi akuntansi dengan fleksibilitas teknologi modern. Berfokus pada efisiensi alur kerja berbasis AI, komunikasi publik yang adaptif, serta terus berinovasi di lanskap digital.
            </p>

            {/* Quick Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/60 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 block">Latar Belakang</span>
                <span className="text-slate-200 font-semibold text-sm">Akuntansi & Keuangan</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block">Karakter Kerja</span>
                <span className="text-slate-200 font-semibold text-sm">Detail & Adaptif</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block">Fokus Eksplorasi</span>
                <span className="text-slate-200 font-semibold text-sm">AI Workflow & Web</span>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 block">Soft Skill</span>
                <span className="text-slate-200 font-semibold text-sm">Public Speaking & Broadcasting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filter Pills */}
        <section className="sticky top-20 z-40 bg-[#0a0d14]/90 backdrop-blur-xl py-3 -mx-2 px-2 rounded-2xl border border-slate-800/50 shadow-xl">
          <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs md:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl transition-all duration-300 font-medium whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-400 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-100 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Dynamic Animated Content Container */}
        <div className="space-y-10 transition-all duration-500">

          {/* Section: Filosofi & Persona */}
          {(activeTab === "all" || activeTab === "about") && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                <h2 className="text-sm font-mono tracking-widest text-cyan-400 uppercase">01 / Filosofi & Persona</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-4 backdrop-blur-lg hover:border-slate-700 transition duration-300">
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-cyan-400">✦</span> Presisi Berbasis Angka
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Sebagai lulusan Akuntansi & Keuangan Lembaga (SMK N 2 Blora 2025), saya terbiasa bekerja dengan tingkat akurasi tinggi, disiplin terstruktur, serta analisis yang tajam dalam mengelola data.
                  </p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-8 rounded-3xl space-y-4 backdrop-blur-lg hover:border-slate-700 transition duration-300">
                  <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-indigo-400">✦</span> Pembelajar Mandiri Berorientasi Masa Depan
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    Saya meyakini bahwa batasan jurusan bukanlah penghalang. Melalui bantuan AI sebagai mitra berpikir dan eksplorasi web modern, saya terus memperluas keahlian di bidang teknologi digital dan efisiensi kerja.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Section: Fokus & Keahlian */}
          {(activeTab === "all" || activeTab === "focus") && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent" />
                <h2 className="text-sm font-mono tracking-widest text-indigo-400 uppercase">02 / Fokus & Spektrum Keahlian</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-indigo-500/50 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Keuangan & Tata Kelola",
                    desc: "Penyusunan laporan keuangan, pembukuan terstruktur, serta akurasi transaksi.",
                    tag: "Financial Precision",
                    color: "border-teal-500/30 text-teal-300",
                  },
                  {
                    title: "Komunikasi & Broadcasting",
                    desc: "Kemampuan berbicara di depan publik, public relations, dan pengalaman penyiaran radio.",
                    tag: "Public Speaking",
                    color: "border-cyan-500/30 text-cyan-300",
                  },
                  {
                    title: "AI-Augmented Web Dev",
                    desc: "Pembuatan website interaktif modern memanfaatkan integrasi AI & framework Next.js.",
                    tag: "Tech Innovation",
                    color: "border-indigo-500/30 text-indigo-300",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-2xl space-y-3 hover:scale-[1.02] hover:border-slate-700 transition-all duration-300"
                  >
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border bg-slate-950 ${item.color}`}>
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-100">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Jejak Langkah */}
          {(activeTab === "all" || activeTab === "career") && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                <h2 className="text-sm font-mono tracking-widest text-purple-400 uppercase">03 / Pengalaman & Perjalanan</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
              </div>

              <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-8">
                {/* Active Role */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-950 animate-pulse" />
                  <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-2 hover:border-cyan-500/40 transition">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/50">
                      Profesional Aktif
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">PT PxxxxWxxx Indonesia</h3>
                    <p className="text-xs text-slate-400">Operasional Harian & Kepatuhan Standar SOP</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed pt-2 font-light">
                      Menjalankan operasional kerja dengan standar ketelitian tinggi, memastikan eksekusi tugas sesuai prosedur resmi perusahaan secara konsisten.
                    </p>
                  </div>
                </div>

                {/* Practical Experience */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-950" />
                  <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-2 hover:border-indigo-500/40 transition">
                    <span className="text-[10px] font-mono uppercase text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/50">
                      Praktik Penyiaran
                    </span>
                    <h3 className="text-lg font-bold text-slate-100">Penyiar Radio</h3>
                    <p className="text-xs text-slate-400">Praktik Kerja Lapangan (PKL) — Nilai: Sangat Bagus</p>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed pt-2 font-light">
                      Mengeksplorasi seni olah vokal, interaksi audiens secara langsung, dan menyampaikan informasi dengan alur komunikasi yang jelas dan menarik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: Pencapaian & Sertifikasi */}
          {(activeTab === "all" || activeTab === "accolades") && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
                <h2 className="text-sm font-mono tracking-widest text-teal-400 uppercase">04 / Rekam Pencapaian</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-teal-500/50 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Sertifikasi */}
                <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="text-teal-400">📜</span> Sertifikasi Resmi
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex justify-between items-center">
                      <span>Uji Kompetensi Keahlian Akuntansi (UKK)</span>
                      <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950 px-2 py-0.5 rounded">Kompeten</span>
                    </li>
                    <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex justify-between items-center">
                      <span>Praktik Kerja Penyiaran Radio</span>
                      <span className="text-emerald-400 font-mono text-[10px] bg-emerald-950 px-2 py-0.5 rounded">Sangat Bagus</span>
                    </li>
                    <li className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/60 flex justify-between items-center">
                      <span>Pelatihan Viva Beauty</span>
                      <span className="text-indigo-400 font-mono text-[10px] bg-indigo-950 px-2 py-0.5 rounded">Certified</span>
                    </li>
                  </ul>
                </div>

                {/* Prestasi */}
                <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <span className="text-indigo-400">🥇</span> Kompetisi & Olahraga
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/60">
                      <span className="text-indigo-300 font-semibold block">Olimpiade PAI</span>
                      <span className="text-slate-500 text-[10px]">Medali Perunggu</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/60">
                      <span className="text-teal-300 font-semibold block">Pencak Silat O2SN</span>
                      <span className="text-slate-500 text-[10px]">Juara 1 & 2</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/60">
                      <span className="text-cyan-300 font-semibold block">POPDA Silat</span>
                      <span className="text-slate-500 text-[10px]">Juara 2</span>
                    </div>
                    <div className="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/60">
                      <span className="text-purple-300 font-semibold block">Bola Volly Putri</span>
                      <span className="text-slate-500 text-[10px]">Juara 1 Tim</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modern Minimalist Footer */}
      <footer className="border-t border-slate-800/40 mt-20 py-10 text-center text-slate-500 text-xs relative z-10">
        <p className="font-mono">Designed for Arum Dahlia — Personal Interactive Space</p>
      </footer>
    </main>
  );
}
