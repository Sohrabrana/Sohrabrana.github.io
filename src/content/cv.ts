import type { CvFile } from "./types";

// The CV files live in public/cv/ and are built from cv/*.tex
// with `npm run cv` (see README). Keep the file names stable so links never break.

export const cvFiles: CvFile[] = [
  {
    id: "en",
    lang: "en",
    title: "English CV",
    description: "One page, for international teams and English-language applications.",
    pdf: "/cv/Sohrab_Rana_CV_English.pdf",
    tex: "/cv/Sohrab_Rana_CV_English.tex",
    preview: "/cv/Sohrab_Rana_CV_English-preview.png",
    updated: "November 2026",
    labels: {
      preview: "Preview CV",
      download: "Download PDF",
      source: "View LaTeX source",
      overleaf: "Open in Overleaf",
      back: "Back to the CV section",
    },
  },
  {
    id: "de",
    lang: "de",
    title: "Deutscher Lebenslauf",
    description: "Eine Seite, für Bewerbungen bei deutschen Arbeitgebern.",
    pdf: "/cv/Sohrab_Rana_CV_German.pdf",
    tex: "/cv/Sohrab_Rana_CV_German.tex",
    preview: "/cv/Sohrab_Rana_CV_German-preview.png",
    updated: "November 2026",
    labels: {
      preview: "Lebenslauf ansehen",
      download: "PDF herunterladen",
      source: "LaTeX-Quelldatei ansehen",
      overleaf: "In Overleaf öffnen",
      back: "Zurück zum Lebenslauf-Bereich",
    },
  },
];

export const getCv = (id: "en" | "de") => cvFiles.find((c) => c.id === id)!;
