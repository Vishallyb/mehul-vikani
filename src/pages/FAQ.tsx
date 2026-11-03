import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search, MessageCircle } from "lucide-react";
import { FAQS, IMG, CONTACT } from "../data/site";
import { PageHero, Reveal } from "../components/ui";
import "../styles/faq.css";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, k) => {
        const on = open === k;
        return (
          <div key={f.q} className={`overflow-hidden rounded-2xl border transition ${on ? "border-brand-500 bg-white shadow-lg shadow-brand-500/10" : "border-ink/10 bg-white"}`}>
            <button onClick={() => setOpen(on ? null : k)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6">
              <span className="font-display font-bold">{f.q}</span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${on ? "rotate-45 bg-brand-500 text-white" : "bg-mist"}`}><Plus size={18} /></span>
            </button>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35 }}>
                  <p className="px-5 pb-6 leading-relaxed text-steel sm:px-6">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const cats = ["All", ...Array.from(new Set(FAQS.map((f) => f.cat)))];
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = FAQS.filter((f) => (cat === "All" || f.cat === cat) && (f.q + f.a).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="FAQ" title={<>Clear answers for your <span className="text-brand-400">next step.</span></>} desc="Everything you need to know about bariatric surgery, recovery, costs and more." image={IMG.consult3} crumbs={[{ label: "FAQ" }]} />
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative">
                <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-steel" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search questions…" className="w-full rounded-full border border-ink/10 bg-mist py-4 pl-12 pr-5 text-sm outline-none focus:border-brand-500 focus:bg-white" />
              </div>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                {cats.map((c) => (
                  <button key={c} onClick={() => setCat(c)} className={`rounded-2xl px-5 py-3.5 text-left text-sm font-bold transition ${cat === c ? "bg-ink text-white" : "bg-mist hover:bg-brand-50 hover:text-brand-600"}`}>
                    {c} <span className="float-right ml-3 opacity-50">{c === "All" ? FAQS.length : FAQS.filter((f) => f.cat === c).length}</span>
                  </button>
                ))}
              </div>
              <div className="rounded-[2rem] bg-brand-500 p-8 text-white">
                <MessageCircle size={36} />
                <h3 className="mt-4 text-xl font-extrabold">Still have questions?</h3>
                <p className="mt-2 text-sm text-white/80">Talk to our patient coordinator directly.</p>
                <a href={`tel:${CONTACT.phoneRaw}`} className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-bold text-ink">{CONTACT.phone}</a>
              </div>
            </div>
          </aside>
          <Reveal className="lg:col-span-8">
            {list.length ? <Accordion key={cat + q} items={list} /> : <p className="rounded-2xl bg-mist p-10 text-center text-steel">No matching questions found.</p>}
          </Reveal>
        </div>
      </section>
      <p className="mx-auto max-w-7xl px-5 pb-10 text-sm leading-relaxed text-steel sm:px-8">
        <strong>Medical Disclaimer:</strong> The information provided on this website is intended for general educational purposes only. It does not replace individual medical consultation, diagnosis or treatment. Treatment suitability, potential benefits and risks vary between individuals and require appropriate clinical assessment.
      </p>
    </>
  );
}
