import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { IMG } from "../data/site";
import { PageHero, Reveal, SectionHeading } from "../components/ui";
import "../styles/obesity-care.css";

const TREATMENTS = [
  { n: "01", label: "Diet and Lifestyle", to: "/obesity-treatment-options/diet-and-lifestyle", image: IMG.salad, desc: "Nutrition, activity, sleep and sustainable lifestyle support." },
  { n: "02", label: "Weight-Loss Medications & Injections", to: "/obesity-treatment-options/weight-loss-medications", image: IMG.healthyWall2, desc: "Supervised medication and injection treatment options." },
  { n: "03", label: "Intragastric Balloon", to: "/treatments/intragastric-balloon", image: IMG.consult1, desc: "A temporary, non-surgical endoscopic treatment option." },
  { n: "04", label: "Sleeve Gastrectomy", to: "/treatments/sleeve-gastrectomy", image: IMG.or1, desc: "A laparoscopic procedure that creates a smaller stomach." },
  { n: "05", label: "Mini Gastric Bypass", to: "/treatments/mini-gastric-bypass", image: IMG.or3, desc: "One Anastomosis Gastric Bypass for selected patients." },
  { n: "06", label: "Roux-en-Y Gastric Bypass", to: "/treatments/gastric-bypass", image: IMG.or2, desc: "A metabolic procedure with a small stomach pouch." },
];

export default function ObesityCare() {
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
            {TREATMENTS.map((t, index) => (
              <Reveal key={t.to} delay={index * 0.06}>
                <Link
                  to={t.to}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-[0_25px_60px_-30px_rgba(17,75,44,0.2)] transition duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={t.image} alt={t.label} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{t.n}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-xl font-extrabold leading-snug transition group-hover:text-brand-600">{t.label}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{t.desc}</p>
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
