import type { Treatment } from "../data/site";
import { useSiteData } from "./SiteDataContext";

export const treatmentPath = (t: Treatment) => (t.pageType === "care" ? `/obesity-treatment-options/${t.slug}` : `/treatments/${t.slug}`);
export const treatmentLabel = (t: Treatment) => t.menuLabel || t.title;

/** Everything shown under "Obesity Treatment": care pages, then non-surgical, then surgical procedures */
export function useTreatmentOptions() {
  const { CARE, TREATMENTS } = useSiteData();
  const nonSurgical = TREATMENTS.filter((t) => t.category === "Non-Surgical");
  const surgical = TREATMENTS.filter((t) => t.category !== "Non-Surgical");
  return { all: [...CARE, ...nonSurgical, ...surgical], nonSurgery: [...CARE, ...nonSurgical], surgical };
}
