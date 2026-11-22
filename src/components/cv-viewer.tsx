import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileCode2 } from "lucide-react";
import { getCv } from "@/content/cv";

export function CvViewer({ id }: { id: "en" | "de" }) {
  const cv = getCv(id);
  const other = getCv(id === "en" ? "de" : "en");
  return (
    <div lang={cv.lang} className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <Link href="/#cv" className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-route hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {cv.labels.back}
      </Link>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <div>
          <h1 className="font-display text-5xl font-bold leading-none sm:text-6xl">{cv.title}</h1>
          <p className="mt-3 text-muted">{cv.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={cv.pdf}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-signal px-4 font-semibold text-signal-ink hover:brightness-95"
          >
            <Download className="size-4" aria-hidden="true" />
            {cv.labels.download}
          </a>
          <Link
            href={`/cv/${cv.id}/source`}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-ink/80 px-4 font-semibold hover:bg-ink hover:text-paper"
          >
            <FileCode2 className="size-4" aria-hidden="true" />
            {cv.labels.source}
          </Link>
        </div>
      </div>

      {/* Desktop: embedded PDF. Phones: page image plus a button that opens the PDF in the browser's viewer. */}
      <div className="mt-8 overflow-hidden rounded-lg border border-line bg-surface">
        <object data={`${cv.pdf}#view=FitH`} type="application/pdf" aria-label={cv.title} className="hidden h-[85vh] w-full md:block">
          <PreviewImage id={id} />
        </object>
        <div className="md:hidden">
          <PreviewImage id={id} />
        </div>
      </div>
      <p className="mt-4 md:hidden">
        <a href={cv.pdf} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-semibold text-route hover:underline">
          <ExternalLink className="size-4" aria-hidden="true" />
          {cv.lang === "de" ? "PDF im Browser öffnen" : "Open the PDF in your browser"}
        </a>
      </p>

      <p className="mt-10 text-muted" lang={other.lang}>
        {other.lang === "de" ? "Auch verfügbar: " : "Also available: "}
        <Link href={`/cv/${other.id}`} className="text-link">
          {other.title}
        </Link>
      </p>
    </div>
  );
}

function PreviewImage({ id }: { id: "en" | "de" }) {
  const cv = getCv(id);
  return (
    <Image
      src={cv.preview}
      alt={cv.lang === "de" ? "Vorschau der ersten Seite des Lebenslaufs" : "Preview of the first page of the CV"}
      width={1000}
      height={1414}
      sizes="(min-width: 768px) 900px, 100vw"
      className="h-auto w-full bg-white"
    />
  );
}
