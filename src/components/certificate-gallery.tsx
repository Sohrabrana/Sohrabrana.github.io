"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Award, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { Certification } from "@/content/types";
import { formatYm } from "@/lib/site";

/** All certifications as cards. Cards with a certificate picture open it full size in a viewer. */
export function CertificateGallery({ items }: { items: Certification[] }) {
  const withImage = items.filter((c) => c.image);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const show = (title: string) => setOpen(withImage.findIndex((c) => c.title === title));
  const count = withImage.length;
  const step = (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + count) % count));

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const current = open !== null ? withImage[open] : null;

  return (
    <>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <li key={c.title} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
            {c.image ? (
              <button
                type="button"
                onClick={() => show(c.title)}
                className="group relative block aspect-[4/3] w-full bg-paper p-3"
                aria-label={`View certificate: ${c.title}`}
              >
                <Image
                  src={c.image.thumb}
                  alt=""
                  width={c.image.width}
                  height={c.image.height}
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw"
                  className="size-full rounded-md object-contain shadow-[0_6px_18px_-10px_rgb(15_30_51/0.45)] transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-ink/80 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="size-4" aria-hidden="true" />
                </span>
              </button>
            ) : (
              <div className="grid h-20 w-full place-items-center bg-paper p-4 text-center sm:aspect-[4/3] sm:h-auto sm:p-5" aria-hidden="true">
                <div className="flex items-center gap-2 sm:block">
                  <Award className="size-6 text-route sm:mx-auto sm:size-8" />
                  <p className="font-display text-lg font-semibold leading-tight sm:mt-2 sm:text-xl">{c.issuer}</p>
                </div>
              </div>
            )}
            <div className="flex flex-1 flex-col border-t border-line p-4">
              <p className="text-sm text-muted tabular">{formatYm(c.date)}</p>
              <h4 className="mt-1 font-semibold leading-snug">{c.title}</h4>
              <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
              {c.note && <p className="mt-1 text-sm text-muted">{c.note}</p>}
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-auto flex w-fit items-center gap-1 pt-3 text-sm font-semibold text-route hover:underline"
                >
                  Verify credential
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={current ? `Certificate: ${current.title}` : "Certificate"}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="m-auto max-h-[92vh] w-[min(64rem,94vw)] overflow-visible bg-transparent p-0 text-band-ink backdrop:bg-[rgb(8_14_26/0.94)] backdrop:backdrop-blur-sm"
      >
        {current?.image && (
          <figure className="relative">
            <Image
              src={current.image.src}
              alt={current.image.alt}
              width={current.image.width}
              height={current.image.height}
              sizes="94vw"
              className="mx-auto max-h-[78vh] w-auto rounded-lg bg-white object-contain shadow-2xl"
            />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span>
                <span className="font-semibold">{current.title}</span>
                <span className="text-band-muted">
                  {" "}
                  {current.issuer}, {formatYm(current.date)}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-band-muted tabular">
                  {open! + 1} / {withImage.length}
                </span>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="grid size-10 place-items-center rounded-full border border-band-ink/30 hover:bg-band-ink/10"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="grid size-10 place-items-center rounded-full border border-band-ink/30 hover:bg-band-ink/10"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </span>
            </figcaption>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute -top-3 right-0 grid size-10 -translate-y-full place-items-center rounded-full bg-band-ink text-band hover:opacity-90"
              aria-label="Close certificate viewer"
              autoFocus
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}
