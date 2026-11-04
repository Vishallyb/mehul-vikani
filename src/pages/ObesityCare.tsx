import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMG } from "../data/site";
import { PageHero, Reveal, SectionHeading } from "../components/ui";
import { treatmentLabel, treatmentPath, useTreatmentOptions } from "../components/treatmentLinks";
import "../styles/obesity-care.css";

// The cards list every published treatment (admin panel → Treatments)
export default function ObesityCare() {
  const { all } = useTreatmentOptions();
  return (
    <>
      <PageHero
        eyebrow="Obesity Treatment Options"
        title={<>Personalised care for a <span className="text-brand-400">healthier future.</span></>}
        desc="Explore the complete range of weight-loss and metabolic treatments available at our practice."
        image={IMG.healthyWall}
        crumbs={[{ label: "Obesity Treatment Options" }]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            center
            eyebrow="All Treatments"
            title="Choose the right path for your health"
            desc="Every treatment recommendation follows individual clinical assessment, medical history and your personal goals."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {all.map((t, index) => (
              <Reveal key={t.slug} delay={index * 0.06}>
                <Link
                  to={treatmentPath(t)}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-[0_25px_60px_-30px_rgba(17,75,44,0.2)] transition duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={t.image} alt={treatmentLabel(t)} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-extrabold leading-snug transition group-hover:text-brand-600">{treatmentLabel(t)}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{t.short}</p>
                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-brand-600">
                      View treatment details <ArrowRight size={16} className="transition group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
