import { Link, useParams, Navigate } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { TREATMENTS, CONTACT, FAQS } from "../data/site";
import { PageHero, Reveal, Eyebrow, CTABanner } from "../components/ui";
import { useAppointment } from "../components/AppointmentContext";
import { Accordion } from "./FAQ";
import "../styles/treatment-detail.css";

export default function TreatmentDetail() {
  const { slug } = useParams();
  const t = TREATMENTS.find((x) => x.slug === slug);
  const { open } = useAppointment();
  if (!t) return <Navigate to="/treatments" replace />;
  const others = TREATMENTS.filter((x) => x.slug !== t.slug);

  return (
    <>
      <PageHero eyebrow={t.tag} title={t.title} desc={t.short} image={t.image} crumbs={[{ label: "Treatments", to: "/treatments" }, { label: t.title }]} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold">What is {t.title}?</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-steel">
                {(t.docxContent || [t.overview]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <img src={t.image} alt="" className="mt-8 h-80 w-full rounded-[2rem] object-cover" />
            </Reveal>

            <Reveal>
              <Eyebrow>FAQs</Eyebrow>
              <h2 className="mb-6 mt-3 text-3xl font-extrabold">Common questions</h2>
              <Accordion items={FAQS.slice(3, 8)} />
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white">
                <div className="pixel-grid absolute inset-0 opacity-25" />
                <div className="relative">
                  <h3 className="text-2xl font-extrabold">Is this right for you?</h3>
                  <p className="mt-2 text-sm text-white/65">Get a personalised assessment from Dr. Vikani.</p>
                  <button onClick={() => open(t.title)} className="mt-6 w-full rounded-full bg-brand-500 py-4 font-bold transition hover:bg-brand-400">Book Consultation</button>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 py-4 font-bold transition hover:bg-white/10"><Phone size={16} />{CONTACT.phone}</a>
                </div>
              </div>
              <div className="rounded-[2rem] border border-ink/5 bg-white p-6 shadow-xl">
                <h4 className="mb-4 px-2 font-extrabold">Other Treatments</h4>
                {others.map((o) => (
                  <Link key={o.slug} to={`/treatments/${o.slug}`} className="group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-brand-50 hover:text-brand-600">
                    {o.title}<ArrowRight size={14} className="opacity-30 transition group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
