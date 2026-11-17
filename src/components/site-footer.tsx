import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {profile.name}. Content updated {profile.updated}.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/impressum" className="hover:text-ink" lang="de">
              Impressum
            </Link>
          </li>
          <li>
            <Link href="/datenschutz" className="hover:text-ink" lang="de">
              Datenschutz
            </Link>
          </li>
          {profile.sourceRepo && (
            <li>
              <a href={profile.sourceRepo} className="hover:text-ink" target="_blank" rel="noopener">
                Site source on GitHub
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
