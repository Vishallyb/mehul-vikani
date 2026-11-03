import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowLeft, ShieldCheck, Award, HeartPulse, Microscope, Users, Clock3, Star, Quote, CheckCircle2, Play, Activity, Salad, Stethoscope, Sparkles, X,
} from "lucide-react";
import { IMG } from "../data/site";
import { useSiteData } from "../components/SiteDataContext";
import { Reveal, SectionHeading, Button, Counter, Eyebrow, CTABanner } from "../components/ui";
import { useAppointment, AppointmentForm } from "../components/AppointmentContext";
import "../styles/home.css";

const SLIDES = [
  { img: IMG.surgeryTeam, eyebrow: "Advanced Bariatric Surgery", title: <>Lose the weight. <br /><span className="text-brand-400">Gain your life.</span></>, desc: "Safe, keyhole weight-loss & metabolic surgery by Dr. Mehul Vikani — trusted by 5,000+ patients for life-changing results." },
  { img: IMG.celebrate, eyebrow: "Metabolic & Diabetes Surgery", title: <>Freedom from <br /><span className="text-brand-400">Type-2 Diabetes.</span></>, desc: "Evidence-based metabolic procedures that help up to 80% of patients reduce or stop insulin and diabetes medicines." },
  { img: IMG.healthyWall, eyebrow: "Holistic Lifelong Care", title: <>A healthier you, <br /><span className="text-brand-400">every step.</span></>, desc: "From your first consult to lifelong follow-up — nutrition, fitness and emotional support under one roof." },
];

const HOME_TREATMENTS = [
  { title: "Diet and Lifestyle", tag: "Non-Surgical", to: "/obesity-treatment-options/diet-and-lifestyle", image: IMG.salad, short: "Personalised nutrition, activity, sleep and sustainable lifestyle support." },
  { title: "Weight-Loss Medications", tag: "Medical Care", to: "/obesity-treatment-options/weight-loss-medications", image: IMG.healthyWall2, short: "Supervised medication and injection treatment options for weight management." },
  { title: "Intragastric Balloon", tag: "Non-Surgical", to: "/treatments/intragastric-balloon", image: IMG.consult1, short: "A temporary, non-surgical endoscopic option with no cuts or scars." },
  { title: "Sleeve Gastrectomy", tag: "Surgical", to: "/treatments/sleeve-gastrectomy", image: IMG.or1, short: "A laparoscopic procedure that creates a smaller stomach for lasting results." },
  { title: "Mini Gastric Bypass (OAGB)", tag: "Surgical", to: "/treatments/mini-gastric-bypass", image: IMG.or3, short: "A single-connection bypass with strong weight-loss and metabolic effects." },
  { title: "Roux-en-Y Gastric Bypass", tag: "Surgical", to: "/treatments/gastric-bypass", image: IMG.or2, short: "A gold-standard metabolic procedure for selected patients." },
];

