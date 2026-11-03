import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BLOGS, CONTACT, FAQS, STATS, TESTIMONIALS, TREATMENTS, type Treatment } from "../data/site";
import { apiFetch, assetUrl, resolveHtmlAssets } from "../lib/api";

// `content` is rich text HTML written in the admin editor; older posts only have `body` paragraphs
export type BlogPost = (typeof BLOGS)[number] & { content?: string };

type SiteData = {
  CONTACT: typeof CONTACT;
  STATS: typeof STATS;
  TREATMENTS: Treatment[];
  TESTIMONIALS: typeof TESTIMONIALS;
  BLOGS: BlogPost[];
  FAQS: typeof FAQS;
  /** true once the API request has finished (successfully or not) */
  loaded: boolean;
};

// Bundled content renders instantly; anything managed in the admin panel replaces it once loaded.
const FALLBACK: SiteData = { CONTACT, STATS, TREATMENTS, TESTIMONIALS, BLOGS, FAQS, loaded: false };

const SiteDataCtx = createContext<SiteData>(FALLBACK);
export const useSiteData = () => useContext(SiteDataCtx);

// Shown on detail pages while content added in the admin panel is still loading
export function PageLoading() {
  return (
    <section className="grid min-h-[80vh] place-items-center pt-24" aria-busy="true">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-100 border-t-brand-500" />
    </section>
  );
}

type List<T> = { data: T[] };

const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(FALLBACK);

  useEffect(() => {
    const load = async <T,>(path: string) => {
      try {
        return await apiFetch<T>(path);
      } catch (error) {
        console.warn(`Using bundled content for ${path}:`, error);
        return null;
      }
    };

    (async () => {
      const [settings, treatments, testimonials, blogs, faqs] = await Promise.all([
        load<{ data: { contact?: typeof CONTACT; stats?: typeof STATS } }>("/settings"),
        load<List<Treatment>>("/treatments?limit=100"),
        load<List<(typeof TESTIMONIALS)[number]>>("/testimonials?limit=100"),
        load<List<BlogPost>>("/blogs?limit=100"),
        load<List<(typeof FAQS)[number]>>("/faqs?limit=100"),
      ]);

      setData((prev) => ({
        CONTACT: settings?.data.contact?.phone ? { ...prev.CONTACT, ...settings.data.contact } : prev.CONTACT,
        STATS: settings?.data.stats?.length ? settings.data.stats : prev.STATS,
        TREATMENTS: treatments?.data.length ? treatments.data.map((t) => ({ ...t, image: assetUrl(t.image) })) : prev.TREATMENTS,
        TESTIMONIALS: testimonials?.data.length ? testimonials.data.map((t) => ({ ...t, img: assetUrl(t.img) })) : prev.TESTIMONIALS,
        BLOGS: blogs?.data.length
          ? blogs.data.map((b) => ({ ...b, date: formatDate(b.date), img: assetUrl(b.img), content: b.content ? resolveHtmlAssets(b.content) : "" }))
          : prev.BLOGS,
        FAQS: faqs?.data.length ? faqs.data : prev.FAQS,
        loaded: true,
      }));
    })();
  }, []);

  return <SiteDataCtx.Provider value={data}>{children}</SiteDataCtx.Provider>;
}
