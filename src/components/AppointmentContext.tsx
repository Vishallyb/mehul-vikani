import { createContext, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, CalendarDays, User, Phone, Stethoscope } from "lucide-react";
import { CONTACT } from "../data/site";
import { LogoMark } from "./Logo";

type Ctx = { open: (treatment?: string) => void };
const AppointmentCtx = createContext<Ctx>({ open: () => {} });
export const useAppointment = () => useContext(AppointmentCtx);

type AppointmentFormData = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  message: string;
};

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const DOCX_TREATMENTS = [
  "Diet and Lifestyle",
  "Weight-Loss Medications and Injections",
  "Intragastric Balloon",
  "Sleeve Gastrectomy",
  "Mini Gastric Bypass (OAGB)",
  "Roux-en-Y Gastric Bypass",
];

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [preset, setPreset] = useState("");
  const open = (t?: string) => {
    setPreset(typeof t === "string" ? t : "");
    setOpen(true);
  };
  return (
    <AppointmentCtx.Provider value={{ open }}>
      {children}
      <AnimatePresence>{isOpen && <Modal preset={preset} onClose={() => setOpen(false)} />}</AnimatePresence>
    </AppointmentCtx.Provider>
  );
}

export function AppointmentForm({ preset = "", compact = false }: { preset?: string; compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<AppointmentFormData>({ name: "", phone: "", email: "", treatment: preset, date: "", message: "" });
  const [err, setErr] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const set = (k: keyof AppointmentFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2) return setErr("Please enter your full name.");
    if (!/^[+\d\s-]{10,15}$/.test(form.phone)) return setErr("Please enter a valid phone number.");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setErr("Please enter a valid email address.");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const receiverEmail = import.meta.env.VITE_EMAILJS_RECEIVER_EMAIL || CONTACT.email;
    if (!serviceId || !templateId || !publicKey) {
      return setErr("Appointment email service is not configured. Please call us directly.");
    }

    setErr("");
    setSubmitting(true);
    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: receiverEmail,
            from_name: form.name,
            from_phone: form.phone,
            from_email: form.email || "Not provided",
            treatment: form.treatment || "General Consultation",
            appointment_date: form.date || "Not specified",
            message: form.message || "No additional message",
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Email service returned ${response.status}`);
      }
      setDone(true);
    } catch (error) {
      console.error("Appointment submission failed:", error);
      setErr("We could not send your request. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done)
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand-500">
          <CheckCircle2 size={44} />
        </div>
        <h3 className="mt-6 text-2xl font-extrabold">Appointment Requested!</h3>
        <p className="mx-auto mt-3 max-w-sm text-steel">
          Thank you, {form.name.split(" ")[0]}. Our patient coordinator will call you on <b className="text-ink">{form.phone}</b> within 2 working hours to confirm your slot.
        </p>
        <button onClick={() => { setDone(false); setForm({ ...form, name: "", phone: "", email: "", message: "" }); }} className="mt-6 text-sm font-bold text-brand-600 underline">
          Book another appointment
        </button>
      </motion.div>
    );

  const field = "w-full rounded-xl border border-ink/10 bg-mist px-4 py-3.5 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10";
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div className="relative">
          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
          <input value={form.name} onChange={set("name")} placeholder="Full Name *" className={field + " pl-11"} />
        </div>
        <div className="relative">
          <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
          <input value={form.phone} onChange={set("phone")} placeholder="Phone Number *" className={field + " pl-11"} />
        </div>
        <input value={form.email} onChange={set("email")} type="email" placeholder="Email Address" className={field} />
        <div className="relative">
          <Stethoscope size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
          <select value={form.treatment} onChange={set("treatment")} className={"treatment-select " + field + " appearance-none pl-11"}>
            <option value="">Select Treatment</option>
            {DOCX_TREATMENTS.map((treatment) => <option key={treatment}>{treatment}</option>)}
          </select>
        </div>
        <div className="relative">
          <CalendarDays size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
          <input value={form.date} onChange={set("date")} type="date" className={field + " pl-11"} />
        </div>
      </div>
      {!compact && <textarea value={form.message} onChange={set("message")} rows={3} placeholder="Tell us briefly about your concern (optional)" className={field} />}
      {err && <p className="text-sm font-medium text-brand-700 bg-brand-50 rounded-lg px-3 py-2">{err}</p>}
      <button disabled={submitting} className="w-full rounded-full bg-brand-500 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? "Sending Request..." : "Confirm Appointment"}
      </button>
      <p className="text-center text-xs text-steel">🔒 100% confidential. Or call us at <a href={`tel:${CONTACT.phoneRaw}`} className="font-semibold text-brand-600">{CONTACT.phone}</a></p>
    </form>
  );
}

function Modal({ preset, onClose }: { preset: string; onClose: () => void }) {
  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-3xl bg-white shadow-2xl md:grid-cols-5"
      >
        <div className="relative hidden flex-col gap-10 overflow-hidden bg-ink p-7 text-white md:col-span-2 md:flex">
          <div className="pixel-grid absolute inset-0 opacity-30" />
          <div className="relative">
            <LogoMark light className="h-12" />
            <h3 className="mt-8 text-2xl font-extrabold leading-snug text-white">Begin your transformation today.</h3>
            <p className="mt-3 text-sm text-white/60">Personalised consultation with Dr. Mehul Vikani, Advanced Bariatric & Metabolic Surgeon.</p>
          </div>
          <ul className="relative space-y-3 text-sm">
            {["Free BMI & eligibility assessment", "Insurance & EMI assistance", "Dedicated patient coordinator", "Lifelong follow-up support"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-400" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="p-6 sm:p-7 md:col-span-3">
          <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-mist transition hover:rotate-90 hover:bg-brand-500 hover:text-white">
            <X size={18} />
          </button>
          <h3 className="text-2xl font-extrabold">Book an Appointment</h3>
          <p className="mb-6 mt-1 text-sm text-steel">Fill in your details and we'll get back to you shortly.</p>
          <AppointmentForm preset={preset} />
        </div>
      </motion.div>
    </motion.div>
  );
}
