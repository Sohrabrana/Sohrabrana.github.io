"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download, Menu, X } from "lucide-react";
import { cvFiles } from "@/content/cv";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const sections = [...nav.map((n) => n.id), "references", "cv"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);
  return active;
}

function useDismiss(open: boolean, close: () => void, ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, close, ref]);
}

function CvMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  useDismiss(open, () => setOpen(false), ref);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 items-center gap-1.5 rounded-full bg-signal px-4 text-[0.95rem] font-semibold text-signal-ink transition-[filter] hover:brightness-95"
      >
        Download CV
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div
          id={menuId}
          className="absolute right-0 top-12 w-72 rounded-xl border border-line bg-surface p-2 shadow-[0_12px_32px_-12px_rgb(15_30_51/0.35)]"
        >
          <ul className="space-y-1">
            {cvFiles.map((cv) => (
              <li key={cv.id} lang={cv.lang}>
                <a
                  href={cv.pdf}
                  download
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-route-soft"
                >
                  <Download className="size-4 shrink-0 text-route" aria-hidden="true" />
                  <span>
                    <span className="block font-medium">{cv.title}</span>
                    <span className="block text-sm text-muted">{cv.labels.download}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/#cv"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-route hover:bg-route-soft"
              >
                Preview both versions and LaTeX source
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);
  useDismiss(mobileOpen, () => setMobileOpen(false), mobileRef);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div ref={mobileRef} className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-8">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight" aria-label={`${profile.name}, home`}>
          {profile.name}
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const current = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    aria-current={current ? "location" : undefined}
                    className={`relative rounded-full px-3 py-2 text-[0.95rem] transition-colors hover:text-route ${
                      current ? "text-route" : "text-ink"
                    }`}
                  >
                    {item.label}
                    {current && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-signal" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          <div className="hidden sm:block">
            <CvMenu />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full hover:bg-route-soft lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="absolute inset-x-0 top-16 border-b border-line bg-paper px-5 pb-6 pt-2 shadow-[0_16px_24px_-16px_rgb(15_30_51/0.3)] lg:hidden"
          >
            <ul className="divide-y divide-line">
              {nav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-2xl font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-2">
              {cvFiles.map((cv) => (
                <a
                  key={cv.id}
                  lang={cv.lang}
                  href={cv.pdf}
                  download
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-signal px-4 py-3 font-semibold text-signal-ink"
                >
                  <Download className="size-4" aria-hidden="true" />
                  {cv.title} (PDF)
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
