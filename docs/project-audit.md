# Cosgrove Codebase Audit

Pre-CMS build audit. Snapshot: 2026-04-22.

---

## 1. Laravel & PHP Versions

| | Version |
|---|---|
| Laravel | 10.48.24 |
| PHP | 8.3.12 |

---

## 2. Frontend Views Inventory

Only **3 Blade files** exist — this is an Inertia SPA. Single entry point renders all React pages.

| Blade File | Purpose |
|---|---|
| `resources/views/app.blade.php` | Inertia root shell — all pages rendered here |
| `resources/views/emails/template.blade.php` | Email HTML template |
| `resources/views/welcome.blade.php` | Default Laravel welcome (unused) |

**React page components:**

| Route | Page Component | Content |
|---|---|---|
| `/` | `Home/index` | Hero video, about snippet, stats, projects, press |
| `/about` | `About/index` | Company overview, team bios |
| `/projects` | `Projects/index` | Project listing |
| `/projects/{slug}` | `ProjectDetails/index` | Individual project detail |
| `/houses/{slug}` | `ProjectType/index` | House type detail |
| `/project-homes` | `ProjectHomes/index` | Homes listing |
| `/project-brochure` | `ProjectBrochure/index` | Downloadable brochures |
| `/contact` | `Contact/index` | Contact form + team contacts |
| `/agent-registration` | `Agent/index` | Agent signup form |
| `/careers` | `Career/index` | Jobs page |
| `/press` | `Press/index` | Press/media coverage list |
| `/search` | `HomeSearch/index` | Search results |
| `/privacy` | `Privacy/index` | Privacy policy |
| `/terms-of-service` | `Terms/index` | Terms of service |

---

## 3. Existing Models & Tables

**Only 1 model:** `User` (`app/Models/User.php`)
- Table: `users`
- Fillable: `name`, `email`, `password`
- Traits: `HasApiTokens`, `HasFactory`, `Notifiable`
- No relationships defined

**Migrations (4 total — all Laravel defaults):**

| Migration | Table |
|---|---|
| `2014_10_12_000000` | `users` |
| `2014_10_12_100000` | `password_reset_tokens` |
| `2019_08_19_000000` | `failed_jobs` |
| `2019_12_14_000001` | `personal_access_tokens` |

> Zero custom tables. Zero content tables. **All data is hardcoded in TypeScript.**

---

## 4. Dependencies

### PHP (`composer.json`)

| Package | Purpose |
|---|---|
| `laravel/framework ^10.10` | Core framework |
| `inertiajs/inertia-laravel ^0.6.9` | Inertia server adapter |
| `laravel/sanctum ^3.2` | API token auth |
| `cloudinary-labs/cloudinary-laravel ^2.0` | Image CDN |
| `google/cloud-recaptcha-enterprise ^1.15` | reCAPTCHA (server-side, currently commented out) |
| `guzzlehttp/guzzle ^7.2` | HTTP client |
| `laravel/tinker` | REPL |

### JS (`package.json`)

| Package | Purpose |
|---|---|
| `react ^18.2` | UI framework |
| `@inertiajs/react ^1.0.9` | Inertia React adapter |
| `bootstrap ^5.3` + `react-bootstrap ^2.8` | UI layout |
| `aos ^2.3.4` | Animate on scroll |
| `lottie-react ^2.4` | Lottie animations |
| `react-slick` + `slick-carousel` | Carousel |
| `react-google-recaptcha-v3 ^1.10` | reCAPTCHA client |
| `react-toastify ^10.0.6` | Toast notifications |
| `react-multi-carousel ^2.8.4` | Multi-item carousel |
| `react-parallax ^3.5.1` | Parallax effects |
| `react-countup ^6.4.2` | Animated count-up numbers |
| `react-visibility-sensor ^5.1.1` | Scroll-triggered visibility |
| `react-responsive-masonry ^2.1.7` | Masonry grid |
| `react-select ^5.7.4` | Custom select dropdowns |
| `vite ^4.0` + `laravel-vite-plugin` | Build tool |
| `sass ^1.63.6` | SCSS compiler |

