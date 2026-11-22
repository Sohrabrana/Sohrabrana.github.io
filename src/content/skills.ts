import type { SkillGroup } from "./types";

// Skills grouped by area. "evidence" says where the skill was used,
// so recruiters can connect it to experience instead of a self-rating.

export const skillGroups: SkillGroup[] = [
  {
    id: "bi",
    title: "BI and reporting",
    icon: "chart",
    skills: [
      { name: "Power BI Desktop & Service", evidence: "Uniper, Continental, 4 portfolio projects" },
      { name: "DAX", evidence: "Uniper, Continental, supply chain project (20 measures)" },
      { name: "Power Query", evidence: "Uniper, Continental" },
      { name: "Data modeling (star schema)", evidence: "Continental, supply chain project" },
      { name: "KPI dashboards and automated refresh", evidence: "Uniper" },
      { name: "Data visualization", evidence: "All dashboard work" },
    ],
  },
  {
    id: "data",
    title: "Data and systems",
    icon: "database",
    skills: [
      { name: "SQL (MySQL)", evidence: "Continental data sources, 3 SQL portfolio projects" },
      { name: "SAP ERP data", evidence: "Continental; SAP University Alliances certificate" },
      { name: "Excel, advanced (VBA, macros, pivot tables)", evidence: "Continental, Uniper" },
      { name: "SharePoint and JIRA as data sources", evidence: "Continental, Uniper" },
      { name: "KNIME", evidence: "Continental" },
      { name: "Python", evidence: "Synthetic data generation in portfolio projects" },
    ],
  },
  {
    id: "automation",
    title: "Automation and AI",
    icon: "workflow",
    skills: [
      { name: "Power Automate", evidence: "Uniper" },
      { name: "Power Apps", evidence: "Uniper" },
      { name: "Microsoft Copilot Studio", evidence: "Uniper knowledge hub agent" },
      { name: "Microsoft 365 Copilot adoption and training", evidence: "Uniper, Bachelor's thesis" },
    ],
  },
  {
    id: "business",
    title: "Business and process",
    icon: "route",
    skills: [
      { name: "Process analysis and optimization", evidence: "Uniper Operational Excellence" },
      { name: "Lean Six Sigma (Yellow Belt)", evidence: "Uniper training, 2026" },
      { name: "Supply chain and logistics", evidence: "B.Sc. Mobility and Logistics" },
      { name: "Survey analysis (UTAUT)", evidence: "Bachelor's thesis" },
      { name: "Stakeholder training and presentations", evidence: "Uniper, Continental" },
    ],
  },
];
