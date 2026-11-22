import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/profile";
import { cvFiles } from "@/content/cv";
import { CopyButton } from "./copy-button";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

export function Contact() {
  const [en] = cvFiles;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 id="contact-heading" className="font-display text-[clamp(2.6rem,7vw,4.75rem)] font-bold leading-[0.95] tracking-[-0.02em]">
              Hiring a junior BI or data analyst?
            </h2>
            <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-relaxed text-band-muted">
              I can start immediately, full-time, anywhere in Germany. Email is the fastest way to reach me, and I&apos;m happy
              to set up a call. Working student positions and internships are welcome too.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-14 items-center gap-3 rounded-lg bg-signal px-6 text-[1.05rem] font-semibold text-signal-ink transition-[filter] hover:brightness-95"
              >
                <Mail className="size-5" aria-hidden="true" />
                {profile.email}
              </a>
              <CopyButton value={profile.email} label="Copy email address" />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <ul className="divide-y divide-band-ink/15 border-y border-band-ink/15 text-[1.02rem]">
              <li>
                <a href={profile.links.linkedin} target="_blank" rel="me noopener" className="flex items-center gap-3 py-4 hover:text-signal">
                  <LinkedInIcon className="size-5 shrink-0" />
                  <span>
                    <span className="block font-semibold">LinkedIn</span>
                    <span className="block text-sm text-band-muted">linkedin.com/in/sohrab-rana</span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={profile.links.github} target="_blank" rel="me noopener" className="flex items-center gap-3 py-4 hover:text-signal">
                  <GitHubIcon className="size-5 shrink-0" />
                  <span>
                    <span className="block font-semibold">GitHub</span>
                    <span className="block text-sm text-band-muted">github.com/Sohrabrana</span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              {profile.showPhone && (
                <li>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 py-4 hover:text-signal">
                    <Phone className="size-5 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold">Phone</span>
                      <span className="block text-sm text-band-muted tabular">{profile.phone}</span>
                    </span>
                  </a>
                </li>
              )}
              <li>
                <a href={en.pdf} download className="flex items-center gap-3 py-4 hover:text-signal">
                  <Download className="size-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold">CV (PDF)</span>
                    <span className="block text-sm text-band-muted">English, one page</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 py-4">
                <MapPin className="size-5 shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{profile.location}</span>
                  <span className="block text-sm text-band-muted">Open to relocation within Germany</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
