import { IMG } from "../data/site";
import { PageHero, Reveal, SectionHeading } from "../components/ui";
import "../styles/achievements.css";

export default function Achievements() {  return (
    <>
      <PageHero eyebrow="Achievements" title={<>Experience built around <span className="text-brand-400">safe outcomes.</span></>} desc="A focused bariatric and metabolic surgery practice grounded in training, assessment and long-term care." image={IMG.surgeons} crumbs={[{ label: "Achievements" }]} />
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
    </>
  );
}
