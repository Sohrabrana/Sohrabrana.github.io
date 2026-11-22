import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { cvFiles } from "@/content/cv";
import { ProfileModel } from "./profile-model";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

export function Hero() {
  const [en, de] = cvFiles;
  return (
    <section id="top" aria-labelledby="hero-name" className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-14 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            {/* Phones only: on larger screens the portrait sits in the model diagram. */}
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={800}
              height={1000}
              priority
              sizes="88px"
              className="aspect-[4/5] w-[5.5rem] shrink-0 rounded-md border border-line object-cover sm:hidden"
            />
            {profile.availability.open && (
              <p className="inline-flex items-start gap-2.5 rounded-md border border-line bg-surface px-3 py-1.5 text-[0.92rem] font-medium leading-snug">
                <span className="mt-[0.45em] inline-flex size-2 shrink-0 rounded-full bg-signal ring-4 ring-signal-soft" aria-hidden="true" />
                {profile.availability.label}
              </p>
            )}
          </div>

          <h1
            id="hero-name"
            className="font-display mt-7 text-[clamp(3.4rem,10vw,5.6rem)] font-bold leading-[0.9] tracking-[-0.02em]"
          >
            {profile.name}
          </h1>
          <p className="font-display mt-3 text-[clamp(1.35rem,3vw,1.75rem)] font-medium leading-tight text-route">
            {profile.role}
          </p>
          <p className="mt-6 max-w-[34rem] text-[1.15rem] leading-relaxed">{profile.lede}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={en.pdf}
              download
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-signal px-5 font-semibold text-signal-ink transition-[filter] hover:brightness-95"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
              <span className="sr-only">(English, PDF)</span>
            </a>
            <a
              href={de.pdf}
              download
              lang="de"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-ink/70 px-5 font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              <Download className="size-4" aria-hidden="true" />
              Lebenslauf
              <span className="sr-only">(Deutsch, PDF)</span>
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-1 text-[0.98rem]" aria-label="Contact and profiles">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-lg px-2.5 font-semibold text-route transition-colors hover:bg-route-soft"
              >
                <Mail className="size-[1.1rem]" aria-hidden="true" />
                Email me
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                className="inline-flex h-10 items-center gap-2 rounded-lg px-2.5 font-medium text-muted transition-colors hover:bg-route-soft hover:text-route"
                rel="me noopener"
                target="_blank"
              >
                <LinkedInIcon className="size-[1.1rem]" />
                LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.links.github}
                className="inline-flex h-10 items-center gap-2 rounded-lg px-2.5 font-medium text-muted transition-colors hover:bg-route-soft hover:text-route"
                rel="me noopener"
                target="_blank"
              >
                <GitHubIcon className="size-[1.1rem]" />
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ProfileModel />
        </div>
      </div>
    </section>
  );
}
