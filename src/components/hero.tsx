import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { profile } from "@/content/profile";
import { cvFiles } from "@/content/cv";
import { timelineRows } from "@/content/timeline";
import { monthIndex } from "@/lib/site";
import { CareerChart } from "./career-chart";
import { GitHubIcon, LinkedInIcon } from "./brand-icons";

function axisRange() {
  const starts = timelineRows.map((r) => monthIndex(r.start));
  const ends = timelineRows.map((r) => {
    const latest = r.extension?.end ?? r.end;
    return latest ? monthIndex(latest) : monthIndex(r.start) + 8;
  });
  const first = Math.min(...starts);
  const last = Math.max(...ends);
  const toYm = (i: number) => `${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`;
  // Axis starts in January of the first year.
  return { axisStart: `${Math.floor(first / 12)}-01`, axisEnd: toYm(last) };
}

export function Hero() {
  const { axisStart, axisEnd } = axisRange();
  return (
    <section id="top" aria-labelledby="hero-name" className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:pb-24">
      <div className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {profile.availability.open && (
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium">
              <span className="inline-flex size-2.5 rounded-full bg-signal" aria-hidden="true" />
              {profile.availability.label}
            </p>
          )}

          <h1 id="hero-name" className="font-display mt-6 text-[clamp(3.6rem,11vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.02em]">
            {profile.name}
          </h1>
          <p className="font-display mt-4 text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium leading-tight text-route">
            {profile.role}
          </p>
          <p className="mt-6 max-w-[36rem] text-[1.35rem] font-semibold leading-snug sm:text-[1.6rem]">{profile.headline}</p>
          <p className="mt-4 max-w-[38rem] text-lg leading-relaxed text-muted">{profile.lede}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {cvFiles.map((cv, i) => (
              <a
                key={cv.id}
                href={cv.pdf}
                download
                lang={cv.lang}
                className={`inline-flex h-12 items-center gap-2 rounded-full px-5 font-semibold transition-[filter,background-color] ${
                  i === 0
                    ? "bg-signal text-signal-ink hover:brightness-95"
                    : "border border-ink/80 text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                <Download className="size-4" aria-hidden="true" />
                {cv.id === "en" ? "Download CV (English)" : "Lebenslauf (Deutsch)"}
              </a>
            ))}
            <a href="#contact" className="inline-flex h-12 items-center gap-2 px-3 font-semibold text-route hover:underline">
              <Mail className="size-4" aria-hidden="true" />
              Get in touch
            </a>
          </div>

          <ul className="mt-6 flex items-center gap-2" aria-label="Profiles">
            <li>
              <a
                href={profile.links.linkedin}
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-route-soft hover:text-route"
                aria-label="LinkedIn profile"
                rel="me noopener"
                target="_blank"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </li>
            <li>
              <a
                href={profile.links.github}
                className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-route-soft hover:text-route"
                aria-label="GitHub profile"
                rel="me noopener"
                target="_blank"
              >
                <GitHubIcon className="size-5" />
              </a>
            </li>
            <li className="ml-2 text-sm text-muted">{profile.location}</li>
          </ul>
        </div>

        <div className="order-first w-32 sm:w-44 lg:order-none lg:col-span-4 lg:col-start-9 lg:w-auto">
          <div className="relative">
            <div className="absolute -bottom-2 -right-2 h-full w-full rounded-2xl border-2 border-route/60 lg:-bottom-3 lg:-right-3" aria-hidden="true" />
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={800}
              height={1000}
              priority
              sizes="(min-width: 1024px) 360px, 176px"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <CareerChart rows={timelineRows} axisStart={axisStart} axisEnd={axisEnd} />
      </div>
    </section>
  );
}
