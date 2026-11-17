import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function Impressum() {
  const { legal } = profile;
  const hasAddress = Boolean(legal.street && legal.postalCodeCity);
  return (
    <article lang="de" className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-5xl font-bold">Impressum</h1>
      <h2 className="mt-10 text-xl font-semibold">Angaben gemäß § 5 DDG</h2>
      <address className="mt-3 not-italic leading-relaxed">
        {legal.name}
        <br />
        {hasAddress ? (
          <>
            {legal.street}
            <br />
            {legal.postalCodeCity}
            <br />
          </>
        ) : (
          <>
            Duisburg
            <br />
          </>
        )}
        {legal.country}
      </address>
      <h2 className="mt-8 text-xl font-semibold">Kontakt</h2>
      <p className="mt-3">
        E-Mail:{" "}
        <a className="text-link" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>
      <h2 className="mt-8 text-xl font-semibold">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="mt-3">{legal.name}, Anschrift wie oben.</p>
      <h2 className="mt-8 text-xl font-semibold">Haftung für Links</h2>
      <p className="mt-3 text-muted">
        Diese Website enthält Links zu externen Websites (z. B. LinkedIn, GitHub, Overleaf). Auf deren Inhalte habe ich
        keinen Einfluss; für sie ist der jeweilige Anbieter verantwortlich.
      </p>
    </article>
  );
}
