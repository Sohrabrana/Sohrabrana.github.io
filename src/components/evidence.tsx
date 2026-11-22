"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Evidence } from "@/content/types";

type Chart = Extract<Evidence, { type: "charts" }>["charts"][number];
type Flow = Extract<Evidence, { type: "flow" }>;

/** Visual evidence for a case study: a schematic of the setup, or charts of published results. */
export function EvidencePanel({ evidence }: { evidence: Evidence }) {
  return (
    <figure className="rounded-lg border border-line bg-paper p-5 sm:p-6">
      {evidence.type === "flow" ? <FlowDiagram flow={evidence} /> : <Charts charts={evidence.charts} />}
      <figcaption className="mt-5 border-t border-line pt-3 text-sm text-muted">{evidence.caption}</figcaption>
    </figure>
  );
}

/* ---------- Schematic data flow ---------- */

function FlowDiagram({ flow }: { flow: Flow }) {
  return (
    <div>
      <p className="font-semibold">{flow.title}</p>
      <ol className="mt-5">
        {flow.steps.map((step, i) => (
          <li key={step.title} className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-x-4 pb-6 last:pb-0">
            {i < flow.steps.length - 1 && (
              <span className="absolute bottom-0 left-4 top-8 w-px -translate-x-1/2 bg-line-strong" aria-hidden="true" />
            )}
            <span className="relative grid size-8 place-items-center rounded-full border border-line-strong bg-surface text-[0.85rem] font-semibold tabular">
              {i + 1}
            </span>
            <div className="pt-1">
              <p className="text-[0.95rem] font-semibold leading-tight">{step.title}</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {step.items.map((item) => (
                  <li key={item} className="rounded-md border border-line-strong/60 bg-surface px-2.5 py-1 text-[0.88rem] leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Charts from published results ---------- */

function Charts({ charts }: { charts: Chart[] }) {
  return (
    <div className="space-y-8">
      {charts.map((c) => (
        <div key={c.title}>
          <p className="font-semibold">{c.title}</p>
          <div className="mt-4">{c.kind === "bars" ? <BarChart chart={c} /> : <LineChart chart={c} />}</div>
          <DataTable chart={c} />
        </div>
      ))}
    </div>
  );
}

const fmt = (v: number, unit: string) => `${v.toLocaleString("en-US", { maximumFractionDigits: 1 })}${unit}`;

function BarChart({ chart }: { chart: Chart }) {
  const ticks = [0, 25, 50, 75, 100].filter((t) => t >= chart.min && t <= chart.max);
  const pct = (v: number) => ((v - chart.min) / (chart.max - chart.min)) * 100;
  // Phones: name and value on one line, the bar full width below. sm and up: name | bar | value.
  const grid = "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 sm:grid-cols-[7rem_minmax(0,1fr)_8.5rem]";
  const track = "relative col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1";
  return (
    <div className="space-y-3 sm:space-y-0">
      {chart.data.map((d) => (
        <div key={d.label} className={grid} title={`${d.label}: ${fmt(d.value, chart.unit)} ${chart.measure.toLowerCase()}`}>
          <span className="col-start-1 row-start-1 text-[0.9rem] font-medium">{d.label}</span>
          <div className={`${track} mt-1.5 h-6 sm:mt-0 sm:h-11`}>
            {ticks.map((t) => (
              <span key={t} aria-hidden="true" className="absolute inset-y-0 w-px bg-grid" style={{ left: `${pct(t)}%` }} />
            ))}
            <span
              className={`absolute left-0 top-1/2 h-5 -translate-y-1/2 rounded-r-[4px] ${d.highlight ? "bg-route" : "bg-parttime"}`}
              style={{ width: `${pct(d.value)}%` }}
            />
          </div>
          <span className="col-start-2 row-start-1 text-right text-[0.88rem] leading-tight sm:col-start-3 sm:text-left">
            <span className="font-semibold tabular">{fmt(d.value, chart.unit)}</span>
            {d.note && <span className="ml-1.5 text-[0.78rem] text-muted sm:ml-0 sm:block">{d.note}</span>}
          </span>
        </div>
      ))}
      <div className={grid} aria-hidden="true">
        <span className="hidden sm:block" />
        <div className="relative col-span-2 mt-1 h-5 text-xs text-muted tabular sm:col-span-1">
          {ticks.map((t) => (
            <span
              key={t}
              className={`absolute ${t === chart.min ? "" : t === chart.max ? "-translate-x-full" : "-translate-x-1/2"}`}
              style={{ left: `${pct(t)}%` }}
            >
              {t}
              {chart.unit}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function useWidth<T extends HTMLElement>(initial: number) {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(initial);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(Math.round(entry.contentRect.width)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, width] as const;
}

function LineChart({ chart }: { chart: Chart }) {
  const [ref, width] = useWidth<HTMLDivElement>(560);
  const [hover, setHover] = useState<number | null>(null);

  const height = 230;
  const pad = { top: 16, right: 16, bottom: 28, left: 40 };
  const innerW = Math.max(width - pad.left - pad.right, 10);
  const innerH = height - pad.top - pad.bottom;
  const n = chart.data.length;
  const x = (i: number) => pad.left + (n === 1 ? innerW / 2 : (i / (n - 1)) * innerW);
  const y = (v: number) => pad.top + (1 - (v - chart.min) / (chart.max - chart.min)) * innerH;
  const step = 10;
  const ticks: number[] = [];
  for (let t = Math.ceil(chart.min / step) * step; t <= chart.max; t += step) ticks.push(t);
  const path = chart.data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d.value).toFixed(1)}`).join(" ");
  const showEvery = width < 420 ? 2 : 1;
  const active = hover !== null ? chart.data[hover] : null;

  return (
    <div ref={ref} className="relative">
      <svg width={width} height={height} className="block max-w-full overflow-visible" aria-hidden="true" focusable="false">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={pad.left} x2={width - pad.right} y1={y(t)} y2={y(t)} className="stroke-grid" strokeWidth={1} />
            <text x={pad.left - 8} y={y(t)} dy="0.32em" textAnchor="end" className="fill-muted text-[11px] tabular">
              {t}
              {chart.unit}
            </text>
          </g>
        ))}
        {chart.reference && (
          <g>
            <line
              x1={pad.left}
              x2={width - pad.right}
              y1={y(chart.reference.value)}
              y2={y(chart.reference.value)}
              className="stroke-muted"
              strokeWidth={1}
              opacity={0.6}
            />
            <text x={pad.left + 6} y={y(chart.reference.value) + 15} className="fill-muted text-[11px]">
              {chart.reference.label}
            </text>
          </g>
        )}
        {chart.data.map((d, i) =>
          i % showEvery === 0 || d.highlight ? (
            <text key={d.label} x={x(i)} y={height - 8} textAnchor="middle" className="fill-muted text-[11px]">
              {d.label}
            </text>
          ) : null,
        )}
        <path d={path} fill="none" className="stroke-route" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
        {hover !== null && (
          <line x1={x(hover)} x2={x(hover)} y1={pad.top} y2={pad.top + innerH} className="stroke-line-strong" strokeWidth={1} />
        )}
        {chart.data.map((d, i) =>
          d.highlight || hover === i ? (
            <g key={d.label}>
              <circle cx={x(i)} cy={y(d.value)} r={5} className="fill-route stroke-paper" strokeWidth={2} />
              {d.highlight && hover === null && (
                <text x={x(i) - 9} y={y(d.value)} dy="0.32em" textAnchor="end" className="fill-ink text-[12px] font-semibold tabular">
                  {d.label} {fmt(d.value, chart.unit)}
                </text>
              )}
            </g>
          ) : null,
        )}
        {/* Hover targets: one column per month, wider than the mark */}
        {chart.data.map((d, i) => (
          <rect
            key={d.label}
            x={x(i) - innerW / (n - 1) / 2}
            y={pad.top}
            width={innerW / (n - 1)}
            height={innerH}
            fill="transparent"
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover((h) => (h === i ? null : h))}
          />
        ))}
      </svg>
      {active && hover !== null && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm shadow-[0_6px_18px_-10px_rgb(15_30_51/0.5)]"
          style={{ left: x(hover), top: y(active.value) - 10 }}
        >
          <span className="font-semibold">{active.label}</span> <span className="tabular">
            {fmt(active.value, chart.unit)} {chart.measure.toLowerCase()}
          </span>
        </div>
      )}
    </div>
  );
}

/** The numbers behind each chart, for screen readers and anyone who prefers a table. */
function DataTable({ chart }: { chart: Chart }) {
  return (
    <details className="group mt-3 text-sm">
      <summary className="inline-flex cursor-pointer items-center gap-1 rounded font-medium text-route hover:underline">
        Show the numbers
        <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <table className="mt-2 w-full max-w-sm text-left">
        <caption className="sr-only">{chart.title}</caption>
        <thead>
          <tr className="border-b border-line text-muted">
            <th scope="col" className="py-1 pr-4 font-medium">
              {chart.dimension}
            </th>
            <th scope="col" className="py-1 pr-4 text-right font-medium">
              {chart.measure}
            </th>
            {chart.data.some((d) => d.note) && (
              <th scope="col" className="py-1 font-medium">
                Note
              </th>
            )}
          </tr>
        </thead>
        <tbody className="tabular">
          {chart.data.map((d) => (
            <tr key={d.label} className="border-b border-line/70">
              <th scope="row" className="py-1 pr-4 font-normal">
                {d.label}
              </th>
              <td className="py-1 pr-4 text-right">{fmt(d.value, chart.unit)}</td>
              {chart.data.some((x) => x.note) && <td className="py-1 text-muted">{d.note}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </details>
  );
}
