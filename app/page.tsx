export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Arum Dahlia
          </span>
          <div className="flex gap-4 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition">Tentang</a>
            <a href="#education" className="hover:text-cyan-400 transition">Pendidikan</a>
            <a href="#achievements" className="hover:text-cyan-400 transition">Prestasi</a>
            <a href="#certifications" className="hover:text-cyan-400 transition">Sertifikat</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skill</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Proyek</a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-sm font-medium">
            ✨ Welcome to My Personal Space
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Halo, Saya <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Arum Dahlia</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Lulusan SMK Akuntansi & Keuangan Lembaga yang berfokus pada pengembangan diri, komunikasi, serta eksplorasi teknologi web modern.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition shadow-lg shadow-cyan-500/20"
            >
              Lihat Proyek
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
            <span className="text-cyan-400">#</span> Tentang Saya
          </h2>
          <div className="bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Saya adalah seorang individu yang aktif, kompetitif, dan adaptif dengan latar belakang pendidikan Akuntansi dan Keuangan Lembaga dari SMKN 2 Blora. Memiliki beragam rekam jejak prestasi di bidang olahraga, seni, dan akademik sejak jenjang sekolah dasar, serta memiliki minat besar dalam dunia komunikasi dan teknologi.
            </p>
          </div>
        </section>

        {/* Riwayat Pendidikan */}
        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Riwayat Pendidikan
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
              <p className="text-slate-400 text-sm">Akuntansi dan Keuangan Lembaga</p>
            </div>
          </div>
        </section>

        {/* Prestasi */}
        <section id="achievements" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Prestasi & Penghargaan
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
                    <p className="text-slate-400 text-sm">Tingkat Nasional / Daerah</p>
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

        {/* Sertifikasi & Pengalaman SMK */}
        <section id="certifications" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Sertifikasi & Keahlian (SMK N 2 Blora)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Predikat: Kompeten</span>
              <h3 className="text-lg font-bold text-slate-100">Uji Kompetensi Keahlian (UKK)</h3>
              <p className="text-slate-400 text-sm">
                Sertifikat kelulusan uji kompetensi keahlian jurusan Akuntansi dan Keuangan Lembaga.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Predikat: Sangat Bagus</span>
              <h3 className="text-lg font-bold text-slate-100">PKL Penyiar Radio</h3>
              <p className="text-slate-400 text-sm">
                Sertifikat Praktik Kerja Lapangan (PKL) sebagai Penyiar Radio dengan pencapaian hasil sangat bagus.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-cyan-500/50 transition">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Sertifikat Pelatihan</span>
              <h3 className="text-lg font-bold text-slate-100">Viva Beauty</h3>
              <p className="text-slate-400 text-sm">
                Sertifikat keikutsertaan / pelatihan dari Viva Beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Keahlian & Teknologi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Akuntansi & Keuangan', 'Public Speaking / Broadcasting', 'Next.js', 'Tailwind CSS', 'Git & GitHub', 'Node.js', 'Termux CLI', 'Vercel Deployment'].map((skill) => (
              <div
                key={skill}
                className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center hover:border-cyan-500/50 transition group"
              >
                <span className="text-slate-300 font-medium group-hover:text-cyan-400 transition text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Proyek Unggulan
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Next.js + Vercel</span>
              <h3 className="text-xl font-bold text-slate-100">Personal Portfolio Website</h3>
              <p className="text-slate-400 text-sm">
                Website portofolio pribadi modern yang di-deploy menggunakan Vercel dengan integrasi otomatis dari GitHub.
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-slate-700 transition">
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Broadcasting & Public Speaking</span>
              <h3 className="text-xl font-bold text-slate-100">Radio Announcing & Media Project</h3>
              <p className="text-slate-400 text-sm">
                Pengalaman siaran radio interaktif, penyampaian informasi, dan pengelolaan program acara publik secara profesional.
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
