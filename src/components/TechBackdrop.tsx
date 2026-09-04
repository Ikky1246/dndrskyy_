import { useEffect, useMemo, useRef, useState } from "react";

const codeLines = [
  "const design = (idea) => craft(idea);",
  '<section className="grid gap-6" />',
  'git commit -m "refine ui tokens"',
  "SELECT * FROM projects ORDER BY year;",
  "export default function Portfolio() {}",
  "npm run build --production",
  "@media (min-width: 768px) { ... }",
  "docker compose up -d",
];

const glyphs = ["{ }", "</>", "#", "⌘", "◎", "▣", "λ", "∴"];

type Tier = "off" | "low" | "high";

/** Detect device capability once on the client. */
function useQualityTier(): Tier {
  const [tier, setTier] = useState<Tier>("low");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nav = navigator as Navigator & { deviceMemory?: number };
    const compute = () => {
      if (reduce.matches) return setTier("off");
      const cores = nav.hardwareConcurrency ?? 4;
      const memory = nav.deviceMemory ?? 4;
      const small = window.innerWidth < 768;
      setTier(cores <= 4 || memory <= 4 || small ? "low" : "high");
    };
    compute();
    reduce.addEventListener("change", compute);
    return () => reduce.removeEventListener("change", compute);
  }, []);

  return tier;
}

/** Mount children only while the wrapper is near/inside the viewport. */
function useNearViewport<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => setVisible(entries[0]?.isIntersecting ?? false),
      { rootMargin: "300px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return visible;
}

/**
 * Animated IT / design themed backdrop.
 * - Renders nothing until it is near the viewport (lazy) and pauses when scrolled away.
 * - Scales element count and animation frame budget down on low-end devices.
 */
export function TechBackdrop({ variant = "section" }: { variant?: "section" | "hero" }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const active = useNearViewport(hostRef);
  const tier = useQualityTier();

  const { codes, marks, showSvg, showScan } = useMemo(() => {
    if (tier === "high") {
      return { codes: codeLines, marks: glyphs, showSvg: true, showScan: true };
    }
    return {
      codes: codeLines.slice(0, 3),
      marks: glyphs.slice(0, 3),
      showSvg: false,
      showScan: false,
    };
  }, [tier]);

  const render = active && tier !== "off";

  return (
    <div
      ref={hostRef}
      aria-hidden
      data-tier={tier}
      className={`tech-backdrop pointer-events-none absolute inset-0 overflow-hidden ${
        variant === "hero" ? "tech-backdrop--hero" : ""
      }`}
    >
      {render && (
        <>
          <div className="tech-grid absolute inset-0" />
          {showScan && <div className="tech-scan absolute inset-x-0 h-40" />}

          <div className="tech-orb absolute -left-24 top-[12%] size-72 rounded-full" />
          <div className="tech-orb tech-orb--alt absolute -right-20 top-[48%] size-80 rounded-full" />
          {tier === "high" && (
            <div className="tech-orb absolute bottom-[6%] left-[35%] size-64 rounded-full" />
          )}

          {showSvg && (
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
                <path className="tech-dash" d="M0 55% H100%" strokeDasharray="6 14" />
                <path className="tech-dash tech-dash--rev" d="M0 82% H100%" strokeDasharray="4 22" />
              </g>
            </svg>
          )}

          {codes.map((line, i) => (
            <span
              key={line}
              className="tech-code absolute font-mono text-[11px] tracking-tight"
              style={{
                left: `${(i * 13 + 4) % 88}%`,
                animationDelay: `${i * 2.6}s`,
                animationDuration: `${(tier === "low" ? 34 : 22) + (i % 4) * 6}s`,
              }}
            >
              {line}
            </span>
          ))}

          {marks.map((g, i) => (
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
        </>
      )}
    </div>
  );
}

export default TechBackdrop;
