import { Link, useParams, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { IMG } from "../data/site";
import { PageHero, Reveal, SectionHeading, CTABanner } from "../components/ui";
import "../styles/care-detail.css";

const CONTENT = {
  "diet-and-lifestyle": {
    eyebrow: "Diet and Lifestyle",
    title: "Build habits that support lasting health.",
    image: IMG.salad,
    intro: "Obesity is a chronic health condition influenced by nutrition, physical activity, sleep, genetics and metabolism. Diet and lifestyle management are important components of its treatment.",
    points: ["Balanced nutrition with adequate protein and appropriate portion sizes.", "Regular physical activity, including aerobic and strength-based exercises.", "Healthy sleep habits and stress management.", "Behavioural changes to support sustainable eating patterns.", "Long-term follow-up to monitor progress and modify the plan when required."],
  },
  "weight-loss-medications": {
    eyebrow: "Weight-Loss Medications and Injections",
    title: "Medical support, with careful monitoring.",
    image: IMG.healthyWall2,
    intro: "Prescription medications may be considered when lifestyle measures alone are insufficient or when additional medical treatment is clinically indicated.",
    points: ["Semaglutide acts on the GLP-1 pathway involved in appetite, fullness and glucose control.", "Tirzepatide acts on both GIP and GLP-1 pathways.", "Treatment requires an individual medical assessment and regular monitoring.", "Possible side effects include nausea, vomiting, diarrhoea, constipation and abdominal discomfort.", "Medication should only be used under medical supervision with nutrition, activity and follow-up.", "Weight regain may occur after treatment is stopped."],
  },
} as const;

export default function CareDetail() {
  const { slug } = useParams();
  const content = slug ? CONTENT[slug as keyof typeof CONTENT] : undefined;
  if (!content) return <Navigate to="/obesity-treatment-options" replace />;
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} desc={content.intro} image={content.image} crumbs={[{ label: "Obesity Treatment Options", to: "/obesity-treatment-options" }, { label: content.eyebrow }]} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={content.image} alt="" className="h-[520px] w-full rounded-[2rem] object-cover" />
          </Reveal>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Individualised Care" title="A plan designed around your health and lifestyle." desc="Some people may require additional treatment, such as medication, endoscopic procedures or bariatric surgery. A clinical assessment helps identify the right next step." />
            <ul className="mt-10 space-y-4">
              {content.points.map((point) => <li key={point} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"><CheckCircle2 className="shrink-0 text-brand-500" /> <span className="leading-relaxed">{point}</span></li>)}
            </ul>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white">Discuss your options <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
