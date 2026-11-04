import {
  Activity, Apple, Award, CalendarCheck, CircleCheck, Clock3, Dumbbell, HeartPulse, Microscope, Phone, Pill, Salad, ShieldCheck, Smile, Sparkles, Star, Stethoscope, Target, ThumbsUp, TrendingDown, Users,
  type LucideIcon,
} from "lucide-react";

// Icon names selectable in the admin panel (keep in sync with SITE_ICONS in the backend admin app.js)
const SITE_ICONS: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  microscope: Microscope,
  users: Users,
  salad: Salad,
  heart: HeartPulse,
  clock: Clock3,
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  activity: Activity,
  award: Award,
  star: Star,
  pill: Pill,
  apple: Apple,
  dumbbell: Dumbbell,
  smile: Smile,
  target: Target,
  "thumbs-up": ThumbsUp,
  calendar: CalendarCheck,
  phone: Phone,
  check: CircleCheck,
  "trending-down": TrendingDown,
};

export const siteIcon = (name?: string): LucideIcon => SITE_ICONS[name || ""] || Sparkles;

// Any YouTube link (watch, youtu.be, shorts, embed) -> embeddable URL
export function youtubeEmbed(url?: string) {
  if (!url) return "";
  const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/)?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : url;
}
