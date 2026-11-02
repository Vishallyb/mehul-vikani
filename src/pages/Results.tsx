import { HeartPulse, TrendingDown, Activity, ShieldCheck } from "lucide-react";
import { IMG, STATS, TESTIMONIALS } from "../data/site";
import { PageHero, Reveal, SectionHeading, Counter, CTABanner } from "../components/ui";
import "../styles/results.css";

const RESULT_POINTS = [
  { i: TrendingDown, t: "Weight management", d: "Outcomes vary by procedure, health, adherence and long-term follow-up." },
  { i: Activity, t: "Metabolic improvement", d: "Bariatric and metabolic surgery may improve blood glucose control and obesity-related conditions." },
  { i: HeartPulse, t: "Health and confidence", d: "Structured nutrition, activity and support help patients build sustainable routines." },
  { i: ShieldCheck, t: "Safe, informed decisions", d: "Expected benefits, risks and limitations are discussed during individual assessment." },
];

export default function Results() {
  return (
    <>
      <PageHero eyebrow="Results" title={<>Results that support a <span className="text-brand-400">healthier life.</span></>} desc="Every result is individual. Our approach combines appropriate treatment selection with long-term medical and nutritional follow-up." image={IMG.celebrate} crumbs={[{ label: "Results" }]} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="What We Track" title="Progress beyond the weighing scale" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {RESULT_POINTS.map((x, k) => <Reveal key={x.t} delay={k * 0.08} className="rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(17,75,44,0.25)]"><div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><x.i /></div><h3 className="mt-5 text-lg font-extrabold">{x.t}</h3><p className="mt-2 text-sm leading-relaxed text-steel">{x.d}</p></Reveal>)}
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
          {STATS.map((s) => <div key={s.label} className="text-center"><div className="font-display text-5xl font-black"><Counter value={s.value} suffix={s.suffix} /></div><div className="mt-2 text-sm text-white/65">{s.label}</div></div>)}
        </div>
      </section>
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Patient Voices" title="Every journey is personal" />
          <div className="mt-12 space-y-5">{TESTIMONIALS.slice(0, 3).map((t) => <Reveal key={t.name} className="rounded-3xl bg-white p-7 shadow-sm"><p className="leading-relaxed text-steel">“{t.text}”</p><p className="mt-4 font-bold">{t.name} <span className="font-normal text-steel">· {t.proc}</span></p></Reveal>)}</div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
