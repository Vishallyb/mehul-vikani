import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { IMG } from "../data/site";
import { PageHero, Reveal, SectionHeading, CTABanner } from "../components/ui";
import "../styles/obesity-care.css";

const CARE_OPTIONS = [
  {
    slug: "diet-lifestyle",
    title: "Diet and Lifestyle Management",
    text: "Obesity is influenced by nutrition, physical activity, sleep, genetics and metabolism. An individualised plan may include balanced protein-rich nutrition, appropriate portions, aerobic and strength exercise, healthy sleep, stress management and behavioural support.",
    points: ["Balanced nutrition and portion guidance", "Aerobic and strength-based activity", "Sleep, stress and behavioural support", "Long-term review and plan modification"],
  },
  {
    slug: "weight-loss-medications",
    title: "Weight-Loss Medications and Injections",
    text: "Prescription medication may be considered when lifestyle measures are insufficient or additional medical treatment is indicated. Semaglutide acts on the GLP-1 pathway and tirzepatide acts on GIP and GLP-1 pathways.",
    points: ["Individual medical assessment", "Regular monitoring and supervision", "Possible nausea, vomiting, diarrhoea, constipation or discomfort", "Weight regain may occur after stopping treatment"],
  },
];

export default function ObesityCare() {
  return (
    <>
      <PageHero eyebrow="Obesity Treatment Options" title={<>Care that is <span className="text-brand-400">matched to you.</span></>} desc="From lifestyle and medical management to endoscopic and surgical treatment, every option begins with clinical assessment." image={IMG.healthyWall} crumbs={[{ label: "Obesity Treatment Options" }]} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Non-Surgical Care" title="Start with the right level of support" desc="Some people need lifestyle support alone; others may benefit from medication, endoscopy or bariatric surgery. Follow-up helps monitor progress and adapt treatment." />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {CARE_OPTIONS.map((x, k) => (
              <Reveal key={x.slug} delay={k * 0.1} className="rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_-30px_rgba(17,75,44,0.25)] sm:p-10">
                <div className="flex items-start justify-between gap-5">
                  <h2 className="text-2xl font-extrabold">{x.title}</h2>
                  <span className="font-display text-4xl font-black text-brand-100">0{k + 1}</span>
                </div>
                <p className="mt-5 leading-relaxed text-steel">{x.text}</p>
                <ul className="mt-7 space-y-3">
                  {x.points.map((p) => <li key={p} className="flex gap-3 text-sm font-semibold"><CheckCircle2 className="shrink-0 text-brand-500" size={18} />{p}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/treatments/intragastric-balloon" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white">Explore Intragastric Balloon <ArrowRight size={16} /></Link>
            <Link to="/treatments" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white">View Surgical Options <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
