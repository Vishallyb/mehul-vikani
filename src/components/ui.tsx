import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

export function Reveal({ children, delay = 0, y = 40, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em]", light ? "text-brand-300" : "text-brand-500")}>
      <span className="flex gap-0.5">
        <span className="h-1.5 w-1.5 bg-current" />
        <span className="h-1.5 w-1.5 bg-current opacity-60" />
        <span className="h-1.5 w-1.5 bg-current opacity-30" />
      </span>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, desc, center, light }: { eyebrow: string; title: ReactNode; desc?: string; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={cn("mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl", light ? "text-white" : "text-ink")}>{title}</h2>
      {desc && <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-white/70" : "text-steel")}>{desc}</p>}
    </Reveal>
  );
}

export function Button({ children, to, onClick, variant = "primary", className }: { children: ReactNode; to?: string; onClick?: () => void; variant?: "primary" | "dark" | "outline" | "light"; className?: string }) {
  const styles = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/30",
    dark: "bg-ink text-white hover:bg-brand-600",
    outline: "border-2 border-ink/15 text-ink hover:border-brand-500 hover:text-brand-600",
    light: "bg-white text-ink hover:bg-brand-50",
  }[variant];
  const cls = cn("group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300", styles, className);
  const inner = (
    <>
      {children}
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
        <ArrowUpRight size={14} />
      </span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2.2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

export function PageHero({ title, eyebrow, desc, image, crumbs }: { title: ReactNode; eyebrow: string; desc?: string; image: string; crumbs: { label: string; to?: string }[] }) {
  return (
    <section className="page-hero relative overflow-hidden bg-ink pb-10 pt-28 sm:pb-14 sm:pt-32">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, rgba(8, 63, 39, 0.66) 0%, rgba(13, 83, 52, 0.42) 48%, rgba(20, 91, 58, 0.18) 100%)",
        }}
      />
      <div className="pixel-grid absolute inset-0 opacity-30" />
      <div className="hero-content-readable relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mx-auto mb-7 inline-flex rounded-full border border-brand-300/40 bg-brand-500/20 px-5 py-2 text-sm font-bold text-brand-200 backdrop-blur-sm">
            {eyebrow}
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {desc && <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white sm:text-lg">{desc}</p>}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-1 text-sm text-white/75">
            <Link to="/" className="hover:text-brand-300">Home</Link>
            {crumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1">
                <ChevronRight size={14} />
                {crumb.to ? <Link to={crumb.to} className="hover:text-brand-300">{crumb.label}</Link> : <span className="text-brand-300">{crumb.label}</span>}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
