import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, Ruler, Info, ArrowRight } from "lucide-react";
import { IMG } from "../data/site";
import { useSiteData } from "../components/SiteDataContext";
import { PageHero, Reveal, SectionHeading, CTABanner } from "../components/ui";
import { useAppointment } from "../components/AppointmentContext";
import "../styles/bmi-calculator.css";

const BANDS = [
  { max: 18.5, label: "Underweight", color: "#7bc59a", advice: "You're below the healthy range. Consult a physician or nutritionist for a balanced weight-gain plan." },
  { max: 23, label: "Normal", color: "#2b8c57", advice: "Great! Your BMI is in the healthy range for Asian adults. Keep up a balanced diet and regular activity." },
  { max: 27.5, label: "Overweight", color: "#237447", advice: "You're at increased risk of metabolic disease. Lifestyle modification is recommended; non-surgical options like intragastric balloon may help." },
  { max: 32.5, label: "Obese Class I", color: "#1d5d3a", advice: "If you have type-2 diabetes that's poorly controlled, metabolic surgery may be an option. Endoscopic options are also worth considering." },
  { max: 37.5, label: "Obese Class II", color: "#174a2f", advice: "With conditions like diabetes, hypertension or sleep apnea, you may qualify for bariatric surgery. A consultation is recommended." },
  { max: 999, label: "Obese Class III", color: "#0f3320", advice: "You are likely a strong candidate for bariatric surgery, which can dramatically improve your health and life expectancy." },
];

