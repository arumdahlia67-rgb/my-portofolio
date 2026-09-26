export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Arum Dahlia
          </span>
          <div className="flex gap-4 text-sm font-medium text-slate-300 overflow-x-auto py-1">
            <a href="#about" className="hover:text-cyan-400 transition whitespace-nowrap">Tentang</a>
            <a href="#work" className="hover:text-cyan-400 transition whitespace-nowrap">Pekerjaan</a>
            <a href="#education" className="hover:text-cyan-400 transition whitespace-nowrap">Pendidikan</a>
            <a href="#achievements" className="hover:text-cyan-400 transition whitespace-nowrap">Prestasi</a>
            <a href="#certifications" className="hover:text-cyan-400 transition whitespace-nowrap">Sertifikat</a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-sm font-medium">
            ✨ AI-Assisted Developer & Accounting Graduate
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Halo, Saya <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Arum Dahlia</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Lulusan SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga. Bukan orang IT, namun bersemangat memanfaatkan AI untuk eksplorasi <span className="text-cyan-400 font-semibold">Web Development</span> dan <span className="text-cyan-400 font-semibold">Keuangan Digital</span>.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition shadow-lg shadow-cyan-500/20"
            >
              Baca Perkenalan
            </a>
            <a
              href="mailto:arumdahlia67@gmail.com"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-900 text-slate-200 font-semibold transition"
            >
              Hubungi Saya
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Perkenalan
          </h2>
          <div className="bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Nama saya Arum Dahlia, seorang lulusan SMK Negeri 2 Blora tahun 2025 jurusan Akuntansi dan Keuangan Lembaga. Saya bukan orang IT, tapi punya minat di bidang web development. Saya tidak begitu memahami teknik coding, melainkan berkreasi dengan bantuan AI.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Saat ini saya lagi fokus belajar di bidang keuangan digital dan memanfaatkan AI untuk mempermudah dalam pemecahan masalah. Saya sangat bersemangat mempelajari teknologi AI untuk masa depan dunia dan sebagai partner bertukar pikiran serta informasi, serta berminat menjadi seorang developer dengan bantuan AI. Selain itu, saya mempunyai hobi membaca dan tertarik mempelajari hal-hal baru.
            </p>
          </div>
        </section>

        {/* Pekerjaan Saat Ini */}
        <section id="work" className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Pekerjaan Saat Ini
          </h2>
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/40 p-6 md:p-8 rounded-2xl space-y-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-semibold mb-2">
                  Pekerjaan Aktif
                </span>
                <h3 className="text-2xl font-bold text-slate-100">PT PxxxxWxxx Indonesia</h3>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                Sekarang
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Dan sekarang saya lagi bekerja di PT PxxxxWxxx Indonesia, membantu lancarnya operasional perusahaan dan bekerja sesuai SOP.
            </p>
          </div>
        </section>

        {/* Riwayat Pendidikan */}
        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Riwayat Pendidikan (12 Tahun Sekolah)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Sekolah Dasar</span>
              <h3 className="text-lg font-bold text-slate-100">SDN Pxxxx</h3>
              <p className="text-slate-400 text-sm">Pendidikan Dasar</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Sekolah Menengah Pertama</span>
              <h3 className="text-lg font-bold text-slate-100">MTs N Blora</h3>
              <p className="text-slate-400 text-sm">Pendidikan Menengah Pertama</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-2 border-cyan-500/30">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Sekolah Menengah Kejuruan</span>
              <h3 className="text-lg font-bold text-slate-100">SMK N 2 Blora</h3>
              <p className="text-slate-400 text-sm">Akuntansi dan Keuangan Lembaga (Lulus 2025)</p>
            </div>
          </div>
        </section>

        {/* Prestasi */}
        <section id="achievements" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Prestasi Selama Sekolah
          </h2>
          
          <div className="space-y-6">
            {/* Prestasi MTs */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-300 border-l-4 border-cyan-400 pl-3">MTs N Blora</h3>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
                  <div className="text-2xl">🥉</div>
                  <div>
                    <h4 className="font-bold text-slate-100">Medali Perunggu Olimpiade Pendidikan Agama Islam (2022)</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Prestasi SD */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-300 border-l-4 border-cyan-400 pl-3">SDN Pxxxx</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🥇</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara 1 Pencak Silat O2SN (2017)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🥈</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara 2 Pencak Silat O2SN (2018)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🥈</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara 2 Pencak Silat POPDA (2018)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🥇</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara 1 Tim Bola Volly Putri (2019)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🥉</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara 3 Macapat Islami Lomba MAPSI (2018)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-start gap-3">
                  <div className="text-xl">🎗️</div>
                  <div>
                    <h4 className="font-bold text-slate-100 text-sm">Juara Harapan 3 Lomba Tari Klasik (2016)</h4>
                    <p className="text-slate-400 text-xs">Tingkat Kecamatan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sertifikasi SMK N 2 Blora */}
        <section id="certifications" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Sertifikasi (SMK N 2 Blora)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Predikat: Kompeten</span>
              <h3 className="text-lg font-bold text-slate-100">Uji Kompetensi Keahlian (UKK)</h3>
              <p className="text-slate-400 text-sm">
                Akuntansi dan Keuangan Lembaga.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Predikat: Sangat Bagus</span>
              <h3 className="text-lg font-bold text-slate-100">PKL Penyiar Radio</h3>
              <p className="text-slate-400 text-sm">
                Sertifikat Praktik Kerja Lapangan sebagai penyiar radio.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Sertifikat Pelatihan</span>
              <h3 className="text-lg font-bold text-slate-100">Viva Beauty</h3>
              <p className="text-slate-400 text-sm">
                Sertifikat pelatihan dari Viva Beauty.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-8 bg-slate-950 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Arum Dahlia. All rights reserved.</p>
      </footer>
    </main>
  );
}
