import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Send,
  Sparkles,
} from "lucide-react";

import heroVideo from "@/assets/hero-bg.mp4.asset.json";
import { TechBackdrop } from "@/components/TechBackdrop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adinda Riski Maulida — Technology × Creative" },
      {
        name: "description",
        content:
          "Portofolio Adinda Riski Maulida, mahasiswa D3 Manajemen Informatika: AI/ML, web & mobile development, UI/UX, dan digital media.",
      },
      { property: "og:title", content: "Adinda Riski Maulida — Technology × Creative" },
      {
        property: "og:description",
        content:
          "Technology × Creative — AI/ML, Web & Mobile Development, UI/UX, and Digital Media. Lihat proyek, pengalaman, dan sertifikat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Pendidikan", href: "#education" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Kontak", href: "#contact" },
];

const highlights = [
  "Informatics Student & Technology × Creative Enthusiast",
  "Technology × Creative — AI/ML, Web & Mobile Development, UI/UX, and Digital Media",
];

const passionCards = [
  { icon: Sparkles, title: "AI / Machine Learning", desc: "Integrasi model prediksi ke aplikasi mobile, Multiple Linear Regression, RAG / Conversational AI, Flowise AI, Google Gemini API" },
  { icon: Code2, title: "Web Development", desc: "HTML, CSS, JavaScript, Laravel, CodeIgniter 4, REST API" },
  { icon: Briefcase, title: "Mobile Development", desc: "Flutter, API Integration, CRUD, Database Integration" },
  { icon: Award, title: "Desktop Development", desc: "Java, Java Desktop Application" },
  { icon: Briefcase, title: "Hardware Integration", desc: "RFID, Thermal Printer, Barcode Scanner" },
  { icon: Award, title: "Software Testing", desc: "Black Box Testing, Functional Testing, Pengujian aplikasi, Dokumentasi/panduan pengguna" },
  { icon: Sparkles, title: "Creative & Digital Media", desc: "UI/UX Design, Graphic Design, Video Editing, Photography, Videography, Content Creation, Social Media / Digital Communication, Live Streaming, Podcast, Dokumentasi kegiatan" },
];

const education = [
  {
    place: "D3 Manajemen Informatika",
    period: "Semester 4 — Sekarang",
    detail: "Fokus pada pengembangan aplikasi, AI/ML terapan, dan pengujian perangkat lunak.",
    tag: "Perguruan Tinggi",
  },
];

const experience = [
  {
    role: "Internship",
    company: "JTI Inova",
    period: "Periode: akan dilengkapi",
    desc: "Detail posisi, tanggung jawab, project, dan tools selama magang akan dilengkapi berdasarkan dokumen magang.",
    tag: "Magang",
  },
  {
    role: "Kepala Departemen Kominfo",
    company: "UKM Labbaik",
    period: "Organisasi",
    desc: "Memimpin departemen Kominfo: mengatur strategi konten dan media sosial, mengoordinasi tim desain, fotografi, dan videografi, serta memastikan dokumentasi kegiatan berjalan konsisten.",
    tag: "Kepemimpinan",
  },
  {
    role: "Staff Muda Kominfo",
    company: "UKM Labbaik",
    period: "Organisasi",
    desc: "Memproduksi konten digital, desain grafis, foto dan video kegiatan, mendukung live streaming serta produksi podcast, dan mengelola arsip dokumentasi.",
    tag: "Digital Media",
  },
];

