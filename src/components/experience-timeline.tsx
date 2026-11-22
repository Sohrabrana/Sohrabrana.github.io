"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Quote } from "lucide-react";
import type { Role } from "@/content/types";
import { formatRange, formatYm } from "@/lib/site";

const dotColor: Record<Role["kind"], string> = {
  work: "bg-route",
  study: "bg-study",
  parttime: "bg-parttime",
};

export function ExperienceTimeline({ roles }: { roles: Role[] }) {
  const [selected, setSelected] = useState(roles[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reduce = useReducedMotion();

  // Select the role named in the URL hash (#experience-<id>), e.g. from the hero chart.
  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace("#experience-", "");
      if (roles.some((r) => r.id === id)) setSelected(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [roles]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    let next: number | null = null;
    if (e.key in keys) next = (index + keys[e.key] + roles.length) % roles.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = roles.length - 1;
    if (next === null) return;
    e.preventDefault();
    const id = roles[next].id;
    setSelected(id);
    tabRefs.current[id]?.focus();
  }

  return (
    <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10">
      {roles.map((r) => (
        <span key={r.id} id={`experience-${r.id}`} className="sr-only" />
      ))}

      <div
        role="tablist"
        aria-label="Roles"
        aria-orientation="vertical"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:block md:space-y-1 md:overflow-visible md:px-0 md:pb-0"
      >
        {roles.map((r, i) => {
          const isSelected = r.id === selected;
          return (
            <button
              key={r.id}
              ref={(el) => {
                tabRefs.current[r.id] = el;
              }}
              id={`tab-${r.id}`}
              role="tab"
              type="button"
              aria-selected={isSelected}
              aria-controls={`panel-${r.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(r.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative shrink-0 rounded-xl border px-4 py-3 text-left transition-colors md:w-full ${
                isSelected
                  ? "border-line bg-surface shadow-[0_1px_0_0_var(--line)]"
                  : "border-transparent hover:bg-surface/60"
              }`}
            >
              {isSelected && (
                <span className="absolute inset-y-3 left-0 hidden w-1 rounded-r bg-signal md:block" aria-hidden="true" />
              )}
              <span className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${dotColor[r.kind]}`} aria-hidden="true" />
                <span className="font-display text-xl font-semibold leading-tight">{r.org}</span>
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-sm text-muted tabular">
                {formatRange(r.start, r.end)}
              </span>
            </button>
          );
        })}
      </div>

      <div>
        {roles.map((r) => {
          const isSelected = r.id === selected;
          return (
            <div
              key={r.id}
              id={`panel-${r.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${r.id}`}
              hidden={!isSelected}
              tabIndex={0}
              className="focus-visible:outline-offset-8"
            >
              {isSelected && (
                <motion.article
                  key={r.id}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <RoleDetails role={r} />
                </motion.article>
              )}
              {!isSelected && (
                <article>
                  <RoleDetails role={r} />
                </article>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RoleDetails({ role: r }: { role: Role }) {
  return (
    <>
      <h3 className="font-display text-3xl font-semibold leading-tight sm:text-[2.1rem]">{r.title}</h3>
      <p className="mt-2 text-lg text-route">{r.orgFull}</p>
      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="tabular">{formatRange(r.start, r.end)}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="size-3.5" aria-hidden="true" />
          {r.location}
          {r.mode ? `, ${r.mode.toLowerCase()}` : ""}
        </span>
        {r.department && <span>{r.department}</span>}
        {r.extension && (
          <span>
            {r.extension.label} until {formatYm(r.extension.end)}
          </span>
        )}
      </p>

      <p className="mt-5 max-w-[42rem] text-lg">{r.summary}</p>

      <ul className="mt-5 max-w-[44rem] space-y-2.5">
        {r.highlights.map((h) => (
          <li key={h} className="relative pl-5">
            <span className="absolute left-0 top-[0.7em] h-0.5 w-2.5 bg-route" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools">
        {r.tools.map((t) => (
          <li key={t} className="rounded-md bg-route-soft px-2.5 py-1 text-sm font-medium text-route">
            {t}
          </li>
        ))}
      </ul>

      {r.reference && (
        <figure className="mt-8 max-w-[42rem] border-l-2 border-signal pl-5">
          <Quote className="size-5 text-muted" aria-hidden="true" />
          <blockquote lang={r.reference.lang} className="mt-2 text-lg">
            {r.reference.quote}
          </blockquote>
          {r.reference.translation && (
            <p className="mt-1 text-[0.95rem] text-muted">Translation: {r.reference.translation}</p>
          )}
          <figcaption className="mt-2 text-sm text-muted">{r.reference.source}</figcaption>
        </figure>
      )}
    </>
  );
}
