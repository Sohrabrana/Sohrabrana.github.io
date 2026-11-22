import { ChartColumn, Database, Languages, Route, Workflow } from "lucide-react";
import { skillGroups } from "@/content/skills";
import type { SkillGroup } from "@/content/types";
import { Section } from "./section";

const icons: Record<SkillGroup["icon"], React.ComponentType<{ className?: string }>> = {
  chart: ChartColumn,
  database: Database,
  workflow: Workflow,
  route: Route,
  languages: Languages,
};

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Each skill shows where I used it, so you can check it against my experience.">
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
        {skillGroups.map((g) => {
          const Icon = icons[g.icon];
          return (
            <div key={g.id}>
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold">
                <span className="grid size-10 place-items-center rounded-lg bg-route-soft text-route">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                {g.title}
              </h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {g.skills.map((s) => (
                  <li key={s.name} className="py-2.5">
                    <span className="block font-medium">{s.name}</span>
                    {s.evidence && <span className="block text-sm text-muted">{s.evidence}</span>}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
