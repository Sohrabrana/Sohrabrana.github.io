import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { EducationSection } from "@/components/education";
import { References } from "@/components/references";
import { CvDownloads } from "@/components/cv-downloads";
import { Contact } from "@/components/contact";
import { Section } from "@/components/section";
import { experience } from "@/content/experience";
import { projects, projectTags } from "@/content/projects";
import { profile } from "@/content/profile";
import { certifications, education } from "@/content/education";
import { absoluteUrl, siteUrl } from "@/lib/site";

function ProfileJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    givenName: "Sohrab",
    familyName: "Rana",
    url: siteUrl,
    image: absoluteUrl(profile.photo.src),
    jobTitle: profile.role,
    description: profile.seoDescription,
    email: `mailto:${profile.email}`,
    ...(profile.showPhone ? { telephone: profile.phone } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Duisburg", addressRegion: "NRW", addressCountry: "DE" },
    sameAs: [profile.links.linkedin, profile.links.github],
    alumniOf: [...new Set(education.map((e) => e.school))].map((name) => ({ "@type": "CollegeOrUniversity", name })),
    hasCredential: [
      // Completed degrees only: a degree in progress is not a credential yet.
      ...education.filter((e) => e.end).map((e) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: e.degree,
        recognizedBy: { "@type": "CollegeOrUniversity", name: e.school },
      })),
      ...certifications.map((c) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: c.title,
        recognizedBy: { "@type": "Organization", name: c.issuer },
        dateCreated: c.date,
        ...(c.url ? { url: c.url } : {}),
      })),
    ],
    knowsAbout: [
      "Business Intelligence",
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "SAP ERP",
      "Data Analysis",
      "Data Modeling",
      "KPI Reporting",
      "Power Automate",
      "Microsoft Copilot Studio",
      "Supply Chain Analytics",
      "Digital Transformation",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "German", alternateName: "de" },
      { "@type": "Language", name: "Bengali", alternateName: "bn" },
    ],
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: profile.seoTitle,
        inLanguage: "en",
        dateModified: new Date().toISOString().slice(0, 10),
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      person,
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function Home() {
  return (
    <>
      <ProfileJsonLd />
      <Hero />
      <About />
      <Section
        id="experience"
        title="Experience"
        intro="Dates match my reference letters. Select a role to see what I did and the tools I used."
      >
        <ExperienceTimeline roles={experience} />
      </Section>
      <Section
        id="projects"
        title="Projects"
        intro="Workplace projects from Uniper and Continental, my thesis, and SQL and Power BI projects on GitHub."
      >
        <Projects projects={projects} tags={projectTags} />
      </Section>
      <Skills />
      <EducationSection />
      <References />
      <CvDownloads />
      <Contact />
    </>
  );
}