---

## 5. CSS Framework & Color Palette

**Framework:** Bootstrap 5 + custom SCSS
**Entry point:** `resources/css/app.scss`

| Token | Hex | Use |
|---|---|---|
| `$primaryColor` | `#FBBD00` | Accent, CTAs, active nav, footer background |
| Dark background | `#121212` | Navbar (scrolled), mobile menu, overlays |
| Body / dark | `#000000` | Headings |
| Secondary text | `#585858` | Body copy |
| White | `#FFFFFF` | Contrast text |

---

## 6. Current Auth Setup

| | Status |
|---|---|
| Laravel Breeze | Not installed |
| Laravel Jetstream | Not installed |
| Laravel Fortify | Not installed |
| Laravel Sanctum | **Installed** — `personal_access_tokens` table exists, `HasApiTokens` on User |
| Admin middleware | **None** |
| Admin guard | **None** |
| Auth routes | Only `GET /api/user` (Sanctum default, no controller) |

`config/auth.php` has single `web` guard only. No login UI. No password reset routes.

---

## 7. Controller & Architectural Conventions

- No repository pattern. No service layer.
- `HomeController` — one method per page, all return `Inertia::render()`. No data passed from DB (all content hardcoded in React).
- `ApiController` — 2 POST endpoints. Inline validation with `$request->validate()`. No Form Request classes.
- No resource controllers. No route model binding.
- Naming: PascalCase controllers, camelCase methods.
- `resources/js/Data/data.ts` — single file holding all project data, press articles, stats, and feature lists as TypeScript arrays.
- `resources/js/Services/cosgroveApiServices.ts` — Axios wrapper for API calls.

---

## 8. Recommended CMS Sections

Every item below is a hardcoded TypeScript literal requiring a code deploy to change.

| CMS Module | Source Location | Fields Needed |
|---|---|---|
| **Projects** | `data.ts → projects[]` | name, slug, description, location, images, house types, features, showInHome flag |
| **House Types** | `data.ts` per project | type name, beds/baths, area, price, images, floorplan |
| **Press / Media** | `data.ts → pressList[]` | headline, publication, date, external URL |
| **Team Members** | `TeamSection/index.tsx` inline array | name, position, photo, bio (main + collapsible) |
| **Homepage Stats** | `AboutHomeSection` inline | label, count string, icon |
| **Project Brochures** | `ProjectBrochure` page | project name, PDF file, cover image |
| **Contact Info** | `Footer/index.tsx` inline | phone numbers, email, address, map link |
| **Social Links** | `Footer/index.tsx` inline array | platform, URL |
| **Smart Features** | `data.ts` feature lists | name, SVG icon, description |
| **Careers / Jobs** | `Career/index.tsx` | title, department, location, description |

---

## 9. Risks & Conflicts

### Security

- **reCAPTCHA site key hardcoded** in `resources/js/app.js:26` — publicly visible in JS bundle. Move to env var.
- **Server-side reCAPTCHA validation commented out** in `ApiController`. Contact form accepts any token. Bots can submit freely.
- **`sendAgent()` has zero validation** — no required fields, no reCAPTCHA check.

### Compatibility

- **Inertia version mismatch:** `composer.json` requires `inertiajs/inertia-laravel ^0.6.9` (v0 protocol) but `package.json` has `@inertiajs/react ^1.0.9` (v1). Currently functional but latent incompatibility — CMS admin Inertia usage must stay on same adapter version.

### Architecture

- **No database content** — all CMS tables must be created from scratch. No existing schema to extend.
- **Cloudinary installed but unused in PHP** — images referenced as local `/public/assets/` paths in React. Integration exists but inactive on this branch.
- **`public/build/manifest.json` committed** — build artifacts in git; creates noise on every frontend change commit.
- **No admin auth exists** — login, guard, and middleware must all be built before any CMS routes can be safely exposed.
