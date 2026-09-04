const codeLines = [
  "const design = (idea) => craft(idea);",
  "<section className=\"grid gap-6\" />",
  "git commit -m \"refine ui tokens\"",
  "SELECT * FROM projects ORDER BY year;",
  "export default function Portfolio() {}",
  "npm run build --production",
  "@media (min-width: 768px) { ... }",
  "docker compose up -d",
];

const glyphs = ["{ }", "</>", "#", "⌘", "◎", "▣", "λ", "∴"];

/**
 * Animated IT / design themed backdrop rendered behind the content
 * sections that follow the hero.
 */
export function TechBackdrop() {
  return (
    <div aria-hidden className="tech-backdrop pointer-events-none absolute inset-0 overflow-hidden">
      <div className="tech-grid absolute inset-0" />
      <div className="tech-scan absolute inset-x-0 h-40" />

      <div className="tech-orb absolute -left-24 top-[12%] size-72 rounded-full" />
      <div className="tech-orb tech-orb--alt absolute -right-20 top-[48%] size-80 rounded-full" />
      <div className="tech-orb absolute left-[35%] bottom-[6%] size-64 rounded-full" />

      {/* Wireframe shapes: design language */}
      <svg className="absolute inset-0 size-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="tb-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <g stroke="url(#tb-stroke)" fill="none" strokeWidth="1">
          <rect className="tech-spin-slow" x="6%" y="18%" width="120" height="120" rx="18" />
          <circle className="tech-pulse" cx="86%" cy="26%" r="52" />
          <polygon className="tech-spin" points="0,-46 40,23 -40,23" transform="translate(72,780)" />
          <path className="tech-dash" d="M0 55% H100%" strokeDasharray="6 14" />
          <path className="tech-dash tech-dash--rev" d="M0 82% H100%" strokeDasharray="4 22" />
        </g>
      </svg>

      {/* Drifting code snippets */}
      {codeLines.map((line, i) => (
        <span
          key={line}
          className="tech-code absolute font-mono text-[11px] tracking-tight"
          style={{
            left: `${(i * 13 + 4) % 88}%`,
            animationDelay: `${i * 2.6}s`,
            animationDuration: `${22 + (i % 4) * 6}s`,
          }}
        >
          {line}
        </span>
      ))}

      {/* Floating glyphs */}
      {glyphs.map((g, i) => (
        <span
          key={g}
          className="tech-glyph absolute font-display text-2xl"
          style={{
            left: `${(i * 11 + 8) % 92}%`,
            top: `${(i * 17 + 10) % 90}%`,
            animationDelay: `${i * 1.4}s`,
          }}
        >
          {g}
        </span>
      ))}
    </div>
  );
}

export default TechBackdrop;
