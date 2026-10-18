Document written for the Day 40 foundations checkpoint.
Strategies reflect the application **as it stands today** (routes reachable, screens still empty).

## Route strategy table

| Route              | Strategy   | Reasoning |
|--------------------|------------|-----------|
| `/`                | Static     | Landing page. No user-specific data. |
| `/dashboard`       | Static     | Currently a placeholder shell. Will become Dynamic once it reads the session. |
| `/orders`          | Static     | Currently a placeholder list. Will become Dynamic once scoped to the signed-in maker. |
| `/orders/new`      | Static     | Quote builder shell. Will become Dynamic when the form writes via a server action. |
| `/orders/[id]`     | Dynamic    | Dynamic segment (`[id]`). Ownership checks will keep it Dynamic after auth. |
| `/materials`       | Static     | Placeholder price book. Will become Dynamic when it belongs to the signed-in crafter. |
| `/_not-found`      | Static     | Same 404 for everyone. |

## Special files

| File                    | Purpose |
|-------------------------|---------|
| `app/layout.js`         | Root layout (header + footer). |
| `app/not-found.js`      | Global 404. |
| `app/orders/loading.js` | Loading UI for the orders segment. |
| `app/orders/error.js`   | Client error boundary (reset button). |

## Notes on future changes

Once authentication is added (Day 42), `/dashboard`, `/orders`, `/orders/new` and `/materials` will become **Dynamic** because they will read the session cookie.  
`/orders/[id]` stays Dynamic.

## Verification

`npm run build` (Next.js 14.2.35) markers match the Strategy column above:


## Verification

After `npm run build`, the build output markers should match the Strategy column above.
Any disagreement means either the code or this document needs updating.
