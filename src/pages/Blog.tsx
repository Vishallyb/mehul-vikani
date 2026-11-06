import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import { BLOG_CATEGORIES, IMG } from "../data/site";
import { useSiteData, PageLoading } from "../components/SiteDataContext";
import { PageHero, Reveal, Eyebrow } from "../components/ui";
import { useAppointment } from "../components/AppointmentContext";
import "../styles/blog.css";

export default function Blog() {
  const { BLOGS } = useSiteData();
  const knownCategories = new Set<string>(BLOG_CATEGORIES);
  const extraCategories = Array.from(new Set(BLOGS.map((b) => b.cat))).filter((category) => !knownCategories.has(category));
  const cats = ["All", ...BLOG_CATEGORIES, ...extraCategories];
  const [cat, setCat] = useState("All");
  const [feat, ...rest] = BLOGS;
  const list = (cat === "All" ? rest : BLOGS.filter((b) => b.cat === cat));
  return (
    <>
      <PageHero eyebrow="Health Blog" title={<>Insights for a <span className="text-brand-400">healthier life.</span></>} desc="Expert articles on bariatric surgery, nutrition, diabetes and lifestyle by Dr. Mehul Vikani and team." image={IMG.food2} crumbs={[{ label: "Blog" }]} />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {cat === "All" && (
            <Reveal>
              <Link to={`/blog/${feat.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-ink text-white lg:grid-cols-2">
                <div className="relative h-72 overflow-hidden lg:h-auto"><img src={feat.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-8 sm:p-12">
                  <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold">Featured · {feat.cat}</span>
                  <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">{feat.title}</h2>
                  <p className="mt-4 text-white/65">{feat.excerpt}</p>
                  <div className="mt-6 flex gap-5 text-sm text-white/50"><span className="flex items-center gap-1.5"><Calendar size={14} />{feat.date}</span><span className="flex items-center gap-1.5"><Clock size={14} />{feat.read}</span></div>
                  <div className="mt-8 inline-flex items-center gap-2 font-bold text-brand-300">Read article <ArrowRight size={16} className="transition group-hover:translate-x-2" /></div>
                </div>
              </Link>
            </Reveal>
          )}
          <div className="mt-14 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${cat === c ? "bg-brand-500 text-white" : "bg-mist hover:text-brand-600"}`}>{c}</button>
            ))}
          </div>
          <motion.div layout className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((b) => (
                <motion.div layout key={b.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <Link to={`/blog/${b.slug}`} className="group block h-full overflow-hidden rounded-[1.75rem] border border-ink/5 bg-white shadow-[0_20px_50px_-30px_rgba(17,75,44,0.2)] transition hover:-translate-y-2">
                    <div className="relative overflow-hidden"><img src={b.img} alt="" className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-600">{b.cat}</span></div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-steel">{b.date} · {b.read} read</div>
                      <h3 className="mt-2 text-lg font-extrabold leading-snug transition group-hover:text-brand-600">{b.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-steel">{b.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export function BlogPost() {
  const { BLOGS, loaded } = useSiteData();
  const { slug } = useParams();
  const b = BLOGS.find((x) => x.slug === slug);
  const { open } = useAppointment();
  if (!b) return loaded ? <Navigate to="/blog" replace /> : <PageLoading />;
  return (
    <>
      <PageHero eyebrow="Health Blog" title={b.title} desc={b.excerpt} image={b.img} crumbs={[{ label: "Blog", to: "/blog" }, { label: b.cat }]} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="mb-8 flex flex-wrap items-center gap-5 border-b border-ink/10 pb-6 text-sm text-steel">
              <span className="flex items-center gap-2"><img src={IMG.doctor} className="h-9 w-9 rounded-full object-cover" alt="" /><b className="text-ink">Dr. Mehul Vikani</b></span>
              <span className="flex items-center gap-1.5"><Calendar size={14} />{b.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{b.read} read</span>
              <button onClick={() => navigator.clipboard?.writeText(window.location.href)} className="ml-auto flex items-center gap-1.5 font-semibold text-brand-600"><Share2 size={14} />Copy link</button>
            </div>
            <img src={b.img} alt="" className="mb-10 h-96 w-full rounded-[2rem] object-cover" />
            {b.content ? (
              // HTML is sanitized by the backend before it is stored
              <Reveal><div className="blog-content" dangerouslySetInnerHTML={{ __html: b.content }} /></Reveal>
            ) : (
              <div className="space-y-6 text-lg leading-relaxed text-ink/80">
                {b.body.map((p, k) => (
                  <Reveal key={k}><p className={k === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:text-brand-500" : ""}>{p}</p></Reveal>
                ))}
              </div>
            )}
            <div className="mt-12 rounded-[2rem] bg-brand-50 p-8">
              <Eyebrow>Need personal advice?</Eyebrow>
              <p className="mt-3 text-lg font-semibold">Every body is different. Book a one-on-one consultation to get answers specific to you.</p>
              <button onClick={() => open()} className="mt-5 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-bold text-white">Book Consultation</button>
            </div>
          </article>
          <aside className="lg:col-span-4">
            <div className="rounded-[2rem] border border-ink/5 bg-white p-6 shadow-xl lg:sticky lg:top-28">
              <h4 className="mb-4 font-extrabold">More Articles</h4>
              <div className="space-y-4">
                {BLOGS.filter((x) => x.slug !== b.slug).slice(0, 4).map((x) => (
                  <Link key={x.slug} to={`/blog/${x.slug}`} className="group flex gap-4">
                    <img src={x.img} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" />
                    <div><div className="text-xs text-steel">{x.date}</div><div className="text-sm font-bold leading-snug transition group-hover:text-brand-600">{x.title}</div></div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
