
## Route Map

| Route          | Screen              | File                         | Notes     |
| -------------- | ------------------- | ---------------------------- | --------- |
| `/`            | Landing             | `app/page.js`                | Home      |
| `/dashboard`   | Studio Dashboard    | `app/dashboard/page.js`      | App home  |
| `/orders`      | Orders              | `app/orders/page.js`         |           |
| `/orders/new`  | Quote Builder       | `app/orders/new/page.js`     | Form      |
| `/orders/[id]` | Order Workspace     | `app/orders/[id]/page.js`    | Dynamic   |
| `/materials`   | Material Price Book | `app/materials/page.js`      |           |
| `*`            | Not Found           | `app/not-found.js`           | Catch-all |


## How to run

```bash
npm install
npm run dev