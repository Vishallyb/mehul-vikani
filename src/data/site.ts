export const CONTACT = {
  phone: "+91 98750 98484",
  phoneRaw: "+919875098484",
  whatsapp: "919875098484",
  email: "contact@drmvobesitycentre.com",
  address: "Mahapujadham Chowk, 150 Ft. Ring Road, Near Balaji Hall, Dholakiya School Road, Rajkot - 360004",
  hours: "Mon – Sat : 10:00 AM – 7:00 PM",
  emergency: "24×7 Emergency Support",
};

const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMG = {
  hospital: "/images/hospital-img.webp",
  hospital1: "/images/hospital-img1.webp",
  hospital2: "/images/hospital-img2.webp",
  hospital3: "/images/hospital-img3.webp",
  hospital4: "/images/hospital-img4.webp",
  doctor: "/images/doctor.jpeg",
  surgeonFocus: px(39299840, 900, 1200),
  surgeryTeam: px(33907383, 1600, 1000),
  surgeryTeam2: px(33916261, 1600, 1000),
  or1: px(8853183, 1600, 1000),
  or2: px(7583367, 1600, 1000),
  or3: px(13697927, 1600, 1000),
  celebrate: px(35914124, 1600, 1000),
  surgeons: px(11759659, 900, 1200),
  surgeryVert: px(11674664, 900, 1200),
  jeans: px(7991921, 900, 1200),
  jeans2: px(7991919, 900, 1200),
  healthyWall: px(6669028, 1400, 900),
  healthyWall2: px(6669024, 900, 1200),
  salad: px(5622195, 1400, 900),
  consult1: px(7659869, 1400, 900),
  consult2: px(8460125, 1400, 900),
  consult3: px(39192334, 1400, 900),
  consult4: px(7579823, 1400, 900),
  consult5: px(8460095, 1400, 900),
  food1: px(842545, 1400, 900),
  food2: px(1591226, 1400, 900),
  food3: px(29138860, 1400, 900),
  Bariatric_Surgery: "/images/Bariatric_Surgery.jpg",
  b2: "/images/b2.webp",
  b3: "/images/b3.webp",
  b4: "/images/b4.webp",
  b9: "/images/b9.webp",
  b10: "/images/b10.jpg",
  b11: "/images/b11.webp",
  b12: "/images/b12.png",
  b5: "/images/b5.webp",
  b6: "/images/b6.jpg",
  b7: "/images/b7.jpg",
  b8: "/images/b8.webp",
};

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  tag: string;
  category?: "Surgical" | "Non-Surgical";
  image: string;
  duration: string;
  stay: string;
  loss: string;
  overview: string;
  benefits: string[];
  candidates: string[];
  steps: { t: string; d: string }[];
  docxContent?: string[];
  /** "care" pages (diet, medication) live under /obesity-treatment-options; the rest under /treatments */
  pageType?: "procedure" | "care";
  menuLabel?: string;
  heroTitle?: string;
  heroHighlight?: string;
  heroDesc?: string;
  heading?: string;
  listHeading?: string;
  noteTitle?: string;
  noteText?: string;
};

// Obesity care pages (diet, medication): overview = intro, benefits = list, docxContent = paragraphs after it
export const CARE: Treatment[] = [
  {
    slug: "diet-and-lifestyle",
    pageType: "care",
    title: "Diet and Lifestyle",
    heading: "Diet and Lifestyle Management",
    short: "Nutrition, activity, sleep and sustainable lifestyle support.",
    tag: "Non-Surgical",
    category: "Non-Surgical",
    image: IMG.salad,
    heroTitle: "Build healthier habits for",
    heroHighlight: "lasting change.",
    heroDesc: "Personalised diet and lifestyle support for sustainable weight management.",
    noteTitle: "Lifelong support",
    noteText: "Your plan is reviewed and adapted as your health and lifestyle needs change.",
    overview: "Obesity is a chronic health condition influenced by multiple factors, including nutrition, physical activity, sleep, genetics and metabolism. Diet and lifestyle management are important components of its treatment.",
    listHeading: "An individualised plan may include:",
    benefits: ["Balanced nutrition with adequate protein and appropriate portion sizes.", "Regular physical activity, including aerobic and strength-based exercises.", "Healthy sleep habits and stress management.", "Behavioural changes to support sustainable eating patterns."],
    docxContent: [
      "The plan should be tailored to each individual's health, lifestyle and nutritional requirements. Some individuals may require additional treatment, such as medication, endoscopic procedures or bariatric surgery.",
      "Long-term follow-up helps monitor progress and modify the treatment plan when required.",
    ],
    duration: "",
    stay: "",
    loss: "",
    candidates: [],
    steps: [],
  },
  {
    slug: "weight-loss-medications",
    pageType: "care",
    title: "Weight-Loss Medications & Injections",
    menuLabel: "Weight-Loss Medications & Injections",
    heading: "Weight-Loss Medications and Injections",
    short: "Supervised medication and injection treatment options.",
    tag: "Medical Care",
    category: "Non-Surgical",
    image: IMG.healthyWall2,
    heroTitle: "Medical support for",
    heroHighlight: "sustainable weight management.",
    heroDesc: "Medical treatment options to support clinically supervised weight management.",
    noteTitle: "Medical supervision",
    noteText: "Treatment decisions require individual assessment, monitoring and follow-up.",
    overview: "Prescription medications may be considered as part of obesity management when lifestyle measures alone are insufficient or when additional medical treatment is clinically indicated.",
    benefits: [],
    docxContent: [
      "Some medicines act on hormonal pathways involved in appetite regulation, fullness and blood glucose control. Examples include semaglutide, which acts on the GLP-1 pathway, and tirzepatide, which acts on both GIP and GLP-1 pathways.",
      "Treatment requires an individual medical assessment and regular monitoring. Common side effects may include nausea, vomiting, diarrhoea, constipation and abdominal discomfort. Certain medicines also have specific contraindications and precautions.",
      "Medication should only be used under medical supervision, alongside appropriate nutrition, physical activity and follow-up. Weight regain may occur after treatment is stopped.",
    ],
    duration: "",
    stay: "",
    loss: "",
    candidates: [],
    steps: [],
  },
];

