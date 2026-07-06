# Prisma-ORMs

A small Express + Prisma API for managing users and their todos, using PostgreSQL via the `@prisma/adapter-pg` driver adapter.

## Tech Stack

- **Runtime:** Node.js, TypeScript
- **Server:** Express
- **ORM:** Prisma (`@prisma/client`, `@prisma/adapter-pg`)
- **Database:** PostgreSQL
- **Config:** dotenv

## Data Model

- **User** — `id`, `username` (unique), `password`, `age`, and a list of `todos`
- **Todo** — `id`, `title`, `description`, `done`, linked to a `User` via `userId`

(One user can have many todos.)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with your database connection string:

   ```env
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   ```

3. Run migrations to set up the schema:

   ```bash
   npx prisma migrate dev
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

The server listens on **port 3000**.

## API

### `GET /users`

Returns all users.

### `GET /todos/:id`

Returns a user's `username`, `password`, and `todos`, looked up by user `id`.

> Note: this route is named `/todos/:id` but actually returns user data (including todos). Also, `password` is included in the response — worth removing before this is exposed anywhere real.

## Notes

- Prisma client is generated into `src/generated/prisma` (gitignored) — run `npx prisma generate` if it's missing after cloning.
- No password hashing is currently implemented.
