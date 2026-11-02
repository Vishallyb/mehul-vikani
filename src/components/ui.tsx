import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";
import { useAppointment } from "./AppointmentContext";

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
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 sm:pb-28 sm:pt-48">
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
          background: "linear-gradient(90deg, rgba(10, 78, 46, 0.3) 0%, rgba(19, 105, 64, 0.16) 48%, rgba(47, 137, 88, 0.02) 100%)",
        }}
      />
      <div className="pixel-grid absolute inset-0 opacity-30" />
      <div className="hero-content-readable relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 flex flex-wrap items-center gap-1 text-sm text-white/60">
            <Link to="/" className="hover:text-brand-300">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight size={14} />
                {c.to ? <Link to={c.to} className="hover:text-brand-300">{c.label}</Link> : <span className="text-brand-300">{c.label}</span>}
              </span>
            ))}
          </div>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          {desc && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{desc}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export function CTABanner() {
  const { open } = useAppointment();
  return (
    <section className="px-5 py-20 sm:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand-500 px-8 py-14 sm:px-14 sm:py-16">
        <div className="pixel-grid absolute inset-0 opacity-40 [filter:brightness(3)]" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-ink/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h3 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">Your healthier life is one <br className="hidden sm:block" />consultation away.</h3>
            <p className="mt-3 max-w-xl text-white/80">Speak with Dr. Mehul Vikani for a personalised weight-loss plan. Confidential, compassionate and evidence-based.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="light" onClick={open}>Book Consultation</Button>
            <Button variant="dark" to="/obesity-treatment-options">Explore Treatment Options</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