export const TREATMENTS: Treatment[] = [
  {
    slug: "sleeve-gastrectomy",
    heroTitle: "A proven surgical path to",
    heroHighlight: "lasting change.",
    title: "Sleeve Gastrectomy",
    short: "A bariatric and metabolic surgical procedure that creates a narrow, sleeve-shaped stomach.",
    tag: "Most Popular",
    image: IMG.or1,
    duration: "60–90 mins",
    stay: "2–3 days",
    loss: "60–70% excess weight",
    overview:
      "Sleeve gastrectomy is a bariatric and metabolic surgical procedure in which a large portion of the stomach is removed, leaving a narrow, sleeve-shaped stomach.",
    docxContent: [
      "Sleeve gastrectomy is a bariatric and metabolic surgical procedure in which a large portion of the stomach is removed, leaving a narrow, sleeve-shaped stomach.",
      "The reduced stomach capacity helps limit food intake. Changes in gut hormones may also influence hunger and feelings of fullness. The procedure is generally performed laparoscopically and does not involve bypassing the small intestine.",
      "It may be considered for individuals who meet the clinical criteria for bariatric surgery. Potential benefits include weight reduction and improvement in certain obesity-related conditions, including type 2 diabetes.",
      "As with any major operation, risks include bleeding, infection, staple-line leakage and blood clots. Longer-term considerations include acid reflux, nutritional deficiencies and possible weight regain.",
      "Sleeve gastrectomy is permanent and requires long-term nutritional monitoring and medical follow-up.",
    ],
    benefits: [
      "Significant & sustained weight loss",
      "Reduced hunger hormone (ghrelin)",
      "No foreign device or re-routing of intestine",
      "Improves diabetes, BP, sleep apnea & joint pain",
      "Minimal scars with keyhole technique",
      "Return to work in 7–10 days",
    ],
    candidates: ["BMI ≥ 37.5 kg/m²", "BMI ≥ 32.5 with diabetes, BP or sleep apnea", "Failed diet & lifestyle attempts", "Age 18–65 years"],
    steps: [
      { t: "Pre-op Evaluation", d: "Blood tests, endoscopy, dietician & anaesthesia consult." },
      { t: "Keyhole Surgery", d: "Stomach is reshaped via 4–5 small incisions under general anaesthesia." },
      { t: "Early Mobilisation", d: "Walk within hours, liquids from day one, discharge in 2–3 days." },
      { t: "Lifelong Follow-up", d: "Structured diet stages, supplements and regular reviews." },
    ],
  },
  {
    slug: "gastric-bypass",
    heroTitle: "A proven approach to weight and",
    heroHighlight: "metabolic health.",
    title: "Roux-en-Y Gastric Bypass",
    short: "A bariatric and metabolic procedure that creates a small stomach pouch and a Y-shaped intestinal arrangement.",
    tag: "Gold Standard",
    image: IMG.or2,
    duration: "2–2.5 hrs",
    stay: "3 days",
    loss: "70–80% excess weight",
    overview:
      "Roux-en-Y Gastric Bypass (RYGB) is a bariatric and metabolic surgical procedure in which a small stomach pouch is created and connected to the small intestine. A second intestinal connection forms a characteristic Y-shaped arrangement.",
    docxContent: [
      "Roux-en-Y Gastric Bypass (RYGB) is a bariatric and metabolic surgical procedure in which a small stomach pouch is created and connected to the small intestine. A second intestinal connection forms a characteristic Y-shaped arrangement.",
      "The procedure reduces food intake and changes the pathway of food through the digestive system, influencing nutrient absorption and metabolic signalling.",
      "It may be considered for selected individuals with obesity and associated metabolic conditions. It may also be considered in certain patients with significant gastro-oesophageal reflux, following individual assessment.",
      "Potential complications include bleeding, leakage, bowel obstruction, marginal ulcers, dumping syndrome and nutritional deficiencies. Lifelong vitamin and mineral supplementation, regular blood tests and medical follow-up are required.",
    ],
    benefits: ["Highest diabetes remission rates", "Cures severe acid reflux (GERD)", "Durable long-term weight loss", "Improves cholesterol & BP", "Proven over 50+ years", "Better quality of life"],
    candidates: ["BMI ≥ 40 kg/m²", "Uncontrolled type-2 diabetes", "Severe GERD with obesity", "Patients with sweet-eating habits"],
    steps: [
      { t: "Metabolic Work-up", d: "Detailed hormonal, cardiac and nutritional evaluation." },
      { t: "Pouch Creation", d: "A 30 ml stomach pouch is created laparoscopically." },
      { t: "Intestinal Bypass", d: "The pouch is joined to a limb of small intestine." },
      { t: "Recovery & Support", d: "Vitamin plan, dietician coaching and diabetes monitoring." },
    ],
  },
  {
    slug: "mini-gastric-bypass",
    heroTitle: "Powerful metabolic treatment with",
    heroHighlight: "one connection.",
    menuLabel: "Mini Gastric Bypass",
    title: "Mini Gastric Bypass (One Anastomosis Gastric Bypass)",
    short: "A bariatric and metabolic procedure using a long, narrow stomach pouch and a single surgical connection.",
    tag: "Advanced",
    image: IMG.or3,
    duration: "75–100 mins",
    stay: "2–3 days",
    loss: "70–85% excess weight",
    overview:
      "Mini Gastric Bypass, also known as One Anastomosis Gastric Bypass (OAGB), is a bariatric and metabolic procedure involving the creation of a long, narrow stomach pouch connected to a loop of the small intestine through a single surgical connection.",
    docxContent: [
      "Mini Gastric Bypass, also known as One Anastomosis Gastric Bypass (OAGB), is a bariatric and metabolic procedure involving the creation of a long, narrow stomach pouch connected to a loop of the small intestine through a single surgical connection.",
      "It works through reduced food intake, changes in gut hormone signalling and altered nutrient absorption. The procedure is generally performed laparoscopically.",
      "It may be considered for selected individuals with obesity and associated metabolic conditions following a comprehensive clinical assessment.",
      "Potential risks include bleeding, leakage, nutritional deficiencies, marginal ulcers, dumping syndrome and bile reflux. Lifelong vitamin and mineral supplementation, nutritional monitoring and medical follow-up are important after surgery.",
    ],
    benefits: ["Single joint – shorter surgery", "Excellent for super-obesity", "Strong metabolic effect", "Reversible & revisable", "Lower complication profile", "Fast recovery"],
    candidates: ["BMI ≥ 45 kg/m²", "Long-standing type-2 diabetes", "Failed previous sleeve or band", "High-volume eaters"],
    steps: [
      { t: "Assessment", d: "Endoscopy & nutritional screening." },
      { t: "Gastric Tube", d: "A long narrow pouch is fashioned." },
      { t: "Single Anastomosis", d: "Joined to intestine ~150–200 cm downstream." },
      { t: "Follow-up", d: "Supplements & periodic blood tests." },
    ],
  },
  {
    slug: "intragastric-balloon",
    heroTitle: "A temporary step toward",
    heroHighlight: "meaningful progress.",
    title: "Intragastric Balloon",
    short: "A temporary, non-surgical treatment option for selected individuals with obesity.",
    tag: "Non-Surgical",
    image: IMG.consult1,
    duration: "20–30 mins",
    stay: "Day care",
    loss: "10–15% body weight",
    overview:
      "An intragastric balloon is a temporary, non-surgical treatment option for selected individuals with obesity. A balloon is placed inside the stomach to occupy space and increase feelings of fullness, which may help reduce food intake.",
    docxContent: [
      "An intragastric balloon is a temporary, non-surgical treatment option for selected individuals with obesity. A balloon is placed inside the stomach to occupy space and increase feelings of fullness, which may help reduce food intake.",
      "Placement methods and treatment duration vary according to the balloon system. Many fluid-filled balloons are designed for approximately six months, while other devices may have different approved durations.",
      "Nausea, vomiting, abdominal discomfort and reflux may occur, particularly during the initial period. Less common but serious complications can include balloon migration, obstruction, bleeding or perforation.",
      "The balloon does not permanently change stomach anatomy. Dietary guidance, lifestyle modification and regular follow-up are essential during treatment and after removal, as weight regain may occur.",
    ],
    benefits: ["No incisions or scars", "Day-care procedure", "Temporary & removable", "Kick-starts lifestyle change", "Bridge to safer surgery", "Quick return to routine"],
    candidates: ["BMI 27–35 kg/m²", "Not keen on surgery", "Pre-surgery weight reduction", "Fatty liver patients"],
    steps: [
      { t: "Consultation", d: "Eligibility check & counselling." },
      { t: "Endoscopic Placement", d: "Under light sedation, 20 minutes." },
      { t: "Guided Diet", d: "Monthly dietician & coach support." },
      { t: "Removal", d: "Endoscopic removal at 6–12 months." },
    ],
  },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Successful Surgeries" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 80, suffix: "%", label: "Diabetes Remission" },
];

