import { IMG } from "./site";

// Default content of the Home and About pages. Edited from the admin panel (Home Page / About Page);
// the API returns the saved version, merged section by section over these defaults.
// `highlight` is the coloured part of a heading, `show: false` hides a section.

const DOCTOR_BIO = [
  "Dr. Mehul Vikani is a surgeon specialising in bariatric and metabolic surgery and the surgical and non-surgical management of obesity.",
  "His professional training includes exposure to bariatric surgery at Chang Gung Memorial Hospital, Taiwan, and AZ Sint-Jan Hospital, Belgium. His clinical practice encompasses the assessment and management of obesity through individualised treatment approaches, including dietary and lifestyle interventions, medical weight management, and bariatric and metabolic surgery.",
  "His surgical practice includes procedures such as sleeve gastrectomy, gastric bypass and revisional bariatric surgery. Treatment options are considered based on each patient's clinical assessment, medical history and individual requirements.",
  "Dr. Vikani's approach emphasises informed decision-making, appropriate treatment selection, patient safety and long-term follow-up in the management of obesity.",
];

export const HOME = {
  hero: {
    slides: [
      { img: IMG.surgeryTeam, eyebrow: "Advanced Bariatric Surgery", title: "Lose the weight.", highlight: "Gain your life.", desc: "Safe, keyhole weight-loss & metabolic surgery by Dr. Mehul Vikani — trusted by 5,000+ patients for life-changing results." },
      { img: IMG.celebrate, eyebrow: "Metabolic & Diabetes Surgery", title: "Freedom from", highlight: "Type-2 Diabetes.", desc: "Evidence-based metabolic procedures that help up to 80% of patients reduce or stop insulin and diabetes medicines." },
      { img: IMG.healthyWall, eyebrow: "Holistic Lifelong Care", title: "A healthier you,", highlight: "every step.", desc: "From your first consult to lifelong follow-up — nutrition, fitness and emotional support under one roof." },
    ],
    primaryButton: "Book Consultation",
    secondaryButton: "Explore Treatments",
    avatars: [{ img: IMG.jeans }, { img: IMG.consult2 }, { img: IMG.healthyWall2 }, { img: IMG.consult5 }],
    rating: "4.9/5",
    ratingText: "from 1,200+ Google reviews",
    resultLabel: "Average Result",
    resultValue: "-35 kg",
    resultNote: "in 12 months",
    metrics: [
      { label: "Diabetes remission", value: 80 },
      { label: "BP normalised", value: 72 },
      { label: "Sleep apnea resolved", value: 85 },
    ],
    badgeTitle: "NABH Accredited",
    badgeText: "Partner Hospitals",
  },
  marquee: {
    show: true,
    items: ["Obesity Treatments", "Diet and Lifestyle", "Weight-Loss Medications & Injections", "Intragastric Balloon", "Sleeve Gastrectomy", "Mini Gastric Bypass", "Roux-en-Y Gastric Bypass"],
  },
  about: {
    show: true,
    image: IMG.doctor,
    image2: IMG.surgeonFocus,
    years: 15,
    yearsLabel: "Years of surgical excellence",
    badgeTitle: "FALS, FMAS, FIAGES",
    badgeText: "Bariatric Fellowship",
    eyebrow: "Dr. Mehul Vikani",
    title: "MS, FIAGES, FMAS, FALS, FMBS",
    subtitle: "Consultant Bariatric & Metabolic Surgeon",
    paragraphs: DOCTOR_BIO,
    registration: "G-43101",
    button: "Know More About Doctor",
    signature: "Mehul Vikani",
  },
  stats: { show: true },
  treatments: {
    show: true,
    eyebrow: "Our Treatments",
    title: "Personalised solutions for lasting weight loss.",
    button: "View All Treatments",
    cards: [
      { title: "Diet and Lifestyle", tag: "Non-Surgical", link: "/obesity-treatment-options/diet-and-lifestyle", image: IMG.salad, short: "Personalised nutrition, activity, sleep and sustainable lifestyle support." },
      { title: "Weight-Loss Medications", tag: "Medical Care", link: "/obesity-treatment-options/weight-loss-medications", image: IMG.healthyWall2, short: "Supervised medication and injection treatment options for weight management." },
      { title: "Intragastric Balloon", tag: "Non-Surgical", link: "/treatments/intragastric-balloon", image: IMG.consult1, short: "A temporary, non-surgical endoscopic option with no cuts or scars." },
      { title: "Sleeve Gastrectomy", tag: "Surgical", link: "/treatments/sleeve-gastrectomy", image: IMG.or1, short: "A laparoscopic procedure that creates a smaller stomach for lasting results." },
      { title: "Mini Gastric Bypass (OAGB)", tag: "Surgical", link: "/treatments/mini-gastric-bypass", image: IMG.or3, short: "A single-connection bypass with strong weight-loss and metabolic effects." },
      { title: "Roux-en-Y Gastric Bypass", tag: "Surgical", link: "/treatments/gastric-bypass", image: IMG.or2, short: "A gold-standard metabolic procedure for selected patients." },
    ],
  },
  whyUs: {
    show: true,
    eyebrow: "Why Choose Us",
    title: "Excellence that you can",
    highlight: "trust.",
    desc: "We combine surgical expertise, cutting-edge technology and heartfelt care to deliver the best possible outcomes — safely.",
    image: IMG.or3,
    videoUrl: "https://www.youtube.com/embed/0YVj6b5mT4Q",
    items: [
      { icon: "shield", title: "Safety First Protocols", desc: "International safety checklists, ICU backup and experienced anaesthesia team." },
      { icon: "microscope", title: "Advanced 4K Laparoscopy", desc: "Latest HD/4K systems and energy devices for precise, bloodless surgery." },
      { icon: "users", title: "Multidisciplinary Team", desc: "Surgeon, physician, dietician, physiotherapist & psychologist together." },
      { icon: "salad", title: "Personalised Nutrition", desc: "Stage-wise Indian diet plans crafted by certified bariatric dieticians." },
      { icon: "heart", title: "Lifelong Follow-up", desc: "Structured reviews, support groups and app-based progress tracking." },
      { icon: "clock", title: "Rapid Recovery (ERAS)", desc: "Enhanced recovery pathways — walk the same day, home in 48 hours." },
    ],
  },
  journey: {
    show: true,
    eyebrow: "Your Journey",
    title: "Five steps to a healthier you",
    desc: "A seamless, well-guided pathway designed around your comfort, safety and long-term success.",
    image: IMG.surgeryTeam2,
    steps: [
      { icon: "stethoscope", title: "Consultation", desc: "Detailed evaluation, BMI analysis and personalised procedure recommendation." },
      { icon: "microscope", title: "Pre-Surgery Prep", desc: "Blood tests, endoscopy, dietician counselling and fitness clearance." },
      { icon: "sparkles", title: "Keyhole Surgery", desc: "Minimally invasive procedure with the highest safety standards." },
      { icon: "heart", title: "Recovery", desc: "Walk the same day; discharge in 2–3 days with a clear diet plan." },
      { icon: "activity", title: "New Life", desc: "Lifelong follow-up, support groups and coaching for lasting success." },
    ],
  },
  bmi: {
    show: true,
    eyebrow: "Quick BMI Check",
    title: "Are you a candidate for",
    highlight: "weight-loss surgery?",
    desc: "Move the sliders to instantly calculate your Body Mass Index using Asian-Indian guidelines.",
    button: "Explore Treatment Options",
  },
  testimonials: { show: true, eyebrow: "Patient Stories", title: "Real people. Real transformations." },
  blog: { show: true, eyebrow: "Health Insights", title: "Latest from our blog", button: "Read All Articles" },
  book: {
    show: true,
    image: IMG.consult4,
    eyebrow: "Book Appointment",
    title: "Take the first step today.",
    desc: "Our patient coordinator will guide you through every detail — from eligibility and insurance to scheduling your consultation.",
    highlights: [
      { value: "2 hrs", label: "Callback time" },
      { value: "Free", label: "BMI assessment" },
      { value: "EMI", label: "Options available" },
    ],
  },
};

