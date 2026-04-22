# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cosgrove is a real estate/property development marketing site for Cosgrove Africa. It uses **Laravel 10 + React 18 + Inertia.js**: Laravel handles routing and data, Inertia bridges the two layers, and React renders the UI. There is no separate API consumed by the frontend — Inertia passes props directly from Laravel controllers to React page components.

## Commands

```bash
# Frontend
npm run dev       # Start Vite dev server with hot reload
npm run build     # Production build (outputs to public/build/)

# Backend
php artisan serve                  # Start Laravel dev server
php artisan migrate                # Run database migrations
php artisan test                   # Run PHPUnit test suite
./vendor/bin/phpunit --filter=ExampleTest  # Run a single test
```

## Architecture

### Request Flow
1. User hits a URL → `routes/web.php` maps it to a `HomeController` method
2. Controller fetches data and returns `Inertia::render('PageName', $props)`
3. Inertia renders the corresponding React component in `resources/js/Pages/`
4. Form submissions go to `/api/v1/*` endpoints in `routes/api.php`, handled by `ApiController`

### Key Directories

| Path | Purpose |
|------|---------|
| `app/Http/Controllers/HomeController.php` | Page rendering — all Inertia::render() calls live here |
| `app/Http/Controllers/ApiController.php` | API endpoints: contact form, agent registration |
| `app/Mail/NewMail.php` | Email mailable used by both contact and agent forms |
| `resources/js/Pages/` | Inertia page components (one per route) |
| `resources/js/Components/` | Reusable React components, organized by page section |
| `resources/js/Services/` | Axios wrapper (`BaseApiService`, `CosgroveApiServices`) |
| `resources/css/` | SCSS/SASS stylesheets |
| `public/build/` | Vite build output (committed via `manifest.json`) |

### Frontend Stack
- **React 18 + TypeScript** with Inertia.js (`@inertiajs/react`)
- **Bootstrap 5 + React Bootstrap** for layout/UI
- **SCSS** for styling
- Additional: Slick carousel, AOS (animate on scroll), Lottie, React Icons, React Toastify
- **Google reCAPTCHA Enterprise v3** on contact/agent forms (client: `@google-cloud/recaptcha-enterprise`)

### Backend / External Services
- **Cloudinary** — image storage and delivery
- **Google reCAPTCHA Enterprise** — server-side token validation
- **Laravel Mail (SMTP)** — contact form → `nafisa.aliyu@cosgroveafrica.com`; agent form → `careers@cosgroveafrica.com`
- **Laravel Sanctum** — available for API auth middleware if needed

## Environment Variables

Copy `.env.example` to `.env`. Critical vars:
- `DB_*` — MySQL connection (migrations required before running locally)
- `MAIL_*` — SMTP credentials
- `CLOUDINARY_*` — image CDN
- `RECAPTCHA_*` — Google reCAPTCHA Enterprise keys

## Testing

Backend tests only (no JS test framework configured). Two suites in `phpunit.xml`: `Unit` (`tests/Unit/`) and `Feature` (`tests/Feature/`). Tests use an in-memory SQLite database by default.
