# wanderlust

Next.js 16.4.3 App Router app (code in `src/app`), npm only (package-lock.json, no yarn/pnpm).

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build`
- `npm run lint` — ESLint flat config; single file: `npx eslint src/path/to/file.tsx`
- Typecheck: `npx tsc --noEmit` (no dedicated script; needs `next-env.d.ts` / `.next` types present, so run after `dev` or `build` has generated them)
- No test framework is set up.

## Quirks

- `LayoutProps<"/">` typed props: layout/page components use Next's typed props helpers, not hand-written `{ children: React.ReactNode }`.
- React Compiler is enabled (`reactCompiler: true`): don't add manual `useMemo`/`useCallback`/`React.memo` optimization.
- `cacheComponents: true` and `partialPrefetching: true` in `next.config.ts`: this app uses the Cache Components mode, which changes caching/dynamic-data rules vs. older Next — consult `node_modules/next/dist/docs/` when touching data fetching, `fetch`, or route config.
- shadcn/ui ("base-nova" style): components in `src/components/ui` are CLI-generated and build on `@base-ui/react` primitives (Base UI), not Radix. When writing new components, copy the local conventions (imports like `@base-ui/react/dialog`, `cn` from `@/lib/utils`, alias `@/*` → `src/*`) rather than stock shadcn/Radix examples.
- Tailwind v4 CSS-first: all theme config lives in `src/app/globals.css` (`@theme`, `@custom-variant dark`, imports of `shadcn/tailwind.css` + `tw-animate-css`). There is no `tailwind.config.js`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
