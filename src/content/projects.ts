import type { Project, ProjectTag } from "./types";

// Projects shown in the "Projects" section.
// featured: true  -> shown as a large case study
// featured: false -> shown in the compact list below
// Workplace projects contain no confidential data or screenshots.

export const projectTags: ProjectTag[] = ["Power BI", "SQL", "AI adoption", "Automation", "Excel", "Supply chain"];

export const projects: Project[] = [
  {
    id: "uniper-kpi-dashboards",
    title: "KPI dashboards for Transformation & Excellence",
    context: "Uniper, workplace project",
    kind: "workplace",
    period: "2025 – 2026",
    featured: true,
    tags: ["Power BI", "Automation"],
    summary:
      "Management and operational KPI reporting for the Transformation & Excellence team and related business units, built on Microsoft 365, SharePoint and Microsoft Forms data.",
    built: [
      "5 Power BI dashboards, developed and published to the Power BI Service",
      "Data preparation and models in Power Query, DAX and Excel from Microsoft 365, SharePoint and Microsoft Forms sources",
      "Automated data refresh and Power Automate workflows around the reporting",
    ],
    outcomes: ["5 dashboards published", "Updates presented in monthly team meetings"],
    tools: ["Power BI", "DAX", "Power Query", "SharePoint", "Microsoft Forms", "Power Automate"],
    note: "Company-internal work. No screenshots are published.",
  },
  {
    id: "continental-engineering-reporting",
    title: "Engineering reporting across 8 projects",
    context: "Continental, workplace project",
    kind: "workplace",
    period: "2024 – 2025",
    featured: true,
    tags: ["Power BI", "SQL", "Automation", "Supply chain"],
    summary:
      "Power BI dashboards and data models for Application Engineering Excellence, with recurring reports for engineering and management teams.",
    built: [
      "Weekly European reports, prototype cost reporting, EBOM (engineering bill of materials) and survey dashboards",
      "Data extraction and validation from SAP ERP, SQL databases, SharePoint, JIRA and Excel/CSV with Power Query and DAX",
      "Excel VBA macros for data preparation; KNIME apps for prototype planning of advance sample orders",
    ],
    outcomes: ["8 engineering projects supported", "Stakeholders in Europe, North America, China, Japan, Korea and Romania"],
    tools: ["Power BI", "DAX", "Power Query", "SAP ERP", "SQL", "JIRA", "Excel VBA", "KNIME"],
    note: "Company-internal work. No screenshots are published.",
  },
  {
    id: "supply-chain-sql",
    title: "Supply chain delivery performance analysis",
    context: "Portfolio project, synthetic data",
    kind: "portfolio",
    period: "2026",
    featured: true,
    tags: ["SQL", "Power BI", "Supply chain"],
    summary:
      "End-to-end analysis for a fictional B2B distributor shipping from three German warehouses with four parcel carriers: 5,686 orders over two years.",
    built: [
      "MySQL 8 data model with data-quality checks, a business-day calendar (recursive CTE) and a lead-time function",
      "11 business questions answered with CTEs, window functions, P90 percentiles, ROLLUP and pivot queries",
      "Star schema of reporting views with 20 DAX measures for a three-page Power BI report",
    ],
    outcomes: [
      "Cheapest standard carrier was also the least reliable: 75.2% vs. 89.9% on time",
      "Warehouse bottleneck: 56.7% of Nuremberg orders shipped within one business day, against 81.4% in Duisburg",
      "Moving volume to another carrier on two lanes would avoid about 141 late deliveries, at roughly €88 each",
    ],
    tools: ["MySQL", "SQL", "Power BI", "DAX", "Python"],
    links: [{ label: "Code and documentation on GitHub", href: "https://github.com/Sohrabrana/supply-chain-sql-analysis" }],
  },
  {
    id: "copilot-knowledge-hub",
    title: "AI knowledge hub with a Copilot Studio agent",
    context: "Uniper, workplace project",
    kind: "workplace",
    period: "Aug 2025 – Dec 2025",
    featured: true,
    tags: ["AI adoption", "Automation"],
    summary:
      "A SharePoint-based knowledge management hub with an integrated Copilot Studio agent, designed to improve access to internal knowledge and streamline processes.",
    built: [
      "Copilot Studio agent connected to the SharePoint knowledge hub",
      "Practical Copilot use cases for the team",
      "4 hands-on training sessions on building Copilot agents",
    ],
    tools: ["Copilot Studio", "SharePoint", "Microsoft 365 Copilot", "Power Platform"],
    note: "Company-internal work. No screenshots are published.",
  },
  {
    id: "thesis-copilot-adoption",
    title: "Microsoft Copilot adoption analytics (Bachelor's thesis)",
    context: "Rhine-Waal University, in collaboration with Uniper",
    kind: "academic",
    period: "Jan 2026 – May 2026",
    featured: true,
    tags: ["AI adoption", "Power BI"],
    summary:
      "Thesis: \"Enabling Microsoft Copilot Adoption Across Uniper: The Role of the Transformation & Excellence Team in Driving AI Value Creation\". It combines usage data, a survey and interviews to evaluate adoption drivers, user experience and organizational challenges.",
    built: [
      "Analysis of Microsoft 365 usage data",
      "Employee survey and expert interviews, evaluated with the UTAUT technology acceptance framework",
      "Power BI dashboard to show adoption patterns, feedback and findings",
    ],
    outcomes: ["7 recommendations on training, use cases, governance, leadership and measurement", "Thesis grade 2.0, colloquium 1.7"],
    tools: ["Power BI", "Survey analysis", "UTAUT", "Microsoft 365 usage analytics"],
  },
  {
    id: "inventory-sql",
    title: "Inventory and purchasing analysis",
    context: "Portfolio project, synthetic data",
    kind: "portfolio",
    period: "2026",
    featured: false,
    tags: ["SQL", "Power BI", "Supply chain"],
    summary:
      "SQL basics on the purchasing and stock data of a fictional distributor with three German warehouses and ten suppliers. 16 business questions, a reorder list and a supplier scorecard.",
    built: [],
    outcomes: [
      "19 of 180 stock positions out of stock or below reorder point (about €16.7k to refill)",
      "Only 69% of purchase orders arrived on time",
    ],
    tools: ["MySQL", "SQL", "Power BI", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/Sohrabrana/inventory-management-sql-basics" }],
  },
  {
    id: "adventure-works",
    title: "Executive sales dashboard (Adventure Works)",
    context: "Portfolio project, Microsoft sample data",
    kind: "portfolio",
    period: "2024",
    featured: false,
    tags: ["Power BI"],
    summary:
      "Multi-page Power BI report for sales management: executive KPI overview, regional map, product comparison and customer segmentation, with DAX measures on Power Query-prepared data.",
    built: [],
    tools: ["Power BI Desktop", "DAX", "Power Query"],
  },
  {
    id: "hotel-revenue",
    title: "Hotel revenue analysis",
    context: "Portfolio project",
    kind: "portfolio",
    period: "2023",
    featured: false,
    tags: ["SQL", "Power BI"],
    summary:
      "From a SQL database to a Power BI dashboard: is revenue growing year over year, should the parking lot be expanded, and which trends show in the data.",
    built: [],
    tools: ["SQL", "Power BI"],
    links: [{ label: "GitHub", href: "https://github.com/Sohrabrana/Portfolio-Projects-" }],
  },
  {
    id: "imdb-excel",
    title: "Movie revenue dashboard (IMDb data)",
    context: "Portfolio project",
    kind: "portfolio",
    period: "2024",
    featured: false,
    tags: ["Excel"],
    summary:
      "Interactive Excel dashboard on a Kaggle IMDb dataset: genre mix, revenue against budget, yearly trends, and top directors and films.",
    built: [],
    tools: ["Excel", "Power Query", "Pivot tables"],
    links: [{ label: "GitHub", href: "https://github.com/Sohrabrana/IMDb-Movie-Data-Analysis-" }],
  },
];
