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
            <a href="#skills" className="hover:text-cyan-400 transition">Skill</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Proyek</a>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 pt-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-sm font-medium">
            ✨ Welcome to My Personal Space
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Halo, Saya <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Arum Dahlia</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Seorang Web Developer & Digital Enthusiast yang berfokus membangun pengalaman web modern, cepat, dan responsif.
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
        <section id="about" className="space-y-4 pt-8">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Tentang Saya
          </h2>
          <div className="bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Saya tertarik dalam pengembangan web modern menggunakan teknologi seperti Next.js, React, dan Tailwind CSS. Saya menyukai tantangan baru, terus mengasah kemampuan dalam *problem solving*, dan membangun produk digital yang bermanfaat.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6 pt-8">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">#</span> Keahlian & Teknologi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Git & GitHub', 'Node.js', 'Termux CLI', 'Vercel Deployment'].map((skill) => (
              <div
                key={skill}
                className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl text-center hover:border-cyan-500/50 transition group"
              >
                <span className="text-slate-300 font-medium group-hover:text-cyan-400 transition">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6 pt-8">
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
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Web Application</span>
              <h3 className="text-xl font-bold text-slate-100">Project Showcase</h3>
              <p className="text-slate-400 text-sm">
                Aplikasi interaktif yang menampilkan daftar ide, eksperimen, dan proyek digital pilihan.
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
