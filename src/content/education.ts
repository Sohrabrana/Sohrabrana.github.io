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
    image: {
      src: "/certificates/linkedin-learning-bi-microsoft-press.jpg",
      thumb: "/certificates/linkedin-learning-bi-microsoft-press-thumb.jpg",
      width: 1053,
      height: 812,
      alt: "LinkedIn Learning certificate of completion for Mastering Business Intelligence with DAX, Power BI, and Excel by Microsoft Press, completed by Sohrab Rana on 28 April 2026",
    },
  },
  {
    title: "Lean Six Sigma Yellow Belt (online)",
    issuer: "Uniper",
    date: "2026-03",
    image: {
      src: "/certificates/lean-six-sigma-yellow-belt.jpg",
      thumb: "/certificates/lean-six-sigma-yellow-belt-thumb.jpg",
      width: 823,
      height: 549,
      alt: "Badge: Certified Lean Six Sigma Online Yellow Belt",
    },
  },
  {
    title: "Microsoft Copilot Studio: The Copilot Studio Masterclass",
    issuer: "Udemy",
    date: "2025-09",
    url: "https://ude.my/UC-f8ae38f1-3a5b-41dc-8a11-e9d117e757fd",
    image: {
      src: "/certificates/udemy-copilot-studio.jpg",
      thumb: "/certificates/udemy-copilot-studio-thumb.jpg",
      width: 1093,
      height: 812,
      alt: "Udemy certificate of completion for Microsoft Copilot Studio – The Copilot Studio Masterclass, Sohrab Rana, 22 September 2025, 12 hours",
    },
  },
  {
    title: "Power BI, Certificate of Achievement",
    issuer: "365 Data Science",
    date: "2024-11",
    note: "Credential ID CC-DA1986730B",
    url: "https://learn.365datascience.com/c/112b52fe24",
    image: {
      src: "/certificates/365-data-science-power-bi.jpg",
      thumb: "/certificates/365-data-science-power-bi-thumb.jpg",
      width: 1137,
      height: 806,
      alt: "365 Data Science certificate of achievement in Power BI awarded to Sohrab Rana, 19 November 2024",
    },
  },
  {
    title: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Maven Analytics",
    date: "2024-11",
    note: "Udemy course by Maven Analytics",
    url: "https://www.udemy.com/certificate/UC-5ba8196b-0a0e-4e14-a12a-a18bb9b16aeb/",
    image: {
      src: "/certificates/maven-power-bi-desktop.jpg",
      thumb: "/certificates/maven-power-bi-desktop-thumb.jpg",
      width: 1093,
      height: 812,
      alt: "Udemy certificate of completion for Microsoft Power BI Desktop for Business Intelligence by Maven Analytics, Sohrab Rana, 15 November 2024, 16.5 hours",
    },
  },
  {
    title: "Microsoft Excel: Business Intelligence with Power Query & DAX",
    issuer: "Maven Analytics",
    date: "2024-10",
    note: "Udemy course by Maven Analytics",
    url: "https://www.udemy.com/certificate/UC-a38e5f66-3797-4556-a5f8-c65823b01eb5/",
    image: {
      src: "/certificates/maven-excel-bi.jpg",
      thumb: "/certificates/maven-excel-bi-thumb.jpg",
      width: 1093,
      height: 812,
      alt: "Udemy certificate of completion for Microsoft Excel: Business Intelligence with Power Query and DAX by Maven Analytics, Sohrab Rana, 13 October 2024, 7.5 hours",
    },
  },
  {
    title: "SAP University Alliances Certificate",
    issuer: "Rhine-Waal University",
    date: "2022-07",
    note: "SAP S/4HANA exercises in MM, SD, FI and PP",
    image: {
      src: "/certificates/sap-university-alliances.jpg",
      thumb: "/certificates/sap-university-alliances-thumb.jpg",
      width: 674,
      height: 873,
      alt: "SAP University Alliances certificate: Sohrab Rana attended the SAP exercise on SAP S/4HANA in summer semester 2022, covering Material Management, Sales and Distribution, Finance, and Production and Planning",
    },
  },
  {
    title: "MS Excel Advanced",
    issuer: "Rhine-Waal University",
    date: "2021-11",
  },
];

/** Shown under the certificate list. */
export const certificationsMoreUrl = "https://www.linkedin.com/in/sohrab-rana/details/certifications/";
