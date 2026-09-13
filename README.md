# Green Pulse

A community-powered sustainability portal where people share, discover, and support ideas for a greener planet.

[![Live App](https://img.shields.io/badge/Live%20App-Visit%20Site-22c55e?style=for-the-badge&logo=vercel)](https://green-pulse-blond-kappa.vercel.app/)
[![Live API](https://img.shields.io/badge/Live%20API-green--pulse--server-000000?style=for-the-badge&logo=vercel)](https://green-pulse-server.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](#license)

## Overview

**Green Pulse** connects idea creators, supporters, and administrators around environmental innovation. Members submit proposals, the community votes and discusses, and admins review and publish the ideas that make it through.

This repository is the **frontend** — a Next.js App Router application. It talks to the [Green Pulse Server](https://github.com/emoncse2020/green_pulse_server) REST API.

### Key features

- **Idea lifecycle** — draft, submit for review, admin approval/rejection with feedback
- **Discovery** — search, category filter, sorting, and pagination over approved ideas
- **Community** — one-click voting and threaded comments on every idea
- **Paid ideas** — Stripe Checkout gates the full solution of premium ideas; unpaid visitors see a teaser
- **Dashboards** — a member area for your own ideas and profile, an admin area for ideas, users, and categories
- **Auth** — email/password and Google OAuth via Better Auth, plus a full forgot/reset-password flow
- **Polish** — dark mode, skeleton loading states, toast feedback, and a branded 404

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript 5 |
| Styling | Tailwind CSS 4, Radix UI primitives, Lucide icons, `next-themes` |
| Data | TanStack Query, Axios, Next.js server actions |
| Auth | Better Auth (`better-auth/react` client) |
| Forms | React Hook Form + Zod |
| Feedback | Sonner toasts |

## Architecture

### API access has two paths

`src/lib/api.ts` picks a base URL based on where the code runs:

- **Server components / server actions** call the backend directly at `${NEXT_PUBLIC_API_URL}/v1`.
- **Browser code** calls the relative path `/api/v1`, which `next.config.ts` rewrites to `${NEXT_PUBLIC_API_URL}/:path*`.

The rewrite makes the API same-origin in the browser, so the Better Auth session cookie is sent on every request without third-party-cookie problems. Set `NEXT_PUBLIC_API_URL` to the backend origin **plus `/api`** (no `/v1`) — both paths append the rest themselves.

### Route groups

```
src/app/
├── (auth)/         # login, register, forgot-password, reset-password
├── (marketing)/    # public site: home, ideas, blog, pricing, legal, contact
├── (dashboard)/    # member-dashboard and admin-dashboard (auth required)
├── layout.tsx      # providers: theme, TanStack Query, auth, toasts
└── not-found.tsx
```

```
src/
├── actions/        # server actions (admin, ideas, contact)
├── components/
│   ├── features/   # admin, ideas, marketing, member
│   ├── home/       # landing-page sections
│   ├── layout/     # Navbar, Footer, Sidebar
│   ├── providers/  # Theme, Query, Auth
│   ├── shared/     # IdeaCard, CommentSection, ...
│   └── ui/         # Button, Dialog, DataTable, ...
├── config/env.ts   # public env access
├── data/           # static content (about, blog posts, home copy)
├── lib/            # api clients, auth client, query builder, utils
├── services/       # admin service layer
└── types/
```

## Getting started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn
- A running [Green Pulse Server](https://github.com/emoncse2020/green_pulse_server) instance

### Installation

```bash
git clone https://github.com/emoncse2020/Green_Pulse.git
cd Green_Pulse
pnpm install
```

Create a `.env` file in the project root:

```env
# Backend origin + /api — no trailing /v1
NEXT_PUBLIC_API_URL=http://localhost:5000/api

NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | yes | Backend base URL; drives the API client, the auth client, and the rewrite |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | yes | Google OAuth button |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | yes | Stripe Checkout for paid ideas |
| `BACKEND_URL` | no | Server-side override for `NEXT_PUBLIC_API_URL` |

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Does |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |

## Routes

| Area | Routes |
| --- | --- |
| Public | `/`, `/about`, `/blog`, `/blog/[slug]`, `/contact`, `/ideas`, `/ideas/[id]`, `/pricing`, `/privacy`, `/terms`, `/payment-success` |
| Auth | `/login`, `/register`, `/forgot-password`, `/reset-password` |
| Member | `/member-dashboard`, `/member-dashboard/ideas`, `/member-dashboard/ideas/create`, `/member-dashboard/ideas/[id]`, `/member-dashboard/ideas/[id]/edit`, `/member-dashboard/profile` |
| Admin | `/admin-dashboard`, `/admin-dashboard/ideas`, `/admin-dashboard/users`, `/admin-dashboard/categories`, `/admin-dashboard/settings` |

## Deployment

Deployed on Vercel as the **`green-pulse`** project, live at [green-pulse-blond-kappa.vercel.app](https://green-pulse-blond-kappa.vercel.app/).

1. Import the repository into Vercel — the Next.js preset needs no build-command changes.
2. Add `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` to the Production environment. `NEXT_PUBLIC_API_URL` must be the deployed backend (`https://green-pulse-server.vercel.app/api`), **not** `localhost`.
3. Make sure the backend's `FRONTEND_URL` points back at this deployment and its CORS allow-list includes this origin — Better Auth uses it for the post-login redirect.

## Developer

**Morsalin Ahmed Emon**

- Portfolio: [morsalin.is-a.dev](https://morsalin.is-a.dev/)
- GitHub: [@emoncse2020](https://github.com/emoncse2020)
- LinkedIn: [morsalin-ahhamed](https://www.linkedin.com/in/morsalin-ahhamed)
- Email: [emon.cse.2020@gmail.com](mailto:emon.cse.2020@gmail.com)

## License

Released under the ISC License.

---

**Green Pulse** — Ideas with a pulse for a greener planet.
