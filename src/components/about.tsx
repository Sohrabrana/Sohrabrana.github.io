import { ChevronDown } from "lucide-react";
import { profile } from "@/content/profile";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="max-w-[40rem]">
          <p className="font-display text-[clamp(1.9rem,4.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.01em]">
            {profile.aboutLead.text} <span className="marker">{profile.aboutLead.highlight}</span>
          </p>

          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {profile.about.map((p, i) =>
              typeof p === "string" ? (
                <p key={i}>{p}</p>
              ) : (
                <p
                  key={i}
                  className="!my-8 rounded-r-xl border-l-4 border-signal bg-surface py-5 pl-5 pr-5 text-xl font-medium leading-relaxed sm:pl-6"
                >
                  {p.quote}
                </p>
              ),
            )}
          </div>

          <details lang="de" className="group mt-8 rounded-xl border border-line bg-surface text-base">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
              Kurzprofil auf Deutsch
              <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="border-t border-line px-4 py-3 leading-relaxed">{profile.aboutDe}</p>
          </details>
        </div>
        <dl className="h-fit divide-y divide-line border-y border-line text-[0.95rem]">
          {profile.facts.map((f) => (
            <div key={f.label} className="py-3">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
