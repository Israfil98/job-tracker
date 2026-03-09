# ApplyPilot

A job application tracker that helps you stay organized during your job search. Track applications, monitor statuses, and keep notes — all in one place.

**Live:** [apply-pilot-sigma.vercel.app](https://apply-pilot-sigma.vercel.app)

## Features

- **Dashboard** — real-time stats (total, interviews, offers, rejections) with recent applications
- **Application tracking** — add, view, edit, and delete job applications
- **Status filtering** — filter applications by status (Applied, Interview, Offer, Rejected)
- **Pagination** — applications table paginates at 10 items per page with smart page numbers
- **Authentication** — email/password, Google OAuth, and GitHub OAuth via Supabase
- **Protected routes** — secure pages that require login, with automatic redirects
- **Toast notifications** — success and error feedback for all CRUD actions
- **Custom confirm modal** — styled delete confirmations replacing browser popups
- **Responsive design** — mobile hamburger menu, card layouts on small screens, table on desktop

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7, Tailwind CSS 4
- **Backend:** Supabase (auth, database, row-level security)
- **State Management:** Zustand (auth store, toast store)
- **Routing:** React Router 7 (layout routes, lazy loading, protected/public routes)
- **Forms:** React Hook Form
- **Icons:** lucide-react
- **Code Quality:** ESLint 9, Prettier, Husky, lint-staged
- **Testing:** Vitest, React Testing Library
- **CI/CD:** GitHub Actions, Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Israfil98/apply-pilot.git
cd apply-pilot
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file using the example:

```bash
cp .env.example .env.local
```

4. Add your Supabase credentials to `.env.local`:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:

```bash
npm run dev
```

### Database Setup

Create a `job_applications` table in your Supabase project with the following columns:

| Column         | Type        | Default             | Notes                                          |
| -------------- | ----------- | ------------------- | ---------------------------------------------- |
| `id`           | uuid        | `gen_random_uuid()` | Primary key                                    |
| `user_id`      | uuid        | —                   | Foreign key → `auth.users.id` (cascade delete) |
| `company`      | text        | —                   | Required                                       |
| `position`     | text        | —                   | Required                                       |
| `status`       | text        | `'Applied'`         | Applied, Interview, Offer, or Rejected         |
| `applied_date` | date        | `now()`             | —                                              |
| `url`          | text        | —                   | Nullable                                       |
| `notes`        | text        | —                   | Nullable                                       |
| `salary`       | text        | —                   | Nullable                                       |
| `location`     | text        | —                   | Nullable                                       |
| `created_at`   | timestamptz | `now()`             | —                                              |

Enable Row Level Security (RLS) with policies scoped to `auth.uid() = user_id` for SELECT, INSERT, UPDATE, and DELETE.

## Architecture

- **Pages** compose components and handle data fetching
- **Components** are presentational, receiving data via props
- **Hooks** encapsulate reusable logic (auth, CRUD operations)
- **Stores** manage global state with Zustand (auth, toasts)
- **Layout routes** provide shared navigation via `AppLayout` in `ProtectedRoute`

## Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start development server            |
| `npm run build`        | Type-check and build for production |
| `npm run lint`         | Run ESLint                          |
| `npm run format`       | Format code with Prettier           |
| `npm run format:check` | Check formatting without writing    |
| `npm run test`         | Run tests in watch mode             |
| `npm run test:run`     | Run tests once                      |
