import { useParams, Navigate } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useSiteData, PageLoading } from "../components/SiteDataContext";
import { PageHero, Reveal } from "../components/ui";
import { useAppointment } from "../components/AppointmentContext";
import "../styles/treatment-detail.css";

export default function TreatmentDetail() {
  const { TREATMENTS, CONTACT, loaded } = useSiteData();
  const { slug } = useParams();
  const treatment = TREATMENTS.find((item) => item.slug === slug);
  const { open } = useAppointment();

  if (!treatment) return loaded ? <Navigate to="/treatments" replace /> : <PageLoading />;

  return (
    <>
      <PageHero
        eyebrow={treatment.tag}
        title={treatment.title}
        desc={treatment.short}
        image={treatment.image}
        crumbs={[{ label: "Treatments", to: "/treatments" }, { label: treatment.title }]}
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
              <img src={treatment.image} alt={treatment.title} className="h-[420px] w-full object-cover sm:h-[520px]" />
            </div>
            <div className="mt-5 rounded-2xl bg-brand-50 p-5">
              <div className="text-sm font-bold uppercase tracking-widest text-brand-700">Medical information</div>
              <p className="mt-2 text-sm leading-relaxed text-steel">Treatment suitability varies between individuals and requires appropriate clinical assessment.</p>
            </div>
          </Reveal>

          <div className="rounded-[2rem] bg-white p-7 shadow-[0_25px_60px_-35px_rgba(17,75,44,0.3)] sm:p-10 lg:col-span-7">
            <div className="text-sm font-bold uppercase tracking-widest text-brand-600">Treatment information</div>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight">{treatment.title}</h2>
            <div className="mt-8 space-y-5 leading-relaxed text-steel">
              {(treatment.docxContent || [treatment.overview]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <button onClick={() => open(treatment.title)} className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600">
                Book Consultation <ArrowRight size={16} />
              </button>
              <a href={`tel:${CONTACT.phoneRaw}`} className="ml-3 inline-flex items-center gap-2 rounded-full border border-ink/10 px-7 py-3.5 text-sm font-bold text-ink transition hover:bg-mist">
                <Phone size={16} /> Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
