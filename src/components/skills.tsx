import { Check } from "lucide-react";
import { skillGroups, skillPlaces } from "@/content/skills";
import { Section } from "./section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro="No self-ratings. Each skill is ticked where I actually used it, so you can check it against my experience and projects."
    >
      <div className="overflow-x-auto rounded-lg border border-line bg-surface">
        <table className="w-full min-w-[20rem] border-collapse text-left">
          <caption className="sr-only">Skills and where I used them</caption>
          <thead>
            <tr className="border-b border-line-strong/70 align-bottom">
              <th scope="col" className="px-4 py-3 text-[0.9rem] font-semibold sm:px-5">
                Skill
              </th>
              {skillPlaces.map((p) => (
                <th key={p.id} scope="col" className="w-[2.9rem] px-0.5 py-3 text-center text-[0.72rem] font-semibold leading-tight sm:w-28 sm:px-2 sm:text-[0.85rem]">
                  <span className="hidden sm:inline">{p.label}</span>
                  <span className="sm:hidden">{p.short}</span>
                </th>
              ))}
            </tr>
          </thead>
          {skillGroups.map((g) => (
            <tbody key={g.id}>
              <tr className="bg-paper/70">
                <th scope="colgroup" colSpan={skillPlaces.length + 1} className="px-4 pb-2 pt-4 font-display text-[1.2rem] font-semibold sm:px-5">
                  {g.title}
                </th>
              </tr>
              {g.skills.map((s) => (
                <tr key={s.name} className="border-t border-line transition-colors hover:bg-route-soft/40">
                  <th scope="row" className="px-3 py-2 font-normal sm:px-5">
                    <span className="block font-medium leading-snug">{s.name}</span>
                    {s.note && <span className="block text-[0.85rem] leading-snug text-muted">{s.note}</span>}
                  </th>
                  {skillPlaces.map((p) => {
                    const used = s.usedAt.includes(p.id);
                    return (
                      <td key={p.id} className="px-0.5 py-2 text-center sm:px-2">
                        {used ? (
                          <span className="inline-grid size-[1.4rem] place-items-center rounded-[5px] bg-route text-paper">
                            <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                            <span className="sr-only">Used at {p.label}</span>
                          </span>
                        ) : (
                          <span className="inline-block h-px w-3 bg-line-strong align-middle" aria-hidden="true" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
      <p className="mt-4 text-sm text-muted">
        Portfolio projects are on{" "}
        <a href="#projects" className="text-link">
          this page
        </a>{" "}
        and on GitHub. Study covers my B.Sc., the Bachelor&apos;s thesis and certificates.
      </p>
    </Section>
  );
}