export const TESTIMONIALS = [
  { name: "Priya Shah", age: 34, lost: "42 kg", proc: "Sleeve Gastrectomy", img: IMG.jeans, text: "I had tried every diet for 10 years, visited several clinics and struggled to find a plan I could sustain. Dr. Vikani and his team gave me my life back. I lost 42 kg in 11 months, my PCOS is under control, and I finally feel confident and energetic again. The care before and after surgery was outstanding, thoughtful and genuinely personalised." },
  { name: "Rakesh Patel", age: 48, lost: "38 kg", proc: "Gastric Bypass", img: IMG.consult2, text: "I was on insulin for 8 years. Three months after surgery I stopped all diabetes medicines. Dr. Vikani explained everything patiently — I felt safe at every step." },
  { name: "Neha Desai", age: 29, lost: "31 kg", proc: "Mini Gastric Bypass", img: IMG.healthyWall2, text: "The hospital stay was just two days, and I was walking the same evening. The dietician follow-ups kept me on track. Best decision of my life!" },
  { name: "Imran Sheikh", age: 41, lost: "55 kg", proc: "Sleeve Gastrectomy", img: IMG.consult5, text: "My sleep apnea and knee pain are gone. I can play with my kids again. Huge thanks to Dr. Mehul Vikani — truly a world-class surgeon with a kind heart." },
  { name: "Kavita Joshi", age: 52, lost: "27 kg", proc: "Metabolic Surgery", img: IMG.salad, text: "My HbA1c went from 9.8 to 5.9. The team's guidance on food and exercise was so practical. I recommend Dr. Vikani to everyone struggling with weight and sugar." },
  { name: "S**** P*****", age: 37, lost: "35 kg", proc: "Sleeve Gastrectomy", img: IMG.jeans2, text: "From my first consultation to every follow-up, the team made me feel supported and informed. Recovery was smoother than I expected, and I now have the energy to enjoy everyday life again." },
  { name: "A**** M****", age: 44, lost: "29 kg", proc: "Gastric Bypass", img: IMG.consult3, text: "Dr. Vikani listened to all my concerns and explained the treatment clearly. The nursing staff and dietician were kind, responsive and always available when I needed guidance." },
  { name: "D**** R****", age: 39, lost: "41 kg", proc: "Mini Gastric Bypass", img: IMG.healthyWall, text: "I can climb stairs without getting tired and my confidence has completely changed. The regular follow-ups helped me build healthy habits that I can maintain long term." },
  { name: "N**** P*****", age: 46, lost: "33 kg", proc: "Sleeve Gastrectomy", img: IMG.food1, text: "The entire process was professional and reassuring. I received practical advice at every stage, and the team's care after surgery gave me confidence throughout my transformation." },
  { name: "K**** S*****", age: 31, lost: "24 kg", proc: "Metabolic Surgery", img: IMG.healthyWall2, text: "Choosing Dr. Vikani was one of the best decisions I have made for my health. My sugar levels are much better, I feel active again, and the follow-up support has been excellent." },
];

