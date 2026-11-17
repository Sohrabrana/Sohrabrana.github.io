import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-6xl font-bold">Page not found</h1>
      <p className="mt-4 text-lg text-muted">This address doesn&apos;t exist. The CVs and all sections are on the home page.</p>
      <Link href="/" className="mt-8 inline-flex h-12 items-center rounded-full bg-signal px-5 font-semibold text-signal-ink">
        Go to the home page
      </Link>
    </div>
  );
}
