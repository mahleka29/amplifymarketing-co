export type Service = {
  id: string;
  name: string;
  short: string;
  long: string;
  bullets: string[];
  imageLabel: string;
};

export const services: Service[] = [
  {
    id: "lead-generation",
    name: "Lead Generation",
    short: "End-to-end campaigns built around one metric: qualified enquiries in your inbox.",
    long: "We design the whole path a prospect takes — from the first ad or search result through to the form submission and the follow-up. Channels are chosen to fit your buying cycle, not the other way round.",
    bullets: [
      "Offer and audience definition workshops",
      "Landing pages and forms built to convert",
      "Lead qualification and routing setup",
      "Cost-per-lead tracking across every channel",
    ],
    imageLabel: "Photo or graphic: lead funnel dashboard / team reviewing enquiry pipeline",
  },
  {
    id: "ppc",
    name: "PPC & Paid Ads",
    short: "Search and display campaigns managed against cost per lead, not clicks.",
    long: "Google and Bing campaigns structured so budget follows the keywords that actually produce enquiries. We rebuild wasteful account structures, tighten match types, and keep negative keyword lists working.",
    bullets: [
      "Account audit and rebuild",
      "Keyword, match type, and negative list management",
      "Ad copy testing and extension coverage",
      "Conversion tracking and bid strategy tuning",
    ],
    imageLabel: "Photo or graphic: paid search account structure / campaign performance view",
  },
  {
    id: "seo",
    name: "SEO",
    short: "Compounding organic visibility for the searches your buyers actually make.",
    long: "Technical fixes, content that answers real purchase questions, and authority building — sequenced so the work that moves rankings soonest happens first.",
    bullets: [
      "Technical audit and site health fixes",
      "Keyword mapping to buying intent",
      "On-page and content optimisation",
      "Local SEO and listings management",
    ],
    imageLabel: "Photo or graphic: search rankings report / content planning board",
  },
  {
    id: "social-ads",
    name: "Social Media Ads",
    short: "Paid social that builds demand and captures it, with creative that earns attention.",
    long: "Meta, LinkedIn, and TikTok campaigns with audiences layered from cold interest through to warm retargeting, plus a creative testing cadence that keeps performance from decaying.",
    bullets: [
      "Audience and retargeting architecture",
      "Creative concepting and testing cycles",
      "Lead form and landing page routing",
      "Pixel, event, and attribution setup",
    ],
    imageLabel: "Photo or graphic: social ad creative variations / mobile ad previews",
  },
  {
    id: "email",
    name: "Email Campaigns",
    short: "Nurture sequences that turn the leads you already paid for into conversations.",
    long: "Most leads are not ready on day one. We build the automated follow-up that keeps you present until they are — segmented, written in your voice, and measured on replies and bookings.",
    bullets: [
      "Welcome and nurture sequence build",
      "List segmentation and hygiene",
      "Subject line and send-time testing",
      "Deliverability monitoring",
    ],
    imageLabel: "Photo or graphic: email sequence flow / inbox previews",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Strategy",
    body: "We map your offer, buyers, and margins, then decide which channels can realistically hit your cost per lead — before any budget is committed.",
  },
  {
    step: "02",
    title: "Build",
    body: "Campaigns, landing pages, tracking, and follow-up are built together as one funnel, so nothing leaks between the click and the enquiry.",
  },
  {
    step: "03",
    title: "Optimize",
    body: "Weekly testing on audiences, creative, keywords, and pages. Budget moves toward what converts and away from what doesn't.",
  },
  {
    step: "04",
    title: "Report",
    body: "A plain-language report showing leads, cost per lead, and what changed — plus what we're doing next month and why.",
  },
];
