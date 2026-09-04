import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dndrskyy — Creative Developer Portfolio" },
      {
        name: "description",
        content:
          "Portofolio Dndrskyy: web developer & digital creator. Lihat proyek, keahlian, dan cara menghubungi saya.",
      },
      { property: "og:title", content: "Dndrskyy — Creative Developer Portfolio" },
      {
        property: "og:description",
        content: "Portofolio web developer & digital creator: proyek, keahlian, dan kontak.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Orbit Dashboard",
    year: "2026",
    role: "Design & Frontend",
    description:
      "Dashboard analitik realtime dengan visualisasi data global dan mode fokus untuk tim operasional.",
    tags: ["React", "TypeScript", "Charts"],
  },
  {
    title: "Nebula Commerce",
    year: "2025",
    role: "Fullstack",
    description:
      "Storefront modular dengan checkout cepat, pencarian instan, dan panel admin yang ringan.",
    tags: ["Next-gen UI", "API", "Payments"],
  },
  {
    title: "Signal Studio",
    year: "2025",
    role: "Product Design",
    description:
      "Perangkat kolaborasi untuk kreator: papan moodboard, komentar bertimestamp, dan ekspor otomatis.",
    tags: ["Design System", "Motion", "Web"],
  },
];

const skills = [
  { label: "Frontend", items: "React, TypeScript, Tailwind, Motion" },
  { label: "Backend", items: "Node, REST, Postgres, Auth" },
  { label: "Design", items: "Design System, Figma, Prototyping" },
  { label: "Lainnya", items: "Performance, SEO, Deployment" },
];

function Index() {
  return (
    <main>
      {/* Hero with video background */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
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

        <div className="relative mx-auto w-full max-w-5xl px-6 py-24">
          <p className="animate-float-up font-display text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Portfolio · 2026
          </p>
          <h1
            className="animate-float-up mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Membangun produk digital
            <br />
            yang <span className="text-aurora">terasa hidup</span>.
          </h1>
          <p
            className="animate-float-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Halo, saya Dndrskyy — creative developer yang merancang antarmuka rapi, cepat, dan
            berkarakter, dari konsep sampai rilis.
          </p>
          <div
            className="animate-float-up mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#projects"
              className="btn-orbit inline-flex h-12 items-center rounded-full px-7 text-sm font-medium hover:-translate-y-0.5"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="btn-ghost-orbit inline-flex h-12 items-center rounded-full px-7 text-sm font-medium hover:bg-secondary"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Tentang
          </h2>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Saya bekerja di persimpangan desain dan engineering: menyusun sistem desain yang
              konsisten, lalu mengubahnya menjadi kode yang bersih dan performa tinggi.
            </p>
            <p className="text-muted-foreground">
              Fokus saya pada detail — ritme tipografi, gerak yang halus, dan pengalaman yang tetap
              cepat di perangkat apa pun.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Proyek Pilihan
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="surface-card group rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary-glow">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Keahlian
        </h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {skills.map((s) => (
            <div key={s.label} className="grid gap-2 py-5 sm:grid-cols-[200px_1fr]">
              <dt className="font-display text-base font-medium">{s.label}</dt>
              <dd className="text-muted-foreground">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-32">
        <div className="surface-card rounded-3xl p-10 sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Punya ide? <span className="text-aurora">Mari bicara.</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Terbuka untuk kolaborasi freelance, proyek produk, dan peran fulltime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:halo@dndrskyy.dev"
              className="btn-orbit inline-flex h-12 items-center rounded-full px-7 text-sm font-medium hover:-translate-y-0.5"
            >
              halo@dndrskyy.dev
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-orbit inline-flex h-12 items-center rounded-full px-7 text-sm font-medium hover:bg-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">© 2026 Dndrskyy. All rights reserved.</p>
      </section>
    </main>
  );
}
