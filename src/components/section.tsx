interface SectionProps {
  id: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Page section: heading column on the left (sticky on large screens), content on the right. */
export function Section({ id, title, intro, children, className = "" }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`border-t border-line ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <h2 id={headingId} className="font-display text-4xl font-semibold leading-none sm:text-5xl">
              {title}
            </h2>
            {intro && <div className="mt-4 max-w-sm text-muted">{intro}</div>}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
