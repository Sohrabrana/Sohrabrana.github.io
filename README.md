# Sohrab Rana – Portfolio and CVs

This repository holds my personal portfolio website (https://sohrabrana.github.io), my English CV and my German Lebenslauf. The CVs are written in LaTeX and can be edited in Overleaf.

## Refresh the portfolio (no installation needed)

Every change you commit to `main` rebuilds and republishes the whole site automatically: both CV PDFs, their preview images, the LaTeX source pages and the website. It takes about 3 minutes.

1. Open the file you want to change on GitHub (table below) and click the **pencil icon** ("Edit this file").
2. Make your change.
3. Click **Commit changes…**, keep "Commit directly to the main branch", and confirm.
4. Open the **Actions** tab. When the "Build and deploy" run shows a green tick, the new version is live. Press Ctrl+F5 on the site to skip the browser cache.

| To change | Edit this file |
| --- | --- |
| English CV | `cv/Sohrab_Rana_CV_English.tex` |
| German CV | `cv/Sohrab_Rana_CV_German.tex` |
| Intro, About, contact details, "open to work" badge | `src/content/profile.ts` |
| Jobs (also the career chart) | `src/content/experience.ts` |
| Projects | `src/content/projects.ts` |
| Skills | `src/content/skills.ts` |
| Education and certifications | `src/content/education.ts` |
| Reference quotes | `src/content/references.ts` |
| Portrait | upload a new `public/images/sohrab-rana.jpg` (Add file → Upload files, same name) |

Tips:

- **Edit the `.tex` files, not the PDFs.** The PDFs are generated from the `.tex` files on every run; an uploaded PDF would be replaced. If you edit your CV in Overleaf, copy the whole text back into the `.tex` file on GitHub.
- **Several files at once:** on the repository page press the `.` key. A full editor (github.dev) opens in the browser; commit all changes together from its Source Control panel.
- **If a run fails** (red cross in Actions): click it to see the message. The usual causes are a LaTeX typo (a missing `}`), a missing comma or quote in a `.ts` file, or the privacy check finding a phone number, birth date or ID number. Fix the file and commit again; the previous version stays online meanwhile.
- **Keep both CVs to one page.** The run shows a warning if a CV grows to two pages.

- **Website:** Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and Motion. All pages are static.
- **CVs:** `cv/Sohrab_Rana_CV_English.tex` and `cv/Sohrab_Rana_CV_German.tex` (pdfLaTeX, one A4 page each, ATS-friendly)
- **Published PDFs:** `public/cv/` (the website links to these files)

```
cv/                          LaTeX sources of both CVs (+ optional photo.jpg)
public/cv/                   Compiled PDFs, .tex copies and preview images served by the site
public/images/               Portrait photo
src/content/                 ALL website text: edit these files to update the site
src/components/              UI components
src/app/                     Pages: home, /cv/en, /cv/de, LaTeX source pages, Impressum, Datenschutz
scripts/build-cv.sh          Compiles the CVs locally and copies them to public/cv/
scripts/sync-cv-sources.mjs  Feeds the .tex files to the "View LaTeX source" pages (runs automatically)
.github/workflows/           Rebuilds the CV PDFs on GitHub when a .tex file changes
scripts/privacy-check.mjs    Blocks builds that would publish private data
```

## Run the site locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Before pushing, check that everything still builds:

```bash
npm run lint
npm run typecheck
npm run build
```

## Update the website content

Every text on the site lives in `src/content/`. Components never need to change for content updates.

| What you want to change | File |
| --- | --- |
| Name, headline, intro, About text, quick facts, email, links, "open to work" badge | `src/content/profile.ts` |
| Work experience (also feeds the career chart in the hero) | `src/content/experience.ts` |
| Projects | `src/content/projects.ts` |
| Skills | `src/content/skills.ts` |
| Education and certifications | `src/content/education.ts` |
| Quotes from reference letters | `src/content/references.ts` |
| CV card texts and file names | `src/content/cv.ts` |
| Portrait photo | replace `public/images/sohrab-rana.jpg` (portrait, 4:5, about 800 × 1000 px) |

### Add a project

Add an object to the `projects` array in `src/content/projects.ts`:

```ts
{
  id: "my-new-project",                 // unique, lowercase, no spaces
  title: "Sales forecast dashboard",
  context: "Portfolio project, public data", // or "Company name, workplace project"
  kind: "portfolio",                    // "workplace" | "academic" | "portfolio"
  period: "2027",
  featured: false,                      // true = large case study, false = compact list
  tags: ["Power BI", "SQL"],            // used by the filter buttons
  summary: "One or two sentences about the problem and the result.",
  built: ["What you built, one item per line"],
  outcomes: ["Only results you can prove"],
  tools: ["Power BI", "DAX", "SQL"],
  links: [{ label: "GitHub", href: "https://github.com/Sohrabrana/..." }],
},
```

Order in the file = order on the page. New filter topics go into `projectTags` in the same file (and the `ProjectTag` type in `src/content/types.ts`).

### Add a certification

Add an entry to `certifications` in `src/content/education.ts` (newest first):

```ts
{ title: "PL-300: Microsoft Power BI Data Analyst", issuer: "Microsoft", date: "2027-02", url: "https://learn.microsoft.com/..." },
```

`url` is optional; when present, the site shows a "View credential" link. Remember to add the certificate to both CVs as well.

### Add or change a job

Add a role to `src/content/experience.ts`. Use the dates from your Arbeitszeugnis (`start` / `end` as `"YYYY-MM"`; leave `end: ""` while the job is ongoing). The hero chart and the experience tabs update automatically.

## Update the CVs

The LaTeX files in `cv/` are the single source of truth. After any change, the PDFs in `public/cv/` must be rebuilt. Choose one of three ways:

### Option 1: edit on GitHub (no installation)

See "Refresh the portfolio" at the top: edit the `.tex` file, commit, and the workflow publishes the new PDFs.

### Option 2: Overleaf

1. In Overleaf: **New Project → Upload Project** and upload the `.tex` file (for the German CV with photo, also upload `cv/photo.jpg`).
   You can also click **Open in Overleaf** on the site's "View LaTeX source" page.
2. Set **Menu → Compiler → pdfLaTeX** and compile.
3. Copy your edited source back into `cv/<file>.tex` on GitHub and commit. The workflow rebuilds the PDFs.

### Option 3: locally

Requires TeX Live with `latexmk`, the `plex`, `babel-german`, `enumitem`, `titlesec` and `hyphenat` packages, plus `poppler-utils` for preview images. On Ubuntu/Debian:

```bash
sudo apt-get install texlive-latex-extra texlive-fonts-extra texlive-lang-german latexmk poppler-utils
npm run cv      # compiles both CVs and copies PDFs, sources and previews to public/cv/
```

The script warns if a CV grows beyond one page.

### Tips for editing the CVs

- Personal details (phone, email, links, portfolio URL) are defined once at the top of each file (`\cvname`, `\cvemail`, `\cvportfolio`, ...).
- `\role{Job title}{Dates}{Employer}{Location}` creates a job entry; `\entry{Title}{Dates}` creates a project or education entry.
- German CV photo: set `\showphototrue` and keep `cv/photo.jpg` next to the `.tex` file. For online application portals (ATS), the version without photo is safer.
- Keep the layout as it is (single column, no tables, icons or text boxes) so applicant tracking systems read the text in the right order. `\pdfgentounicode=1` keeps umlauts and ligatures extractable; hyphenation is off so keywords are never split.
- Keep the dates identical to your Arbeitszeugnisse, and identical between both CVs and the website.

## How publishing works

The workflow `.github/workflows/deploy.yml` runs on every push to `main`: privacy check → compile both CVs with pdfLaTeX → render preview images → `npm run build` as a static export → deploy to GitHub Pages. In the repository settings, **Settings → Pages → Source** must be "GitHub Actions".

To build the same static site on your computer: `npm run build:pages` (output in `out/`).

## Deploy to Vercel (alternative)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project**, import this repository. Vercel detects Next.js; keep the default settings (build command `npm run build`).
3. Optional: under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to the final address (for example `https://sohrab-rana.vercel.app` or your own domain). It is used for canonical URLs, the sitemap, Open Graph and the "Open in Overleaf" links.
4. Click **Deploy**. Every push to `main` redeploys automatically.

If you move the site to another address than `https://sohrabrana.github.io`, update `siteUrl` in `src/content/profile.ts` and `\cvportfolio` in both `.tex` files, then rebuild the CVs.

### Custom domain

Vercel project → **Settings → Domains** → add your domain and follow the DNS instructions. Then update the URL as described above.

## Before going live in Germany

- **Impressum:** add your postal address to `legal` in `src/content/profile.ts` (§ 5 DDG). It is empty by default so your home address is not published by accident.
- **Datenschutz:** the privacy page in `src/app/datenschutz/page.tsx` describes a site without cookies or tracking, hosted on GitHub Pages (set in `hosting` in `src/content/profile.ts`). Review it if you add analytics or embeds. It is a starting point, not legal advice.
- This repository is public (free GitHub Pages hosting needs that). Never add private documents to it: reference letters, certificates, transcripts, ID numbers. The privacy check blocks the most common cases.

## Private data

Everything in `public/`, `src/` and `cv/` is published: on the website, in the downloadable PDFs, on the "View LaTeX source" pages, or in the JavaScript sent to every visitor.

- **Published on purpose:** name, email, phone number, city, LinkedIn, GitHub and professional facts. To hide the phone number, set `showPhone: false` in `src/content/profile.ts` and empty `\cvphone` / `\cvphonelink` in both `.tex` files.
- **Never published:** home address, date and place of birth, nationality, certificate ID numbers, the reference letters themselves and their signatories' names.
- **No internal employer data:** no internal figures, usage statistics, team sizes, survey data or screenshots from Uniper or Continental. Describe your own work and results instead.
- **Privacy check:** `npm run privacy` scans the published folders for phone numbers other than the one in `profile.ts`, birth dates, IBANs and telc IDs. It runs automatically before every `dev`, `build` and `cv` command and in the deploy workflow, and stops if it finds something.
- **Images:** strip metadata before adding photos (the current portrait has no EXIF or GPS data).
- **Reference letters, certificates, transcripts:** keep them out of this repository. Share them with employers directly.
- **Analytics:** the site sets no cookies and loads nothing from third parties. If you add analytics later, update the Datenschutz page first.

## Quality checks done

- `npm run lint`, `npm run typecheck` and `npm run build` pass; all routes are prerendered as static pages.
- Lighthouse (local production build): desktop 100 / 100 / 100 / 100, mobile 89 performance, 100 accessibility, best practices and SEO.
- Both CVs compile to one A4 page. Text extraction was checked with `pdftotext`, `pdfminer.six` and `pypdf`: reading order, umlauts and ligatures are correct.
- No ATS score is claimed: there is no standard ATS, and scores from online checkers are not comparable. The CVs follow the common parsing rules instead (single column, standard headings, real text, consistent dates, no tables or graphics).
