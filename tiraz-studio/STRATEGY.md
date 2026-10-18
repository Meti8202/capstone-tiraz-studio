Document written for the Day 40 foundations checkpoint.
Strategies reflect the application as it stands today (routes reachable, screens still empty).

## Route strategy table

| Route              | Strategy   | Reasoning |
|--------------------|------------|-----------|
| `/`                | Static     | Landing page. No user-specific data. Content changes only when the product description is updated. |
| `/dashboard`       | Dynamic    | Will show the signed-in maker’s active orders, deadlines and balances. Already private by intent; will read session once auth lands. |
| `/orders`          | Dynamic    | List of the current user’s projects. Must be scoped to the session; cannot be static or ISR. |
| `/orders/new`      | Dynamic    | Quote builder form. Will write via a server action; needs request-time context. |
| `/orders/[id]`     | Dynamic    | Single order workspace. Identity and ownership depend on the session and the dynamic `id`. |
| `/materials`       | Dynamic    | Material price book belongs to the signed-in crafter. Prices may change; must not be publicly cached. |
| `/not-found`       | Static     | Same 404 for everyone. |

## Special files

| File                    | Purpose |
|-------------------------|---------|
| `app/layout.js`         | Root layout (header + footer) across all pages. |
| `app/not-found.js`      | Global 404. Links back to Dashboard. |
| `app/orders/loading.js` | Instant loading UI while the orders segment resolves. |
| `app/orders/error.js`   | Client error boundary for the orders segment (reset button). |

## Notes on future changes

- Once authentication is added (Day 42), every route under `/dashboard`, `/orders` and `/materials` will remain **Dynamic** because they read the session cookie.
- `/orders/[id]` will stay Dynamic; `generateStaticParams` is not appropriate for private order ids.

## Verification

After `npm run build`, the build output markers should match the Strategy column above.
Any disagreement means either the code or this document needs updating.
