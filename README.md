# E-Kart - Modern E-Commerce Platform

E-Kart is a modern, responsive e-commerce platform built with React and Bootstrap. It provides a seamless shopping experience with features like product browsing, filtering, search, and cart management.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Product Catalog**: Browse through a variety of products including mobiles, laptops, and tablets
- **Smart Filtering**: Filter products by category and price range
- **Search Functionality**: Search products by name
- **Shopping Cart**: Add products to cart, view cart items, and manage quantities
- **Product Details**: Detailed view of each product with related items
- **Modern UI**: Clean and intuitive user interface using Bootstrap 5
- **Toast Notifications**: User-friendly notifications for cart actions

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Bootstrap 5
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/K-satyabrat/E-kart.git
cd e-kart
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Project Structure

```
e-kart/
├── src/
│   ├── components/
│   │   ├── Cart.jsx         # Shopping cart component
│   │   ├── Data.jsx         # Product data
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Product.jsx      # Product listing
│   │   ├── ProductDetails.jsx # Product details page
│   │   └── SearchItem.jsx   # Search results
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
└── package.json           # Project dependencies
```

## 🔑 Key Features Implementation

### Product Listing
- Grid layout with responsive design
- Pagination (9 items per page)
- Category and price filters
- Search functionality

### Shopping Cart
- Add/remove products
- Cart item count
- Persistent cart state
- Clear cart functionality

### Product Details
- Detailed product information
- Related products
- Add to cart functionality
- Responsive image display

## 🎨 UI/UX Features

- **Responsive Navigation**: Collapsible navbar with search and cart
- **Product Cards**: Clean card layout with product images and details
- **Filter Menu**: Easy-to-use category and price filters
- **Cart Interface**: Intuitive cart management
- **Toast Notifications**: User feedback for actions

