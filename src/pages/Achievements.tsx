import { useSiteData } from "../components/SiteDataContext";
import { PageHero, Reveal, SectionHeading } from "../components/ui";
import "../styles/achievements.css";

// All text and images on this page are edited in the admin panel (Achievements Page)
export default function Achievements() {
  const { hero, awards } = useSiteData().PAGES.achievements;
  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.highlight ? <>{hero.title} <span className="text-brand-400">{hero.highlight}</span></> : hero.title} desc={hero.desc} image={hero.image} crumbs={[{ label: "Achievements" }]} />
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow={awards.eyebrow} title={awards.title} desc={awards.desc} />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {awards.items.map((a, k) => (
              <Reveal key={`${a.image}-${k}`} delay={(k % 2) * 0.1} className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-xl">
                <img src={a.image} alt={a.caption} className="h-full w-full rounded-2xl object-cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
