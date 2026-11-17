// Shared types for all editable content in src/content/.
// Dates use "YYYY-MM". Leave `end` empty ("") for something ongoing.

export type YearMonth = `${number}-${string}`;

export type TimelineKind = "work" | "study" | "parttime";

export interface Role {
  /** Used in URLs (#experience-<id>) and to link the hero chart to this role. */
  id: string;
  title: string;
  /** Short name shown in the chart and tabs, e.g. "Uniper". */
  org: string;
  /** Legal entity as written in the reference letter. */
  orgFull: string;
  department?: string;
  location: string;
  mode?: string;
  start: YearMonth;
  end: YearMonth | "";
  kind: TimelineKind;
  summary: string;
  highlights: string[];
  tools: string[];
  /** Optional extra segment, e.g. a voluntary extension after the official end. */
  extension?: { start: YearMonth; end: YearMonth; label: string };
  /** Short quote from the reference letter (Arbeitszeugnis). */
  reference?: { quote: string; lang: "en" | "de"; translation?: string; source: string };
}

export type ProjectTag = "Power BI" | "SQL" | "AI adoption" | "Automation" | "Excel" | "Supply chain";

export interface Project {
  id: string;
  title: string;
  /** Where the work was done: employer, university, or "Portfolio". */
  context: string;
  kind: "workplace" | "academic" | "portfolio";
  period: string;
  featured: boolean;
  tags: ProjectTag[];
  summary: string;
  built: string[];
  /** Results. Only numbers that can be backed up. */
  outcomes?: string[];
  tools: string[];
  links?: { label: string; href: string }[];
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: "chart" | "database" | "workflow" | "route" | "languages";
  skills: { name: string; evidence?: string }[];
}

export interface Education {
  degree: string;
  school: string;
  start: YearMonth;
  end: YearMonth | "";
  status: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  /** "YYYY-MM" */
  date: YearMonth;
  url?: string;
  /** true when the certificate document has been checked. */
  documentOnFile?: boolean;
  note?: string;
}

export interface CvFile {
  id: "en" | "de";
  lang: "en" | "de";
  title: string;
  description: string;
  pdf: string;
  tex: string;
  preview: string;
  updated: string;
  labels: { preview: string; download: string; source: string; overleaf: string; back: string };
}