export const BLOGS = [
  {
    slug: "how-bariatric-surgery-helps-with-diabetes-blood-pressure-and-joint-pain",
    title: "How Bariatric Surgery Helps with Diabetes, Blood Pressure, and Joint Pain",
    cat: "Lifestyle & Outcomes",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b8,
    excerpt: "For most patients, the primary reason they seek bariatric surgery is weight loss.",
    content: `<p>For most patients, the primary reason they seek bariatric surgery is weight loss. But for many, the most life-changing outcome is what happens to their other health conditions.</p>
      <p>Obesity rarely exists alone. It travels with companions — diabetes, high blood pressure, joint pain, cholesterol problems, breathing difficulties. This article explains how bariatric surgery addresses not just weight, but the full picture of health.</p>
      <h2>Type 2 Diabetes: The Most Dramatic Improvement</h2>
      <p>The relationship between bariatric surgery and Type 2 diabetes is one of the most compelling in all of medicine. Studies show that 60 to 80 percent of patients with Type 2 diabetes experience complete remission after gastric bypass — meaning normal blood sugar levels without medication.</p>
      <p>What makes this extraordinary is the speed. Many patients see blood sugar levels improve within days of surgery — long before significant weight loss has occurred. This points to powerful hormonal changes, particularly involving insulin sensitivity and gut hormones, triggered by the procedure itself.</p>
      <p>We have seen this in patients at our own centre — people who came in managing multiple diabetes medications leaving with dramatically reduced or eliminated prescriptions within weeks.</p>
      <h2>High Blood Pressure</h2>
      <p>Obesity places significant strain on the cardiovascular system. The excess weight forces the heart to work harder, and fatty deposits affect blood vessel health. After bariatric surgery and meaningful weight loss, blood pressure typically improves significantly.</p>
      <p>Many patients are able to reduce or stop their blood pressure medications within the first year following surgery, under their cardiologist's guidance.</p>
      <h2>Joint Pain and Mobility</h2>
      <p>Every kilogram of excess body weight places approximately four kilograms of additional load on the knees. For a person carrying 30 extra kilograms, that is 120 kilograms of extra stress on every step.</p>
      <p>The relief that patients experience in their knees, hips, and lower back after significant weight loss is often described as one of the most immediate and noticeable improvements. Many patients who came to us needing support to walk report returning to normal activity — even exercise — within months.</p>
      <h2>Sleep Apnoea and Breathing</h2>
      <p>Excess weight around the neck and chest is one of the leading causes of obstructive sleep apnoea — where breathing repeatedly stops during sleep. This condition increases the risk of heart disease, stroke, and chronic fatigue.</p>
      <p>After bariatric surgery and weight loss, sleep apnoea improves dramatically in most patients. Many are able to discontinue CPAP machines within 6 to 12 months.</p>
      <h2>Cholesterol and Cardiac Risk</h2>
      <p>Elevated LDL cholesterol and triglycerides are common in patients with obesity. Weight loss following bariatric surgery consistently improves lipid profiles, reducing the long-term risk of heart attack and stroke.</p>
      <h2>A Complete Health Transformation</h2>
      <p>Bariatric surgery is, in the truest sense, metabolic surgery. It does not just reduce weight — it resets the hormonal and metabolic environment of the body. The result is not just a lighter person. It is a healthier one.</p>
      <p>If you or a family member is living with obesity alongside any of these conditions, a consultation with our team in Rajkot could be the most important appointment you make this year.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "For most patients, the primary reason they seek bariatric surgery is weight loss. But for many, the most life-changing outcome is what happens to their other health conditions.",
      "Obesity rarely exists alone. It travels with companions — diabetes, high blood pressure, joint pain, cholesterol problems, breathing difficulties. This article explains how bariatric surgery addresses not just weight, but the full picture of health.",
      "The relationship between bariatric surgery and Type 2 diabetes is one of the most compelling in all of medicine. Studies show that 60 to 80 percent of patients with Type 2 diabetes experience complete remission after gastric bypass — meaning normal blood sugar levels without medication.",
      "What makes this extraordinary is the speed. Many patients see blood sugar levels improve within days of surgery — long before significant weight loss has occurred. This points to powerful hormonal changes, particularly involving insulin sensitivity and gut hormones, triggered by the procedure itself.",
      "We have seen this in patients at our own centre — people who came in managing multiple diabetes medications leaving with dramatically reduced or eliminated prescriptions within weeks.",
      "Obesity places significant strain on the cardiovascular system. The excess weight forces the heart to work harder, and fatty deposits affect blood vessel health. After bariatric surgery and meaningful weight loss, blood pressure typically improves significantly.",
      "Many patients are able to reduce or stop their blood pressure medications within the first year following surgery, under their cardiologist's guidance.",
      "Every kilogram of excess body weight places approximately four kilograms of additional load on the knees. For a person carrying 30 extra kilograms, that is 120 kilograms of extra stress on every step.",
      "The relief that patients experience in their knees, hips, and lower back after significant weight loss is often described as one of the most immediate and noticeable improvements. Many patients who came to us needing support to walk report returning to normal activity — even exercise — within months.",
      "Excess weight around the neck and chest is one of the leading causes of obstructive sleep apnoea — where breathing repeatedly stops during sleep. This condition increases the risk of heart disease, stroke, and chronic fatigue.",
      "After bariatric surgery and weight loss, sleep apnoea improves dramatically in most patients. Many are able to discontinue CPAP machines within 6 to 12 months.",
      "Elevated LDL cholesterol and triglycerides are common in patients with obesity. Weight loss following bariatric surgery consistently improves lipid profiles, reducing the long-term risk of heart attack and stroke.",
      "Bariatric surgery is, in the truest sense, metabolic surgery. It does not just reduce weight — it resets the hormonal and metabolic environment of the body. The result is not just a lighter person. It is a healthier one.",
      "If you or a family member is living with obesity alongside any of these conditions, a consultation with our team in Rajkot could be the most important appointment you make this year.",
      "Ready to take the first step? Call or WhatsApp Dr. Mehul Vikani's team today: +91 98750 98484 | CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre.",
    ],
  },
  {
    slug: "life-after-bariatric-surgery-diet-habits-and-what-changes",
    title: "Life After Bariatric Surgery: Diet, Habits, and What Changes",
    cat: "Lifestyle & Outcomes",
    date: "06 Nov 2026",
    read: "6 min",
    img: IMG.b7,
    excerpt: "Bariatric surgery is not a shortcut. It is the beginning of a new chapter.",
    content: `<p>Bariatric surgery is not a shortcut. It is the beginning of a new chapter. The surgery creates the conditions for dramatic weight loss — but what you do after surgery determines how transformative your results truly are.</p>
      <p>Patients often tell us that surgery changed their relationship with food entirely. This article gives you an honest picture of what life looks like after bariatric surgery — the changes, the challenges, and the remarkable rewards.</p>
      <h2>The Diet Timeline After Surgery</h2>
      <p>Your diet after surgery progresses in stages to give your stomach time to heal.</p>
      <ul>
        <li>Weeks 1 to 2: Clear liquids only — water, thin soups, diluted juices</li>
        <li>Weeks 3 to 4: Full liquids — protein shakes, smooth yogurt, blended soups</li>
        <li>Weeks 5 to 6: Soft, pureed foods — soft scrambled eggs, mashed lentils, soft paneer</li>
        <li>From Week 7 onwards: Gradual introduction of solid foods, guided by your dietician</li>
      </ul>
      <p>By Month 3, most patients are eating regular foods — just in smaller quantities and with a renewed awareness of what they are eating.</p>
      <h2>What to Eat — and What to Avoid</h2>
      <p>Protein becomes the foundation of your diet post-surgery. It preserves muscle mass, supports healing, and keeps hunger at bay. Every meal should lead with protein — dal, paneer, eggs, chicken, fish, Greek yogurt.</p>
      <p>Foods to limit or avoid include high-sugar foods and drinks, carbonated beverages, fried or greasy foods, and foods that are very dry or tough in texture — at least in the early months.</p>
      <h2>The Habit Changes That Matter Most</h2>
      <ul>
        <li>Eat slowly and chew thoroughly — your new stomach cannot handle food quickly</li>
        <li>Stop eating when you feel full — the sensation comes faster now</li>
        <li>Drink fluids between meals, not during — liquids fill your stomach and reduce nutrient intake from food</li>
        <li>Take your vitamins and supplements daily — this is non-negotiable after surgery</li>
        <li>Move regularly — even 20 to 30 minutes of walking daily makes a significant difference</li>
      </ul>
      <h2>What Actually Changes in Your Life</h2>
      <p>Beyond the physical, patients consistently report deeper changes. Energy returns — often dramatically. Activities that were once exhausting become possible again. Knee pain reduces. Sleep improves. Diabetes medications get reduced or eliminated.</p>
      <p>Many patients describe a mental shift too — a renewed confidence, better self-image, and a genuine enjoyment of being active. These are the changes that make bariatric surgery genuinely life-changing.</p>
      <h2>The Support That Keeps You on Track</h2>
      <p>At our centre in Rajkot, we offer lifetime free post-surgery support. Our team of dieticians, counsellors, and Dr. Vikani himself are available to guide you at every stage — whether it is a question about what to eat, a concern about symptoms, or simply reassurance when you need it.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Bariatric surgery is not a shortcut. It is the beginning of a new chapter.",
    ],
  },
  {
    slug: "intragastric-balloon-non-surgical-weight-loss",
    title: "Intragastric Balloon: A Non-Surgical Option for Weight Loss",
    cat: "Procedure Deep-Dive",
    date: "06 Nov 2026",
    read: "6 min",
    img: IMG.b6,
    excerpt: "Not everyone who needs medical help losing weight is ready for surgery — or even needs it.",
    content: `<p>Not everyone who needs medical help losing weight is ready for surgery — or even needs it. The intragastric balloon is an effective, non-surgical option that helps patients lose weight without going under the knife.</p>
      <p>If the idea of surgery feels too big a step right now, this article will help you understand whether the intragastric balloon could be the right starting point for your weight loss journey.</p>
      <h2>What Is an Intragastric Balloon?</h2>
      <p>An intragastric balloon is a soft, expandable balloon that is placed inside your stomach through a simple endoscopic procedure — no incisions, no general anaesthesia required. Once inside, it is filled with saline solution, taking up space in your stomach.</p>
      <p>The result: you feel fuller faster, eat smaller portions, and lose weight. The balloon is temporary and is removed after 6 months.</p>
      <h2>How Is It Placed?</h2>
      <p>The procedure takes about 20 to 30 minutes and is done under mild sedation. A thin, flexible tube (endoscope) is passed through the mouth into the stomach. The deflated balloon is guided in and then filled with sterile saline until it is roughly the size of a grapefruit.</p>
      <p>Most patients go home on the same day. There is no surgery, no stitches, and no hospital stay required.</p>
      <h2>Who Is It For?</h2>
      <ul>
        <li>Patients with a BMI of 27 to 40 who are not yet candidates for surgery</li>
        <li>Patients who want to lose weight before a surgical procedure to reduce anaesthesia risk</li>
        <li>Patients who prefer to try a non-surgical route before committing to a permanent change</li>
        <li>Patients who need to lose weight quickly for a specific health or life goal</li>
      </ul>
      <h2>What Results Can You Expect?</h2>
      <p>On average, patients lose between 10 to 15 kilograms during the 6 months the balloon is in place — though results vary depending on diet and lifestyle changes made alongside the procedure.</p>
      <p>The balloon is most effective when combined with dietary guidance and behavioural support, which is why our programme includes dietician counselling throughout.</p>
      <h2>What Happens After the Balloon Is Removed?</h2>
      <p>After 6 months, the balloon is removed using the same endoscopic technique. The key to long-term success is the habits built during those 6 months. Patients who use this period to genuinely change their eating patterns tend to maintain their results much better.</p>
      <p>For some patients, the balloon serves as a bridge to surgery. For others, it is the only intervention they need.</p>
      <h2>Side Effects to Know About</h2>
      <p>In the first few days after placement, some patients experience nausea, cramping, or discomfort as the body adjusts to the balloon's presence. These symptoms are temporary and manageable with medication. Serious complications are rare.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Not everyone who needs medical help losing weight is ready for surgery — or even needs it. The intragastric balloon is an effective, non-surgical option that helps patients lose weight without going under the knife.",
    ],
  },
  {
    slug: "mini-gastric-bypass-explained-how-it-works-and-who-it-is-for",
    title: "Mini Gastric Bypass Explained: How It Works and Who It Is For",
    cat: "Procedure Deep-Dive",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b5,
    excerpt: "Mini gastric bypass is one of the most effective weight loss procedures available today — and yet many patients have never heard of it.",
    content: `<p>Mini gastric bypass is one of the most effective weight loss procedures available today — and yet many patients have never heard of it. If you are exploring bariatric surgery options, this article will give you a clear and honest overview of what mini gastric bypass involves, how it compares to other procedures, and who it is best suited for.</p>
      <h2>What Is Mini Gastric Bypass?</h2>
      <p>Mini gastric bypass (MGB), also called single anastomosis gastric bypass (SAGB), is a simplified version of the traditional Roux-en-Y gastric bypass. It involves creating a small, tubular stomach pouch and connecting it directly to a loop of the small intestine — bypassing a portion of the digestive tract.</p>
      <p>The term 'mini' does not mean less effective. It refers to the fact that the procedure involves one surgical connection (anastomosis) instead of two, making it technically simpler and faster to perform while delivering comparable results.</p>
      <h2>How Does It Cause Weight Loss?</h2>
      <ul>
        <li><strong>Restriction:</strong> The smaller stomach pouch means you feel full with much less food</li>
        <li><strong>Malabsorption:</strong> By bypassing part of the small intestine, fewer calories are absorbed</li>
        <li><strong>Hormonal changes:</strong> Like all bypass procedures, it produces powerful hormonal shifts that reduce hunger and significantly improve metabolic conditions like diabetes</li>
      </ul>
      <h2>Who Is It Best Suited For?</h2>
      <p>Mini gastric bypass is particularly well suited for patients with a BMI above 40, patients with Type 2 diabetes (it has excellent remission rates), and patients who have had limited results with sleeve gastrectomy or are looking for a revision procedure.</p>
      <p>It is also considered for patients who need significant, sustained weight loss and have no history of significant acid reflux or bile-related issues.</p>
      <h2>How Does It Compare to Sleeve Gastrectomy?</h2>
      <ul>
        <li><strong>Weight loss:</strong> Mini gastric bypass typically produces greater and more sustained weight loss</li>
        <li><strong>Diabetes:</strong> Bypass procedures have a stronger impact on diabetes remission than sleeve</li>
        <li><strong>Reflux:</strong> Sleeve may worsen reflux; bypass can sometimes help — though bile reflux is a consideration with MGB specifically</li>
        <li><strong>Reversibility:</strong> Both are considered permanent, though bypass can technically be reversed</li>
      </ul>
      <h2>Recovery and Results</h2>
      <p>Recovery from mini gastric bypass is similar to sleeve gastrectomy. Most patients are discharged within 48 hours and return to normal activity within 4 to 6 weeks. Weight loss typically begins immediately and continues steadily over 12 to 18 months.</p>
      <p>Many patients with Type 2 diabetes see dramatic improvements in blood sugar levels within days to weeks of surgery — even before significant weight loss occurs. This is one of the most remarkable outcomes of bypass procedures.</p>
      <h2>Is It Right for You?</h2>
      <p>The best way to know is a personal consultation. At our centre in Rajkot, we evaluate each patient thoroughly before recommending any specific procedure. Mini gastric bypass is a powerful option — but only when it is the right fit.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Mini gastric bypass is one of the most effective weight loss procedures available today — and yet many patients have never heard of it.",
    ],
  },
  {
    slug: "when-diet-and-exercise-are-not-enough-science-of-obesity",
    title: "When Diet and Exercise Are Not Enough: The Science of Obesity",
    cat: "Awareness",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b2,
    excerpt: "You have probably heard it many times: 'Just eat less and move more.' It sounds simple.",
    content: `<p>You have probably heard it many times: 'Just eat less and move more.' It sounds simple. And yet, for millions of people living with obesity, it simply does not work — not in the long run.</p>
      <p>If you have tried countless diets, followed strict exercise routines, and still found yourself gaining the weight back, this article is for you. The truth is, the failure is not yours. The science explains exactly why.</p>
      <h2>Obesity Is a Disease, Not a Lifestyle Choice</h2>
      <p>The World Health Organization and medical bodies worldwide officially classify obesity as a chronic disease. This is important. Like diabetes or hypertension, obesity has biological causes, genetic components, and hormonal drivers that go far beyond food choices.</p>
      <p>Your body has a 'set point' — a weight it is programmed to return to. When you lose weight through dieting, your body actively fights back. It lowers your metabolic rate, increases hunger hormones like ghrelin, and reduces the hormones that signal fullness. The result? You feel hungrier, your body burns fewer calories, and the weight comes back — often with extra.</p>
      <h2>Why Most Diets Fail Long-Term</h2>
      <p>Studies consistently show that over 80% of people who lose weight through dieting alone regain most of it within 3 to 5 years. This is not about lack of motivation. It is about biology working against you.</p>
      <p>The hormonal changes that happen during and after weight loss can persist for years — meaning your body keeps signalling hunger even after you have reached your goal weight. Diets can help you lose weight. They rarely help you keep it off permanently.</p>
      <h2>What Makes Bariatric Surgery Different</h2>
      <p>Bariatric surgery does not just reduce how much food your stomach can hold. More importantly, it changes the hormonal signals in your gut. After procedures like sleeve gastrectomy or gastric bypass, the hunger hormone ghrelin drops significantly — sometimes permanently. Fullness signals improve. Your body's set point resets to a lower, healthier weight.</p>
      <p>This is why bariatric surgery produces results that diet and exercise alone cannot. It works with your biology rather than against it.</p>
      <h2>Who Should Consider a Medical Approach?</h2>
      <ul>
        <li>You have been overweight or obese for more than 5 years</li>
        <li>You have tried multiple structured diet and exercise programmes without sustained success</li>
        <li>You are developing or already have health conditions like diabetes, high blood pressure, or sleep apnoea</li>
        <li>Your quality of life — mobility, energy, mental health — is significantly affected by your weight</li>
      </ul>
      <p>If even two or three of these apply to you, it is time to have an honest conversation with a bariatric specialist — not to commit to surgery, but to understand all your options.</p>
      <h2>Non-Surgical Options Are Also Available</h2>
      <p>At our centre in Rajkot, we believe the right solution is a personalised one. Many patients begin with structured dietician support or medical management. Others start with an intragastric balloon — a non-surgical, temporary device that reduces hunger and helps kickstart weight loss.</p>
      <p>Surgery is one powerful tool. It is not the only one. Your journey begins with a consultation where we understand you before recommending anything.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "You have probably heard it many times: 'Just eat less and move more.' It sounds simple.",
    ],
  },
  {
    slug: "is-bariatric-surgery-right-for-you-eligibility-guide",
    title: "Is Bariatric Surgery Right for You? A Simple Guide to Eligibility",
    cat: "Awareness",
    date: "06 Nov 2026",
    read: "8 min",
    img: IMG.Bariatric_Surgery,
    excerpt: "If you have been struggling with your weight for years — trying diet after diet, exercising as hard as you can, and still not seeing lasting results — you are not alone.",
    content: `<p>If you have been struggling with your weight for years — trying diet after diet, exercising as hard as you can, and still not seeing lasting results — you are not alone. Millions of people face the same frustration, and for many of them, the answer is not more willpower. It is the right medical support.</p>
      <p>Bariatric surgery has helped thousands of people across India lose significant weight, improve their health, and transform their lives. But it is not for everyone — and that is completely fine. This article will help you understand clearly whether you might be a good candidate, and what your options look like.</p>
      <h2>First: Why Does Weight Loss Feel So Difficult?</h2>
      <p>Before we talk about surgery, it is important to understand something: obesity is not a character flaw. It is a medical condition influenced by genetics, hormones, metabolism, and lifestyle — all working against you at the same time.</p>
      <p>When your body reaches a certain weight, it actually <strong>fights to stay there</strong>. Hunger hormones increase, metabolism slows down, and the weight keeps coming back even after successful dieting. This is not your fault. This is biology.</p>
      <p>Bariatric surgery works by changing the way your digestive system functions — resetting these hormones and giving your body a genuine chance to lose weight and keep it off.</p>
      <h2>Who is a Candidate for Bariatric Surgery?</h2>
      <p>Doctors use specific medical guidelines to determine eligibility. These are not arbitrary — they are based on decades of research about who benefits most from the procedure.</p>
      <h3>Based on BMI (Body Mass Index):</h3>
      <ul>
        <li><strong>BMI 35 or above:</strong> You are eligible for bariatric surgery, even without other health conditions.</li>
        <li><strong>BMI 30 or above:</strong> You are eligible if you also have a weight-related health condition such as Type 2 diabetes, high blood pressure, or sleep apnoea.</li>
        <li><strong>BMI 27.5 or above:</strong> In some cases, especially with severe diabetes or metabolic conditions, surgery may still be considered. This is evaluated individually.</li>
      </ul>
      <p><em>Note: BMI alone is not the only factor. A thorough evaluation by your surgeon and team will consider your full health history.</em></p>
      <h3>Other important criteria:</h3>
      <ul>
        <li>You have tried non-surgical methods (diet, exercise, medication) without achieving lasting results.</li>
        <li>You do not have any untreated conditions that would make surgery unsafe.</li>
        <li>You are willing to make long-term lifestyle changes after surgery.</li>
        <li>You are generally in an age range of 18 to 65 years (though exceptions exist).</li>
      </ul>
      <h2>What If You Are Not Ready for Surgery Yet?</h2>
      <p>Surgery is not the only path. Many patients begin with non-surgical options and progress from there. At our centre in Rajkot, we offer:</p>
      <ul>
        <li>Dietician-led weight management programmes</li>
        <li>Medical management with weight loss medications</li>
        <li>Intragastric balloon — a non-surgical, temporary option that reduces hunger and kickstarts weight loss</li>
      </ul>
      <p>Every patient is different. The goal is to find the right solution for you — not the most extreme one.</p>
      <h2>What Conditions Can Bariatric Surgery Improve?</h2>
      <p>Weight loss surgery is not just about the number on the scale. For many patients, the real transformation happens in their overall health. Surgery has been shown to significantly improve or even resolve:</p>
      <ul>
        <li>Type 2 diabetes (many patients reduce or eliminate their medication entirely)</li>
        <li>High blood pressure</li>
        <li>High cholesterol</li>
        <li>Sleep apnoea and breathing difficulties</li>
        <li>Knee and joint pain</li>
        <li>Fatty liver disease</li>
        <li>Heart-related risks</li>
      </ul>
      <p>We have had patients travel from Ahmedabad, Porbandar, and across Gujarat who came to us carrying not just excess weight, but years of chronic illness. Many left not just lighter, but healthier in ways they had not experienced in years.</p>
      <h2>How Do You Know for Sure? Take the First Step.</h2>
      <p>The only reliable way to know if bariatric surgery is right for you is a personal consultation. During this session, we will:</p>
      <ul>
        <li>Calculate your BMI and review your weight history</li>
        <li>Understand your existing health conditions</li>
        <li>Explain all surgical and non-surgical options available to you</li>
        <li>Answer every question you have — in simple language, without pressure</li>
      </ul>
      <p><strong>There is no obligation. Just clarity.</strong></p>
      <p><strong>Ready to find out if bariatric surgery is right for you?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "If you have been struggling with your weight for years — trying diet after diet, exercising as hard as you can, and still not seeing lasting results — you are not alone.",
    ],
  },
  {
    slug: "sleeve-gastrectomy-vs-gastric-bypass-difference",
    title: "Sleeve Gastrectomy vs Gastric Bypass: What Is the Difference?",
    cat: "Patient FAQ",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b3,
    excerpt: "One of the most common questions patients ask before bariatric surgery is this: 'Which procedure is better — sleeve or bypass?'",
    content: `<p>One of the most common questions patients ask before bariatric surgery is this: 'Which procedure is better — sleeve or bypass?' The honest answer is: it depends on you.</p>
      <p>Both are excellent, proven procedures. Both produce significant weight loss and health improvements. But they work differently, suit different patients, and come with different considerations. This article will help you understand both — simply and clearly.</p>
      <h2>Sleeve Gastrectomy: What Happens?</h2>
      <p>In a sleeve gastrectomy, approximately 75 to 80 percent of the stomach is permanently removed. What remains is a narrow, sleeve-shaped tube — roughly the size of a banana.</p>
      <p>This does two important things. First, your stomach holds much less food — so you feel full quickly and eat less. Second, the portion of the stomach removed is where most of the hunger hormone ghrelin is produced. As a result, many patients notice a significant reduction in hunger after the procedure.</p>
      <p>Sleeve gastrectomy is currently the most commonly performed bariatric procedure in India.</p>
      <h2>Gastric Bypass: What Happens?</h2>
      <p>Gastric bypass (specifically Roux-en-Y gastric bypass) involves two changes. First, a small pouch is created from the stomach. Second, this pouch is connected directly to a lower part of the small intestine, bypassing a significant section of the digestive tract.</p>
      <p>This reduces both the amount you can eat and the amount of calories your body absorbs. It also produces powerful hormonal changes that can dramatically improve Type 2 diabetes — sometimes before significant weight loss even occurs.</p>
      <p>Mini gastric bypass is a variation of this procedure that is simpler to perform with similar outcomes and is increasingly popular.</p>
      <h2>How Do They Compare?</h2>
      <ul>
        <li><strong>Weight loss:</strong> Gastric bypass typically produces slightly more weight loss over 5+ years, but both are highly effective</li>
        <li><strong>Diabetes:</strong> Gastric bypass has a stronger effect on Type 2 diabetes remission</li>
        <li><strong>Acid reflux:</strong> Sleeve may worsen reflux in some patients; bypass often improves it</li>
        <li><strong>Reversibility:</strong> Sleeve is permanent; bypass can technically be reversed but rarely is</li>
        <li><strong>Complexity:</strong> Sleeve is simpler; bypass is more involved but still minimally invasive</li>
        <li><strong>Recovery:</strong> Both have similar recovery periods — most patients are discharged within 48 hours</li>
      </ul>
      <h2>Which One Is Right for You?</h2>
      <p>The right procedure depends on your BMI, your existing health conditions (especially diabetes and reflux), your anatomy, and your lifestyle. There is no universal answer.</p>
      <p>At our centre in Rajkot, every patient undergoes a thorough evaluation before any recommendation is made. We will walk you through which option makes the most sense for your specific situation — without pressure.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "One of the most common questions patients ask before bariatric surgery is this: 'Which procedure is better — sleeve or bypass?'",
    ],
  },
  {
    slug: "what-to-expect-first-week-after-bariatric-surgery",
    title: "What to Expect in the First Week After Bariatric Surgery",
    cat: "Patient FAQ",
    date: "06 Nov 2026",
    read: "6 min",
    img: IMG.b4,
    excerpt: "One of the biggest reasons people delay bariatric surgery is fear of the unknown.",
    content: `<p>One of the biggest reasons people delay bariatric surgery is fear of the unknown. What will the first few days feel like? Will there be a lot of pain? When can I go home? When can I eat normally?</p>
      <p>These are completely valid questions. This article gives you an honest, clear picture of what the first week after bariatric surgery typically looks like — so you can walk in informed, not anxious.</p>
      <h2>Day of Surgery</h2>
      <p>Bariatric procedures at our centre in Rajkot are performed laparoscopically — meaning through small keyhole incisions, not large open cuts. This makes a significant difference to your recovery.</p>
      <p>The surgery itself typically takes between 60 to 90 minutes. You will be under general anaesthesia and will not feel anything. After the procedure, you will be moved to a recovery room and then to your hospital room.</p>
      <h2>Day 1 After Surgery</h2>
      <p>Most patients are surprised by how manageable the first day is. There will be some soreness around the incision sites, which is normal. You will be given pain relief medication to keep you comfortable.</p>
      <p>You will begin with small sips of water. Staying hydrated is important from day one. Our nursing team will guide you through this.</p>
      <h2>Day 2: Going Home</h2>
      <p>Most patients are discharged within 48 hours of surgery, once they can tolerate liquids comfortably. You will receive detailed instructions about your diet, medications, and follow-up schedule before you leave.</p>
      <p>You will be on a liquid diet for the first two weeks — clear liquids initially, then protein shakes and smooth soups. This gives your newly shaped stomach time to heal properly.</p>
      <h2>Days 3 to 7: At Home</h2>
      <ul>
        <li>Fatigue is normal — rest as much as you need to</li>
        <li>Continue sipping fluids consistently throughout the day (aim for 1.5 to 2 litres)</li>
        <li>Small walks around the house are encouraged from day 3 to support circulation</li>
        <li>Avoid heavy lifting or strenuous activity</li>
        <li>Some patients experience mild nausea — this usually settles within a few days</li>
        <li>Pain is generally mild and well managed with prescribed medication</li>
      </ul>
      <h2>What About Emotions?</h2>
      <p>Some patients feel a mix of emotions in the first week — relief, excitement, and occasionally a dip in mood. This is completely normal. Your body has just undergone a significant change, and hormones are in flux.</p>
      <p>Our team provides support throughout this period. You are never navigating this alone.</p>
      <h2>When Do Things Start to Feel Normal?</h2>
      <p>By the end of week two, most patients feel significantly better. By week four, the majority have returned to desk-based work and light activity. By week six, most patients are into a comfortable routine with their new diet and beginning to see real weight loss results.</p>
      <p>The first week is the adjustment. Everything after that gets steadily better.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "One of the biggest reasons people delay bariatric surgery is fear of the unknown.",
    ],
  },
  {
    slug: "5-common-myths-about-weight-loss-surgery-debunked",
    title: "5 Common Myths About Weight Loss Surgery — Debunked",
    cat: "Myths & Trust-Building",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b9,
    excerpt: "Bariatric surgery is surrounded by myths. Some come from outdated information, some from fear, and some from well-meaning",
    content: `<p>Bariatric surgery is surrounded by myths. Some come from outdated information, some from fear, and some from well-meaning but uninformed friends and family. These myths stop real people from getting help that could genuinely change their lives.</p>
      <p>Let us address the most common ones — honestly and directly.</p>
      <h2>Myth 1: Bariatric Surgery Is the Easy Way Out</h2>
      <p>This is perhaps the most harmful myth. There is nothing easy about bariatric surgery. It requires preparation, commitment, and significant lifestyle changes before and after the procedure.</p>
      <p>What surgery does is level the playing field. It addresses the biological forces — hormones, metabolism, hunger signals — that make sustained weight loss nearly impossible for many people through diet alone. Using the right medical tool is not taking a shortcut. It is being smart about the problem.</p>
      <h2>Myth 2: Bariatric Surgery Is Dangerous</h2>
      <p>All surgeries carry some risk. But bariatric surgery, when performed by an experienced surgeon in a well-equipped facility, has a complication rate comparable to common procedures like gallbladder removal.</p>
      <p>The risk of NOT treating severe obesity — heart disease, diabetes complications, joint deterioration, early mortality — far exceeds the surgical risk for the right candidate. The question is never zero risk. It is which risk is greater.</p>
      <h2>Myth 3: You Will Regain All the Weight</h2>
      <p>Some weight regain can occur years after surgery, particularly if dietary habits are not maintained. But the evidence is clear: the vast majority of bariatric patients maintain significant long-term weight loss compared to non-surgical approaches.</p>
      <p>The key is the post-surgery support programme — which is why lifetime follow-up care is a cornerstone of what we offer at our centre in Rajkot.</p>
      <h2>Myth 4: You Can Never Eat Normal Food Again</h2>
      <p>This is not true. Within 2 to 3 months after surgery, most patients are eating regular, solid foods. The difference is portion size and food choices — not a permanent restriction to liquid or soft food.</p>
      <p>Many of our patients enjoy regular Indian meals — dal, sabzi, roti in smaller quantities, rice in moderation. The goal is a healthy, balanced diet — not a punishment.</p>
      <h2>Myth 5: Surgery Is Only for People Who Are Extremely Obese</h2>
      <p>Bariatric surgery is recommended for patients with a BMI of 35 and above (or 30 and above with significant health conditions like diabetes or hypertension). You do not need to be at the extreme end of obesity to qualify.</p>
      <p>In fact, addressing the problem earlier — before severe complications develop — often produces better outcomes. If your weight is significantly affecting your health or quality of life, it is worth having a conversation.</p>
      <h2>The Bottom Line</h2>
      <p>Bariatric surgery is a serious, evidence-based medical procedure with decades of safety data behind it. Do not let myths written by people who have never faced severe obesity determine your health decisions. Speak to a specialist. Get the facts. Then decide.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Bariatric surgery is surrounded by myths. Some come from outdated information, some from fear, and some from well-meaning",
    ],
  },
  {
    slug: "is-bariatric-surgery-safe-understanding-real-risks",
    title: "Is Bariatric Surgery Safe? Understanding the Real Risks",
    cat: "Myths & Trust-Building",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b10,
    excerpt: "When patients consider bariatric surgery, the first question is almost always: 'Is it safe?' It is the right question to ask.",
    content: `<p>When patients consider bariatric surgery, the first question is almost always: 'Is it safe?' It is the right question to ask. And it deserves an honest, complete answer — not reassurance designed to sell you on a procedure.</p>
      <p>This article explains the real risks of bariatric surgery, puts them in context, and helps you make an informed decision.</p>
      <h2>Yes, All Surgery Carries Risk</h2>
      <p>Bariatric surgery is a major abdominal procedure. Like any operation, it carries a small but real risk of complications. Being honest about this is a mark of a good surgeon and a trustworthy programme.</p>
      <h2>Short-Term Risks</h2>
      <ul>
        <li><strong>Bleeding:</strong> Rare, occurring in under 1% of cases</li>
        <li><strong>Infection:</strong> Minimised by laparoscopic techniques and sterile environments</li>
        <li><strong>Leaks at surgical connections:</strong> A serious but uncommon complication, occurring in roughly 1 to 3% of bypass cases and less than 1% of sleeve cases</li>
        <li><strong>Blood clots:</strong> Prevented through early mobilisation and medication</li>
        <li><strong>Anaesthesia reactions:</strong> Screened for carefully during pre-surgical evaluation</li>
      </ul>
      <p>The overall serious complication rate for bariatric surgery at experienced centres is under 3%, comparable to gallbladder removal or hip replacement surgery.</p>
      <h2>Long-Term Considerations</h2>
      <ul>
        <li><strong>Nutritional deficiencies:</strong> Real and manageable with lifelong supplement intake and regular blood tests</li>
        <li><strong>Dumping syndrome:</strong> Can occur after gastric bypass when sugary food is eaten quickly — managed through dietary habits</li>
        <li><strong>Acid reflux:</strong> May develop or worsen after sleeve gastrectomy in some patients</li>
        <li><strong>Weight regain:</strong> Possible if lifestyle changes are not sustained — addressed through ongoing support</li>
      </ul>
      <h2>The Risk of Not Having Surgery</h2>
      <p>This is the comparison that matters most. For a patient with severe obesity, the risk of serious health events — heart attack, stroke, kidney failure, limb amputations from uncontrolled diabetes, severe joint deterioration — is substantially higher without treatment than with surgery.</p>
      <p>A 10-year study of bariatric patients showed a 30 to 40% reduction in overall mortality compared to obese patients who did not have surgery. This is the true context for evaluating risk.</p>
      <h2>How We Minimise Risk at Our Centre</h2>
      <ul>
        <li>Thorough pre-surgical evaluation including blood work, cardiac assessment, and anaesthesia review</li>
        <li>Laparoscopic technique for all procedures — smaller incisions, faster healing, lower infection risk</li>
        <li>5-bed ICU and fully equipped modular operation theatres at CIGIS Hospital, Rajkot</li>
        <li>24x7 doctor availability throughout your hospital stay and recovery</li>
        <li>Lifetime post-surgery follow-up support</li>
      </ul>
      <h2>The Right Question</h2>
      <p>The question is never whether bariatric surgery has zero risk. No surgery does. The right question is: for your specific situation, is the risk of surgery lower than the risk of continuing without treatment?</p>
      <p>For many patients, the answer is clearly yes. We will help you arrive at an honest answer for your own situation.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "When patients consider bariatric surgery, the first question is almost always: 'Is it safe?' It is the right question to ask.",
    ],
  },
  {
    slug: "obesity-in-gujarat-bariatric-solutions",
    title: "Obesity in Gujarat: Why More People Are Choosing Bariatric Solutions",
    cat: "Local & Community",
    date: "06 Nov 2026",
    read: "6 min",
    img: IMG.b11,
    excerpt: "Gujarat has one of the highest rates of obesity-related conditions in India. Diabetes, hypertension",
    content: `<p>Gujarat has one of the highest rates of obesity-related conditions in India. Diabetes, hypertension, and metabolic syndrome are common health concerns across cities and towns in our state — and the numbers are growing.</p>
      <p>Yet awareness about effective medical solutions remains low. Most people still believe that diet and exercise alone should be enough — and feel shame when they cannot make it work. This article looks honestly at why obesity is such a significant challenge in Gujarat, and why more families are choosing medical intervention.</p>
      <h2>Why Is Obesity Prevalent in Gujarat?</h2>
      <p>Gujarati food culture, while rich and delicious, tends to be high in refined carbohydrates, sugars, and fried preparations — from fafda and gathiya to mithai and thepla with generous ghee. Combined with increasingly sedentary urban lifestyles and a genetic predisposition to metabolic conditions in South Asian populations, this creates a challenging environment for weight management.</p>
      <p>Research consistently shows that South Asians develop diabetes and cardiovascular complications at lower BMIs compared to Western populations — meaning the risk threshold in India is lower, not higher.</p>
      <h2>The Diabetes Connection</h2>
      <p>Gujarat has one of the highest prevalences of Type 2 diabetes in India. For many patients, obesity and diabetes are deeply intertwined — each making the other worse. Managing one without addressing the other rarely works long-term.</p>
      <p>Bariatric surgery — particularly gastric bypass procedures — addresses both simultaneously. The metabolic changes triggered by surgery can produce diabetes remission that no medication achieves.</p>
      <h2>Shifting Attitudes Towards Medical Solutions</h2>
      <p>Over the past decade, we have seen a clear shift in how patients and families in Gujarat think about bariatric surgery. Ten years ago, it was largely unknown or seen as extreme. Today, more people understand it as a legitimate, evidence-based medical procedure.</p>
      <p>Patients now travel to Rajkot from Ahmedabad, Surat, Junagadh, Porbandar, Bhavnagar, and beyond — not because they cannot find surgeons locally, but because they are seeking specialists with dedicated experience and comprehensive programmes.</p>
      <h2>What Families Should Know</h2>
      <p>Obesity affects the whole family — not just the individual. When a parent or spouse is debilitated by weight-related illness, it changes the dynamics of the entire household. Addressing obesity medically is not a personal indulgence. It is an investment in the health and wellbeing of everyone around you.</p>
      <p>If someone in your family has been struggling with their weight for years, alongside conditions like diabetes or joint problems, please encourage them to speak with a specialist. A single consultation could change the direction of their health.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Gujarat has one of the highest rates of obesity-related conditions in India. Diabetes, hypertension, and metabolic syndrome are common health concerns across cities and towns in our state — and the numbers are growing.",
    ],
  },
  {
    slug: "why-patients-travel-to-rajkot-for-bariatric-surgery",
    title: "Why Patients Travel to Rajkot for Bariatric Surgery — and What to Expect",
    cat: "Local & Community",
    date: "06 Nov 2026",
    read: "7 min",
    img: IMG.b12,
    excerpt: "Every month, patients arrive at our centre in Rajkot from Ahmedabad, Surat, Junagadh, Porbandar, Bhavnagar, and other cities across Gujarat and beyond.",
    content: `<p>Every month, patients arrive at our centre in Rajkot from Ahmedabad, Surat, Junagadh, Porbandar, Bhavnagar, and other cities across Gujarat and beyond. Some travel two to three hours. Some come from other states entirely.</p>
      <p>They are not coming because bariatric surgery is unavailable closer to home. They are coming because they want a specialist — someone whose entire practice is dedicated to weight loss, who will be available beyond the operating theatre, and who will walk with them through the entire journey.</p>
      <p>This article explains what makes a dedicated bariatric programme different, and what you can expect if you choose to travel for your procedure.</p>
      <h2>What a Dedicated Weight Loss Centre Offers</h2>
      <p>Many hospitals offer bariatric surgery as one of dozens of procedures. At CIGIS Hospital in Rajkot, it is our singular focus. Every member of our team — the surgeon, dieticians, counsellors, and nursing staff — is trained specifically in bariatric care.</p>
      <p>This matters. The outcome of bariatric surgery depends not just on the operation, but on the preparation before and the support after. A dedicated programme provides both.</p>
      <h2>What Travelling Patients Experience</h2>
      <ul>
        <li><strong>Pre-surgery consultation:</strong> Can be conducted in person or via phone/video for initial assessment before you travel</li>
        <li><strong>Surgery and hospital stay:</strong> Typically 2 to 3 days at CIGIS Hospital, Rajkot — with 5-star facilities, 20 private rooms, and a 5-bed ICU</li>
        <li><strong>Discharge and travel home:</strong> Most patients are comfortable travelling by 48 to 72 hours post-surgery</li>
        <li><strong>Post-surgery follow-up:</strong> Can be done remotely for patients from other cities, with in-person visits at key milestones</li>
        <li><strong>24x7 availability:</strong> Dr. Vikani and the team are reachable directly for any concerns after you return home</li>
      </ul>
      <h2>Lifetime Free Follow-Up</h2>
      <p>One of the most significant aspects of our programme is the lifetime free post-surgery support. This is not a standard offering across all centres. For patients who travel from far, this commitment means they have continuous access to specialist guidance — diet advice, blood test reviews, symptom queries — without needing to travel back for every question.</p>
      <p>It also means accountability. Patients who know they have ongoing support tend to do better long-term.</p>
      <h2>A Note on Choosing a Surgeon</h2>
      <p>If you are considering bariatric surgery — whether in Rajkot or elsewhere — choose a surgeon based on experience, training, and the completeness of their programme. Ask about their complication rates. Ask about post-surgery support. Ask how available they are after the procedure.</p>
      <p>Dr. Mehul Vikani trained at AZ Sint Jan Hospital in Belgium and Chang Gung Memorial Hospital in Taiwan — two of the leading bariatric centres in the world. He was awarded Best Young Bariatric Surgeon in India at the national OSSI conference in 2022. These are not just credentials. They represent a commitment to doing this well.</p>
      <h2>Begin with a Conversation</h2>
      <p>If you are considering travelling to Rajkot for bariatric surgery, we welcome you to reach out. We will answer your questions honestly, help you understand whether you are a candidate, and walk you through every step — from your first call to your long-term follow-up.</p>
      <p><strong>Ready to take the first step?</strong></p>
      <p>Call or WhatsApp Dr. Mehul Vikani's team today: <strong>+91 98750 98484</strong> &nbsp; |<br /><em>CIGIS Hospital, Rajkot — Dedicated Weight Loss Centre</em></p>`,
    body: [
      "Every month, patients arrive at our centre in Rajkot from Ahmedabad, Surat, Junagadh, Porbandar, Bhavnagar, and other cities across Gujarat and beyond.",
    ],
  },
];

