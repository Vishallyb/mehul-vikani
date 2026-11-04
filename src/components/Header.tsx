import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useAppointment } from "./AppointmentContext";
import { cn } from "../utils/cn";
import { treatmentLabel, treatmentPath, useTreatmentOptions } from "./treatmentLinks";
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


export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [surgeryOpen, setSurgeryOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileSurgeryOpen, setMobileSurgeryOpen] = useState(false);
  const { pathname } = useLocation();
  const { open } = useAppointment();
  // "Obesity Treatment" menu: non-surgical options, then a "Weight Loss Surgery" submenu (admin panel → Treatments)
  const options = useTreatmentOptions();
  const toLink = (t: Parameters<typeof treatmentPath>[0]) => [treatmentLabel(t), treatmentPath(t)] as const;
  const nonSurgeryMenu = options.nonSurgery.map(toLink);
  const surgeryMenu = options.surgical.map(toLink);

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
                  <div className="absolute left-0 top-full pt-3">
                    <div className="w-72 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-ink/10">
                      {nonSurgeryMenu.map(([label, to]) => (
                        <Link key={to} to={to} className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-500 hover:text-white">
                          {label}
                        </Link>
                      ))}
                      <div
                        className="relative mt-1 border-t border-ink/10 pt-1"
                        onMouseEnter={() => setSurgeryOpen(true)}
                        onMouseLeave={() => setSurgeryOpen(false)}
                      >
                        <button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-bold text-brand-600 transition hover:bg-brand-500 hover:text-white">
                          Weight Loss Surgery
                          <ChevronRight size={16} className={cn("transition", surgeryOpen && "rotate-180")} />
                        </button>
                        {surgeryOpen && (
                          <div className="absolute left-full top-0 w-64 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-ink/10">
                            {surgeryMenu.map(([label, to]) => (
                              <Link key={to} to={to} className="block rounded-xl px-4 py-3 text-sm font-semibold text-ink transition hover:bg-brand-500 hover:text-white">
                                {label}
                              </Link>
                            ))}
                          </div>
                        )}
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
              {NAV.map((item) => item.to === "/obesity-treatment-options" ? (
                <div key={item.to} className="border-b border-white/10 pb-2">
                  <button
                    onClick={() => setMobileTreatmentsOpen((open) => !open)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg font-bold text-white transition hover:bg-brand-500",
                      pathname.startsWith("/obesity-treatment-options") && "text-brand-300"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={20} className={cn("transition", mobileTreatmentsOpen && "rotate-180")} />
                  </button>
                  {mobileTreatmentsOpen && (
                    <div className="mt-1 rounded-2xl bg-white/5 p-2">
                      {nonSurgeryMenu.map(([label, to]) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={() => setMobile(false)}
                          className={({ isActive }) => cn(
                            "block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-brand-500 hover:text-white",
                            isActive && "bg-brand-500 text-white"
                          )}
                        >
                          {label}
                        </NavLink>
                      ))}
                      <button
                        onClick={() => setMobileSurgeryOpen((open) => !open)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-left text-sm font-bold text-brand-300 transition hover:bg-brand-500 hover:text-white"
                      >
                        Weight Loss Surgery
                        <ChevronDown size={16} className={cn("transition", mobileSurgeryOpen && "rotate-180")} />
                      </button>
                      {mobileSurgeryOpen && surgeryMenu.map(([label, to]) => (
                        <NavLink
                          key={to}
                          to={to}
                          onClick={() => setMobile(false)}
                          className={({ isActive }) => cn(
                            "block rounded-xl px-7 py-2.5 text-sm font-semibold text-white/70 transition hover:bg-brand-500 hover:text-white",
                            isActive && "text-brand-300"
                          )}
                        >
                          {label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMobile(false)}
                    className={({ isActive }) => cn(
                      "rounded-xl px-4 py-3 text-lg font-bold text-white transition hover:bg-brand-500",
                      isActive ? "border-b-2 border-brand-400 text-brand-300" : ""
                    )}
                  >
                    {item.label}
                  </NavLink>
              ))}
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
