// Personal details, hero text and the About story.
// Change text here; components pick it up automatically.

export const profile = {
  name: "Sohrab Rana",
  role: "Business Intelligence & Data Analyst",
  /** Used in <title>, Open Graph and structured data. */
  seoTitle: "Sohrab Rana – Business Intelligence & Data Analyst (Power BI, SQL) in Germany",
  seoDescription:
    "Business Intelligence and Data Analyst in Duisburg, Germany. Power BI dashboards, DAX, Power Query, SQL and SAP ERP data from work at Uniper and Continental. Available for full-time roles in Germany.",
  keywords: [
    "Sohrab Rana",
    "Business Intelligence Analyst",
    "Data Analyst",
    "Power BI Developer",
    "Business Analyst",
    "Supply Chain Analyst",
    "Datenanalyst",
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "SAP ERP",
    "KPI reporting",
    "Power Automate",
    "Duisburg",
    "NRW",
    "Germany",
  ],

  /** Shown above the name. Set `open: false` when you are no longer looking. */
  availability: {
    open: true,
    label: "Open to full-time roles in Germany",
  },
  lede: "I turn SAP, SQL and Microsoft 365 data into Power BI reports that management and operations teams use. Previously at Uniper and Continental.",

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
  /** Repository with the site source, shown in the footer. Empty = hidden (the repository is private). */
  sourceRepo: "",

  photo: {
    src: "/images/sohrab-rana.jpg",
    alt: "Portrait of Sohrab Rana in a dark blazer and white shirt",
  },

  about: [
    "I'm a Business Intelligence and Data Analyst based in Duisburg. My work sits between data and the people who decide with it: I take data from SAP ERP, SQL databases, SharePoint and Excel, model it in Power BI, and build the reports teams look at in their regular meetings.",
    "I have worked in Germany since 2021, first part-time in retail in Cologne, a job I kept throughout my Bachelor's in Mobility and Logistics at Rhine-Waal University. Logistics taught me how supply chains and processes run. My internship at Continental in Lindau showed me how much of that work depends on good reporting: I built and maintained Power BI dashboards for 8 engineering projects, with stakeholders in Europe, North America, China, Japan and Korea.",
    "At Uniper in Düsseldorf I spent a year as a working student in Transformation & Excellence. I built five Power BI dashboards for management and operational KPIs, automated routine work with Power Automate, and set up a Copilot Studio agent for the team's SharePoint knowledge hub. I also ran hands-on Copilot training for colleagues, and wrote my Bachelor's thesis on Microsoft Copilot adoption at Uniper.",
    "I'm now looking for a full-time position in Germany as a BI Analyst, Data Analyst, Power BI Developer, Business Analyst or Supply Chain Analyst. I'm also enrolled in the M.Sc. Operations Research and Business Analytics at Otto von Guericke University Magdeburg.",
  ],

  facts: [
    { label: "Based in", value: "Duisburg, NRW" },
    { label: "Availability", value: "Immediately, full-time" },
    { label: "Relocation", value: "Open to relocation within Germany" },
    { label: "Work model", value: "On-site, hybrid or remote" },
    { label: "Languages", value: "English C1, German B1 (B2 in progress), Bengali native" },
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
