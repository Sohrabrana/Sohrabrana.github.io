import type { Metadata } from "next";
import { CvViewer } from "@/components/cv-viewer";

export const metadata: Metadata = {
  title: "Lebenslauf (Deutsch)",
  description: "Lebenslauf von Sohrab Rana, Business Intelligence Analyst und Datenanalyst (Power BI, SQL, SAP ERP). Vorschau und PDF-Download.",
  alternates: { canonical: "/cv/de", languages: { en: "/cv/en" } },
};

export default function Page() {
  return <CvViewer id="de" />;
}
