# Server / Client Boundary

Document written for the Day 40 foundations checkpoint.
Boundary decisions reflect the application as it stands now.
Almost everything is a Server Component by design; `"use client"` appears only where interactivity is required.

## Component boundary table

| File / Component              | Side     | Why |
|-------------------------------|----------|-----|
| `app/layout.js`               | Server   | Root shell. Passes `children` through. No state, no event handlers. |
| `app/page.js`                 | Server   | Static landing page. Pure markup + `Link`. |
| `app/not-found.js`            | Server   | Static 404. Pure markup + `Link`. |
| `app/dashboard/page.js`       | Server   | Placeholder heading. Will later fetch the maker’s summary on the server. |
| `app/orders/page.js`          | Server   | Placeholder list page. Will later fetch the user’s orders on the server. |
| `app/orders/new/page.js`      | Server   | Quote builder shell. Form interactivity will be pushed into leaf client components later. |
| `app/orders/[id]/page.js`    | Server   | Order workspace shell. Reads `params` on the server. |
| `app/materials/page.js`       | Server   | Material price book shell. Will later fetch the maker’s materials on the server. |
| `app/orders/loading.js`       | Server   | Loading UI. No interactivity. |
| `app/orders/error.js`         | Client   | Error boundary. Uses the `reset` function and an `onClick` handler — must be a Client Component. |

## Summary

- **Server by default.** Every page and the root layout run on the server.
- **One Client Component so far:** `orders/error.js` — required because error boundaries need event handlers and the `reset` callback.
- No `"use client"` at the page level. When forms, search, or status polling are added, the directive will be pushed down to the interactive leaves only (buttons, inputs, status widgets).

## Rules I'm following

1. Fetch data in Server Components (or server actions) — never in a Client Component just to display it.
2. `"use client"` is for interactivity
3. Client components that wrap server content must receive that content as `children`.
4. Keep the client boundary as low as possible so the server can still access and cache the rest of the tree.
