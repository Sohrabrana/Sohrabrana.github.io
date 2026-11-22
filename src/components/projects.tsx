"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectTag } from "@/content/types";
import { GitHubIcon } from "./brand-icons";

type Filter = ProjectTag | "All";

export function Projects({ projects, tags }: { projects: Project[]; tags: ProjectTag[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();

  // A link to a specific project (e.g. from the hero chart) should never land on a hidden project.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash.startsWith("#project-")) setFilter("All");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const visible = projects.filter((p) => filter === "All" || p.tags.includes(filter));
  const featured = visible.filter((p) => p.featured);
  const more = visible.filter((p) => !p.featured);
  const count = (t: Filter) => (t === "All" ? projects.length : projects.filter((p) => p.tags.includes(t)).length);

  const anim = reduce
    ? {}
    : {
        layout: true as const,
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
      };

  return (
    <div>
      <div role="group" aria-label="Filter projects by topic" className="flex flex-wrap gap-2">
        {(["All", ...tags] as Filter[]).map((t) => {
          const pressed = filter === t;
          return (
            <button
              key={t}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-3.5 py-1.5 text-[0.95rem] font-medium transition-colors ${
                pressed ? "border-ink bg-ink text-paper" : "border-line bg-surface hover:border-ink/40"
              }`}
            >
              {t} <span className={`tabular ${pressed ? "opacity-70" : "text-muted"}`}>{count(t)}</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>

      <ol className="mt-10 space-y-0">
        <AnimatePresence initial={false} mode="popLayout">
          {featured.map((p) => (
            <motion.li key={p.id} {...anim} className="border-t border-line py-10 first:border-t-0 first:pt-0">
              <FeaturedProject project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>

      {more.length > 0 && (
        <div className="mt-6">
          <h3 className="font-display text-2xl font-semibold">More projects</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            <AnimatePresence initial={false} mode="popLayout">
              {more.map((p) => (
                <motion.li key={p.id} {...anim} id={`project-${p.id}`} className="grid gap-2 py-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
                  <p className="text-sm text-muted">
                    {p.context}
                    <span className="block tabular">{p.period}</span>
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <p className="mt-1 max-w-[42rem] text-muted">{p.summary}</p>
                    {p.outcomes && (
                      <ul className="mt-2 max-w-[42rem] space-y-1 text-[0.95rem]">
                        {p.outcomes.map((o) => (
                          <li key={o} className="relative pl-4">
                            <span className="absolute left-0 top-[0.65em] size-1.5 rounded-full bg-signal" aria-hidden="true" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-2 text-sm text-muted">{p.tools.join(", ")}</p>
                    {p.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-route hover:underline">
                        <GitHubIcon className="size-4" />
                        {l.label}
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      )}

      {visible.length === 0 && <p className="mt-10 text-muted">No projects with this topic yet. Choose another filter.</p>}
    </div>
  );
}

function FeaturedProject({ project: p }: { project: Project }) {
  return (
    <article id={`project-${p.id}`} className="grid gap-5 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
      <div className="text-sm">
        <p className="font-medium">{p.context}</p>
        <p className="mt-0.5 text-muted tabular">{p.period}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Topics">
          {p.tags.map((t) => (
            <li key={t} className="rounded-md border border-line px-2 py-0.5 text-[0.8rem] text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-[1.85rem] font-semibold leading-tight sm:text-[2.1rem]">{p.title}</h3>
        <p className="mt-3 max-w-[42rem] text-lg">{p.summary}</p>

        <div className="mt-6 max-w-[44rem] space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-muted">What I built</h4>
            <ul className="mt-2 space-y-1.5">
              {p.built.map((b) => (
                <li key={b} className="relative pl-5">
                  <span className="absolute left-0 top-[0.7em] h-0.5 w-2.5 bg-route" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {p.outcomes && (
            <div>
              <h4 className="text-sm font-semibold text-muted">{p.kind === "portfolio" ? "Findings" : "Results"}</h4>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="rounded-r-md border-l-2 border-signal bg-surface px-3 py-2 text-[0.95rem] leading-snug">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-muted">
          <span className="font-semibold">Tools:</span> {p.tools.join(", ")}
        </p>
        {(p.links || p.note) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
            {p.links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 font-medium text-route hover:underline">
                <GitHubIcon className="size-4" />
                {l.label}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
            {p.note && <span className="text-sm text-muted">{p.note}</span>}
          </div>
        )}
      </div>
    </article>
  );
}
