import { Award, BookOpen, Globe2, ShieldCheck } from "lucide-react";
import { IMG, STATS } from "../data/site";
import { PageHero, Reveal, SectionHeading, Counter, CTABanner } from "../components/ui";
import "../styles/achievements.css";

const ACHIEVEMENTS = [
  { i: ShieldCheck, t: "Clinical practice", d: "Specialist practice in bariatric and metabolic surgery and the surgical and non-surgical management of obesity." },
  { i: Globe2, t: "International exposure", d: "Bariatric surgery training exposure at Chang Gung Memorial Hospital, Taiwan, and AZ Sint-Jan Hospital, Belgium." },
  { i: Award, t: "Professional training", d: "MS, FIAGES, FMAS, FALS and FMBS qualifications supporting evidence-based treatment planning." },
  { i: BookOpen, t: "Patient-first care", d: "Individualised treatment selection, informed decision-making, safety and long-term follow-up." },
];

export default function Achievements() {
  return (
    <>
      <PageHero eyebrow="Achievements" title={<>Experience built around <span className="text-brand-400">safe outcomes.</span></>} desc="A focused bariatric and metabolic surgery practice grounded in training, assessment and long-term care." image={IMG.surgeons} crumbs={[{ label: "Achievements" }]} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Professional Highlights" title="Training, expertise and continuity of care" desc="Treatment recommendations are based on clinical assessment, medical history and each patient's individual requirements." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ACHIEVEMENTS.map((x, k) => (
              <Reveal key={x.t} delay={k * 0.08} className="rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(17,75,44,0.25)]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white"><x.i /></div>
                <h3 className="mt-6 text-xl font-extrabold">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Recognition" title="Awards and appreciation" desc="Recognition for Dr. Mehul Vikani's contribution to bariatric surgery and patient care." />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
              <img src="/images/achievement-ossi-certificate.png" alt="OSSI Young OSSI of the Year certificate awarded to Dr. Mehul Vikani" className="h-full w-full rounded-2xl object-cover" />
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
              <img src="/images/achievement-siliconindia-certificate.png" alt="Siliconindia Top 10 Prominent Bariatric Surgeons 2025 certificate" className="h-full w-full rounded-2xl object-cover" />
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
          {STATS.map((s) => <div key={s.label} className="text-center"><div className="font-display text-5xl font-black"><Counter value={s.value} suffix={s.suffix} /></div><div className="mt-2 text-sm text-white/65">{s.label}</div></div>)}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
