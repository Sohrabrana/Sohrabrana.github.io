import { references, referencesNote, showReferences } from "@/content/references";
import { Section } from "./section";

export function References() {
  if (!showReferences) return null;
  return (
    <Section id="references" title="References" intro="Quotes from my employers' reference letters (Arbeitszeugnisse).">
      <div className="grid gap-12 xl:grid-cols-2">
        {references.map((r) => (
          <figure key={r.company}>
            <ul className="space-y-5">
              {r.quotes.map((q, i) => (
                <li key={q}>
                  <blockquote lang={r.lang} className="font-display text-[1.6rem] font-medium leading-snug">
                    <span aria-hidden="true" className="text-signal">“</span>
                    {q}
                    <span aria-hidden="true" className="text-signal">”</span>
                  </blockquote>
                  {"translations" in r && r.translations?.[i] && (
                    <p className="mt-1 text-muted">{r.translations[i]}</p>
                  )}
                </li>
              ))}
            </ul>
            <figcaption className="mt-5 border-t border-line pt-3 text-sm">
              <span className="font-semibold">{r.company}</span>
              <span className="block text-muted">{r.document}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-10 text-muted">{referencesNote}</p>
    </Section>
  );
}
