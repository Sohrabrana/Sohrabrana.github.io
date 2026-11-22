"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { Table2 } from "lucide-react";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { coreStack } from "@/content/skills";

// The hero diagram: my profile drawn like the model view of a Power BI report.
// One table per area, each linked to the portrait and to its section on the page.
// The relationship lines are measured after layout and draw in once (CSS animation).

const year = (ym: string) => ym.slice(0, 4);
const shortYears = (start: string, end: string) => (end ? `${year(start)}–${year(end).slice(2)}` : `since ${year(start)}`);

type Row = { primary: string; secondary?: string };
type ModelTable = { id: string; name: string; href: string; rows: Row[]; side: "left" | "right"; place: string };

const uniper = experience.find((r) => r.id === "uniper")!;
const conti = experience.find((r) => r.id === "continental")!;
const bachelor = education.find((e) => e.degree.startsWith("B.Sc."))!;
const master = education.find((e) => e.degree.startsWith("M.Sc."))!;

const tables: ModelTable[] = [
  {
    id: "experience",
    name: "Experience",
    href: "#experience",
    side: "left",
    place: "sm:col-start-1 sm:row-start-1",
    rows: [
      { primary: `Uniper, ${uniper.location}`, secondary: `Working student ${shortYears(uniper.start, uniper.end)}` },
      { primary: `Continental, ${conti.location.replace(" (Bodensee)", "")}`, secondary: `Intern ${shortYears(conti.start, conti.extension?.end ?? conti.end)}` },
    ],
  },
  {
    id: "toolkit",
    name: "Toolkit",
    href: "#skills",
    side: "right",
    place: "sm:col-start-3 sm:row-start-1",
    rows: [{ primary: coreStack.slice(0, 4).join(", ") }, { primary: coreStack.slice(4).join(", ") }],
  },
  {
    id: "education",
    name: "Education",
    href: "#education",
    side: "left",
    place: "sm:col-start-1 sm:row-start-2",
    rows: [
      { primary: "B.Sc. Mobility and Logistics", secondary: `Rhine-Waal University, ${year(bachelor.end)}` },
      { primary: "M.Sc. Operations Research and Business Analytics", secondary: `OVGU Magdeburg, ${shortYears(master.start, master.end)}` },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    href: "#contact",
    side: "right",
    place: "sm:col-start-3 sm:row-start-2",
    rows: [
      { primary: "Start immediately, full-time" },
      { primary: "Anywhere in Germany", secondary: "On-site, hybrid or remote" },
      { primary: "English C1, German B1" },
    ],
  },
];

type Line = { x1: number; y1: number; x2: number; y2: number };

export function ProfileModel() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const tableRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [lines, setLines] = useState<Line[]>([]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const center = centerRef.current;
    if (!canvas || !center) return;

    const measure = () => {
      if (getComputedStyle(center).display === "none") {
        setLines([]);
        return;
      }
      const box = canvas.getBoundingClientRect();
      const c = center.getBoundingClientRect();
      const next = tables.flatMap((t, i) => {
        const el = tableRefs.current[t.id];
        if (!el) return [];
        const r = el.getBoundingClientRect();
        const top = i < 2;
        const cy = c.top + c.height * (top ? 0.3 : 0.7) - box.top;
        const ty = r.top + r.height / 2 - box.top;
        return t.side === "left"
          ? [{ x1: c.left - box.left, y1: cy, x2: r.right - box.left, y2: ty }]
          : [{ x1: c.right - box.left, y1: cy, x2: r.left - box.left, y2: ty }];
      });
      setLines(next);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={canvasRef}
        className="relative grid gap-3 min-[440px]:grid-cols-2 sm:model-canvas sm:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)_minmax(0,1fr)] sm:grid-rows-[auto_auto] sm:items-center sm:gap-x-10 sm:gap-y-8 sm:rounded-xl sm:border sm:border-line sm:p-6"
      >
        <svg className="pointer-events-none absolute inset-0 hidden size-full sm:block" aria-hidden="true" focusable="false">
          {lines.map((l, i) => (
            <g key={i} className="text-line-strong">
              <line
                {...l}
                pathLength={1}
                stroke="currentColor"
                strokeWidth={1.5}
                className="model-line"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              />
              <circle cx={l.x1} cy={l.y1} r={3} fill="currentColor" className="model-table" style={{ animationDelay: "650ms" }} />
              <text
                x={l.x2 + (l.x2 > l.x1 ? -12 : 6)}
                y={l.y2 - 6}
                className="model-table fill-muted text-[11px]"
                style={{ animationDelay: "750ms" }}
              >
                *
              </text>
              <text
                x={l.x1 + (l.x2 > l.x1 ? 6 : -11)}
                y={l.y1 - 6}
                className="model-table fill-muted text-[11px]"
                style={{ animationDelay: "750ms" }}
              >
                1
              </text>
            </g>
          ))}
        </svg>

        {/* The person: centre table */}
        <div
          ref={centerRef}
          className="model-table relative hidden sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:block"
          style={{ animationDelay: "100ms" }}
        >
          <div className="overflow-hidden rounded-md border border-line-strong/80 bg-surface shadow-[0_14px_32px_-20px_rgb(15_30_51/0.6)]">
            <p className="flex items-center gap-2 border-t-[3px] border-signal px-3 pb-1.5 pt-2 text-[0.82rem] font-semibold">
              <Table2 className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
              {profile.name}
            </p>
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={800}
              height={1000}
              priority
              sizes="200px"
              className="aspect-[4/5] w-full border-t border-line object-cover"
            />
            <p className="border-t border-line px-3 py-1.5 text-[0.78rem] text-muted">{profile.locationShort}</p>
          </div>
        </div>

        {tables.map((t, i) => (
          <a
            key={t.id}
            ref={(el) => {
              tableRefs.current[t.id] = el;
            }}
            href={t.href}
            className={`model-table relative block rounded-md border border-line-strong/80 bg-surface transition-colors hover:border-route ${t.place}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="flex items-center gap-2 rounded-t-md border-t-[3px] border-route px-3 pb-1.5 pt-2 text-[0.82rem] font-semibold">
              <Table2 className="size-3.5 shrink-0 text-route" aria-hidden="true" />
              {t.name}
            </span>
            <ul className="space-y-1.5 border-t border-line px-3 py-2.5 text-[0.8rem] leading-snug">
              {t.rows.map((r) => (
                <li key={r.primary}>
                  <span className="block font-medium">{r.primary}</span>
                  {r.secondary && <span className="block text-muted">{r.secondary}</span>}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        My profile, drawn like a Power BI data model. Select a table to jump to the details.
      </figcaption>
    </figure>
  );
}
