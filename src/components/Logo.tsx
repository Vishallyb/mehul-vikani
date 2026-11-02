import { cn } from "../utils/cn";

export function LogoMark({ className, light = false }: { className?: string; light?: boolean }) {
  const dark = light ? "#ffffff" : "#114b2c";
  return (
    <svg viewBox="0 0 240 140" className={className} aria-hidden>
      {/* pixel squares */}
      <rect x="2" y="22" width="6" height="6" fill="#2b8c57" />
      <rect x="14" y="30" width="7" height="7" fill="#2b8c57" />
      <rect x="4" y="40" width="6" height="6" fill="#2b8c57" opacity=".8" />
      <rect x="24" y="40" width="9" height="9" fill="#2b8c57" />
      <rect x="14" y="50" width="8" height="8" fill="#2b8c57" />
      <rect x="28" y="56" width="9" height="9" fill="#2b8c57" />
      <rect x="38" y="20" width="0" height="0" fill="#2b8c57" />
      {/* M */}
      <path d="M40 18 H64 L110 64 L156 18 H185 V128 H165 V46 L110 101 L60 51 V98 H40 Z" fill={dark} />
      {/* check */}
      <path d="M62 66 L108 116 L228 4" fill="none" stroke="#2b8c57" strokeWidth="22" strokeLinejoin="miter" />
    </svg>
  );
}

export default function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-auto shrink-0" light={light} />
      <div className="leading-none">
        <div className={cn("font-display text-[15px] font-extrabold tracking-[0.14em] sm:text-[17px]", light ? "text-white" : "text-ink")}>
          DR. MEHUL VIKANI
        </div>
        <div className={cn("mt-1.5 font-display text-[9.5px] font-bold tracking-[0.3em] sm:text-[10.5px]", light ? "text-white/60" : "text-steel")}>
          BARIATRIC SURGEON
        </div>
      </div>
    </div>
  );
}
