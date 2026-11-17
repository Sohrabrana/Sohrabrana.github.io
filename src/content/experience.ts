import type { Role } from "./types";

// Work experience, newest first. Dates follow the reference letters (Arbeitszeugnisse).
// Each role also appears as a bar in the hero chart.

export const experience: Role[] = [
  {
    id: "uniper",
    title: "Working Student, Operational Excellence / Transformation & Excellence",
    org: "Uniper",
    orgFull: "Uniper Global Commodities SE",
    department: "Operational Excellence / Transformation & Excellence",
    location: "Düsseldorf",
    mode: "Hybrid",
    start: "2025-04",
    end: "2026-04",
    kind: "work",
    summary:
      "Business intelligence, automation and AI adoption for the Transformation & Excellence team of a European energy company.",
    highlights: [
      "Developed and published 5 Power BI dashboards for management and operational KPI reporting.",
      "Prepared and modeled data from Microsoft 365, SharePoint and Microsoft Forms with Power Query, DAX and Excel, and maintained the automated data refresh.",
      "Built a SharePoint knowledge management hub with an integrated Copilot Studio agent to make internal knowledge easier to find.",
      "Automated routine workflows with Power Automate and Power Apps, and analyzed existing processes for optimization opportunities.",
      "Supported Microsoft 365 Copilot adoption with practical use cases and 4 hands-on Copilot agent training sessions.",
      "Presented dashboard updates in monthly team meetings.",
    ],
    tools: [
      "Power BI Desktop & Service",
      "DAX",
      "Power Query",
      "Excel",
      "SharePoint",
      "Microsoft Forms",
      "Power Automate",
      "Power Apps",
      "Copilot Studio",
      "Microsoft 365 Copilot",
    ],
    reference: {
      quote:
        "His logical and analytical thinking processes enabled him to find independent, balanced and correct solutions for complex problems.",
      lang: "en",
      source: "Uniper reference letter, April 2026",
    },
  },
  {
    id: "continental",
    title: "Intern, Microsoft Power BI and Efficiency Measures",
    org: "Continental",
    orgFull: "Continental – ADC Automotive Distance Control Systems GmbH",
    department: "Application Engineering Excellence",
    location: "Lindau (Bodensee)",
    mode: "Hybrid",
    start: "2024-08",
    end: "2025-01",
    kind: "work",
    extension: { start: "2025-01", end: "2025-04", label: "Voluntary remote extension" },
    summary:
      "Power BI reporting and efficiency measures for engineering teams in the Application Engineering Excellence department.",
    highlights: [
      "Developed and modified Power BI dashboards and data models across 8 engineering projects, including weekly European reports, prototype cost reporting, EBOM (engineering bill of materials) and survey analysis.",
      "Extracted, transformed and validated data from SAP ERP, SQL databases, SharePoint, JIRA and Excel/CSV files with Power Query and DAX.",
      "Tailored dashboards and data models to stakeholders in Europe, North America, China, Japan, Korea and Romania.",
      "Automated data preparation with Excel VBA and macros, and used KNIME apps to support prototype planning for advance sample orders.",
      "Wrote newsletter articles for the Market Europe success-story channel and prepared workshop presentations and survey forms.",
      "Voluntary remote extension from January to April 2025: continued dashboard development and SAP/Excel data validation.",
    ],
    tools: ["Power BI", "DAX", "Power Query", "SAP ERP", "SQL", "SharePoint", "JIRA", "Excel VBA", "KNIME"],
    reference: {
      quote:
        "Besonders hervorzuheben sind seine Fähigkeiten, komplexe Sachverhalte schnell zu erfassen und zu analysieren.",
      lang: "de",
      translation: "His ability to grasp and analyze complex matters quickly deserves particular mention.",
      source: "Continental Zeugnis, January 2025",
    },
  },
  {
    id: "hm",
    title: "Sales Advisor (part-time student job)",
    org: "H&M",
    orgFull: "H&M, placed by Studitemps GmbH",
    location: "Cologne",
    mode: "On-site",
    start: "2021-02",
    end: "2024-08",
    kind: "parttime",
    summary: "Part-time job on the sales floor, continued alongside my full-time Bachelor's studies from October 2021.",
    highlights: [
      "Advised customers and supported day-to-day store operations as part of the store team.",
      "Three and a half years of continuous work in Germany, most of it alongside full-time studies.",
    ],
    tools: ["Customer service", "Teamwork", "German at work"],
  },
];
