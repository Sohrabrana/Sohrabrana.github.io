// Stops the build if private data is about to be published.
// Everything in public/, src/ and cv/ ends up on the website or in the
// public CV files, so these folders must never contain:
//   - phone numbers other than the one approved in src/content/profile.ts
//   - dates of birth / birthplaces
//   - bank details (IBAN)
//   - certificate or ID numbers marked as private (e.g. telc IDs)
// Runs automatically before `npm run dev` and `npm run build`.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const folders = ["public", "src", "cv"];
const textExtensions = new Set([".ts", ".tsx", ".js", ".mjs", ".css", ".tex", ".md", ".txt", ".json", ".svg", ".html", ".xml"]);
const skipDirs = new Set(["node_modules", ".next", "generated"]);

// The phone number you chose to publish (profile.ts -> phone) is allowed.
const profileSource = readFileSync(join(root, "src/content/profile.ts"), "utf8");
const approvedPhone = (profileSource.match(/phone:\s*"([^"]*)"/) || [])[1] || "";
const normalizePhone = (value) => value.replace(/\D/g, "").replace(/^0049/, "49").replace(/^0(?=1)/, "49");
const approved = approvedPhone ? normalizePhone(approvedPhone) : null;

const rules = [
  {
    name: "phone number",
    re: /(?:\+49|0049)[\s\-/]?\(?0?\)?[\s\-/]?1[5-7]\d[\s\-/]?\d{3,4}[\s\-/]?\d{3,5}|\b01[5-7]\d[\s\-/]?\d{3,4}[\s\-/]?\d{3,5}\b/g,
    allow: (match) => approved !== null && normalizePhone(match) === approved,
  },
  { name: "date of birth", re: /\b(?:geboren am|geb\.\s*am|born on|date of birth|geburtsdatum)\b/i },
  { name: "birthplace", re: /\b(?:geburtsort|place of birth)\b/i },
  { name: "IBAN", re: /\b[A-Z]{2}\d{2}(?:\s?\d{4}){4,7}\b/ },
  { name: "telc ID", re: /\btelc-(?!Zertifikat|Pr[uü]fung|Deutsch|certificate)[A-Za-z0-9]{6,}\b/ },
];

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (textExtensions.has(extname(name))) yield path;
  }
}

const findings = [];
for (const folder of folders) {
  for (const file of walk(join(root, folder))) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const rule of rules) {
        const matches = line.match(new RegExp(rule.re.source, rule.re.flags.includes("g") ? rule.re.flags : rule.re.flags + "g")) || [];
        if (matches.some((m) => !(rule.allow && rule.allow(m)))) {
          findings.push(`${relative(root, file)}:${i + 1}  ${rule.name}`);
        }
      }
    });
  }
}

if (findings.length) {
  console.error("\nPrivacy check failed. These files would publish private data:\n");
  for (const f of findings) console.error("  " + f);
  console.error("\nRemove the data, or keep that version outside this repository (see README, 'Private data').\n");
  process.exit(1);
}
console.log("Privacy check passed: no unapproved phone numbers, birth dates, IBANs or ID numbers in public files.");
