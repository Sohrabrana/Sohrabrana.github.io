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
  lede: "I build Power BI reports from SAP, SQL and Microsoft 365 data, and I check the numbers before anyone else sees them. At Continental that meant weekly European KPI reports for engineering teams. At Uniper, management dashboards for the Transformation & Excellence team.",

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

  /** About section. The first paragraph is shown larger. */
  about: [
    "I came to data through logistics. My Bachelor's in Mobility and Logistics taught me how orders, materials and processes move through a company. My internship at Continental showed me how much of that depends on reports people can trust, and that has been my work ever since.",
    "At Continental in Lindau I joined the Application Engineering Excellence department as a Power BI intern. I built and maintained dashboards and data models for 8 engineering projects: weekly European KPI reports, prototype cost reporting, EBOM analysis and surveys. The data came from SAP ERP, SQL databases, SharePoint, JIRA and Excel, and the reports went to colleagues in Europe, North America, China, Japan, Korea and Romania. When the internship ended, I stayed on remotely for three more months to continue the dashboard work and the SAP and Excel data validation.",
    "Then I spent a year as a working student in Uniper's Transformation & Excellence team in Düsseldorf. I built and published five Power BI dashboards for management and operational KPIs, automated routine work with Power Automate and Power Apps, and set up a Copilot Studio agent for the team's SharePoint knowledge hub. I also ran four hands-on Copilot training sessions for colleagues, and wrote my Bachelor's thesis there on Microsoft 365 Copilot adoption.",
    "Before all of this, I spent three and a half years working part-time on the shop floor at H&M in Cologne, most of it alongside full-time studies. That job is where I got used to working in German every day, in a team and with customers.",
    "I'm now looking for a full-time junior role in Germany as a BI Analyst, Power BI Analyst, Data Analyst, Business Analyst or Supply Chain Analyst, or in digital transformation. I can start immediately and I'm open to relocation. I'm also enrolled in the M.Sc. Operations Research and Business Analytics at Otto von Guericke University Magdeburg, and open to working student positions and internships.",
  ],
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