export const ABOUT = {
  hero: { eyebrow: "About the Doctor", title: "Meet the surgeon behind your", highlight: "transformation.", image: IMG.surgeons },
  doctor: {
    image: IMG.doctor,
    eyebrow: "Dr. Mehul Vikani",
    title: "MS, FIAGES, FMAS, FALS, FMBS",
    subtitle: "Consultant Bariatric & Metabolic Surgeon",
    paragraphs: DOCTOR_BIO,
    registration: "G-43101",
  },
};

export const ACHIEVEMENTS = {
  hero: {
    eyebrow: "Achievements",
    title: "Experience built around",
    highlight: "safe outcomes.",
    desc: "A focused bariatric and metabolic surgery practice grounded in training, assessment and long-term care.",
    image: IMG.surgeons,
  },
  awards: {
    eyebrow: "Recognition",
    title: "Awards and appreciation",
    desc: "Recognition for Dr. Mehul Vikani's contribution to bariatric surgery and patient care.",
    items: [
      { image: "/images/achievement-ossi-certificate.png", caption: "OSSI Young OSSI of the Year certificate awarded to Dr. Mehul Vikani" },
      { image: "/images/achievement-siliconindia-certificate.png", caption: "Siliconindia Top 10 Prominent Bariatric Surgeons 2025 certificate" },
    ],
  },
};

export const RESULTS = {
  hero: {
    eyebrow: "Results",
    title: "Progress that supports a",
    highlight: "healthier life.",
    desc: "Every result is individual and supported by long-term medical and nutritional follow-up.",
    image: IMG.celebrate,
  },
  points: {
    show: true,
    eyebrow: "What We Track",
    title: "Progress beyond the weighing scale",
    items: [
      { icon: "trending-down", title: "Weight management", desc: "Outcomes vary by procedure, health, adherence and long-term follow-up." },
      { icon: "activity", title: "Metabolic improvement", desc: "Bariatric and metabolic surgery may improve blood glucose control and obesity-related conditions." },
      { icon: "heart", title: "Health and confidence", desc: "Structured nutrition, activity and support help patients build sustainable routines." },
      { icon: "shield", title: "Safe, informed decisions", desc: "Expected benefits, risks and limitations are discussed during individual assessment." },
    ],
  },
  stats: { show: true },
  voices: { show: true, eyebrow: "Patient Voices", title: "Every journey is personal", count: 3 },
};

export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Contact",
    title: "Start your journey with",
    highlight: "our team.",
    desc: "Reach out to schedule a consultation or ask us anything about your weight-loss journey.",
    image: IMG.consult5,
  },
  cards: { callTitle: "Call Us", emailTitle: "Email Us", visitTitle: "Visit Us", hoursTitle: "OPD Hours" },
  form: { eyebrow: "Book Appointment", title: "Send us a message", desc: "We typically respond within 2 working hours." },
  map: { show: true, query: "" },
  emergency: { show: true, desc: "For post-operative emergencies, our team is available round the clock." },
};

export type HomeContent = typeof HOME;
export type AboutContent = typeof ABOUT;
export const PAGES = { home: HOME, about: ABOUT, achievements: ACHIEVEMENTS, results: RESULTS, contact: CONTACT_PAGE };
export type PagesContent = typeof PAGES;