function Hero() {
  const [i, setI] = useState(0);
  const { open } = useAppointment();
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [i]);
  const s = SLIDES[i];
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={s.img}
          alt=""
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.9, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: "linear-gradient(90deg, rgba(7, 57, 36, 0.62) 0%, rgba(12, 77, 48, 0.38) 42%, rgba(25, 99, 64, 0.08) 72%, transparent 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-800/35 to-transparent" />
      <div className="pixel-grid absolute inset-0 opacity-25" />

      {/* decorative pixels */}
      <div className="absolute left-[46%] top-1/3 hidden gap-2 lg:grid lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, k) => (
          <motion.span key={k} className="h-3 w-3 bg-brand-500" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2.5, delay: k * 0.3, repeat: Infinity }} />
        ))}
      </div>

      <div className="hero-content-readable relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial="h" animate="s" exit="x" variants={{ s: { transition: { staggerChildren: 0.12 } } }}>
              {[
                <Eyebrow light key="e">{s.eyebrow}</Eyebrow>,
                <h1 key="h" className="mt-5 text-[2.6rem] font-black leading-[1.03] tracking-tight text-white drop-shadow-[0_3px_14px_rgba(0,30,18,0.65)] sm:text-6xl lg:text-7xl">{s.title}</h1>,
                <p key="p" className="mt-6 max-w-xl text-base leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,30,18,0.65)] sm:text-lg">{s.desc}</p>,
              ].map((el, k) => (
                <motion.div key={k} variants={{ h: { opacity: 0, y: 40 }, s: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }, x: { opacity: 0, y: -20, transition: { duration: 0.3 } } }}>
                  {el}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="mt-9 flex flex-wrap gap-4">
            <Button onClick={() => open()}>Book Consultation</Button>
            <Button to="/treatments" variant="light">Explore Treatments</Button>
          </motion.div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[IMG.jeans, IMG.consult2, IMG.healthyWall2, IMG.consult5].map((src, k) => (
                <img key={k} src={src} alt="" className="h-11 w-11 rounded-full border-2 border-ink object-cover" />
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center gap-1 text-brand-300">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}<span className="ml-1 text-sm font-bold text-white">4.9/5</span></div>
              <div className="text-xs text-white/60">from 1,200+ Google reviews</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7, duration: 0.9 }} className="glass ml-auto max-w-sm rounded-3xl p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500"><Activity /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60">Average Result</div>
                <div className="font-display text-2xl font-extrabold">-35 kg <span className="text-sm font-semibold text-brand-300">in 12 months</span></div>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[["Diabetes remission", 80], ["BP normalised", 72], ["Sleep apnea resolved", 85]].map(([l, v]) => (
                <div key={l as string}>
                  <div className="mb-1.5 flex justify-between text-xs"><span className="text-white/75">{l}</span><span className="font-bold">{v}%</span></div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/15">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${v}%` }} transition={{ delay: 2.2, duration: 1.5 }} className="h-full rounded-full bg-brand-400" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="animate-float absolute -bottom-20 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600"><ShieldCheck /></div>
            <div><div className="text-sm font-extrabold">NABH Accredited</div><div className="text-xs text-steel">Partner Hospitals</div></div>
          </motion.div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-3">
          {SLIDES.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className="relative h-1 w-12 overflow-hidden rounded-full bg-white/25" aria-label={`slide ${k + 1}`}>
              {k === i && <motion.span key={i} className="absolute inset-y-0 left-0 bg-brand-400" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6.5, ease: "linear" }} />}
            </button>
          ))}
          <span className="ml-2 font-display text-sm font-bold text-white">0{i + 1}<span className="text-white/40"> / 0{SLIDES.length}</span></span>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button onClick={() => setI((i - 1 + SLIDES.length) % SLIDES.length)} className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:bg-brand-500"><ArrowLeft size={18} /></button>
          <button onClick={() => setI((i + 1) % SLIDES.length)} className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:bg-brand-500"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Sleeve Gastrectomy", "Gastric Bypass", "Mini Gastric Bypass", "Metabolic Surgery", "Intragastric Balloon", "Revision Surgery", "Endoscopic Sleeve", "Laparoscopic Surgery"];
  return (
    <div className="overflow-hidden bg-brand-500 py-5">
      <div className="animate-marquee flex w-max gap-12">
        {[...items, ...items].map((t, k) => (
          <span key={k} className="flex items-center gap-12 whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-wider text-white">
            {t}<span className="h-2.5 w-2.5 bg-ink" />
          </span>
        ))}
      </div>
    </div>
  );
}

