import { ChevronDown } from "lucide-react";
import { profile } from "@/content/profile";
import { Section } from "./section";

export function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_18.5rem] xl:gap-14">
        <div className="max-w-[40rem]">
          <p className="font-display text-[1.45rem] font-medium leading-[1.32] tracking-[-0.005em] sm:text-[2rem]">{lead}</p>
          <div className="mt-7 space-y-5 text-[1.08rem] leading-[1.7]">
            {rest.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <details className="group mt-9 rounded-lg border border-line bg-surface" lang="de">
            <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg px-5 py-3.5 font-semibold hover:bg-route-soft/60">
              Kurzprofil auf Deutsch
              <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="border-t border-line px-5 py-4 leading-[1.7]">{profile.aboutDe}</p>
          </details>
        </div>

        <aside aria-labelledby="facts-heading" className="h-fit rounded-lg border border-line bg-surface xl:sticky xl:top-24">
          <h3 id="facts-heading" className="border-b border-line px-5 py-3.5 font-semibold">
            For recruiters
          </h3>
          <dl className="divide-y divide-line px-5 text-[0.95rem]">
            {profile.facts.map((f) => (
              <div key={f.label} className="py-3">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-medium leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line p-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-11 items-center justify-center rounded-lg bg-ink px-4 font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Email {profile.name.split(" ")[0]}
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
}
