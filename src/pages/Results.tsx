import { useSiteData } from "../components/SiteDataContext";
import { siteIcon } from "../components/siteIcons";
import { PageHero, Reveal, SectionHeading, Counter } from "../components/ui";
import "../styles/results.css";

// Text and images are edited in the admin panel (Results Page); numbers come from Site Settings, stories from Testimonials
export default function Results() {
  const { STATS, TESTIMONIALS, PAGES } = useSiteData();
  const { hero, points, stats, voices } = PAGES.results;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.highlight ? <>{hero.title} <span className="text-brand-400">{hero.highlight}</span></> : hero.title} desc={hero.desc} image={hero.image} crumbs={[{ label: "Results" }]} />
      {points.show !== false && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading center eyebrow={points.eyebrow} title={points.title} />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {points.items.map((x, k) => {
                const Icon = siteIcon(x.icon);
                return <Reveal key={`${x.title}-${k}`} delay={k * 0.08} className="rounded-[2rem] bg-white p-7 shadow-[0_20px_50px_-30px_rgba(17,75,44,0.25)]"><div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600"><Icon /></div><h3 className="mt-5 text-lg font-extrabold">{x.title}</h3><p className="mt-2 text-sm leading-relaxed text-steel">{x.desc}</p></Reveal>;
              })}
            </div>
          </div>
        </section>
      )}
      {stats.show !== false && (
        <section className="bg-ink py-20 text-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 sm:px-8 lg:grid-cols-4">
            {STATS.map((s) => <div key={s.label} className="text-center"><div className="font-display text-5xl font-black"><Counter value={s.value} suffix={s.suffix} /></div><div className="mt-2 text-sm text-white/65">{s.label}</div></div>)}
          </div>
        </section>
      )}
      {voices.show !== false && TESTIMONIALS.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <SectionHeading center eyebrow={voices.eyebrow} title={voices.title} />
            <div className="mt-12 space-y-5">{TESTIMONIALS.slice(0, Math.max(1, Number(voices.count) || 3)).map((t) => <Reveal key={t.name} className="rounded-3xl bg-white p-7 shadow-sm"><p className="leading-relaxed text-steel">“{t.text}”</p><p className="mt-4 font-bold">{t.name} <span className="font-normal text-steel">· {t.proc}</span></p></Reveal>)}</div>
          </div>
        </section>
      )}
    </>
  );
}
