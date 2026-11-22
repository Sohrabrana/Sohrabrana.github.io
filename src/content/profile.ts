// Personal details, hero text and the About story.
// Change text here; components pick it up automatically.

export const profile = {
  name: "Sohrab Rana",
  role: "Junior Business Intelligence & Data Analyst",
  /** Used in <title>, Open Graph and structured data. */
  seoTitle: "Sohrab Rana – Junior BI & Data Analyst (Power BI, SQL, SAP) in Germany",
  seoDescription:
    "Junior BI and Data Analyst in Duisburg, NRW. Power BI, DAX, SQL and SAP ERP data from work at Uniper and Continental. Available now for full-time roles in Germany.",
  keywords: [
    "Sohrab Rana",
    "Junior BI Analyst",
    "Business Intelligence Analyst",
    "Power BI Analyst",
    "Power BI Developer",
    "Data Analyst",
    "Business Analyst",
    "Supply Chain Analyst",
    "Digital Transformation",
    "Datenanalyst",
    "Datenanalyse",
    "Business Intelligence",
    "Berufseinsteiger",
    "Werkstudent",
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "SAP ERP",
    "KPI reporting",
    "Kennzahlen",
    "Power Automate",
    "Duisburg",
    "NRW",
    "Germany",
  ],

  /** Shown above the name. Set `open: false` when you are no longer looking. */
  availability: {
    open: true,
    label: "Available now for full-time roles in Germany",
  },
  /** Large statement under the role in the hero. */
  headline: "Turning complex business data into clear insights, reliable reports, and better decisions.",
  lede: "I build Power BI dashboards and reporting solutions using SAP, SQL, Excel, and Microsoft 365 data. At Continental, I supported international engineering teams with KPI reporting and data analysis. At Uniper, I developed management dashboards and automated business processes to make reporting more efficient.",

  location: "Duisburg, North Rhine-Westphalia",
  /** Everything in this file is public: it is shipped to every visitor's browser.
   *  Never add a home address, birthday, ID numbers or internal employer data here
   *  (the only exception is the Impressum address below, which the law requires). */
  email: "sohrabrana44@gmail.com",
  /** Shown in the contact section. Set showPhone to false to hide it on the site. */
  phone: "+49 179 446 8668",
  showPhone: true,
  links: {
    linkedin: "https://www.linkedin.com/in/sohrab-rana",
    github: "https://github.com/Sohrabrana",
  },

  /** Production URL. Can be overridden with the NEXT_PUBLIC_SITE_URL environment variable. */
  siteUrl: "https://sohrabrana.github.io",
  /** Where the site is hosted (shown on the Datenschutz page). */
  hosting: { service: "GitHub Pages", company: "GitHub, Inc. (USA)" },
  /** Repository with the site source, shown in the footer. Empty = hidden. */
  sourceRepo: "",

  photo: {
    src: "/images/sohrab-rana.jpg",
    alt: "Portrait of Sohrab Rana in a dark blazer and white shirt",
  },

  /** About section. The opening line is shown large; `highlight` gets the yellow marker. */
  aboutLead: {
    text: "I started in logistics, but discovered that what interests me most is",
    highlight: "the data behind better business decisions.",
  },
  /** Paragraphs in order. An item written as { quote: "..." } is shown as a highlighted pull quote. */
  about: [
    "My background in Mobility and Logistics taught me how business processes work. My experience at Continental and Uniper showed me how the right data, clear reporting, and smart automation can make those processes more efficient.",
    "At Continental, I worked with Power BI, SQL, SAP ERP, and Excel to develop dashboards and reporting solutions for eight engineering projects. From European KPI reporting to prototype cost analysis and engineering data validation, I learned how to turn complex information into insights that international teams could actually use.",
    "At Uniper, I took that experience further. As part of the Transformation & Excellence team, I developed and published five Power BI dashboards, automated business processes using Microsoft Power Platform, and built a Copilot Studio agent to improve access to internal knowledge. I also supported colleagues through hands-on AI training and explored Microsoft 365 Copilot adoption in my Bachelor's thesis.",
    {
      quote:
        "What I enjoy most is understanding a business problem, working through the data, and building something that makes people's work easier. I'm comfortable connecting technical solutions with real business needs, whether that means creating a dashboard, improving a reporting process, or exploring how AI can support everyday work.",
    },
    "I hold a B.Sc. in Mobility and Logistics and am currently enrolled in an M.Sc. in Operations Research and Business Analytics at Otto von Guericke University Magdeburg.",
    "I'm looking for my next opportunity in Business Intelligence, Data Analytics, Business Analysis, Digital Transformation, or Supply Chain Analytics, where I can contribute from day one and continue developing my skills. I'm also open to working student positions and internships.",
  ] as (string | { quote: string })[],
  /** Short German profile, shown in a collapsible block in the About section. */
  aboutDe:
    "Junior Business Intelligence & Data Analyst mit Praxiserfahrung bei Uniper (Werkstudent, Transformation & Excellence) und Continental (Praktikum, Power BI). Schwerpunkte: Power BI, DAX, Power Query, SQL, SAP-ERP-Daten, KPI-Reporting und Prozessautomatisierung mit Power Automate. B.Sc. Mobility and Logistics (Hochschule Rhein-Waal), seit Oktober 2026 M.Sc. Operations Research and Business Analytics (Otto-von-Guericke-Universität Magdeburg). Ab sofort verfügbar für eine Vollzeitstelle in Deutschland und offen für einen Umzug; Werkstudenten- und Praktikumsstellen kommen ebenfalls infrage. Deutsch: B1 (telc), B2 in Vorbereitung.",

  /** Quick facts for recruiters, shown next to the About text. */
  facts: [
    {
      label: "Looking for",
      value: "Junior BI Analyst, Power BI Analyst, Data Analyst, Business Analyst, Supply Chain Analyst or a digital transformation role",
    },
    { label: "Start date", value: "Immediately, full-time" },
    { label: "Also open to", value: "Working student positions and internships" },
    { label: "Location", value: "Duisburg, NRW. Open to relocation anywhere in Germany" },
    { label: "Work model", value: "On-site, hybrid or remote" },
    { label: "Experience", value: "1.5 years in BI and reporting at Uniper and Continental" },
    { label: "Languages", value: "English C1, German B1 (telc, B2 in progress), Bengali native" },
  ],

  /** Shown in the Impressum. Fill in a postal address before publishing in Germany (§ 5 DDG). */
  legal: {
    name: "Sohrab Rana",
    street: "",
    postalCodeCity: "",
    country: "Germany",
  },

  /** Date of the last content update, shown in the footer. */
  updated: "November 2026",
};

export type Profile = typeof profile;
