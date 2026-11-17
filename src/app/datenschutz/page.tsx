import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

const h2 = "mt-10 text-xl font-semibold";
const p = "mt-3 leading-relaxed";

export default function Datenschutz() {
  return (
    <article lang="de" className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-5xl font-bold">Datenschutzerklärung</h1>

      <h2 className={h2}>Verantwortlicher</h2>
      <p className={p}>
        {profile.legal.name}, E-Mail:{" "}
        <a className="text-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        . Die vollständige Anschrift steht im <a className="text-link" href="/impressum">Impressum</a>.
      </p>

      <h2 className={h2}>Hosting und Server-Logfiles</h2>
      <p className={p}>
        Diese Website wird über {profile.hosting.service} bei {profile.hosting.company} gehostet. Beim Aufruf
        verarbeitet der Hoster technisch notwendige Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und
        Browser-Kennung, um die Website auszuliefern und vor Missbrauch zu schützen. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb). Eine Verarbeitung in den USA ist möglich; sie erfolgt
        auf Grundlage des EU-US Data Privacy Framework bzw. der EU-Standardvertragsklauseln.
      </p>

      <h2 className={h2}>Keine Cookies, kein Tracking</h2>
      <p className={p}>
        Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Schriftarten werden vom
        eigenen Server geladen, nicht von Google. Die Wahl zwischen hellem und dunklem Design wird nur im Speicher Ihres
        Browsers (localStorage) abgelegt und nicht übertragen.
      </p>

      <h2 className={h2}>Kontakt per E-Mail</h2>
      <p className={p}>
        Wenn Sie mir eine E-Mail schreiben, verarbeite ich Ihre Angaben, um Ihre Anfrage zu beantworten (Art. 6 Abs. 1
        lit. b und f DSGVO). Die Daten werden gelöscht, sobald sie dafür nicht mehr benötigt werden.
      </p>

      <h2 className={h2}>Externe Links</h2>
      <p className={p}>
        Links zu LinkedIn, GitHub und Overleaf öffnen die Websites dieser Anbieter. Erst dann werden Daten an diese
        Anbieter übertragen; es gelten deren Datenschutzbestimmungen.
      </p>

      <h2 className={h2}>Ihre Rechte</h2>
      <p className={p}>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
        und Widerspruch (Art. 15–21 DSGVO) sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, zum
        Beispiel der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
      </p>
      <p className="mt-10 text-sm text-muted">Stand: {profile.updated}</p>
    </article>
  );
}
