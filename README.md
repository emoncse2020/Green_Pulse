# Green Pulse

A community-powered sustainability portal where people share, discover, and support ideas for a greener planet.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)](LICENSE)

## Overview

**Green Pulse** connects idea creators, supporters, and administrators around environmental innovation. Members submit proposals, the community votes and discusses, and approved ideas can be funded and followed through to real-world impact.

### Key features

- Idea submission with rich media, voting, comments, and status tracking
- Public discovery by category, popularity, and recency
- Member and admin dashboards for ideas, users, and moderation
- Email/password and Google OAuth authentication
- Stripe-based premium access
- Responsive UI with dark mode

## Tech stack

- **Next.js 16** · **React 19** · **TypeScript**
- **Tailwind CSS 4** · **Radix UI** · **Lucide React**
- **TanStack Query** · **Axios** · **Better Auth**
- **React Hook Form** · **Zod** · **Sonner**

## Getting started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Installation

```bash
git clone <repository-url>
cd Green-Pulse
pnpm install
```

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_API_URL=https://green-pulse-server.vercel.app/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm start` — start the production server
- `pnpm lint` — ESLint

## Pages

| Area | Routes |
| --- | --- |
| Public | `/`, `/about`, `/blog`, `/contact`, `/ideas`, `/pricing`, `/privacy`, `/terms` |
| Auth | `/login`, `/register` |
| Member | `/member-dashboard` |
| Admin | `/admin-dashboard` |

## Developer

**Morsalin Ahmed Emon**

- Portfolio: [https://morsalin.is-a.dev/](https://morsalin.is-a.dev/)
- GitHub: [https://github.com/emoncse2020](https://github.com/emoncse2020)
- LinkedIn: [https://www.linkedin.com/in/morsalin-ahhamed](https://www.linkedin.com/in/morsalin-ahhamed)
- Email: [emon.cse.2020@gmail.com](mailto:emon.cse.2020@gmail.com)

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE).

**Green Pulse** — Ideas with a pulse for a greener planet.
