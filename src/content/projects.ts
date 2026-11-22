import type { Project, ProjectTag } from "./types";

// Projects shown in the "Projects" section.
// featured: true  -> shown as a large case study (keep this to the four strongest projects)
// featured: false -> shown in the compact list below
// Workplace projects contain no confidential data or screenshots.

export const projectTags: ProjectTag[] = ["Power BI", "SQL", "AI adoption", "Automation", "Excel", "Supply chain"];

export const projects: Project[] = [
  {
    id: "uniper-kpi-dashboards",
    title: "Management KPI dashboards for Transformation & Excellence",
    context: "Uniper, working student",
    kind: "workplace",
    period: "Apr 2025 – Apr 2026",
    featured: true,
    tags: ["Power BI", "Automation"],
    summary:
      "The Transformation & Excellence team and related business units needed management and operational KPI reporting built on data from Microsoft 365, SharePoint and Microsoft Forms, and the reports had to stay up to date on their own.",
    built: [
      "Developed five Power BI dashboards and published them to the Power BI Service.",
      "Prepared and modeled the data with Power Query, DAX and Excel, and maintained the automated data refresh.",
      "Built Power Automate workflows around the reporting and looked for other routine steps worth automating.",
      "Presented the dashboard updates in the team's monthly meetings.",
    ],
    outcomes: ["5 dashboards published for management and operational KPI reporting", "Updates reviewed with the team every month"],
    tools: ["Power BI Desktop & Service", "DAX", "Power Query", "Excel", "SharePoint", "Microsoft Forms", "Power Automate"],
    note: "Company-internal work. No screenshots are published.",
  },
  {
    id: "supply-chain-sql",
    title: "Supply chain delivery performance analysis",
    context: "Portfolio project on GitHub, synthetic data",
    kind: "portfolio",
    period: "2026",
    featured: true,
    tags: ["SQL", "Power BI", "Supply chain"],
    summary:
      "A fictional B2B distributor ships from three German warehouses with four parcel carriers, and about one delivery in six arrives late. Where do the late deliveries come from, and what would it cost to fix them?",
    built: [
      "Designed a MySQL 8 data model for 5,686 orders over two years, with eight data-quality checks, a business-day calendar (recursive CTE) and a lead-time function.",
      "Answered 11 business questions with CTEs, window functions, P90 percentiles, ROLLUP and pivot queries.",
      "Built a star schema of reporting views and 20 DAX measures for a three-page Power BI report design.",
    ],
    outcomes: [
      "The cheapest standard carrier was also the least reliable: 75.2% on time, against 89.9% for the best one.",
      "Nuremberg is the warehouse bottleneck: 56.7% of orders shipped within one business day, against 81.4% in Duisburg.",
      "On-time delivery drops to 68.1% in December.",
      "Moving volume to another carrier on two lanes would avoid about 141 late deliveries, at roughly €88 each.",
    ],
    tools: ["MySQL", "SQL", "Power BI", "DAX", "Python"],
    links: [{ label: "Code, data and documentation", href: "https://github.com/Sohrabrana/supply-chain-sql-analysis" }],
  },
  {
    id: "continental-engineering-reporting",
    title: "Engineering reporting across 8 projects",
    context: "Continental, internship",
    kind: "workplace",
    period: "Aug 2024 – Apr 2025",
    featured: true,
    tags: ["Power BI", "SQL", "Automation", "Supply chain"],
    summary:
      "Application Engineering Excellence needed recurring reports for engineering and management teams on three continents. The data sat in SAP ERP, SQL databases, SharePoint, JIRA and Excel files.",
    built: [
      "Developed and modified Power BI dashboards and data models for 8 projects, including weekly European KPI reports, prototype cost reporting, EBOM (engineering bill of materials) and survey analysis.",
      "Extracted, transformed and validated the source data with Power Query and DAX.",
      "Automated data preparation with Excel VBA macros, and used KNIME apps to support prototype planning for advance sample orders.",
      "Adapted dashboards to what each stakeholder group needed, and prepared workshop presentations and survey forms.",
    ],
    outcomes: [
      "Reports used by stakeholders in Europe, North America, China, Japan, Korea and Romania",
      "Continued remotely for three months after the internship (Jan – Apr 2025)",
    ],
    tools: ["Power BI", "DAX", "Power Query", "SAP ERP", "SQL", "SharePoint", "JIRA", "Excel VBA", "KNIME"],
    note: "Company-internal work. No screenshots are published.",
  },
  {
    id: "thesis-copilot-adoption",
    title: "Microsoft 365 Copilot adoption analytics",
    context: "Bachelor's thesis with Uniper, Rhine-Waal University",
    kind: "academic",
    period: "Jan 2026 – May 2026",
    featured: true,
    tags: ["AI adoption", "Power BI"],
    summary:
      "How do you get people to actually use an AI assistant at work? My thesis looked at Microsoft 365 Copilot at Uniper: what drives adoption, what holds employees back, and what the Transformation & Excellence team can do about it.",
    built: [
      "Combined Microsoft 365 usage data, an employee survey and expert interviews.",
      "Evaluated the results with the UTAUT technology acceptance framework.",
      "Built a Power BI dashboard that shows adoption patterns, feedback and findings.",
    ],
    outcomes: [
      "7 recommendations on training, use cases, governance, leadership and measurement",
      "Thesis grade 2.0, colloquium 1.7",
    ],
    tools: ["Power BI", "Survey analysis", "UTAUT", "Microsoft 365 usage analytics"],
    note: "Thesis title: \"Enabling Microsoft Copilot Adoption Across Uniper: The Role of the Transformation & Excellence Team in Driving AI Value Creation\".",
  },

  {
    id: "copilot-knowledge-hub",
    title: "AI knowledge hub with a Copilot Studio agent",
    context: "Uniper, working student",
    kind: "workplace",
    period: "Aug – Dec 2025",
    featured: false,
    tags: ["AI adoption", "Automation"],
    summary:
      "A SharePoint knowledge management hub with an integrated Copilot Studio agent, so colleagues can find internal knowledge more easily. I also put together practical Copilot use cases and ran 4 hands-on training sessions on building Copilot agents.",
    built: [],
    tools: ["Copilot Studio", "SharePoint", "Microsoft 365 Copilot", "Power Platform"],
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
      "SQL on the purchasing and stock data of a fictional distributor with three German warehouses and ten suppliers: 16 business questions, a reorder list and a supplier scorecard. 19 of 180 stock positions were out of stock or below the reorder point, and only 69% of purchase orders arrived on time.",
    built: [],
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
      "A multi-page Power BI report for sales management: executive KPI overview, regional map, product comparison and customer segmentation, with DAX measures on data prepared in Power Query.",
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
      "From a SQL database to a Power BI dashboard, answering three questions: is revenue growing year over year, should the parking lot be expanded, and which trends show in the data?",
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
      "An interactive Excel dashboard on a Kaggle IMDb dataset: genre mix, revenue against budget, yearly trends, and top directors and films.",
    built: [],
    tools: ["Excel", "Power Query", "Pivot tables"],
    links: [{ label: "GitHub", href: "https://github.com/Sohrabrana/IMDb-Movie-Data-Analysis-" }],
  },
];
