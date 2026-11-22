interface SectionProps {
  id: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  /** split: heading column on the left (sticky on large screens). stacked: heading above full-width content. */
  layout?: "split" | "stacked";
  /** Background: the page colour or the lighter surface colour. */
  tone?: "paper" | "surface";
  className?: string;
}

export function Section({ id, title, intro, children, layout = "split", tone = "paper", className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  const bg = tone === "surface" ? "bg-surface" : "";
  const heading = (
    <h2 id={headingId} className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.015em] sm:text-[3.25rem]">
      {title}
    </h2>
  );

  if (layout === "stacked") {
    return (
      <section id={id} aria-labelledby={headingId} className={`border-t border-line ${bg} ${className}`}>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-5">{heading}</div>
            {intro && <div className="max-w-[38rem] text-muted lg:col-span-7 lg:pb-1">{intro}</div>}
          </div>
          <div className="mt-10 sm:mt-14">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${bg} ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            {heading}
            {intro && <div className="mt-4 max-w-sm text-muted">{intro}</div>}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
