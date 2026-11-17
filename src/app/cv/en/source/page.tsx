import type { Metadata } from "next";
import { CvSource } from "@/components/cv-source";

export const metadata: Metadata = {
  title: "LaTeX source of the English CV",
  description: "Editable LaTeX source of Sohrab Rana's English CV. Open it in Overleaf or download the .tex file.",
  alternates: { canonical: "/cv/en/source" },
};

export default function Page() {
  return <CvSource id="en" />;
}
