import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, TrendingDown, Play } from "lucide-react";
import { IMG, TESTIMONIALS } from "../data/site";
import { PageHero, Reveal, SectionHeading, CTABanner, Counter } from "../components/ui";
import "../styles/success-stories.css";

function Compare() {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative h-[460px] select-none overflow-hidden rounded-[2rem]">
      <img src={IMG.jeans} alt="After" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={IMG.jeans2} alt="Before" className="absolute inset-0 h-full w-full object-cover saturate-50" />
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white">BEFORE</span>
      <span className="absolute right-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">AFTER</span>
      <div className="pointer-events-none absolute inset-y-0 w-1 bg-white" style={{ left: `${pos}%` }}>
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white font-bold text-brand-600 shadow-xl">⇆</div>
      </div>
      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" aria-label="compare" />
    </div>
  );
}

export default function SuccessStories() {
  return (
    <>
      <PageHero eyebrow="Success Stories" title={<>Transformations that <span className="text-brand-400">inspire.</span></>} desc="Hear from patients who reclaimed their health, confidence and joy with Dr. Mehul Vikani." image={IMG.celebrate} crumbs={[{ label: "Success Stories" }]} />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><Compare /></Reveal>
          <div>
            <SectionHeading eyebrow="Before & After" title={<>Drag to see the <span className="text-gradient">difference.</span></>} desc="Priya lost 42 kg in 11 months after a laparoscopic sleeve gastrectomy. Her PCOS and thyroid levels improved dramatically and she now runs 5K every weekend." />
            <Reveal delay={0.2} className="mt-8 grid grid-cols-3 gap-4">
              {[[42, " kg", "Weight lost"], [11, " mo", "Timeframe"], [14, " pts", "BMI drop"]].map(([v, s, l]) => (
                <div key={l as string} className="rounded-2xl bg-mist p-5 text-center">
                  <div className="font-display text-3xl font-black text-brand-600"><Counter value={v as number} suffix={s as string} /></div>
                  <div className="mt-1 text-xs text-steel">{l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Testimonials" title="In their own words" />
          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
            {[...TESTIMONIALS, ...TESTIMONIALS.slice(0, 1)].map((t, k) => (
              <Reveal key={k} delay={(k % 3) * 0.08} className="mb-6 break-inside-avoid">
                <motion.div whileHover={{ y: -6 }} className="rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(17,75,44,0.25)]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-brand-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div>
                    <Quote className="text-brand-100" size={34} fill="currentColor" />
                  </div>
                  <p className="mt-4 leading-relaxed text-ink/80">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                    <img src={t.img} alt="" className="h-12 w-12 rounded-full object-cover" />
                    <div className="flex-1"><div className="font-extrabold">{t.name}</div><div className="text-xs text-steel">{t.proc}</div></div>
                    <div className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-600"><TrendingDown size={14} />{t.lost}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Video Stories" title="Watch their journeys" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[{ img: IMG.healthyWall2, n: "Neha's Story" }, { img: IMG.consult2, n: "Rakesh beat diabetes" }, { img: IMG.salad, n: "Kavita's new lifestyle" }].map((v, k) => (
              <Reveal key={v.n} delay={k * 0.1} className="group relative h-96 overflow-hidden rounded-[2rem]">
                <img src={v.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:scale-110 group-hover:bg-brand-500"><Play fill="currentColor" className="ml-1" /></span>
                </div>
                <div className="absolute bottom-6 left-6 font-display text-xl font-extrabold text-white">{v.n}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
