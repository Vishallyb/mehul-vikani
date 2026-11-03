import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock3, BedDouble, TrendingDown, Check, X as XIcon } from "lucide-react";
import { IMG } from "../data/site";
import { useSiteData } from "../components/SiteDataContext";
import { PageHero, Reveal, SectionHeading, CTABanner } from "../components/ui";
import "../styles/treatments.css";

const FILTERS = ["All", "Surgical", "Non-Surgical"];
const typeOf = (slug: string) =>
  slug === "intragastric-balloon" ? "Non-Surgical" : "Surgical";

export default function Treatments() {
  const { TREATMENTS } = useSiteData();
  const [f, setF] = useState("All");
  const list = TREATMENTS.filter((t) => f === "All" || (t.category ?? typeOf(t.slug)) === f);
  return (
    <>
      <PageHero eyebrow="Treatments" title={<>Advanced procedures, <span className="text-brand-400">tailored to you.</span></>} desc="From non-surgical options to complex revision surgery — explore the full range of weight-loss and metabolic treatments." image={IMG.or1} crumbs={[{ label: "Treatments" }]} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)} className={`relative rounded-full px-6 py-3 text-sm font-bold transition ${f === x ? "text-white" : "bg-mist text-ink hover:text-brand-600"}`}>
                {f === x && <motion.span layoutId="filter" className="absolute inset-0 rounded-full bg-brand-500" />}
                <span className="relative">{x}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="mt-14 grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((t) => (
                <motion.div layout key={t.slug} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                  <Link to={`/treatments/${t.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-[0_25px_60px_-30px_rgba(17,75,44,0.2)] transition duration-500 hover:-translate-y-2 sm:flex-row">
                    <div className="relative h-60 overflow-hidden sm:h-auto sm:w-2/5">
                      <img src={t.image} alt={t.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{t.tag}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="text-xl font-extrabold leading-snug transition group-hover:text-brand-600">{t.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-steel">{t.short}</p>
                      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ink/5 pt-5 text-xs">
                        <div><Clock3 size={16} className="mb-1 text-brand-500" /><div className="font-bold">{t.duration}</div><div className="text-steel">Duration</div></div>
                        <div><BedDouble size={16} className="mb-1 text-brand-500" /><div className="font-bold">{t.stay}</div><div className="text-steel">Stay</div></div>
                        <div><TrendingDown size={16} className="mb-1 text-brand-500" /><div className="font-bold">{t.loss.split(" ")[0]}</div><div className="text-steel">Result</div></div>
                      </div>
                      <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-brand-600">
                        View details <ArrowRight size={16} className="transition group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Compare" title="Which procedure is right for me?" desc="A quick comparison of our most common procedures. Your surgeon will personalise the final recommendation." />
          <Reveal className="mt-14 overflow-x-auto rounded-[2rem] bg-white shadow-xl">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-5 font-display">Feature</th>
                  {["Sleeve", "RYGB", "Mini Bypass", "Balloon"].map((h) => <th key={h} className="p-5 font-display">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Excess weight loss", "60–70%", "70–80%", "70–85%", "10–15% BW"],
                  ["Hospital stay", "2–3 days", "3 days", "2–3 days", "Day care"],
                  ["Diabetes remission", "~60%", "~80%", "~80%", "Limited"],
                  ["Best for GERD", false, true, false, false],
                  ["Intestinal re-routing", false, true, true, false],
                  ["Reversible", false, true, true, true],
                ].map((row, r) => (
                  <tr key={r} className="border-b border-ink/5 last:border-0 even:bg-mist/50">
                    {row.map((c, k) => (
                      <td key={k} className={`p-5 ${k === 0 ? "font-bold" : ""}`}>
                        {typeof c === "boolean" ? (c ? <Check className="text-brand-500" /> : <XIcon className="text-ink/25" />) : c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
