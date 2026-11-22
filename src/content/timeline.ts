import { experience } from "./experience";
import { education } from "./education";
import type { TimelineKind, YearMonth } from "./types";

// Rows for the career chart in the hero. Built from experience.ts and
// education.ts, plus the thesis. Edit those files rather than this one.

export interface TimelineRow {
  id: string;
  label: string;
  detail: string;
  kind: TimelineKind | "thesis";
  start: YearMonth;
  end: YearMonth | "";
  extension?: { start: YearMonth; end: YearMonth; label: string };
  /** Where a click on the bar goes. */
  href: string;
}

const shortDegree = (degree: string) => degree.replace("Operations Research and Business Analytics", "Operations Research & Business Analytics");

export const timelineRows: TimelineRow[] = [
  ...experience.map<TimelineRow>((r) => ({
    id: r.id,
    label: r.org,
    detail: r.title,
    kind: r.kind,
    start: r.start,
    end: r.end,
    extension: r.extension,
    href: `#experience-${r.id}`,
  })),
  ...education.map<TimelineRow>((e, i) => ({
    id: `edu-${i}`,
    label: e.degree.split(" ")[0],
    detail: `${shortDegree(e.degree)}, ${e.school}`,
    kind: "study",
    start: e.start,
    end: e.end,
    href: "#education",
  })),
  {
    id: "thesis",
    label: "Thesis",
    detail: "Bachelor's thesis with Uniper: Microsoft Copilot adoption",
    kind: "thesis",
    start: "2026-01",
    end: "2026-05",
    href: "#project-thesis-copilot-adoption",
  } satisfies TimelineRow,
].sort((a, b) => a.start.localeCompare(b.start));

export const kindLabels: Record<TimelineRow["kind"], string> = {
  work: "Work",
  study: "Study",
  thesis: "Thesis",
  parttime: "Part-time job",
};

/** First and last month shown on the career chart's axis. */
export function timelineAxis() {
  const toIndex = (ym: string) => {
    const [y, m] = ym.split("-").map(Number);
    return y * 12 + (m - 1);
  };
  const starts = timelineRows.map((r) => toIndex(r.start));
  const ends = timelineRows.map((r) => {
    const latest = r.extension?.end ?? r.end;
    return latest ? toIndex(latest) : toIndex(r.start) + 8;
  });
  const first = Math.min(...starts);
  const last = Math.max(...ends);
  const toYm = (i: number) => `${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`;
  // Axis starts in January of the first year.
  return { axisStart: `${Math.floor(first / 12)}-01`, axisEnd: toYm(last) };
}
