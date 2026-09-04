import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dndrskyy — Portofolio Web Developer" },
      {
        name: "description",
        content:
          "Portofolio Dndrskyy: profil, riwayat pendidikan, pengalaman kerja, keahlian, proyek, dan kontak.",
      },
      { property: "og:title", content: "Dndrskyy — Portofolio Web Developer" },
      {
        property: "og:description",
        content: "Profil, pendidikan, pengalaman kerja, keahlian, proyek, dan kontak.",
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
  { label: "Kontak", href: "#contact" },
];

const highlights = [
  "Web Developer & Digital Creator",
  "Berpengalaman membangun aplikasi web",
  "Fokus pada UI/UX yang rapi",
  "Terbiasa bekerja dengan data",
  "Selalu belajar hal baru",
];

const passionCards = [
  { icon: Code2, title: "Web Development", desc: "Membangun antarmuka modern" },
  { icon: Sparkles, title: "UI Engineering", desc: "Detail, motion, dan sistem desain" },
  { icon: Briefcase, title: "Data & Otomasi", desc: "Alur kerja yang efisien" },
  { icon: Award, title: "Machine Learning", desc: "Eksperimen model & analitik" },
];

const education = [
  {
    place: "Politeknik Perkapalan Negeri Surabaya",
    period: "2022 — 2026",
    detail: "D4 Teknik Informatika · IPK 3.78 / 4.00",
    tag: "Perguruan Tinggi",
  },
  {
    place: "SMKN 1 Cerme",
    period: "2019 — 2022",
    detail: "Rekayasa Perangkat Lunak · Lulus dengan predikat baik",
    tag: "Sekolah Menengah",
  },
];

const experience = [
  {
    role: "Fullstack Developer",
    company: "Freelance",
    period: "2024 — Sekarang",
    desc: "Membangun aplikasi web end-to-end untuk klien: dashboard internal, company profile, dan sistem pemesanan.",
    tag: "Freelance",
  },
  {
    role: "Programmer & Marketing",
    company: "CV Digital Nusantara",
    period: "2023 — 2024",
    desc: "Mengembangkan modul internal, mengelola rilis, dan menyiapkan materi teknis untuk kebutuhan pemasaran.",
    tag: "Kontrak",
  },
  {
    role: "Team Leader Magang",
    company: "PT Sinergi Data",
    period: "2023",
    desc: "Memimpin tim kecil untuk digitalisasi proses laporan dan integrasi API antar sistem.",
    tag: "Magang",
  },
];

const skillGroups: Record<string, { name: string; level: number }[]> = {
  "Bahasa Pemrograman": [
    { name: "TypeScript", level: 92 },
    { name: "JavaScript", level: 94 },
    { name: "Python", level: 82 },
    { name: "PHP", level: 76 },
    { name: "SQL", level: 85 },
    { name: "Dart", level: 62 },
  ],
  Framework: [
    { name: "React", level: 93 },
    { name: "TanStack Start", level: 84 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 86 },
    { name: "Laravel", level: 74 },
    { name: "Flutter", level: 60 },
  ],
  Database: [
    { name: "PostgreSQL", level: 88 },
    { name: "MySQL", level: 84 },
    { name: "Supabase", level: 90 },
    { name: "Redis", level: 66 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Figma", level: 80 },
    { name: "Docker", level: 70 },
    { name: "Vercel / CI", level: 83 },
  ],
};

const projectCategories = ["Semua", "Web", "Mobile", "Data"] as const;

const projects = [
  {
    title: "Orbit Dashboard",
    category: "Web",
    desc: "Dashboard analitik realtime dengan visualisasi data global dan mode fokus untuk tim operasional.",
    tags: ["React", "TypeScript", "Charts"],
  },
  {
    title: "Nebula Commerce",
    category: "Web",
    desc: "Storefront modular dengan checkout cepat, pencarian instan, dan panel admin ringan.",
    tags: ["Next-gen UI", "API", "Payments"],
  },
  {
    title: "Signal Studio",
    category: "Web",
    desc: "Perangkat kolaborasi kreator: moodboard, komentar bertimestamp, ekspor otomatis.",
    tags: ["Design System", "Motion"],
  },
  {
    title: "Rute Cepat",
    category: "Mobile",
    desc: "Aplikasi perencana rute harian dengan mode offline dan pengingat berbasis lokasi.",
    tags: ["Flutter", "Maps", "Offline"],
  },
  {
    title: "Absensi Wajah",
    category: "Mobile",
    desc: "Presensi karyawan berbasis pengenalan wajah dengan sinkronisasi ke server pusat.",
    tags: ["Flutter", "ML Kit"],
  },
  {
    title: "Prediksi Panen",
    category: "Data",
    desc: "Model prediksi hasil panen dari data cuaca dan histori lahan, disajikan lewat dashboard.",
    tags: ["Python", "Pandas", "Sklearn"],
  },
  {
    title: "Sentimen Publik",
    category: "Data",
    desc: "Analisis sentimen komentar media sosial dengan pipeline pembersihan data otomatis.",
    tags: ["NLP", "Airflow"],
  },
  {
    title: "Sistem Pemesanan",
    category: "Web",
    desc: "Sistem reservasi ruang dengan kalender, notifikasi email, dan laporan penggunaan.",
    tags: ["Node", "PostgreSQL"],
  },
  {
    title: "Katalog Digital",
    category: "Web",
    desc: "Katalog produk dengan pencarian fuzzy, filter dinamis, dan halaman detail yang cepat.",
    tags: ["React", "Search"],
  },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "halo@dndrskyy.dev" },
  { icon: Phone, label: "Telepon", value: "+62 812 3456 7890" },
  { icon: MapPin, label: "Lokasi", value: "Surabaya, Indonesia" },
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
  const [skillTab, setSkillTab] = useState<string>("Bahasa Pemrograman");
  const [projectTab, setProjectTab] = useState<(typeof projectCategories)[number]>("Semua");

  const visibleProjects =
    projectTab === "Semua" ? projects : projects.filter((p) => p.category === projectTab);

  return (
    <div>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-background/70 px-5 py-3 backdrop-blur-xl">
          <a href="#home" className="font-display text-sm font-semibold tracking-tight">
            Dndrskyy<span className="text-aurora">.</span>
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

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-32 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="animate-float-up font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Halo, saya
              </p>
              <h1
                className="animate-float-up mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Muhammad
                <br />
                <span className="text-aurora">Dndrskyy</span>
              </h1>
              <p
                className="animate-float-up mt-4 font-display text-sm uppercase tracking-[0.3em] text-primary-glow"
                style={{ animationDelay: "140ms" }}
              >
                Web Developer · Digital Creator
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

        {/* Tentang */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading kicker="Get to know" title="Tentang" accent="Saya" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
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

            <div>
              <p className="font-display text-sm font-semibold">Minat & Fokus</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
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

        {/* Keahlian */}
        <section id="skills" className="border-y border-border bg-secondary/20 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading kicker="Toolbox" title="Keahlian" accent="" />
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {Object.keys(skillGroups).map((g) => (
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
              {skillGroups[skillTab]?.map((s) => (
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
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="font-display text-sm font-semibold">Kirim Pesan</p>
              <input
                type="text"
                placeholder="Nama"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <input
                type="text"
                placeholder="Subjek"
                className="h-11 w-full rounded-xl border border-input bg-background/60 px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <textarea
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
            Dndrskyy<span className="text-aurora">.</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © 2026 Dndrskyy. Dibuat dengan teliti di Surabaya.
          </p>
        </div>
      </footer>
    </div>
  );
}
