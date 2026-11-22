"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { TimelineRow } from "@/content/timeline";
import { kindLabels } from "@/content/timeline";
import { formatRange, formatYm, monthIndex } from "@/lib/site";

interface Props {
  rows: TimelineRow[];
  /** "YYYY-MM" of the first month on the axis */
  axisStart: string;
  /** "YYYY-MM" of the last month on the axis */
  axisEnd: string;
}

const barColor: Record<TimelineRow["kind"], string> = {
  work: "bg-route",
  study: "bg-study",
  thesis: "bg-signal",
  parttime: "bg-parttime",
};

export function CareerChart({ rows, axisStart, axisEnd }: Props) {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<string | null>(null);

  const start = monthIndex(axisStart);
  const total = monthIndex(axisEnd) - start + 1;
  const pct = (ym: string) => ((monthIndex(ym) - start) / total) * 100;
  const span = (from: string, to: string) => ((monthIndex(to) - monthIndex(from) + 1) / total) * 100;

  const firstYear = Number(axisStart.slice(0, 4));
  const lastYear = Number(axisEnd.slice(0, 4));
  const years = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);

  const active = rows.find((r) => r.id === activeId);

  return (
    <figure className="rounded-2xl border border-line bg-surface p-5 sm:p-7">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <span className="font-display text-2xl font-semibold">Career so far</span>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted" aria-label="Legend">
          {(["work", "study", "thesis", "parttime"] as const).map((k) => (
            <li key={k} className="flex items-center gap-2">
              <span className={`inline-block h-2.5 w-5 rounded-sm ${barColor[k]}`} aria-hidden="true" />
              {kindLabels[k]}
            </li>
          ))}
        </ul>
      </figcaption>

      <div className="mt-6">
        {/* Year axis */}
        <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[7.5rem_minmax(0,1fr)]" aria-hidden="true">
          <span className="hidden sm:block" />
          <div className="relative h-5 text-xs text-muted tabular">
            {years.map((y) => {
              const left = pct(`${y}-01`);
              if (left < 0 || left > 100) return null;
              return (
                <span key={y} className="absolute -translate-x-1/2" style={{ left: `${left}%` }}>
                  <span className="sm:hidden">’{String(y).slice(2)}</span>
                  <span className="hidden sm:inline">{y}</span>
                </span>
              );
            })}
          </div>
        </div>

        <ol className="relative mt-1 space-y-3 sm:space-y-2.5">
          {rows.map((row, i) => {
            const ongoing = !row.end;
            const end = row.end || axisEnd;
            const left = pct(row.start);
            const width = span(row.start, end);
            const range = formatRange(row.start, row.end);
            return (
              <li key={row.id} className="grid grid-cols-[minmax(0,1fr)] items-center gap-x-3 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
                <span className="flex items-baseline justify-between gap-2 text-sm sm:block">
                  <span className="font-medium">{row.label}</span>
                  <span className="text-xs text-muted tabular sm:hidden">{range}</span>
                </span>
                <div className="relative h-7">
                  {/* Year gridlines */}
                  {years.map((y) => (
                    <span
                      key={y}
                      aria-hidden="true"
                      className="absolute inset-y-0 w-px bg-grid"
                      style={{ left: `${pct(`${y}-01`)}%` }}
                    />
                  ))}
                  <motion.a
                    href={row.href}
                    aria-label={`${row.detail}, ${range}`}
                    onMouseEnter={() => setActiveId(row.id)}
                    onMouseLeave={() => setActiveId((id) => (id === row.id ? null : id))}
                    onFocus={() => setActiveId(row.id)}
                    onBlur={() => setActiveId((id) => (id === row.id ? null : id))}
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    style={{ left: `${left}%`, width: `${width}%`, transformOrigin: "left center" }}
                    className={`absolute inset-y-1 block min-w-2 rounded-[5px] outline-offset-2 transition-[filter,box-shadow] hover:brightness-110 ${
                      barColor[row.kind]
                    } ${activeId === row.id ? "ring-2 ring-ink/70 ring-offset-2 ring-offset-surface" : ""} ${
                      ongoing ? "[mask-image:linear-gradient(to_right,black_55%,transparent)]" : ""
                    }`}
                  />
                  {row.extension && (
                    <motion.span
                      aria-hidden="true"
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.85 + i * 0.09 }}
                      title={row.extension.label}
                      className="hatch absolute inset-y-1 rounded-r-[5px] text-route/70"
                      style={{
                        left: `${pct(row.extension.start) + span(row.extension.start, row.extension.start)}%`,
                        width: `${span(row.extension.start, row.extension.end) - span(row.extension.start, row.extension.start)}%`,
                      }}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Read-out for the hovered or focused bar */}
      <p className="mt-5 min-h-12 border-t border-line pt-4 text-sm text-muted" aria-live="polite">
        {active ? (
          <>
            <span className="block font-medium text-ink">{active.detail}</span>
            <span className="tabular">
              {formatRange(active.start, active.end)}
              {active.extension &&
                `, plus ${active.extension.label.toLowerCase()} until ${formatYm(active.extension.end)}`}
            </span>
          </>
        ) : (
          "Select a bar to jump to the details."
        )}
      </p>
    </figure>
  );
}
