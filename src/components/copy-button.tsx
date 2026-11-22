"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  value: string;
  label: string;
  /** "dark" for use on the dark contact band, "light" on normal pages. */
  tone?: "dark" | "light";
}

export function CopyButton({ value, label, tone = "dark" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const styles =
    tone === "dark"
      ? "h-14 border-band-ink/30 px-5 text-band-ink hover:border-band-ink/70"
      : "h-11 border-line px-4 text-ink hover:border-ink/50";

  return (
    <button type="button" onClick={copy} className={`inline-flex items-center gap-2 rounded-lg border font-medium ${styles}`}>
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? (label.startsWith("Quell") ? "Kopiert" : "Copied") : label}</span>
    </button>
  );
}
