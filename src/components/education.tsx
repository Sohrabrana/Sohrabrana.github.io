import { Award, GraduationCap } from "lucide-react";
import { certifications, certificationsMoreUrl, education } from "@/content/education";
import { formatRange, formatYm } from "@/lib/site";
import { Section } from "./section";
import { CertificateGallery } from "./certificate-gallery";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <ol className="space-y-10">
        {education.map((e) => (
          <li key={e.degree} className="grid gap-2 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
            <p className="text-sm text-muted tabular">
              {e.end ? formatRange(e.start, e.end) : `Since ${formatYm(e.start)}`}
              <span className="block">{e.status}</span>
            </p>
            <div>
              <h3 className="flex items-start gap-2.5 font-display text-[1.75rem] font-semibold leading-tight">
                <GraduationCap className="mt-1 size-6 shrink-0 text-route" aria-hidden="true" />
                {e.degree}
              </h3>
              <p className="mt-1 text-lg text-route">{e.school}</p>
              <ul className="mt-3 max-w-[44rem] space-y-1.5 text-muted">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16" id="certifications">
        <h3 className="flex items-center gap-2.5 font-display text-3xl font-semibold">
          <Award className="size-6 text-route" aria-hidden="true" />
          Certifications
        </h3>
        <CertificateGallery items={certifications} />
        <p className="mt-4 text-sm text-muted">
          Credentials are also listed on{" "}
          <a href={certificationsMoreUrl} target="_blank" rel="noopener" className="text-link">
            my LinkedIn profile
          </a>
          . Select a certificate to see it full size. Other certificate copies are available on request.
        </p>
      </div>
    </Section>
  );
}