const skillGroups: Record<string, { name: string; level: number }[]> = {
  "AI / Machine Learning": [
    { name: "Integrasi Model ke Mobile", level: 80 },
    { name: "Multiple Linear Regression", level: 82 },
    { name: "RAG / Conversational AI", level: 85 },
    { name: "Flowise AI", level: 84 },
    { name: "Google Gemini API", level: 80 },
  ],
  "Web Development": [
    { name: "HTML", level: 92 },
    { name: "CSS", level: 88 },
    { name: "JavaScript", level: 80 },
    { name: "Web Backend", level: 80 },
    { name: "Laravel", level: 82 },
    { name: "CodeIgniter 4", level: 80 },
    { name: "REST API", level: 84 },
  ],
  
  "Mobile Development": [
    { name: "Flutter", level: 82 },
    { name: "API Integration", level: 84 },
    { name: "CRUD", level: 86 },
    { name: "Database Integration", level: 86 },
  ],
  "Desktop Development": [
    { name: "Java", level: 80 },
    { name: "Java Desktop Application", level: 82 },
  ],
  "Hardware Integration": [
    { name: "RFID", level: 78 },
    { name: "Thermal Printer", level: 78 },
    { name: "Barcode Scanner", level: 80 },
  ],
  "Software Testing": [
    { name: "Black Box Testing", level: 85 },
    { name: "Functional Testing", level: 83 },
    { name: "Pengujian aplikasi", level: 85 },
    { name: "Dokumentasi/panduan pengguna", level: 88 },
  ],
  "Creative & Digital Media": [
    { name: "UI/UX Design", level: 85 },
    { name: "Graphic Design", level: 88 },
    { name: "Video Editing", level: 86 },
    { name: "Photography", level: 84 },
    { name: "Videography", level: 84 },
    { name: "Content Creation", level: 86 },
    { name: "Social Media / Digital Communication", level: 88 },
    { name: "Live Streaming", level: 80 },
    { name: "Podcast", level: 80 },
    { name: "Dokumentasi kegiatan", level: 88 },
  ],
};

const projectCategories = ["Semua", "AI/ML", "Web", "Mobile", "Desktop"] as const;

const projects = [
  {
    title: "Mirai AI",
    category: "AI/ML",
    desc: "Sistem prediksi tanggal menstruasi: aplikasi mobile untuk pengguna, web untuk admin, dan model machine learning yang diintegrasikan ke aplikasi. Role: Full-stack Mobile & Web Backend · Semester 4 · Case study tersedia.",
    tags: ["Flutter", "Laravel", "Machine Learning", "REST API"],
  },
  {
    title: "Chatbot Puskesmas",
    category: "AI/ML",
    desc: "Chatbot layanan informasi berbasis RAG dengan knowledge base dan dashboard analitik untuk Puskesmas Panji Situbondo. Role: Chatbot Developer · Topik Tugas Akhir · Case study tersedia.",
    tags: ["Flowise AI", "Gemini API", "RAG", "Dashboard"],
  },
  {
    title: "ATK Fatimah POS",
    category: "Desktop",
    desc: "Sistem pencatatan penjualan Java Desktop yang terintegrasi dengan RFID, barcode scanner, dan thermal printer. Role: Frontend & Backend · Semester 2.",
    tags: ["Java", "RFID", "Barcode", "Thermal Printer"],
  },
  {
    title: "ATK Fatimah Store",
    category: "Web",
    desc: "Website company profile sekaligus katalog produk: detail dan harga produk, keranjang, checkout via WhatsApp, dan informasi jam pengambilan. Role: Web Developer · Semester 2.",
    tags: ["Web", "Katalog", "Checkout WhatsApp"],
  },
  {
    title: "Absensi Mahasiswa MIF 2024",
    category: "Desktop",
    desc: "Aplikasi desktop pendukung proses absensi mahasiswa Program Studi Manajemen Informatika. Role: Frontend & Backend · Semester 1.",
    tags: ["Java Desktop", "CRUD", "Database"],
  },
  {
    title: "Mobile App Mirai",
    category: "Mobile",
    desc: "Antarmuka mobile Mirai AI untuk pengguna: pencatatan siklus, hasil prediksi dari model ML, dan sinkronisasi data lewat API.",
    tags: ["Flutter", "API Integration", "UI/UX"],
  },
];

const certificates = [
  { group: "Internship", items: ["JTI Inova — [Certificate]"] },
  {
    group: "Organisasi",
    items: [
      "UKM Labbaik — [Certificate]",
      "Staff Muda Kominfo — [Certificate]",
      "Kepala Departemen Kominfo — [Certificate]",
      "Kepanitiaan — [Certificate]",
    ],
  },
  {
    group: "Academic / Project",
    items: ["[Certificate / Award / Achievement]"],
  },
  {
    group: "Dokumentasi Proyek",
    items: ["Mirai AI — Case Study", "Chatbot Puskesmas — Case Study"],
  },
];

const contactInfo = [
  { icon: Award, label: "GitHub", value: "github.com/Ikky1246" },
  { icon: Sparkles, label: "Fokus", value: "Technology × Creative" },
  { icon: Briefcase, label: "Status", value: "Terbuka untuk kolaborasi & magang" },
];


