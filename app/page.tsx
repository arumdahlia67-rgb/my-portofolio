"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "✨ Semua Cerita & Profil" },
    { id: "story", label: "📖 Narasi Developer & AI" },
    { id: "skills", label: "⚡ Keahlian Pendukung" },
    { id: "experience", label: "💼 Pengalaman Kerja" },
    { id: "achievements", label: "🏆 Rekam Prestasi & Sertifikat" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-slate-800 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Header Bar */}
      <header className="border-b border-slate-200/80 sticky top-0 bg-[#fafafa]/90 backdrop-blur-md z-50 transition-all">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-serif font-bold flex items-center justify-center text-lg shadow-sm">
              AD
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base block leading-none tracking-tight">ARUM DAHLIA</span>
              <span className="text-[11px] text-slate-500 font-mono mt-0.5 block">AI-Augmented Developer & Explorer</span>
            </div>
          </div>
          <a
            href="mailto:arumdahlia67@gmail.com"
            className="text-xs font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-900 hover:text-white px-4 py-2 rounded-full transition duration-300 shadow-sm"
          >
            Hubungi Saya ↗
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-12">
        {/* Prominent Name & Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Terbuka untuk Kolaborasi & Proyek Digital
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Personal Profile</span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight">
              Arum Dahlia.
            </h1>
            <p className="text-xl md:text-2xl font-serif text-slate-600 font-normal italic">
              "Memanfaatkan Kecerdasan Buatan sebagai Partner Berpikir & Eksekusi Digital."
            </p>
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            Saya tidak bermula dari latar belakang *coding* yang murni atau mendalam, melainkan dari ketelitian dunia akuntansi. Namun, dengan memanfaatkan AI sebagai *partner* kolaborasi, saya mampu menjembatani ide menjadi karya web fungsional dan estetik secara efisien.
          </p>

          {/* Featured Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="md:col-span-2 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
                alt="Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-mono">01 / Ruang Kerja & Eksplorasi Workflow</span>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="AI Development"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-mono">02 / Kolaborasi dengan AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Clear Filter Navigation Bar */}
        <section className="sticky top-16 z-40 bg-[#fafafa]/95 backdrop-blur-md py-4 -mx-2 px-2 border-y border-slate-200">
          <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs md:text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-xl transition-all duration-200 font-semibold whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  activeTab === cat.id
                    ? "bg-slate-900 text-white shadow-md scale-105"
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
          
          {/* Section 01: Narasi Developer & AI */}
          {(activeTab === "all" || activeTab === "story") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">01</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Cerita Pengembangan & AI Partner</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm leading-relaxed text-slate-700 text-sm md:text-base">
                <p>
                  Jujur saja, saya tidak menguasai seluruh bahasa pemrograman dari nol secara teoritis yang rumit. Latar belakang saya adalah lulusan Akuntansi & Keuangan Lembaga (SMK N 2 Blora 2025). Namun, di era digital saat ini, kunci utama bukan hanya menghafal sintaks kode, melainkan <strong className="text-slate-900">kemampuan memecahkan masalah (*problem solving*) dan memberikan petunjuk yang tepat (*prompt engineering*).</strong>
                </p>
                <p>
                  Saya menjadikan <strong className="text-slate-900">AI sebagai partner diskusi dan rekan pembuat kode</strong>. AI membantu saya menyusun arsitektur proyek, memperbaiki eror (*debugging*), dan mengeksekusi logika teknis, sementara saya berfokus pada konsep, struktur alur kerja, ketelitian data, serta pengalaman pengguna yang nyaman.
                </p>
                <p>
                  Pendekatan ini membuat proses belajar saya jauh lebih cepat dan adaptif. Saya bisa membangun situs web modern yang responsif dan interaktif tanpa kehilangan ketelitian yang saya pelajari dari dunia keuangan.
                </p>
              </div>
            </section>
          )}

          {/* Section 02: Highlight Keahlian Pendukung */}
          {(activeTab === "all" || activeTab === "skills") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">02</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Highlight Keahlian Pendukung</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Highlight Box */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                    Kombinasi Spesial
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-100">
                    Sinergi Keuangan, Komunikasi, dan Alat Digital Modern
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                    Setiap keahlian saling melengkapi—ketelitian akuntansi memastikan data presisi, kemampuan komunikasi mempermudah penyampaian ide, dan AI mempercepat eksekusi teknis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl space-y-1">
                      <span className="text-emerald-400 font-bold text-sm block">✦ Ketelitian & Tata Kelola</span>
                      <p className="text-slate-300 text-xs">Penyusunan laporan keuangan, pembukuan terstruktur, & kepatuhan SOP.</p>
                    </div>
                    <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl space-y-1">
                      <span className="text-cyan-400 font-bold text-sm block">✦ Public Speaking & Vokal</span>
                      <p className="text-slate-300 text-xs">Pengalaman penyiaran radio, presentasi publik, & komunikasi interpersonal.</p>
                    </div>
                    <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl space-y-1">
                      <span className="text-indigo-400 font-bold text-sm block">✦ AI Collaboration & Prompting</span>
                      <p className="text-slate-300 text-xs">Mengarahkan AI untuk hasil kode web yang efisien dan minim bug.</p>
                    </div>
                    <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl space-y-1">
                      <span className="text-purple-400 font-bold text-sm block">✦ Web Frontend (Next.js & Tailwind)</span>
                      <p className="text-slate-300 text-xs">Menyusun antarmuka yang bersih, responsif, & estetik.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Section 03: Pengalaman Kerja */}
          {(activeTab === "all" || activeTab === "experience") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">03</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Jejak Pengalaman</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        Pekerjaan Aktif
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2">PT PxxxxWxxx Indonesia</h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">2025 — Sekarang</span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2">
                    Menjalankan operasional harian secara konsisten, menjaga kepatuhan terhadap standar prosedur operasional (SOP), serta bekerja dengan tingkat disiplin tinggi.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                        Praktik Lapangan
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-2">Penyiar Radio (PKL)</h3>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Hasil: Sangat Bagus</span>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed pt-2">
                    Mengasah kemampuan interaksi dengan publik secara langsung, menyampaikan narasi berita/hiburan secara jelas, serta mengatur ritme siaran profesional.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Section 04: Rekam Prestasi & Sertifikat (Full-Width List Layout) */}
          {(activeTab === "all" || activeTab === "achievements") && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400">04</span>
                <h2 className="text-lg font-serif font-bold text-slate-900">Rekam Prestasi & Sertifikasi Teruji</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 shadow-sm overflow-hidden">
                {[
                  {
                    title: "Uji Kompetensi Keahlian (UKK) Akuntansi & Keuangan",
                    category: "Sertifikasi Resmi",
                    status: "Kompeten",
                    desc: "Ujian praktek standar nasional pengelolaan keuangan dan pembukuan.",
                    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  },
                  {
                    title: "Sertifikat Praktik Kerja Penyiaran Radio",
                    category: "Sertifikasi Lapangan",
                    status: "Nilai: Sangat Bagus",
                    desc: "Penilaian langsung keahlian public speaking dan operasional penyiaran.",
                    badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
                  },
                  {
                    title: "Sertifikat Pelatihan Viva Beauty",
                    category: "Sertifikasi Pelatihan",
                    status: "Tersertifikasi",
                    desc: "Pengembangan wawasan penampilan profesional dan tata kelola diri.",
                    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
                  },
                  {
                    title: "Olimpiade Pendidikan Agama Islam (PAI)",
                    category: "Kompetensi Akademik",
                    status: "Medali Perunggu",
                    desc: "Ajang kompetisi pengetahuan dan pemahaman pemikiran tingkat pelajar.",
                    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
                  },
                  {
                    title: "O2SN Cabang Olahraga Pencak Silat",
                    category: "Olahraga & Seni Bela Diri",
                    status: "Juara 1 & Juara 2",
                    desc: "Kompetisi olahraga siswa nasional yang menguji ketangkasan dan disiplin fisik.",
                    badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
                  },
                  {
                    title: "POPDA Cabang Olahraga Pencak Silat",
                    category: "Olahraga Daerah",
                    status: "Juara 2",
                    desc: "Pekan Olahraga Pelajar Daerah yang mewakili kontingen sekolah.",
                    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200",
                  },
                  {
                    title: "Turnamen Bola Volly Putri",
                    category: "Kompetensi Tim",
                    status: "Juara 1 (Tim)",
                    desc: "Kepemimpinan dan kerja sama tim dalam kompetisi olahraga beregu.",
                    badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 md:p-6 hover:bg-slate-50/80 transition duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{item.category}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">{item.title}</h3>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>

                    <div className="self-start md:self-center">
                      <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 text-center text-slate-500 text-xs font-mono mt-20">
        <p>© {new Date().getFullYear()} Arum Dahlia — Personal Branding Space</p>
      </footer>
    </main>
  );
}