function AboutIntro() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pixel-grid absolute right-0 top-0 h-96 w-96 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 overflow-hidden rounded-[2rem]">
              <img src={IMG.doctor} alt="Dr. Mehul Vikani" className="h-[520px] w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <div className="overflow-hidden rounded-[2rem]"><img src={IMG.surgeonFocus} alt="" className="h-64 w-full object-cover transition duration-700 hover:scale-105" /></div>
              <div className="rounded-[2rem] bg-ink p-6 text-white">
                <div className="font-display text-5xl font-black text-brand-400"><Counter value={15} />+</div>
                <div className="mt-1 text-sm text-white/70">Years of surgical excellence</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-ink/5">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white"><Award /></div>
            <div><div className="text-sm font-extrabold">FALS, FMAS, FIAGES</div><div className="text-xs text-steel">Bariatric Fellowship</div></div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Meet Your Surgeon" title={<>Dr. Mehul Vikani — <span className="text-gradient">Consultant Bariatric & Metabolic Surgeon.</span></>} desc="Dr. Mehul Vikani specialises in bariatric and metabolic surgery and the surgical and non-surgical management of obesity." />
          <Reveal delay={0.15} className="mt-8 grid gap-4 sm:grid-cols-2">
            {["MBBS, MS (General Surgery)", "FMAS, FALS, FIAGES & Bariatric Fellowship", "IFSO, OSSI, ASI & IAGES", "International training in Taiwan and Belgium", "Sleeve gastrectomy and gastric bypass", "Medical registration: G-43101"].map((t) => (
              <div key={t} className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-500" />{t}</div>
            ))}
          </Reveal>
          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-6">
            <Button to="/about" variant="dark">Know More About Doctor</Button>
            <div className="font-display text-3xl italic text-ink/70" style={{ fontFamily: "cursive" }}>Mehul Vikani</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { STATS } = useSiteData();
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="pixel-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, k) => (
          <Reveal key={s.label} delay={k * 0.1} className="border-white/10 text-center lg:border-r lg:last:border-0">
            <div className="font-display text-5xl font-black text-white sm:text-6xl"><Counter value={s.value} suffix={s.suffix} /></div>
            <div className="mt-3 text-sm font-semibold uppercase tracking-widest text-brand-400">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Our Treatments" title={<>Personalised solutions for <br className="hidden md:block" />lasting weight loss.</>} />
          <Reveal><Button to="/obesity-treatment-options" variant="outline">View All Treatments</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HOME_TREATMENTS.map((t, k) => (
            <Reveal key={t.to} delay={(k % 3) * 0.1}>
              <Link to={t.to} className="group relative block h-[440px] overflow-hidden rounded-[2rem] bg-ink">
                <img src={t.image} alt={t.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">{t.tag}</div>
                <div className="absolute right-6 top-6 font-display text-5xl font-black text-white/15">0{k + 1}</div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-2xl font-extrabold leading-tight text-white">{t.title}</h3>
                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <p className="overflow-hidden text-sm leading-relaxed text-white/75"><span className="block pt-3">{t.short}</span></p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-300">
                    Learn more
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white transition group-hover:translate-x-2"><ArrowRight size={14} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { i: ShieldCheck, t: "Safety First Protocols", d: "International safety checklists, ICU backup and experienced anaesthesia team." },
    { i: Microscope, t: "Advanced 4K Laparoscopy", d: "Latest HD/4K systems and energy devices for precise, bloodless surgery." },
    { i: Users, t: "Multidisciplinary Team", d: "Surgeon, physician, dietician, physiotherapist & psychologist together." },
    { i: Salad, t: "Personalised Nutrition", d: "Stage-wise Indian diet plans crafted by certified bariatric dieticians." },
    { i: HeartPulse, t: "Lifelong Follow-up", d: "Structured reviews, support groups and app-based progress tracking." },
    { i: Clock3, t: "Rapid Recovery (ERAS)", d: "Enhanced recovery pathways — walk the same day, home in 48 hours." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="Why Choose Us" title={<>Excellence that you can <span className="text-gradient">trust.</span></>} desc="We combine surgical expertise, cutting-edge technology and heartfelt care to deliver the best possible outcomes — safely." />
            <Reveal delay={0.2} className="relative mt-10 overflow-hidden rounded-[2rem]">
              <img src={IMG.or3} alt="" className="h-72 w-full object-cover" />
              <VideoButton />
            </Reveal>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {items.map((x, k) => (
            <Reveal key={x.t} delay={(k % 2) * 0.1}>
              <div className="why-us-card group relative h-full overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(17,75,44,0.15)] transition duration-500 hover:-translate-y-2">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-500/10 transition-all duration-500 group-hover:scale-[5]" />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white"><x.i size={26} /></div>
                <h3 className="relative mt-6 text-lg font-extrabold transition group-hover:text-white">{x.t}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-steel transition group-hover:text-white/70">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="absolute inset-0 grid place-items-center bg-ink/30">
        <span className="relative grid h-20 w-20 place-items-center rounded-full bg-brand-500 text-white">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500" />
          <Play fill="currentColor" className="relative ml-1" />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink/90 p-4" onClick={() => setOpen(false)}>
            <button className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"><X /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-ink">
              <iframe className="h-full w-full" src="https://www.youtube.com/embed/0YVj6b5mT4Q?autoplay=1" title="Bariatric surgery explained" allow="autoplay; encrypted-media" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Journey() {
  const steps = [
    { i: Stethoscope, t: "Consultation", d: "Detailed evaluation, BMI analysis and personalised procedure recommendation." },
    { i: Microscope, t: "Pre-Surgery Prep", d: "Blood tests, endoscopy, dietician counselling and fitness clearance." },
    { i: Sparkles, t: "Keyhole Surgery", d: "Minimally invasive procedure with the highest safety standards." },
    { i: HeartPulse, t: "Recovery", d: "Walk the same day; discharge in 2–3 days with a clear diet plan." },
    { i: Activity, t: "New Life", d: "Lifelong follow-up, support groups and coaching for lasting success." },
  ];
  return (
    <section className="home-journey relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <img src={IMG.surgeryTeam2} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="pixel-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading light center eyebrow="Your Journey" title="Five steps to a healthier you" desc="A seamless, well-guided pathway designed around your comfort, safety and long-term success." />
        <div className="relative mt-20 grid gap-10 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent md:block" />
          {steps.map((s, k) => (
            <Reveal key={s.t} delay={k * 0.12} className="relative text-center">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-brand-500/40 bg-ink">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-500"><s.i size={24} /></div>
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-xs font-black text-ink">{k + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-extrabold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BMIQuick() {
  const [h, setH] = useState(165);
  const [w, setW] = useState(95);
  const bmi = w / (h / 100) ** 2;
  const cat = bmi < 18.5 ? ["Underweight", "#7bc59a"] : bmi < 23 ? ["Normal", "#2b8c57"] : bmi < 27.5 ? ["Overweight", "#237447"] : bmi < 32.5 ? ["Obese Class I", "#1d5d3a"] : bmi < 37.5 ? ["Obese Class II", "#174a2f"] : ["Obese Class III", "#0f3320"];
  const pct = Math.min(100, Math.max(0, ((bmi - 15) / 30) * 100));
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Quick BMI Check" title={<>Are you a candidate for <span className="text-gradient">weight-loss surgery?</span></>} desc="Move the sliders to instantly calculate your Body Mass Index using Asian-Indian guidelines." />
          <Reveal delay={0.2} className="mt-8"><Button to="/obesity-treatment-options" variant="dark">Explore Treatment Options</Button></Reveal>
        </div>
        <Reveal className="rounded-[2rem] border border-ink/5 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(17,75,44,0.2)] sm:p-10">
          {[["Height", h, setH, 130, 210, "cm"], ["Weight", w, setW, 40, 200, "kg"]].map(([l, v, set, min, max, u]) => (
            <div key={l as string} className="mb-8">
              <div className="mb-3 flex justify-between font-semibold"><span>{l as string}</span><span className="font-display text-xl font-extrabold text-brand-600">{v as number} <span className="text-sm text-steel">{u as string}</span></span></div>
              <input type="range" min={min as number} max={max as number} value={v as number} onChange={(e) => (set as (n: number) => void)(+e.target.value)} className="w-full accent-[#2b8c57]" />
            </div>
          ))}
          <div className="flex items-center justify-between rounded-2xl bg-mist p-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-steel">Your BMI</div>
              <div className="font-display text-5xl font-black">{bmi.toFixed(1)}</div>
            </div>
            <span className="rounded-full px-4 py-2 text-sm font-bold text-white" style={{ background: cat[1] }}>{cat[0]}</span>
          </div>
          <div className="relative mt-6 h-3 rounded-full bg-gradient-to-r from-brand-200 via-brand-500 via-30% to-brand-900">
            <motion.div animate={{ left: `${pct}%` }} className="absolute -top-1.5 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-ink shadow" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const { TESTIMONIALS } = useSiteData();
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, [i]);
  const t = TESTIMONIALS[i];
  return (
    <section className="relative overflow-hidden bg-brand-50 py-24 sm:py-32">
      <div className="pixel-grid absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading center eyebrow="Patient Stories" title="Real people. Real transformations." />
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.img key={i} src={t.img} alt={t.name} initial={{ opacity: 0, scale: 0.95, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6 }} className="h-[420px] w-full rounded-[2rem] object-cover shadow-2xl" />
            </AnimatePresence>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-brand-500 px-6 py-4 text-white shadow-xl sm:right-6">
              <div className="text-xs uppercase tracking-widest text-white/75">Weight Lost</div>
              <div className="font-display text-3xl font-black">{t.lost}</div>
            </div>
          </div>
          <div className="lg:col-span-7 lg:pl-10">
            <Quote size={56} className="text-brand-500" fill="currentColor" />
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                <p className="mt-6 font-display text-xl font-semibold leading-relaxed text-ink sm:text-2xl">"{t.text}"</p>
                <div className="mt-8 flex items-center gap-1 text-brand-500">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
                <div className="mt-3 text-lg font-extrabold">{t.name}, {t.age}</div>
                <div className="text-sm font-semibold text-brand-600">{t.proc}</div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-10 flex items-center gap-4">
              <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink/10 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white"><ArrowLeft size={18} /></button>
              <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition hover:bg-brand-500"><ArrowRight size={18} /></button>
              <div className="ml-4 flex gap-2">
                {TESTIMONIALS.map((_, k) => <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-brand-500" : "w-2 bg-ink/20"}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const { BLOGS } = useSiteData();
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Health Insights" title="Latest from our blog" />
          <Reveal><Button to="/blog" variant="outline">Read All Articles</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {BLOGS.slice(0, 3).map((b, k) => (
            <Reveal key={b.slug} delay={k * 0.1}>
              <Link to={`/blog/${b.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <img src={b.img} alt="" className="h-64 w-full object-cover transition duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-600">{b.cat}</span>
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-steel">{b.date} · {b.read} read</div>
                <h3 className="mt-2 text-xl font-extrabold leading-snug transition group-hover:text-brand-600">{b.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-steel">{b.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookSection() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative overflow-hidden rounded-[2rem]">
          <img src={IMG.consult4} alt="" className="h-[560px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-px bg-white/10 text-center text-white backdrop-blur">
            {[["2 hrs", "Callback time"], ["Free", "BMI assessment"], ["EMI", "Options available"]].map(([a, b]) => (
              <div key={b} className="bg-ink/50 p-5"><div className="font-display text-2xl font-black text-brand-300">{a}</div><div className="text-xs text-white/70">{b}</div></div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Eyebrow>Book Appointment</Eyebrow>
          <h2 className="mb-3 mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">Take the first step today.</h2>
          <p className="mb-8 text-steel">Our patient coordinator will guide you through every detail — from eligibility and insurance to scheduling your consultation.</p>
          <AppointmentForm />
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutIntro />
      <Stats />
      <TreatmentsSection />
      <WhyUs />
      <Journey />
      <BMIQuick />
      <Testimonials />
      <BlogPreview />
      <BookSection />
      <CTABanner />
    </>
  );
}
