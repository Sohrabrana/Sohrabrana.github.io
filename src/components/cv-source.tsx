import Link from "next/link";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { getCv } from "@/content/cv";
import { cvSources } from "@/content/generated/cv-sources";
import { absoluteUrl } from "@/lib/site";
import { CopyButton } from "./copy-button";

export function CvSource({ id }: { id: "en" | "de" }) {
  const cv = getCv(id);
  const source = cvSources[id];
  const overleaf = `https://www.overleaf.com/docs?engine=pdflatex&snip_uri=${encodeURIComponent(absoluteUrl(cv.tex))}`;
  const lines = source.split("\n").length;
  const fileName = cv.tex.split("/").pop();

  return (
    <div lang={cv.lang} className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <Link href={`/cv/${cv.id}`} className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-route hover:underline">
        <ArrowLeft className="size-4" aria-hidden="true" />
        {cv.labels.preview}
      </Link>
      <h1 className="mt-6 font-display text-5xl font-bold leading-none sm:text-6xl">
        {cv.lang === "de" ? "LaTeX-Quelldatei" : "LaTeX source"}
      </h1>
      <p className="mt-3 max-w-[42rem] text-muted">
        {cv.lang === "de"
          ? `${fileName}, ${lines} Zeilen. In Overleaf mit dem Compiler pdfLaTeX übersetzen.`
          : `${fileName}, ${lines} lines. Compile with pdfLaTeX, for example in Overleaf.`}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={cv.tex}
          download
          className="inline-flex h-11 items-center gap-2 rounded-full bg-signal px-4 font-semibold text-signal-ink hover:brightness-95"
        >
          <Download className="size-4" aria-hidden="true" />
          {cv.lang === "de" ? ".tex herunterladen" : "Download .tex"}
        </a>
        <a
          href={overleaf}
          target="_blank"
          rel="noopener"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/80 px-4 font-semibold hover:bg-ink hover:text-paper"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          {cv.labels.overleaf}
        </a>
        <CopyButton value={source} label={cv.lang === "de" ? "Quelltext kopieren" : "Copy source"} tone="light" />
      </div>

      <pre className="mt-8 max-h-[75vh] overflow-auto rounded-2xl border border-line bg-surface p-5 text-[0.82rem] leading-relaxed">
        <code lang="en" className="font-mono">{source}</code>
      </pre>
    </div>
  );
}
