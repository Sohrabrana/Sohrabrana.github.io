import Image from "next/image";
import Link from "next/link";
import { Download, Eye, FileCode2 } from "lucide-react";
import { cvFiles } from "@/content/cv";
import { Section } from "./section";

export function CvDownloads() {
  return (
    <Section
      id="cv"
      title="CV"
      intro="Two one-page versions with the same facts: one in English, one written for German employers. Both are plain-text PDFs that applicant tracking systems can read."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {cvFiles.map((cv) => (
          <article key={cv.id} lang={cv.lang} className="flex flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <Link
              href={`/cv/${cv.id}`}
              className="group relative block overflow-hidden rounded-lg border border-line bg-white"
              aria-label={cv.labels.preview}
            >
              <Image
                src={cv.preview}
                alt=""
                width={1000}
                height={1414}
                sizes="(min-width: 768px) 420px, 90vw"
                className="aspect-[3/2] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </Link>
            <h3 className="mt-5 font-display text-3xl font-semibold">{cv.title}</h3>
            <p className="mt-1 text-muted">{cv.description}</p>
            <p className="mt-2 text-sm text-muted">
              {cv.id === "en" ? `PDF, A4, 1 page. Updated ${cv.updated}.` : "PDF, A4, 1 Seite. Stand: November 2026."}
            </p>
            <div className="mt-6 grid gap-3 md:mt-auto md:pt-6">
              <a
                href={cv.pdf}
                download
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-signal px-4 font-semibold text-signal-ink hover:brightness-95"
              >
                <Download className="size-4" aria-hidden="true" />
                {cv.labels.download}
              </a>
              <div className="grid justify-items-start gap-0.5 sm:justify-items-center">
                <Link href={`/cv/${cv.id}`} className="inline-flex h-10 items-center gap-2 font-semibold text-route hover:underline">
                  <Eye className="size-4" aria-hidden="true" />
                  {cv.labels.preview}
                </Link>
                <Link href={`/cv/${cv.id}/source`} className="inline-flex h-10 items-center gap-2 font-semibold text-route hover:underline">
                  <FileCode2 className="size-4" aria-hidden="true" />
                  {cv.labels.source}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
