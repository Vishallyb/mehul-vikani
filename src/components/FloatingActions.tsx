import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSiteData } from "./SiteDataContext";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-brand-500" />;
}

export default function FloatingActions() {
  const { CONTACT } = useSiteData();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {show && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-xl transition hover:bg-brand-600"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          )}
        </AnimatePresence>
        <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Dr.%20Vikani%2C%20I%20want%20to%20know%20about%20bariatric%20surgery`} target="_blank" rel="noreferrer" className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl" aria-label="WhatsApp">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
          <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 01-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 01-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.4 9.4 0 012.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.53A11.33 11.33 0 0012.04.63C5.76.63.64 5.74.64 12.03c0 2.01.52 3.97 1.52 5.7L.54 23.63l6.04-1.58a11.37 11.37 0 005.45 1.39h.01c6.28 0 11.4-5.11 11.4-11.4 0-3.05-1.19-5.91-3.34-8.07z"/></svg>
        </a>
      </div>
    </>
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} className="fixed inset-0 z-[200] grid place-items-center bg-ink">
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 140" className="h-20">
              <motion.path d="M40 18 H64 L110 64 L156 18 H185 V128 H165 V46 L110 101 L60 51 V98 H40 Z" fill="#fff" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} />
              <motion.path d="M62 66 L108 116 L228 4" fill="none" stroke="#2b8c57" strokeWidth="22" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }} />
            </svg>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-6 font-display text-sm font-extrabold tracking-[0.35em] text-white">
              DR. MEHUL VIKANI
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
