# AI Bot Generator Landing Page

Landing page for capturing early-access testers for an AI bot generator. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features
- Futuristic hero with CTA and animated cards
- Sections: how it works, bot examples, audiences, benefits, CTA + contact form, footer
- Contact form captures name, email, telegram, bot type, description, and testing intent
- API route writes to the `clients` table (PostgreSQL) with email fallback via Nodemailer
- SEO meta tags and OpenGraph data
- Docker Compose for frontend + Postgres

## Getting Started
1. Copy environment variables
```bash
cp .env.example .env
```
2. Update `.env` with your PostgreSQL and SMTP credentials.
3. Install dependencies and run the dev server (Node 20+):
```bash
npm install
npm run dev
```
4. Open http://localhost:3000.

> Without database credentials the API route will attempt to send the submission via email fallback.

## Testing locally
- Run type checks and linting:
```bash
npm run lint
```
- Build the production bundle to ensure the landing page renders without errors:
```bash
npm run build
```
- Start a production preview server after building:
```bash
npm run start
```
> The execution environment used for this repository does not have Node.js installed, so run the commands above on a local machine or CI runner with Node 20+ available.

## API
`POST /api/clients`
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "telegram": "@jane",
  "botType": "Customer Support",
  "description": "Help answer product questions",
  "wantTest": true,
  "source": "landing-page"
}
```
- Writes to `clients` with `created_at` timestamp when `DATABASE_URL` is configured.
- Falls back to Nodemailer email if database is unavailable or not configured.

## Database
Table is created automatically if it does not exist:
```
clients (
  id serial primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  telegram varchar(255),
  use_case varchar(255),
  description text,
  want_test boolean,
  source varchar(255),
  created_at timestamptz default now()
)
```

## Docker Compose
Run the full stack with Postgres (reads `.env` for credentials):
```bash
docker compose up --build
```
- Frontend: http://localhost:3000
- Database: exposed on `5432` (username/password `postgres`)
- Services auto-restart and wait for Postgres health before starting the app.
