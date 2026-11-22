import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/profile";
import { CopyButton } from "./copy-button";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-line bg-band text-band-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <h2 id="contact-heading" className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.92]">
          Let&apos;s talk about your team&apos;s data.
        </h2>
        <p className="mt-5 max-w-[36rem] text-lg text-band-ink/75">
          I&apos;m available immediately for full-time positions in Germany and open to relocation. Email is the fastest way to reach me.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-14 items-center gap-3 rounded-full bg-signal px-6 text-lg font-semibold text-signal-ink hover:brightness-95"
          >
            <Mail className="size-5" aria-hidden="true" />
            {profile.email}
          </a>
          <CopyButton value={profile.email} label="Copy email address" />
        </div>

        <ul className="mt-10 grid gap-4 text-band-ink/85 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="me noopener" className="inline-flex items-center gap-2.5 hover:text-signal">
              <LinkedInIcon className="size-5" />
              linkedin.com/in/sohrab-rana
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="me noopener" className="inline-flex items-center gap-2.5 hover:text-signal">
              <GitHubIcon className="size-5" />
              github.com/Sohrabrana
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          {profile.showPhone && (
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2.5 hover:text-signal">
                <Phone className="size-5" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
          )}
          <li className="inline-flex items-center gap-2.5">
            <MapPin className="size-5" aria-hidden="true" />
            {profile.location}
          </li>
        </ul>
      </div>
    </section>
  );
}
