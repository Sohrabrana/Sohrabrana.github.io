import type { Metadata } from "next";
import { CvViewer } from "@/components/cv-viewer";

export const metadata: Metadata = {
  title: "English CV",
  description: "One-page English CV of Sohrab Rana, Business Intelligence and Data Analyst (Power BI, SQL, SAP ERP). Preview and download as PDF.",
  alternates: { canonical: "/cv/en", languages: { de: "/cv/de" } },
};

export default function Page() {
  return <CvViewer id="en" />;
}
