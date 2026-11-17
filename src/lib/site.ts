import { profile } from "@/content/profile";

/** Absolute site URL, without trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || profile.siteUrl).replace(/\/$/, "");

export const absoluteUrl = (path: string) => `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-04" -> "Apr 2025" */
export function formatYm(ym: string): string {
  if (!ym) return "present";
  const [y, m] = ym.split("-");
  return `${months[Number(m) - 1]} ${y}`;
}

export function formatRange(start: string, end: string): string {
  return `${formatYm(start)} – ${end ? formatYm(end) : "present"}`;
}

/** Months between two "YYYY-MM" values (inclusive of the start month). */
export function monthIndex(ym: string): number {
  const [y, m] = ym.split("-").map(Number);
  return y * 12 + (m - 1);
}
