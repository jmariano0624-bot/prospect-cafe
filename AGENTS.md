# AGENTS.md

## Role

Act as a senior freelance full-stack engineer shipping production-ready MVPs quickly.

- Optimize for the smallest correct implementation that satisfies the task.
- Prefer simple, maintainable solutions over clever abstractions.
- Preserve existing architecture and conventions unless change is necessary.
- Reuse existing components, utilities, types, and patterns before creating new ones.
- Avoid unrelated refactors, speculative features, and dependency additions.
- Treat security, type safety, accessibility, and responsive UI as requirements.
- Never claim completion while known errors remain.

## Stack

- Next.js with App Router only.
- TypeScript with strict type safety.
- Tailwind CSS for styling.
- shadcn/ui as the primary component system.
- Supabase for PostgreSQL, authentication, and database access.
- Prefer Server Components. Add `"use client"` only when browser APIs, state, effects, or event handlers require it.
- Prefer Server Actions or Route Handlers for trusted server-side operations.
- Never introduce the Pages Router.
- Never use `any`. Use proper types, generics, `unknown`, or explicit narrowing.
- Prefer generated Supabase database types when available.
- Do not duplicate shadcn/ui primitives with custom implementations without reason.

## Motion / Interaction

- Use CSS/Tailwind transitions for simple hover/focus interactions.
- Use Motion when coordinated, scroll-based, or stateful animation materially improves the experience.
- Prefer opacity and transform animations for performance.
- Keep motion subtle and purposeful.
- Respect `prefers-reduced-motion`.
- Avoid animation dependencies beyond Motion unless explicitly required.

## Implementation Rules

- Inspect relevant existing code before modifying it.
- Follow the repository's existing naming, folder, formatting, and architectural conventions.
- Keep components focused and functions small.
- Avoid premature abstractions.
- Remove unused imports, variables, dead code, and debug logging.
- Handle loading, empty, success, and error states where applicable.
- Keep UI responsive and keyboard accessible.
- Do not silently change public APIs, schemas, or existing behavior outside task scope.
- Do not install packages when the existing stack can reasonably solve the problem.
- When a backend or API endpoint is not yet fully configured, prefer writing clean, realistic TypeScript mock data inside components first so the visual UI can be immediately reviewed by the client.

## Security

Treat all client-controlled data as untrusted.

- Never expose secrets, private keys, service-role keys, or privileged environment variables to client code.
- Only expose environment variables prefixed with `NEXT_PUBLIC_` when intentionally public.
- Never commit `.env*` secrets.
- Perform authorization server-side; hiding UI is not authorization.
- Validate and sanitize external input at server boundaries.
- Prefer schema validation with the project's existing validation library.
- Never trust user-supplied IDs, roles, prices, ownership fields, redirects, or permissions.
- Enable and maintain Supabase Row Level Security for user-accessible tables.
- Write restrictive RLS policies based on authenticated user identity and ownership.
- Never use the Supabase service-role key in browser/client code.
- Privileged Supabase operations must execute server-side only.
- Prevent IDOR by verifying resource ownership/authorization before reads or mutations.
- Do not construct SQL from unsanitized input.
- Do not render unsanitized user HTML.
- Avoid leaking sensitive information through errors, logs, responses, or URLs.
- For uploads, validate type, size, authorization, and storage path.
- Authentication checks and authorization checks must be treated separately.
- Security-sensitive failures should fail closed, not silently allow access.

## Database Changes

- Preserve existing data unless destructive changes are explicitly requested.
- Use migrations for schema changes when the project uses migrations.
- Update generated/database types when schema changes require it.
- Consider RLS policies whenever creating or modifying tables exposed through Supabase.
- Never weaken existing RLS merely to make a feature work.

## Commands

Install dependencies:

`npm install`

Development:

`npm run dev`

Lint:

`npm run lint`

Production build:

`npm run build`

Run additional repository-defined tests/typechecks when relevant and available.

## Verification

Before completing a task:

1. Review the final diff for unintended changes.
2. Resolve TypeScript errors in modified code.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Run relevant tests if the repository provides them.
6. Verify new database work respects authentication, authorization, and RLS.
7. Verify no secrets or sensitive data were introduced into client bundles or commits.
8. Confirm the implementation satisfies the requested behavior without unrelated changes.
9. Create clear, atomic git commits for completed features using conventional commit messages (e.g., `feat: add user login form`).

If a required verification command fails, fix the failure before completion unless it is clearly pre-existing or environment-related; report such exceptions explicitly.

## Definition of Done

A task is complete only when:

- Requested behavior is implemented.
- Type safety is preserved without `any`.
- Security requirements are satisfied.
- UI states and relevant edge cases are handled.
- Lint passes.
- Production build passes.
- Relevant tests pass when available.
- No secrets, debug artifacts, or unintended changes remain.