export default function BMICalculator() {
  const { TREATMENTS } = useSiteData();
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [cm, setCm] = useState(168);
  const [kg, setKg] = useState(98);
  const [ft, setFt] = useState(5);
  const [inch, setInch] = useState(6);
  const [lb, setLb] = useState(215);
  const [age, setAge] = useState(35);
  const [gender, setGender] = useState("Female");
  const [conds, setConds] = useState<string[]>([]);
  const { open } = useAppointment();

  const { bmi, hM, wKg } = useMemo(() => {
    const hM = unit === "metric" ? cm / 100 : (ft * 12 + inch) * 0.0254;
    const wKg = unit === "metric" ? kg : lb * 0.4536;
    return { bmi: wKg / (hM * hM), hM, wKg };
  }, [unit, cm, kg, ft, inch, lb]);

  const band = BANDS.find((b) => bmi < b.max)!;
  const idealMax = 22.9 * hM * hM;
  const excess = Math.max(0, wKg - idealMax);
  const angle = Math.min(180, Math.max(0, ((bmi - 15) / 30) * 180));
  const eligible = bmi >= 37.5 || (bmi >= 32.5 && conds.length > 0) || (bmi >= 27.5 && conds.includes("Type-2 Diabetes"));
  const toggle = (c: string) => setConds(conds.includes(c) ? conds.filter((x) => x !== c) : [...conds, c]);
  const rec = bmi >= 40 ? TREATMENTS[1] : bmi >= 32.5 ? TREATMENTS[0] : bmi >= 27.5 && conds.includes("Type-2 Diabetes") ? TREATMENTS[3] : bmi >= 27 ? TREATMENTS[4] : null;

  const input = "w-full rounded-xl border border-ink/10 bg-mist px-4 py-3.5 font-display text-lg font-bold outline-none focus:border-brand-500 focus:bg-white";

  return (
    <>
      <PageHero eyebrow="BMI Calculator" title={<>Know your number. <span className="text-brand-400">Know your options.</span></>} desc="Calculate your Body Mass Index with Asian-Indian cut-offs and check your eligibility for weight-loss surgery." image={IMG.healthyWall} crumbs={[{ label: "BMI Calculator" }]} />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-ink/5 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(17,75,44,0.2)] sm:p-10">
            <div className="flex rounded-full bg-mist p-1.5">
              {(["metric", "imperial"] as const).map((u) => (
                <button key={u} onClick={() => setUnit(u)} className="relative flex-1 rounded-full py-3 text-sm font-bold capitalize">
                  {unit === u && <motion.span layoutId="unit" className="absolute inset-0 rounded-full bg-ink" />}
                  <span className={`relative ${unit === u ? "text-white" : ""}`}>{u} {u === "metric" ? "(cm/kg)" : "(ft/lb)"}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">Gender</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Female", "Male"].map((g) => <button key={g} onClick={() => setGender(g)} className={`rounded-xl py-3.5 text-sm font-bold transition ${gender === g ? "bg-brand-500 text-white" : "bg-mist"}`}>{g}</button>)}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold">Age</label>
                <input type="number" value={age} onChange={(e) => setAge(+e.target.value)} className={input} />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold"><Ruler size={16} className="text-brand-500" />Height</label>
              {unit === "metric" ? (
                <>
                  <input type="number" value={cm} onChange={(e) => setCm(+e.target.value || 0)} className={input} />
                  <input type="range" min={120} max={220} value={cm} onChange={(e) => setCm(+e.target.value)} className="mt-3 w-full accent-[#2b8c57]" />
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative"><input type="number" value={ft} onChange={(e) => setFt(+e.target.value || 0)} className={input} /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-steel">ft</span></div>
                  <div className="relative"><input type="number" value={inch} onChange={(e) => setInch(+e.target.value || 0)} className={input} /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-steel">in</span></div>
                </div>
              )}
            </div>
            <div className="mt-6">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold"><Scale size={16} className="text-brand-500" />Weight</label>
              {unit === "metric" ? (
                <>
                  <input type="number" value={kg} onChange={(e) => setKg(+e.target.value || 0)} className={input} />
                  <input type="range" min={35} max={220} value={kg} onChange={(e) => setKg(+e.target.value)} className="mt-3 w-full accent-[#2b8c57]" />
                </>
              ) : (
                <div className="relative"><input type="number" value={lb} onChange={(e) => setLb(+e.target.value || 0)} className={input} /><span className="absolute right-4 top-1/2 -translate-y-1/2 text-steel">lb</span></div>
              )}
            </div>
            <div className="mt-6">
              <label className="mb-3 block text-sm font-semibold">Existing health conditions</label>
              <div className="flex flex-wrap gap-2">
                {["Type-2 Diabetes", "Hypertension", "Sleep Apnea", "PCOS", "Joint Pain", "Fatty Liver"].map((c) => (
                  <button key={c} onClick={() => toggle(c)} className={`rounded-full border px-4 py-2 text-xs font-bold transition ${conds.includes(c) ? "border-brand-500 bg-brand-500 text-white" : "border-ink/10 hover:border-brand-500"}`}>{c}</button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
            <div className="pixel-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-brand-400">Your Result</div>
              {/* Gauge */}
              <div className="relative mx-auto mt-6 w-full max-w-xs">
                <svg viewBox="0 0 200 110" className="w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0" stopColor="#ffffff" /><stop offset=".3" stopColor="#d5eedf" /><stop offset=".55" stopColor="#7bc59a" /><stop offset=".8" stopColor="#4caa74" /><stop offset="1" stopColor="#2b8c57" />
                    </linearGradient>
                  </defs>
                  <path d="M15 100 A85 85 0 0 1 185 100" fill="none" stroke="url(#g)" strokeWidth="16" strokeLinecap="round" />
                  <g style={{ transform: `rotate(${angle - 90}deg)`, transformOrigin: "100px 100px", transformBox: "view-box", transition: "transform 0.8s cubic-bezier(0.34,1.56,0.64,1)" }}>
                    <line x1="100" y1="100" x2="100" y2="30" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                  </g>
                  <circle cx="100" cy="100" r="9" fill="#fff" />
                </svg>
                <div className="-mt-2 text-center">
                  <div className="font-display text-6xl font-black">{isFinite(bmi) ? bmi.toFixed(1) : "--"}</div>
                  <span className="mt-2 inline-block rounded-full px-4 py-1.5 text-sm font-bold ring-2 ring-white/40" style={{ background: band.color }}>{band.label}</span>
                </div>
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-white/70">{band.advice}</p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-xs text-white/50">Healthy weight up to</div><div className="font-display text-2xl font-extrabold">{idealMax.toFixed(0)} kg</div></div>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><div className="text-xs text-white/50">Excess weight</div><div className="font-display text-2xl font-extrabold text-brand-300">{excess.toFixed(0)} kg</div></div>
              </div>

              <div className={`mt-6 rounded-2xl p-5 ${eligible ? "bg-brand-500" : "bg-white/5 ring-1 ring-white/10"}`}>
                <div className="flex items-start gap-3">
                  <Info size={20} className="mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <b>{eligible ? "You may be eligible for bariatric / metabolic surgery." : "Surgery may not be required at this stage."}</b>
                    {rec && <div className="mt-2">Suggested to explore: <Link to={`/treatments/${rec.slug}`} className="font-bold underline">{rec.title}</Link></div>}
                  </div>
                </div>
              </div>
              <button onClick={() => open(rec?.title)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 font-bold text-ink transition hover:bg-brand-50">Discuss results with Dr. Vikani <ArrowRight size={16} /></button>
              <p className="mt-4 text-center text-[11px] text-white/40">For {gender.toLowerCase()}, age {age}. BMI is a screening tool, not a diagnosis.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading center eyebrow="Reference" title="BMI categories for Asian adults" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {BANDS.map((b, k) => (
              <Reveal key={b.label} delay={k * 0.05} className={`rounded-3xl bg-white p-6 transition ${band.label === b.label ? "ring-4 ring-brand-500" : ""}`}>
                <div className="h-2 w-12 rounded-full" style={{ background: b.color }} />
                <div className="mt-4 font-display text-lg font-extrabold">{b.label}</div>
                <div className="text-sm text-steel">{k === 0 ? "< 18.5" : k === BANDS.length - 1 ? "≥ 37.5" : `${BANDS[k - 1].max} – ${(b.max - 0.1).toFixed(1)}`}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
