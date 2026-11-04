import { useParams, Navigate } from "react-router-dom";
import { useSiteData, PageLoading } from "../components/SiteDataContext";
import { PageHero, Reveal } from "../components/ui";
import "../styles/care-detail.css";

// Diet and medication pages; content is edited in the admin panel (Treatments, page type "Obesity care page")
export default function CareDetail() {
  const { CARE, loaded } = useSiteData();
  const { slug } = useParams();
  const content = CARE.find((c) => c.slug === slug);
  if (!content) return loaded ? <Navigate to="/obesity-treatment-options" replace /> : <PageLoading />;
  const heading = content.heading || content.title;
  return (
    <>
      <PageHero
        eyebrow={heading}
        title={content.heroTitle ? <>{content.heroTitle} {content.heroHighlight && <span className="text-brand-400">{content.heroHighlight}</span>}</> : heading}
        desc={content.heroDesc || content.short}
        image={content.image}
        crumbs={[{ label: "Obesity Treatment Options", to: "/obesity-treatment-options" }, { label: heading }]}
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_60px_-30px_rgba(17,75,44,0.35)]">
              <img src={content.image} alt={heading} className="h-[420px] w-full object-cover sm:h-[520px]" />
            </div>
            {content.noteTitle && (
              <div className="mt-5 rounded-2xl bg-brand-50 p-5">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-700">{content.noteTitle}</div>
                <p className="mt-2 text-sm leading-relaxed text-steel">{content.noteText}</p>
              </div>
            )}
          </Reveal>
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] bg-white p-7 shadow-[0_25px_60px_-35px_rgba(17,75,44,0.3)] sm:p-10">
              <div className="text-sm font-bold uppercase tracking-widest text-brand-600">{heading}</div>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight">{heading}</h2>
              <p className="mt-6 leading-relaxed text-steel">{content.overview}</p>
              {content.benefits.length > 0 ? (
                <>
                  {content.listHeading && <h3 className="mt-8 text-xl font-extrabold">{content.listHeading}</h3>}
                  <ul className="mt-8 space-y-4">
                    {content.benefits.map((point, index) => <li key={point} className="flex items-start gap-4 rounded-2xl bg-mist p-4 leading-relaxed"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">{index + 1}</span><span>{point}</span></li>)}
                  </ul>
                  {!!content.docxContent?.length && (
                    <div className="mt-8 space-y-4 border-t border-ink/10 pt-6">
                      {content.docxContent.map((p) => <p key={p} className="leading-relaxed text-steel">{p}</p>)}
                    </div>
                  )}
                </>
              ) : (
                !!content.docxContent?.length && (
                  <div className="mt-5 space-y-5 leading-relaxed text-steel">
                    {content.docxContent.map((p) => <p key={p}>{p}</p>)}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
