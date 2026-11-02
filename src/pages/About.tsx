import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Award, Globe2, BookOpen, HeartHandshake, Target, Eye, CheckCircle2 } from "lucide-react";
import { IMG, STATS } from "../data/site";
import { PageHero, Reveal, SectionHeading, Counter, CTABanner, Button } from "../components/ui";
import { useAppointment } from "../components/AppointmentContext";
import "../styles/about.css";

const TIMELINE = [
  { y: "2008", t: "MBBS", d: "Graduated with distinction from a premier government medical college in Gujarat." },
  { y: "2012", t: "MS – General Surgery", d: "Post-graduate surgical training with a focus on minimal access surgery." },
  { y: "2014", t: "Fellowship – Minimal Access Surgery", d: "FMAS & FALS — advanced laparoscopic training." },
  { y: "2016", t: "Bariatric Fellowship (International)", d: "Advanced bariatric & metabolic surgery training at high-volume centres in Europe & Asia." },
  { y: "2018", t: "Founded Bariatric Centre", d: "Established a dedicated centre of excellence for obesity & diabetes surgery." },
  { y: "2025", t: "5,000+ Surgeries", d: "Crossed a milestone of 5,000 successful laparoscopic procedures." },
];

const TABS = {
  Mission: { i: Target, t: "To make safe, world-class bariatric and metabolic surgery accessible, empowering every patient to live a longer, healthier and more confident life." },
  Vision: { i: Eye, t: "To be the most trusted centre for obesity and diabetes care in India — known for outcomes, ethics and an unwavering patient-first culture." },
  Values: { i: HeartHandshake, t: "Integrity, compassion, clinical excellence and transparency guide every decision — from the first consult to lifelong follow-up." },
};

export default function About() {
  const [tab, setTab] = useState<keyof typeof TABS>("Mission");
  const { open } = useAppointment();
  const T = TABS[tab];
  return (
    <>
      <PageHero eyebrow="About the Doctor" title={<>Dedicated to transforming <span className="text-brand-400">lives</span>, one patient at a time.</>} desc="Meet Dr. Mehul Vikani — Advanced Laparoscopic, Bariatric & Metabolic Surgeon." image={IMG.surgeons} crumbs={[{ label: "About" }]} />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-brand-500" />
            <img src={IMG.doctor} alt="Dr. Mehul Vikani" className="relative h-[600px] w-full rounded-[2rem] object-cover" />
            <div className="absolute -right-4 bottom-10 rounded-2xl bg-ink p-6 text-white shadow-2xl sm:-right-8">
              <div className="font-display text-4xl font-black text-brand-400"><Counter value={5000} />+</div>
              <div className="text-sm text-white/70">Lives transformed</div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Dr. Mehul Vikani" title={<>MS, FIAGES, FMAS, FALS, FMBS <span className="text-gradient">Consultant Bariatric & Metabolic Surgeon</span></>} />
            <Reveal delay={0.1} className="mt-6 space-y-4 leading-relaxed text-steel">
              <p>Dr. Mehul Vikani is a surgeon specialising in bariatric and metabolic surgery and the surgical and non-surgical management of obesity.</p>
              <p>His professional training includes exposure to bariatric surgery at Chang Gung Memorial Hospital, Taiwan, and AZ Sint-Jan Hospital, Belgium. His clinical practice encompasses individualised dietary and lifestyle interventions, medical weight management, and bariatric and metabolic surgery.</p>
              <p>His surgical practice includes sleeve gastrectomy, gastric bypass and revisional bariatric surgery. Treatment options are selected after clinical assessment, review of medical history and discussion of each patient’s individual requirements. Medical registration: G-43101.</p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { i: GraduationCap, t: "Education", d: "MBBS, MS (General Surgery)" },
                { i: Award, t: "Fellowships", d: "FMAS, FALS, FIAGES, Bariatric" },
                { i: Globe2, t: "Memberships", d: "IFSO, OSSI, ASI, IAGES" },
                { i: BookOpen, t: "Academics", d: "20+ publications & talks" },
              ].map((x) => (
                <div key={x.t} className="flex gap-4 rounded-2xl bg-mist p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-white"><x.i size={22} /></div>
                  <div><div className="font-extrabold">{x.t}</div><div className="text-sm text-steel">{x.d}</div></div>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.3} className="mt-10"><Button onClick={() => open()}>Consult Dr. Vikani</Button></Reveal>
          </div>
        </div>
      </section>

      {/* Mission tabs */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Our Philosophy" title="Guided by purpose, driven by outcomes." />
            <div className="mt-10 flex gap-2 rounded-full bg-white/5 p-1.5">
              {(Object.keys(TABS) as (keyof typeof TABS)[]).map((k) => (
                <button key={k} onClick={() => setTab(k)} className="relative flex-1 rounded-full py-3 text-sm font-bold">
                  {tab === k && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-brand-500" />}
                  <span className="relative">{k}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={tab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="mt-8 flex gap-5">
                <T.i size={40} className="shrink-0 text-brand-400" />
                <p className="text-lg leading-relaxed text-white/80">{T.t}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, k) => (
              <Reveal key={s.label} delay={k * 0.1} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="font-display text-4xl font-black text-brand-400"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-sm text-white/60">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Professional Journey" title="Milestones of excellence" />
          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-0.5 bg-brand-100 md:left-1/2 md:-translate-x-1/2" />
            {TIMELINE.map((m, k) => (
              <Reveal key={m.y} delay={0.05} className={`relative mb-10 flex md:w-1/2 ${k % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"} pl-16 md:pl-0`}>
                <span className={`absolute left-[13px] top-6 h-4 w-4 rotate-45 bg-brand-500 ring-8 ring-brand-50 md:left-auto ${k % 2 ? "md:-left-2" : "md:-right-2"}`} />
                <div className="w-full rounded-3xl border border-ink/5 bg-white p-7 shadow-[0_20px_50px_-25px_rgba(17,75,44,0.2)]">
                  <div className="font-display text-3xl font-black text-brand-500">{m.y}</div>
                  <h3 className="mt-1 text-lg font-extrabold">{m.t}</h3>
                  <p className="mt-2 text-sm text-steel">{m.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility gallery */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Infrastructure" title="World-class facilities" desc="Our partner hospitals are equipped with modular OTs, 4K laparoscopy, bariatric ICU and bariatric-friendly rooms." />
          <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-4">
            {[IMG.or1, IMG.consult1, IMG.or2, IMG.surgeryTeam, IMG.consult5, IMG.or3].map((src, k) => (
              <Reveal key={k} delay={k * 0.05} className={`group overflow-hidden rounded-3xl ${k === 0 ? "md:col-span-2 md:row-span-2" : ""} ${k === 3 ? "md:col-span-2" : ""}`}>
                <img src={src} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Modular Laminar-flow OTs", "Bariatric ICU & HDU", "4K / 3D Laparoscopy", "In-house Diet & Physio"].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl bg-white p-5 font-semibold"><CheckCircle2 className="text-brand-500" />{t}</div>
            ))}
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
