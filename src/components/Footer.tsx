import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Facebook, Instagram, Youtube, Linkedin } from "./Social";
import Logo from "./Logo";
import { CONTACT, TREATMENTS } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pixel-grid absolute inset-0 opacity-20" />
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Advanced laparoscopic bariatric & metabolic surgery with a compassionate, patient-first approach. Helping thousands reclaim their health, confidence and life.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition hover:bg-brand-500"><I size={16} /></a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {[["About Doctor", "/about"], ["Achievements", "/achievements"], ["Results", "/results"], ["FAQs", "/faq"], ["Blogs", "/blog"], ["Contact Us", "/contact"]].map(([l, t]) => (
                <li key={t}><Link to={t} className="group flex items-center gap-2 hover:text-white"><ArrowRight size={12} className="text-brand-400 transition group-hover:translate-x-1" />{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Obesity Treatments</h4>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              {[
                { slug: "obesity-treatment-options/diet-and-lifestyle", title: "Diet and Lifestyle" },
                { slug: "obesity-treatment-options/weight-loss-medications", title: "Weight-Loss Medications" },
                ...TREATMENTS.slice(0, 4),
              ].map((t) => (
                <li key={t.slug}><Link to={t.slug.startsWith("obesity-") ? `/${t.slug}` : `/treatments/${t.slug}`} className="group flex items-center gap-2 hover:text-white"><ArrowRight size={12} className="text-brand-400 transition group-hover:translate-x-1" />{t.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />{CONTACT.address}</li>
              <li><a href={`tel:${CONTACT.phoneRaw}`} className="flex gap-3 hover:text-white"><Phone size={18} className="shrink-0 text-brand-400" />{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} className="flex gap-3 hover:text-white"><Mail size={18} className="shrink-0 text-brand-400" />{CONTACT.email}</a></li>
              <li className="flex gap-3"><Clock size={18} className="shrink-0 text-brand-400" />{CONTACT.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Dr. Mehul Vikani. All rights reserved. Developed by <a href="https://lybtechnology.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400"><b>LYB Technology</b></a></p>
          {/* <p>Medical information on this site is for awareness only and not a substitute for professional advice.</p> */}
        </div>
      </div>
    </footer>
  );
}
