import { useParams, Navigate } from "react-router-dom";
import { IMG } from "../data/site";
import { PageHero, Reveal, CTABanner } from "../components/ui";
import "../styles/care-detail.css";

const CONTENT = {
  "diet-and-lifestyle": {
    eyebrow: "Diet and Lifestyle Management",
    title: "Diet and Lifestyle Management",
    image: IMG.salad,
    intro: "Obesity is a chronic health condition influenced by multiple factors, including nutrition, physical activity, sleep, genetics and metabolism. Diet and lifestyle management are important components of its treatment.",
    points: ["Balanced nutrition with adequate protein and appropriate portion sizes.", "Regular physical activity, including aerobic and strength-based exercises.", "Healthy sleep habits and stress management.", "Behavioural changes to support sustainable eating patterns."],
    closing: "The plan should be tailored to each individual's health, lifestyle and nutritional requirements. Some individuals may require additional treatment, such as medication, endoscopic procedures or bariatric surgery.",
    followUp: "Long-term follow-up helps monitor progress and modify the treatment plan when required.",
    paragraphs: [],
  },
  "weight-loss-medications": {
    eyebrow: "Weight-Loss Medications and Injections",
    title: "Weight-Loss Medications and Injections",
    image: IMG.healthyWall2,
    intro: "Prescription medications may be considered as part of obesity management when lifestyle measures alone are insufficient or when additional medical treatment is clinically indicated.",
    points: [],
    closing: "",
    followUp: "",
    paragraphs: [
      "Some medicines act on hormonal pathways involved in appetite regulation, fullness and blood glucose control. Examples include semaglutide, which acts on the GLP-1 pathway, and tirzepatide, which acts on both GIP and GLP-1 pathways.",
      "Treatment requires an individual medical assessment and regular monitoring. Common side effects may include nausea, vomiting, diarrhoea, constipation and abdominal discomfort. Certain medicines also have specific contraindications and precautions.",
      "Medication should only be used under medical supervision, alongside appropriate nutrition, physical activity and follow-up. Weight regain may occur after treatment is stopped.",
    ],
  },
} as const;

export default function CareDetail() {
  const { slug } = useParams();
  const content = slug ? CONTENT[slug as keyof typeof CONTENT] : undefined;
  if (!content) return <Navigate to="/obesity-treatment-options" replace />;
  const isDietAndLifestyle = slug === "diet-and-lifestyle";
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} desc={content.intro} image={content.image} crumbs={[{ label: "Obesity Treatment Options", to: "/obesity-treatment-options" }, { label: content.eyebrow }]} />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            {isDietAndLifestyle ? (
            <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
              <img src={content.image} alt="Diet and lifestyle management" className="h-[420px] w-full object-cover sm:h-[520px]" />
            </div>
            ) : (
              <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
                <img src={content.image} alt={content.title} className="h-[420px] w-full object-cover sm:h-[520px]" />
              </div>
            )}
            <div className="mt-5 rounded-2xl bg-brand-50 p-5">
              <div className="text-sm font-bold uppercase tracking-widest text-brand-700">{isDietAndLifestyle ? "Lifelong support" : "Medical supervision"}</div>
              <p className="mt-2 text-sm leading-relaxed text-steel">{isDietAndLifestyle ? "Your plan is reviewed and adapted as your health and lifestyle needs change." : "Treatment decisions require individual assessment, monitoring and follow-up."}</p>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            {isDietAndLifestyle ? (
              <div className="rounded-[2rem] bg-white p-7 shadow-[0_25px_60px_-35px_rgba(17,75,44,0.3)] sm:p-10">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-600">Personalised care plan</div>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight">An individualised plan may include:</h2>
                <ul className="mt-8 space-y-4">
                  {content.points.map((point, index) => <li key={point} className="flex items-start gap-4 rounded-2xl bg-mist p-4 leading-relaxed"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">{index + 1}</span><span>{point}</span></li>)}
                </ul>
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="leading-relaxed text-steel">{content.closing}</p>
                  <p className="mt-4 leading-relaxed text-steel">{content.followUp}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-[2rem] bg-white p-7 shadow-[0_25px_60px_-35px_rgba(17,75,44,0.3)] sm:p-10">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-600">Personalised care plan</div>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight">{content.title}</h2>
                <div className="mt-8 space-y-5 leading-relaxed text-steel">
                  {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {!isDietAndLifestyle && <CTABanner />}
    </>
  );
}