export const FAQS = [
  { cat: "General", q: "What is obesity, and how is it diagnosed?", a: "Obesity is a chronic, multifactorial health condition involving excess body fat that may affect overall health. Assessment includes BMI, waist circumference, medical history and obesity-related health conditions." },
  { cat: "General", q: "Can obesity be managed without surgery?", a: "Yes. Depending on the degree of obesity and individual health needs, management may include dietary changes, physical activity, behavioural support and prescription medications. Some individuals may require endoscopic or surgical treatment." },
  { cat: "Medication", q: "Are weight-loss injections safe?", a: "Prescription medications such as semaglutide and tirzepatide may be used in appropriately selected individuals. They can have side effects and contraindications, so treatment requires medical supervision and regular monitoring." },
  { cat: "Non-Surgical", q: "What is an intragastric balloon?", a: "An intragastric balloon is a temporary device placed inside the stomach to help increase fullness and reduce food intake. It is generally combined with dietary guidance and lifestyle modifications. Suitability and duration depend on the balloon system and individual assessment." },
  { cat: "Surgery", q: "Who can undergo bariatric surgery?", a: "Bariatric surgery may be considered for individuals meeting established clinical criteria based on BMI, obesity-related conditions and overall health. A comprehensive medical assessment is necessary to determine eligibility." },
  { cat: "Surgery", q: "What are the different types of bariatric surgery?", a: "Common procedures include sleeve gastrectomy, mini gastric bypass (OAGB) and Roux-en-Y gastric bypass (RYGB). Each differs in its surgical technique, effects on digestion, potential benefits and risks." },
  { cat: "Surgery", q: "Is bariatric surgery safe?", a: "Bariatric surgery is an established treatment for appropriately selected individuals, but it carries potential risks like any major operation. These include bleeding, infection, leakage, blood clots and nutritional deficiencies. Individual risks should be discussed before surgery." },
  { cat: "Recovery", q: "How long does recovery take after bariatric surgery?", a: "Recovery varies depending on the procedure and individual health. Most patients gradually resume their daily activities, following medical advice regarding diet, exercise and return to work." },
  { cat: "Recovery", q: "Will I need vitamins and supplements after bariatric surgery?", a: "Yes. Vitamin and mineral supplementation is generally required after bariatric surgery, particularly after gastric bypass procedures. Regular blood investigations and long-term nutritional monitoring are important." },
  { cat: "Recovery", q: "Can weight return after bariatric surgery?", a: "Yes. Weight regain can occur due to biological, dietary and lifestyle factors. Long-term follow-up, nutritional guidance and appropriate medical management remain important." },
  { cat: "Metabolic", q: "Can bariatric surgery improve type 2 diabetes?", a: "Bariatric and metabolic surgery may significantly improve blood glucose control and can lead to diabetes remission in some individuals. Outcomes depend on factors such as diabetes duration, pancreatic function and overall health." },
  { cat: "Recovery", q: "Is lifelong follow-up necessary after bariatric surgery?", a: "Yes. Long-term follow-up helps monitor weight, metabolic health, nutritional status and possible complications. Continued medical and nutritional care is an essential part of treatment." },
];
