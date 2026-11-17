import type { Certification, Education } from "./types";

export const education: Education[] = [
  {
    degree: "M.Sc. Operations Research and Business Analytics",
    school: "Otto von Guericke University Magdeburg",
    start: "2026-10",
    end: "",
    status: "Enrolled, winter semester 2026/27",
    details: ["Operations research, optimization and business analytics."],
  },
  {
    degree: "B.Sc. Mobility and Logistics",
    school: "Rhine-Waal University of Applied Sciences",
    start: "2021-10",
    end: "2026-05",
    status: "Completed",
    details: [
      "Bachelor's thesis with Uniper on Microsoft Copilot adoption: grade 2.0, colloquium 1.7.",
      "Coursework in data and IT: Data Management, Data Science, Statistics, Business Information Systems (SAP), Object-Oriented Programming (Java), Linear Optimization.",
      "Coursework in logistics and business: Supply Chain Management, Planning and Production Logistics, Lean Management, Financial and Management Accounting.",
    ],
  },
];

// Newest first. Add `url` when a public credential link exists.
// documentOnFile: true = the certificate document itself was checked.
export const certifications: Certification[] = [
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey.org",
    date: "2026-08",
  },
  {
    title: "telc Deutsch B1 (Zertifikat Deutsch)",
    issuer: "telc gGmbH",
    date: "2026-07",
    documentOnFile: true,
    note: "Verifiable at results.telc.net; ID on request",
  },
  {
    title: "Mastering Business Intelligence with DAX, Power BI, and Excel by Microsoft Press",
    issuer: "LinkedIn Learning",
    date: "2026-04",
    url: "https://www.linkedin.com/learning/certificates/d0d6ee6e737d3e0d512b7591e165350cbd6d9af6b70fd204294a7d8d6dd7ef66/",
  },
  {
    title: "Lean Six Sigma Yellow Belt (online)",
    issuer: "Uniper",
    date: "2026-03",
  },
  {
    title: "Microsoft Copilot Studio: The Copilot Studio Masterclass",
    issuer: "Udemy",
    date: "2025-09",
  },
  {
    title: "Power BI, Certificate of Achievement",
    issuer: "365 Data Science",
    date: "2024-11",
    note: "Credential ID CC-DA1986730B",
  },
  {
    title: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Maven Analytics",
    date: "2024-11",
  },
  {
    title: "Microsoft Excel: Business Intelligence with Power Query & DAX",
    issuer: "Maven Analytics",
    date: "2024-10",
  },
  {
    title: "SAP University Alliances Certificate",
    issuer: "Rhine-Waal University",
    date: "2022-07",
  },
  {
    title: "MS Excel Advanced",
    issuer: "Rhine-Waal University",
    date: "2021-11",
  },
];

/** Shown under the certificate list. */
export const certificationsMoreUrl = "https://www.linkedin.com/in/sohrab-rana/details/certifications/";
