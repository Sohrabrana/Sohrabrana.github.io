"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectTag } from "@/content/types";
import { GitHubIcon } from "./brand-icons";
import { EvidencePanel } from "./evidence";

type Filter = ProjectTag | "All";

export function Projects({ projects, tags }: { projects: Project[]; tags: ProjectTag[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  // A link to a specific project (e.g. from the career chart) should never land on a hidden project.
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

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <p id="project-filter-label" className="text-[0.95rem] text-muted">
          Show work for
        </p>
        <div role="group" aria-labelledby="project-filter-label" className="flex flex-wrap gap-2">
          {(["All", ...tags] as Filter[]).map((t) => {
            const pressed = filter === t;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={pressed}
                onClick={() => setFilter(t)}
                className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[0.92rem] font-medium transition-colors ${
                  pressed ? "border-ink bg-ink text-paper" : "border-line bg-paper hover:border-ink/40"
                }`}
              >
                {t === "All" ? "All roles" : t}
                <span className={`tabular ${pressed ? "opacity-70" : "text-muted"}`}>{count(t)}</span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {visible.length} projects shown
      </p>

      <ol className="mt-12">
        {featured.map((p) => (
          <li key={p.id} className="border-t border-line py-12 first:border-t-0 first:pt-0 sm:py-16">
            <CaseStudy project={p} />
          </li>
        ))}
      </ol>

      {more.length > 0 && (
        <div className={featured.length ? "border-t border-line pt-12 sm:pt-16" : ""}>
          <h3 className="font-display text-[2.075rem] font-semibold leading-tight">More work</h3>
          <ul className="mt-6 grid gap-x-10 md:grid-cols-2">
            {more.map((p) => (
              <li key={p.id} id={`project-${p.id}`} className="border-t border-line py-6">
                <p className="text-sm text-muted">
                  {p.context}, <span className="tabular">{p.period}</span>
                </p>
                <h4 className="mt-1 text-[1.15rem] font-semibold leading-snug">{p.title}</h4>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{p.problem}</p>
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Tools:</span> {p.tools.join(", ")}
                </p>
                {p.links?.map((l) => (
                  <ExternalLink key={l.href} href={l.href} label={l.label} className="mt-2" />
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      {visible.length === 0 && <p className="mt-10 text-muted">No projects with this focus yet. Choose another filter.</p>}
    </div>
  );
}

function ExternalLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  const isGitHub = href.includes("github.com");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-route hover:underline ${className}`}
    >
      {isGitHub && <GitHubIcon className="size-4" />}
      {label}
      <ArrowUpRight className="size-3.5" aria-hidden="true" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

const kindLabel: Record<Project["kind"], string> = {
  workplace: "Workplace project",
  academic: "Thesis",
  portfolio: "Portfolio project",
};

function CaseStudy({ project: p }: { project: Project }) {
  const headingId = `project-${p.id}-title`;
  return (
    <article id={`project-${p.id}`} aria-labelledby={headingId} className="grid gap-x-12 gap-y-8 lg:grid-cols-12">
      <header className="lg:col-span-12">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.95rem] text-muted">
          <span className="rounded-md bg-route-soft px-2 py-0.5 text-[0.82rem] font-semibold text-route">{kindLabel[p.kind]}</span>
          <span>
            {p.context}, <span className="tabular">{p.period}</span>
          </span>
        </p>
        <h3 id={headingId} className="font-display mt-3 max-w-[46rem] text-[2rem] font-semibold leading-[1.08] tracking-[-0.01em] sm:text-[2.6rem]">
          {p.title}
        </h3>
      </header>

      <div className="space-y-7 lg:col-span-5">
        <div>
          <h4 className="text-[0.95rem] font-semibold text-muted">The question</h4>
          <p className="mt-1.5 text-[1.12rem] leading-relaxed">{p.problem}</p>
        </div>
        <div>
          <h4 className="text-[0.95rem] font-semibold text-muted">What I did</h4>
          <ul className="mt-2 space-y-2">
            {p.did.map((d) => (
              <li key={d} className="relative pl-5 leading-relaxed">
                <span className="absolute left-0 top-[0.75em] h-0.5 w-2.5 bg-route" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        {p.results && (
          <div>
            <h4 className="text-[0.95rem] font-semibold text-muted">{p.kind === "portfolio" ? "What the data showed" : "Results"}</h4>
            <ul className="mt-2 space-y-2">
              {p.results.map((r) => (
                <li key={r} className="rounded-r-md border-l-[3px] border-signal bg-signal-soft/60 px-3 py-2 leading-snug">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <ul className="flex flex-wrap gap-1.5" aria-label="Tools">
            {p.tools.map((t) => (
              <li key={t} className="rounded-md border border-line px-2 py-0.5 text-[0.85rem]">
                {t}
              </li>
            ))}
          </ul>
          {(p.links || p.note) && (
            <div className="mt-4 space-y-2">
              {p.links?.map((l) => (
                <ExternalLink key={l.href} href={l.href} label={l.label} />
              ))}
              {p.note && <p className="text-sm text-muted">{p.note}</p>}
            </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-7">
        {p.evidence && (
          <div className="lg:sticky lg:top-24">
            <EvidencePanel evidence={p.evidence} />
          </div>
        )}
      </div>
    </article>
  );
}
