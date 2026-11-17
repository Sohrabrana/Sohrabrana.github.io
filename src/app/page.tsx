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
import { education } from "@/content/education";
import { absoluteUrl, siteUrl } from "@/lib/site";

function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    image: absoluteUrl(profile.photo.src),
    jobTitle: profile.role,
    description: profile.seoDescription,
    email: `mailto:${profile.email}`,
    ...(profile.showPhone ? { telephone: profile.phone } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Duisburg", addressRegion: "NRW", addressCountry: "DE" },
    sameAs: [profile.links.linkedin, profile.links.github],
    alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    knowsAbout: ["Business Intelligence", "Power BI", "DAX", "Power Query", "SQL", "SAP ERP", "Data Analysis", "KPI Reporting", "Power Automate", "Supply Chain Analytics"],
    knowsLanguage: ["en", "de", "bn"],
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
      <PersonJsonLd />
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
