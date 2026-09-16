# CampusCart

CampusCart is a mini e-commerce storefront built for a React course project. It lets students browse a product catalog, search and filter products by category, and manage a shopping cart with adjustable quantities. The cart persists across page refreshes using `localStorage`.

## Features

- Product catalog with local mock data
- Product search by name
- Category filtering (Stationery, Bags, Electronics, Study Supplies)
- Add products to the cart
- Update item quantities (increase / decrease)
- Remove items from the cart
- Cart totals (total items and total price)
- `localStorage` persistence for the cart
- Responsive design for desktop, tablet, and mobile
- Navigation with React Router (Products and Cart views)

## Technologies Used

- React
- Vite
- React Router
- CSS
- JavaScript / JSX

## Setup Instructions

```bash
npm install
npm run dev
```

The app will start on the Vite dev server (usually `http://localhost:5173`).

## Screenshots

Add screenshots of:
- Products page
- Filtered products page
- Cart page

## Known Limitations

CampusCart is a frontend-only course project. It uses local mock product data and has no backend, database, real checkout, or payment processing. Cart data is stored only in the browser's `localStorage`.