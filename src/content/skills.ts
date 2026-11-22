import type { SkillGroup, SkillPlace } from "./types";

// Skills, shown as a matrix: each skill is ticked where I actually used it.
// This lets recruiters check every skill against real experience instead of a self-rating.
// usedAt: "uniper" | "continental" | "projects" (portfolio projects on GitHub) | "study" (degree, thesis, certificates)

export const skillPlaces: { id: SkillPlace; label: string; short: string }[] = [
  { id: "uniper", label: "Uniper", short: "Uniper" },
  { id: "continental", label: "Continental", short: "Conti" },
  { id: "projects", label: "Portfolio projects", short: "Projects" },
  { id: "study", label: "Degree and thesis", short: "Study" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "bi",
    title: "BI and reporting",
    skills: [
      { name: "Power BI Desktop & Service", usedAt: ["uniper", "continental", "projects", "study"], note: "Thesis dashboard" },
      { name: "DAX", usedAt: ["uniper", "continental", "projects"], note: "20 measures in the supply chain project" },
      { name: "Power Query", usedAt: ["uniper", "continental", "projects"] },
      { name: "Data modeling (star schema)", usedAt: ["continental", "projects"] },
      { name: "KPI reporting", usedAt: ["uniper", "continental", "projects"] },
      { name: "Scheduled refresh in the Power BI Service", usedAt: ["uniper"] },
    ],
  },
  {
    id: "data",
    title: "Data and systems",
    skills: [
      { name: "SQL (MySQL)", usedAt: ["continental", "projects"], note: "3 SQL projects on GitHub" },
      { name: "SAP ERP data", usedAt: ["continental", "study"], note: "SAP University Alliances certificate" },
      { name: "Excel (VBA, macros, pivot tables)", usedAt: ["uniper", "continental", "projects"] },
      { name: "SharePoint as a data source", usedAt: ["uniper", "continental"] },
      { name: "JIRA as a data source", usedAt: ["continental"] },
      { name: "KNIME", usedAt: ["continental"] },
      { name: "Python", usedAt: ["projects"], note: "Synthetic data generation" },
    ],
  },
  {
    id: "automation",
    title: "Automation and AI",
    skills: [
      { name: "Power Automate", usedAt: ["uniper"] },
      { name: "Power Apps", usedAt: ["uniper"] },
      { name: "Microsoft Copilot Studio", usedAt: ["uniper"], note: "Knowledge hub agent" },
      { name: "Microsoft 365 Copilot adoption and training", usedAt: ["uniper", "study"] },
    ],
  },
  {
    id: "business",
    title: "Business and process",
    skills: [
      { name: "Process analysis and optimization", usedAt: ["uniper"] },
      { name: "Lean Six Sigma (Yellow Belt)", usedAt: ["uniper"], note: "Uniper training, 2026" },
      { name: "Supply chain and logistics", usedAt: ["projects", "study"], note: "B.Sc. Mobility and Logistics" },
      { name: "Survey analysis", usedAt: ["continental", "study"], note: "UTAUT framework in the thesis" },
      { name: "Training and presenting to stakeholders", usedAt: ["uniper", "continental"] },
    ],
  },
];

/** The tools a recruiter scans for first. Shown in the hero and as the matrix headline. */
export const coreStack = ["Power BI", "DAX", "Power Query", "SQL", "SAP ERP data", "Excel / VBA", "Power Automate"];
