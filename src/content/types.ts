// Shared types for all editable content in src/content/.
// Dates use "YYYY-MM". Leave `end` empty ("") for something ongoing.

export type YearMonth = `${number}-${string}`;

export type TimelineKind = "work" | "study" | "parttime";

export interface Role {
  /** Used in URLs (#experience-<id>) and to link the career chart to this role. */
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

/** Filter topics for the projects section. Named after the roles a recruiter is hiring for. */
export type ProjectTag = "BI & reporting" | "Supply chain" | "Digital transformation" | "SQL";

/** A step in a schematic data-flow diagram (used where screenshots can't be published). */
export interface FlowStep {
  title: string;
  items: string[];
}

/** One bar or point in a chart drawn from a project's published results. */
export interface ChartDatum {
  label: string;
  value: number;
  /** Extra text shown next to the value, e.g. "€0.33/kg". */
  note?: string;
  /** Draw this bar in the highlight colour. */
  highlight?: boolean;
}

export type Evidence =
  | {
      type: "flow";
      title: string;
      steps: FlowStep[];
      caption: string;
    }
  | {
      type: "charts";
      charts: {
        title: string;
        kind: "bars" | "line";
        /** What each bar or point is, e.g. "Carrier" or "Month" (table header). */
        dimension: string;
        /** What the value measures, e.g. "On time" (table header and tooltip). */
        measure: string;
        unit: string;
        /** Lowest value on the value axis. Bars always start at 0; a line chart may start higher. */
        min: number;
        max: number;
        data: ChartDatum[];
        /** Optional reference line, e.g. the average. */
        reference?: { value: number; label: string };
      }[];
      caption: string;
    };

export interface Project {
  id: string;
  title: string;
  /** Where the work was done: employer, university, or "Portfolio". */
  context: string;
  kind: "workplace" | "academic" | "portfolio";
  period: string;
  /** true = full case study (keep this to the four strongest projects). */
  featured: boolean;
  tags: ProjectTag[];
  /** Case studies: the business question in one or two sentences. Short list: the summary. */
  problem: string;
  /** What I did myself. */
  did: string[];
  /** Results or findings. Only numbers that can be backed up. */
  results?: string[];
  tools: string[];
  links?: { label: string; href: string }[];
  /** Visual evidence for case studies: real charts or a schematic. Never invented data. */
  evidence?: Evidence;
  note?: string;
}

export type SkillPlace = "uniper" | "continental" | "projects" | "study";

export interface SkillGroup {
  id: string;
  title: string;
  skills: { name: string; usedAt: SkillPlace[]; note?: string }[];
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
