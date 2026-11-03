import { IMG } from "../data/site";
import { PageHero, Reveal } from "../components/ui";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Doctor"
        title={<>Meet the surgeon behind your <span className="text-brand-400">transformation.</span></>}
        image={IMG.surgeons}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] bg-brand-100 shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
              <img
                src={IMG.doctor}
                alt="Dr. Mehul Vikani"
                className="block h-[460px] w-full object-cover sm:h-[600px]"
                loading="eager"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500">Dr. Mehul Vikani</div>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">MS, FIAGES, FMAS, FALS, FMBS</h2>
            <p className="mt-2 text-lg text-steel">Consultant Bariatric &amp; Metabolic Surgeon</p>

            <div className="mt-8 space-y-5 leading-relaxed text-steel">
              <p>Dr. Mehul Vikani is a surgeon specialising in bariatric and metabolic surgery and the surgical and non-surgical management of obesity.</p>
              <p>His professional training includes exposure to bariatric surgery at Chang Gung Memorial Hospital, Taiwan, and AZ Sint-Jan Hospital, Belgium. His clinical practice encompasses the assessment and management of obesity through individualised treatment approaches, including dietary and lifestyle interventions, medical weight management, and bariatric and metabolic surgery.</p>
              <p>His surgical practice includes procedures such as sleeve gastrectomy, gastric bypass and revisional bariatric surgery. Treatment options are considered based on each patient&apos;s clinical assessment, medical history and individual requirements.</p>
              <p>Dr. Vikani&apos;s approach emphasises informed decision-making, appropriate treatment selection, patient safety and long-term follow-up in the management of obesity.</p>
            </div>

            <p className="mt-8 border-t border-ink/10 pt-5 font-bold text-ink">
              Medical registration details: <span className="font-normal text-steel">G-43101</span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
