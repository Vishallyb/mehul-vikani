import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { IMG } from "../data/site";
import { useAppointment } from "./AppointmentContext";
import { cn } from "../utils/cn";
import "../styles/header.css";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About the Doctor", to: "/about" },
  { label: "Achievements", to: "/achievements" },
  { label: "Obesity Treatment", to: "/obesity-treatment-options" },
  { label: "Results", to: "/results" },
  { label: "Blogs", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const TREATMENT_MENU = [
  { n: "01", label: "Diet and Lifestyle", to: "/obesity-treatment-options/diet-and-lifestyle", image: IMG.salad, desc: "Nutrition, activity, sleep and sustainable lifestyle support." },
  { n: "02", label: "Weight-Loss Medications & Injections", to: "/obesity-treatment-options/weight-loss-medications", image: IMG.healthyWall2, desc: "Supervised medication and injection treatment options." },
  { n: "03", label: "Intragastric Balloon", to: "/treatments/intragastric-balloon", image: IMG.consult1, desc: "A temporary, non-surgical endoscopic treatment option." },
  { n: "04", label: "Sleeve Gastrectomy", to: "/treatments/sleeve-gastrectomy", image: IMG.or1, desc: "A laparoscopic procedure that creates a smaller stomach." },
  { n: "05", label: "Mini Gastric Bypass", to: "/treatments/mini-gastric-bypass", image: IMG.or3, desc: "One Anastomosis Gastric Bypass for selected patients." },
  { n: "06", label: "Roux-en-Y Gastric Bypass", to: "/treatments/gastric-bypass", image: IMG.or2, desc: "A metabolic procedure with a small stomach pouch." },
];

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const { pathname } = useLocation();
  const { open } = useAppointment();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-[0_10px_40px_-15px_rgba(17,75,44,0.2)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" aria-label="Dr. Mehul Vikani home">
            <Logo />
          </Link>

          <nav className="hidden shrink-0 items-center gap-0.5 whitespace-nowrap xl:flex">
            {NAV.map((item) => item.to === "/obesity-treatment-options" ? (
              <div key={item.to} className="relative" onMouseEnter={() => setTreatmentsOpen(true)} onMouseLeave={() => setTreatmentsOpen(false)}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 rounded-full px-2.5 py-2 text-[15px] font-semibold transition",
                      isActive || pathname.startsWith("/obesity-treatment-options")
                        ? "rounded-none border-b-2 border-brand-500 text-brand-600"
                        : "text-ink hover:bg-brand-500 hover:text-white"
                    )
                  }
                >
                  {item.label}
                  <ChevronDown size={14} className={cn("transition", treatmentsOpen && "rotate-180")} />
                </NavLink>
                {treatmentsOpen && (
                  <div className="treatment-mega-menu absolute top-full pt-3">
                    <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-ink/10">
                      <div className="col-span-8 min-w-0 grid grid-cols-2 gap-3">
                        {TREATMENT_MENU.map((item) => (
                          <Link key={item.to} to={item.to} className="treatment-menu-card group flex min-w-0 min-h-28 items-start gap-4 overflow-hidden rounded-2xl p-4 transition">
                            <img src={item.image} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start gap-2 text-sm font-bold leading-snug text-ink group-hover:text-white">
                                <span>{item.label}</span>
                                <ArrowRight size={14} className="mt-0.5 shrink-0 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                              </div>
                              <p className="mt-2 block max-w-full whitespace-normal break-normal text-xs leading-relaxed text-steel group-hover:text-white/80">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="relative col-span-4 min-h-[280px] overflow-hidden rounded-3xl">
                        <img src={IMG.jeans} alt="" className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                        <div className="relative flex h-full flex-col justify-end p-7 text-white">
                          <div className="text-xs font-bold uppercase tracking-widest text-brand-300">Not sure which?</div>
                          <h4 className="mt-2 max-w-xs whitespace-normal break-words text-lg font-extrabold leading-snug text-white sm:text-xl">Find the right obesity treatment for you.</h4>
                          <Link to="/obesity-treatment-options" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white">
                            Explore options <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-2.5 py-2 text-[15px] font-semibold transition",
                    isActive ? "rounded-none border-b-2 border-brand-500 text-brand-600" : "text-ink hover:bg-brand-500 hover:text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => open()} className="hidden shrink-0 rounded-full bg-brand-500 px-4 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-ink sm:block">
              Book Appointment
            </button>
            <button onClick={() => setMobile(true)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white lg:hidden" aria-label="Open menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="fixed inset-0 z-[90] lg:hidden">
          <button className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setMobile(false)} aria-label="Close menu overlay" />
          <aside className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ink p-7 text-white">
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={() => setMobile(false)} className="grid h-10 w-10 place-items-center rounded-full bg-white/10" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-2">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobile(false)}
                  className={({ isActive }) => cn(
                    "rounded-xl px-4 py-3 text-lg font-bold text-white transition hover:bg-brand-500",
                    isActive || (item.to === "/obesity-treatment-options" && pathname.startsWith("/obesity-treatment-options"))
                      ? "border-b-2 border-brand-400 text-brand-300"
                      : ""
                  )}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-2 border-t border-white/10 pt-2">
                {[
                  ["Diet and Lifestyle", "/obesity-treatment-options/diet-and-lifestyle"],
                  ["Weight-Loss Medications", "/obesity-treatment-options/weight-loss-medications"],
                  ["Intragastric Balloon", "/treatments/intragastric-balloon"],
                  ["Sleeve Gastrectomy", "/treatments/sleeve-gastrectomy"],
                  ["Mini Gastric Bypass", "/treatments/mini-gastric-bypass"],
                  ["Roux-en-Y Gastric Bypass", "/treatments/gastric-bypass"],
                ].map(([label, to]) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobile(false)}
                    className={({ isActive }) => cn(
                      "block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/75 transition hover:bg-brand-500 hover:text-white",
                      isActive ? "border-b-2 border-brand-400 text-brand-300" : ""
                    )}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </nav>
            <button onClick={() => { setMobile(false); open(); }} className="mt-8 rounded-full bg-brand-500 py-4 font-bold text-white">
              Book Appointment
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
