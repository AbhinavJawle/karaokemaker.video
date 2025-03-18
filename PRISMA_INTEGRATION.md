# Prisma ORM Integration

This project uses [Prisma ORM](https://www.prisma.io/) for database access. Prisma provides a type-safe and intuitive way to interact with your database from TypeScript.

## Setup

The Prisma schema is defined in `prisma/schema.prisma` and includes models for:

- User (connected to Supabase Auth)
- Profile
- StripeCustomer
- ContactRequest

## Database Connection

The database connection string should be configured in the `.env` file:

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
```

For production, make sure to set this environment variable in your hosting platform.

## Available Commands

The following npm scripts are available for Prisma operations:

```bash
# Generate Prisma Client based on your schema
npm run prisma:generate

# Create a new migration
npm run prisma:migrate:dev

# Apply migrations in production
npm run prisma:migrate:deploy

# Open Prisma Studio UI to manage database
npm run prisma:studio

# Seed the database with test data
npm run db:seed
```

## Using Prisma in the Application

### Singleton Instance

A singleton Prisma client is created in `src/lib/prisma.ts` to prevent multiple connections during development.

### Database Utilities

Common database operations are available in `src/lib/db.ts`, including:

- User operations
- Profile management
- Stripe customer data
- Contact request handling

### In SvelteKit Routes

The Prisma client is available in all server routes via `locals.prisma`. Example usage:

```ts
// In a +page.server.ts load function
export async function load(event) {
  const profiles = await event.locals.prisma.profile.findMany()
  return { profiles }
}

// In an API route
export async function POST({ locals, request }) {
  const data = await request.json()
  const newProfile = await locals.prisma.profile.create({ data })
  return json({ profile: newProfile })
}
```

## Database Seeding

To seed your database with test data, run:

```bash
npm run db:seed
```

This will create sample users, profiles and contact requests.

## Models

### User

Represents a user in the system, connected to Supabase Auth.

### Profile

Stores public profile information for users.

### StripeCustomer

Links users to their Stripe customer IDs for payment processing.

### ContactRequest

Stores contact form submissions.

## Best Practices

1. Use the provided utility functions in `src/lib/db.ts` when possible
2. For complex queries, leverage Prisma's fluent API directly
3. Always handle errors when performing database operations
4. Use transactions for operations that modify multiple records
5. Keep the Prisma schema in sync with your database using migrations
