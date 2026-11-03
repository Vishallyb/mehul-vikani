import { Phone, Mail, MapPin, Clock, Siren } from "lucide-react";
import { IMG } from "../data/site";
import { useSiteData } from "../components/SiteDataContext";
import { PageHero, Reveal, Eyebrow } from "../components/ui";
import { AppointmentForm } from "../components/AppointmentContext";
import "../styles/contact.css";

export default function Contact() {
  const { CONTACT } = useSiteData();
  const cards = [
    { i: Phone, t: "Call Us", v: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
    { i: Mail, t: "Email Us", v: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { i: MapPin, t: "Visit Us", v: CONTACT.address },
    { i: Clock, t: "OPD Hours", v: CONTACT.hours },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Start your journey with <span className="text-brand-400">our team.</span></>} desc="Reach out to schedule a consultation or ask us anything about your weight-loss journey." image={IMG.consult5} crumbs={[{ label: "Contact" }]} />

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, k) => (
            <Reveal key={c.t} delay={k * 0.08}>
              <a href={c.href} className="group block h-full rounded-3xl bg-white p-7 text-ink shadow-2xl transition hover:-translate-y-2 hover:bg-brand-500 hover:text-white">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-white/20 group-hover:text-white"><c.i /></div>
                <div className="mt-5 font-display font-extrabold transition group-hover:text-white">{c.t}</div>
                <div className="mt-1 text-sm text-steel transition group-hover:text-white/85">{c.v}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="rounded-[2rem] border border-ink/5 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(17,75,44,0.2)] sm:p-10">
              <Eyebrow>Book Appointment</Eyebrow>
              <h2 className="mb-2 mt-3 text-3xl font-extrabold">Send us a message</h2>
              <p className="mb-8 text-steel">We typically respond within 2 working hours.</p>
              <AppointmentForm />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5">
            <div className="h-80 overflow-hidden rounded-[2rem] lg:flex-1">
              <iframe title="map" className="h-full w-full" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`} />
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white">
              <div className="pixel-grid absolute inset-0 opacity-25" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-500"><Siren /></div>
                <div>
                  <div className="font-display text-xl font-extrabold">{CONTACT.emergency}</div>
                  <p className="mt-1 text-sm text-white/65">For post-operative emergencies, our team is available round the clock.</p>
                  <a href={`tel:${CONTACT.phoneRaw}`} className="mt-4 inline-block rounded-full bg-brand-500 px-6 py-3 text-sm font-bold">{CONTACT.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
