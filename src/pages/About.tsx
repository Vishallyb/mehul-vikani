import { useSiteData } from "../components/SiteDataContext";
import { PageHero, Reveal } from "../components/ui";
import "../styles/about.css";

// All text and images on this page are edited in the admin panel (About Page)
export default function About() {
  const { hero, doctor } = useSiteData().PAGES.about;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.highlight ? <>{hero.title} <span className="text-brand-400">{hero.highlight}</span></> : hero.title}
        image={hero.image}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] bg-brand-100 shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
              <img
                src={doctor.image}
                alt={doctor.eyebrow}
                className="block h-[460px] w-full object-cover sm:h-[600px]"
                loading="eager"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">{doctor.eyebrow}</div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{doctor.title}</h2>
            <p className="mt-2 text-lg text-steel">{doctor.subtitle}</p>

            <div className="mt-8 space-y-5 leading-relaxed text-steel">
              {doctor.paragraphs.map((p, k) => <p key={k}>{p}</p>)}
            </div>

            {doctor.registration && (
              <p className="mt-8 border-t border-ink/10 pt-5 font-bold text-ink">
                Medical registration details: <span className="font-normal text-steel">{doctor.registration}</span>
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