function SectionHeading({ kicker, title, accent }: { kicker: string; title: string; accent: string }) {
  return (
    <div className="text-center">
      <p className="font-display text-[0.65rem] uppercase tracking-[0.45em] text-muted-foreground">
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title} <span className="text-aurora">{accent}</span>
      </h2>
    </div>
  );
}

function Index() {
  const [skillTab, setSkillTab] = useState<string>("Semua");
  const [projectTab, setProjectTab] = useState<(typeof projectCategories)[number]>("Semua");

  const visibleProjects =
    projectTab === "Semua" ? projects : projects.filter((p) => p.category === projectTab);

  const visibleSkills =
    skillTab === "Semua"
      ? Object.values(skillGroups).flat()
      : skillGroups[skillTab] || [];

  return (
    <div>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-background/70 px-5 py-3 backdrop-blur-xl">
          <a href="#home" className="font-display text-sm font-semibold tracking-tight">
            Dndrskyy<span className="text-aurora">_</span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-orbit inline-flex h-9 items-center rounded-full px-4 text-xs font-medium"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="hero-veil absolute inset-0" />
          <TechBackdrop variant="hero" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="animate-float-up font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Halo, saya
              </p>
              <h1
                className="animate-float-up mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Adinda
                <br />
                <span className="text-aurora">Riski Maulida</span>
              </h1>
              <p
                className="animate-float-up mt-4 font-display text-sm uppercase tracking-[0.3em] text-primary-glow"
                style={{ animationDelay: "140ms" }}
              >
                Informatics Student & Technology × Creative Enthusiast
              </p>
              <p
                className="animate-float-up mt-6 max-w-xl leading-relaxed text-muted-foreground"
                style={{ animationDelay: "200ms" }}
              >
                Saya merancang dan membangun produk digital yang rapi, cepat, dan berkarakter — dari
                riset dan desain antarmuka hingga implementasi serta rilis.
              </p>
              <div
                className="animate-float-up mt-9 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "260ms" }}
              >
                <a
                  href="#projects"
                  className="btn-orbit inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium hover:-translate-y-0.5"
                >
                  Lihat Proyek <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="btn-ghost-orbit inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-medium hover:bg-secondary"
                >
                  <Download className="size-4" /> Unduh CV
                </a>
              </div>

              <dl
                className="animate-float-up mt-12 grid max-w-md grid-cols-3 gap-4"
                style={{ animationDelay: "320ms" }}
              >
                {[
                  { k: "3+", v: "Tahun Pengalaman" },
                  { k: "25+", v: "Proyek Selesai" },
                  { k: "12+", v: "Klien Puas" },
                ].map((s) => (
                  <div key={s.v} className="surface-card rounded-xl px-4 py-3">
                    <dt className="font-display text-2xl font-bold text-aurora">{s.k}</dt>
                    <dd className="mt-1 text-[0.7rem] leading-tight text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="animate-float-up hidden justify-center md:flex" style={{ animationDelay: "200ms" }}>
              <div className="relative flex size-72 items-center justify-center rounded-full border border-border">
                <div className="absolute inset-6 rounded-full border border-primary/30" />
                <div
                  className="absolute inset-0 rounded-full opacity-40 blur-2xl"
                  style={{ backgroundImage: "var(--gradient-aurora)" }}
                />
                <div className="surface-card relative flex size-52 items-center justify-center rounded-full">
                  <span className="font-display text-5xl font-bold text-aurora">DS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative isolate">
          <TechBackdrop />
        </div>

        {/* Tentang */}
        <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
          <SectionHeading kicker="Get to know" title="Tentang" accent="Saya" />
          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_2fr]">
            <div className="surface-card rounded-2xl p-8">
              <ul className="space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[0.6rem] text-primary-glow">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                Saya bekerja di persimpangan desain dan engineering: menyusun sistem desain yang
                konsisten, lalu mengubahnya menjadi kode yang bersih, mudah dirawat, dan performa
                tinggi di semua perangkat.
              </p>
            </div>

            <div className="surface-card rounded-2xl p-8">
              <p className="font-display text-sm font-semibold">Minat & Fokus</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {passionCards.map((c) => (
                  <div
                    key={c.title}
                    className="surface-card rounded-2xl p-5 hover:-translate-y-1 hover:border-primary/50"
                  >
                    <c.icon className="size-5 text-primary-glow" />
                    <p className="mt-4 font-display text-sm font-semibold">{c.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pendidikan */}
        <section id="education" className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading kicker="Academic path" title="Riwayat" accent="Pendidikan" />
          <ol className="mt-12 space-y-5 border-l border-border pl-6">
            {education.map((e) => (
              <li key={e.place} className="relative">
                <span className="absolute -left-[1.85rem] top-6 flex size-7 items-center justify-center rounded-full border border-border bg-card">
                  <GraduationCap className="size-3.5 text-primary-glow" />
                </span>
                <div className="surface-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold">{e.place}</h3>
                    <span className="text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                  <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-widest text-primary-glow">
                    {e.tag}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Pengalaman */}
        <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading kicker="Career" title="Pengalaman" accent="Kerja" />
          <ol className="mt-12 space-y-5 border-l border-border pl-6">
            {experience.map((x) => (
              <li key={x.role} className="relative">
                <span className="absolute -left-[1.85rem] top-6 flex size-7 items-center justify-center rounded-full border border-border bg-card">
                  <Briefcase className="size-3.5 text-primary-glow" />
                </span>
                <div className="surface-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-semibold">{x.role}</h3>
                    <span className="text-xs text-muted-foreground">{x.period}</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-widest text-primary-glow">
                    {x.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.desc}</p>
                  <span className="mt-4 inline-block rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                    {x.tag}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Sertifikat */}
        <section id="certificates" className="mx-auto max-w-4xl px-6 py-24">
          <SectionHeading kicker="Achievements" title="Sertifikat" accent="Pencapaian" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {certificates.map((certGroup) => (
              <div key={certGroup.group} className="space-y-4">
                <h3 className="font-display text-base font-semibold">{certGroup.group}</h3>
                <ul className="space-y-2">
                  {certGroup.items.map((item) => (
                    <li key={item} className="surface-card rounded-xl p-4 flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[0.6rem] text-primary-glow">
                        📜
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Keahlian */}
        <section id="skills" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="Toolbox" title="Keahlian" accent="" />
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {["Semua", ...Object.keys(skillGroups)].map((g) => (
                <button
                  key={g}
                  onClick={() => setSkillTab(g)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    skillTab === g
                      ? "btn-orbit"
                      : "btn-ghost-orbit text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleSkills.map((s) => (
                <div key={s.name} className="surface-card rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm font-medium">{s.name}</p>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.level}%`, backgroundImage: "var(--gradient-aurora)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyek */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading kicker="Selected work" title="Proyek" accent="" />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setProjectTab(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  projectTab === c
                    ? "btn-orbit"
                    : "btn-ghost-orbit text-muted-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((p) => (
              <article
                key={p.title}
                className="surface-card group rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-widest text-primary-glow">
                    {p.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Kontak */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading kicker="Get in touch" title="Hubungi" accent="Saya" />
          <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
            Terbuka untuk kolaborasi freelance, proyek produk, dan peran fulltime.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="surface-card flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/15">
                    <c.icon className="size-4 text-primary-glow" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-display text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              className="surface-card space-y-4 rounded-2xl p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const nama = (document.getElementById('nama') as HTMLInputElement)?.value || '';
                const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                const subjek = (document.getElementById('subjek') as HTMLInputElement)?.value || '';
                const pesan = (document.getElementById('pesan') as HTMLTextAreaElement)?.value || '';

                const whatsappMessage = `Nama: ${nama}%0AEmail: ${email}%0ASubjek: ${subjek}%0APesan: ${pesan}`;
                const whatsappUrl = `https://wa.me/085707034609?text=${whatsappMessage}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <p className="font-display text-sm font-semibold">Kirim Pesan</p>
              <input
                id="nama"
                type="text"
                placeholder="Nama"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                id="subjek"
                type="text"
                placeholder="Subjek"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <textarea
                id="pesan"
                rows={5}
                placeholder="Pesan"
                className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="btn-orbit inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium hover:-translate-y-0.5"
              >
                <Send className="size-4" /> Kirim Pesan
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-display text-sm font-semibold">
            Dndrskyy<span className="text-aurora">_</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © 2026 Dndrskyy. Dibuat dengan teliti di Situbondo.
          </p>
        </div>
      </footer>
    </div>
  );
}
