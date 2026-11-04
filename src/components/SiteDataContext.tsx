import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BLOGS, CONTACT, FAQS, STATS, TESTIMONIALS, TREATMENTS, type Treatment } from "../data/site";
import { PAGES, type PagesContent } from "../data/pages";
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
  /** Home / About page text and images, edited in the admin panel */
  PAGES: PagesContent;
  /** true once the API request has finished (successfully or not) */
  loaded: boolean;
};

// Bundled content renders instantly; anything managed in the admin panel replaces it once loaded.
const FALLBACK: SiteData = { CONTACT, STATS, TREATMENTS, TESTIMONIALS, BLOGS, FAQS, PAGES, loaded: false };

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

// Points every uploaded image in page content ("/uploads/...") at the backend
const IMAGE_KEYS = new Set(["img", "image", "image2"]);
const resolvePageAssets = <T,>(value: T, key = ""): T => {
  if (Array.isArray(value)) return value.map((v) => resolvePageAssets(v)) as T;
  if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolvePageAssets(v, k)])) as T;
  return (IMAGE_KEYS.has(key) && typeof value === "string" ? assetUrl(value) : value) as T;
};

// Saved sections are merged over the bundled defaults, section by section
const mergePage = <T extends Record<string, object>>(fallback: T, saved?: Partial<T> | null): T =>
  saved
    ? (Object.fromEntries(Object.entries(fallback).map(([k, def]) => [k, { ...def, ...resolvePageAssets(saved[k] || {}) }])) as T)
    : fallback;

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
      const pageKeys = Object.keys(PAGES) as (keyof PagesContent)[];
      const [settings, treatments, testimonials, blogs, faqs, ...pages] = await Promise.all([
        load<{ data: { contact?: typeof CONTACT; stats?: typeof STATS } }>("/settings"),
        load<List<Treatment>>("/treatments?limit=100"),
        load<List<(typeof TESTIMONIALS)[number]>>("/testimonials?limit=100"),
        load<List<BlogPost>>("/blogs?limit=100"),
        load<List<(typeof FAQS)[number]>>("/faqs?limit=100"),
        ...pageKeys.map((key) => load<{ data: Record<string, object> }>(`/pages/${key}`)),
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
        PAGES: Object.fromEntries(pageKeys.map((key, k) => [key, mergePage(prev.PAGES[key], pages[k]?.data)])) as PagesContent,
        loaded: true,
      }));
    })();
  }, []);

  return <SiteDataCtx.Provider value={data}>{children}</SiteDataCtx.Provider>;
}
