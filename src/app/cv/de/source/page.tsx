import type { Metadata } from "next";
import { CvSource } from "@/components/cv-source";

export const metadata: Metadata = {
  title: "LaTeX-Quelldatei des Lebenslaufs",
  description: "Bearbeitbare LaTeX-Quelldatei des deutschen Lebenslaufs von Sohrab Rana. In Overleaf öffnen oder als .tex herunterladen.",
  alternates: { canonical: "/cv/de/source" },
};

export default function Page() {
  return <CvSource id="de" />;
}
