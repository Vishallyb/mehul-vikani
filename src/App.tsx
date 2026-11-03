import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions, { ScrollProgress, Preloader } from "./components/FloatingActions";
import { AppointmentProvider } from "./components/AppointmentContext";
import { SiteDataProvider } from "./components/SiteDataContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import ObesityCare from "./pages/ObesityCare";
import CareDetail from "./pages/CareDetail";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./pages/TreatmentDetail";
import Results from "./pages/Results";
import Blog, { BlogPost } from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-5 pt-32 text-center">
      <div>
        <div className="font-display text-8xl font-black text-brand-500">404</div>
        <h1 className="mt-4 text-3xl font-extrabold">Page not found</h1>
        <Link to="/" className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 font-bold text-white">Back to Home</Link>
      </div>
    </section>
  );
}

function normalizeLegacyHashUrl() {
  const { hash } = window.location;
  if (!hash.startsWith("#/")) return;

  window.history.replaceState(null, "", hash.slice(1));
}

function AnimatedRoutes() {
  const location = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <motion.main className={location.pathname === "/" ? "home-page" : "inner-page"} key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/obesity-treatment-options" element={<ObesityCare />} />
          <Route path="/obesity-treatment-options/:slug" element={<CareDetail />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/results" element={<Results />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  normalizeLegacyHashUrl();

  return (
    <BrowserRouter>
      <SiteDataProvider>
      <AppointmentProvider>
        <Preloader />
        <ScrollProgress />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <FloatingActions />
      </AppointmentProvider>
      </SiteDataProvider>
    </BrowserRouter>
  );
}
