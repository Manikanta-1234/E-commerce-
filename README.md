# E-Commerce Website

A full-stack e-commerce website built with React.js, Node.js, Express.js, and MongoDB. This project provides a complete shopping experience with user authentication, product browsing, and shopping cart functionality.

## Features

- **User Authentication**: Sign up and login with username and password
- **Product Browsing**: Browse products with search and category filtering
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, update, and remove items from the cart
- **Responsive Design**: Amazon-like UI that works on all devices
- **State Management**: React Context API for cart and authentication state

## Tech Stack

### Frontend
- React.js 18.2.0
- React Router DOM 6.20.0
- Axios 1.6.2
- CSS3 (Custom styling)

### Backend
- Node.js
- Express.js 4.18.2
- MongoDB (Mongoose 8.0.3)
- JWT for authentication
- bcryptjs for password hashing

## Project Structure

```
Ecommerce Website/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   ├── User.js              # User model
│   │   └── Product.js           # Product model
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── products.js          # Product routes
│   │   └── cart.js              # Cart routes
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── server.js                # Express server
│   ├── seed.js                  # Database seeding script
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js        # Navigation bar
│   │   │   └── Navbar.css
│   │   ├── pages/
│   │   │   ├── Home.js          # Home page
│   │   │   ├── Login.js         # Login page
│   │   │   ├── Signup.js        # Signup page
│   │   │   ├── Products.js      # Products listing
│   │   │   ├── ProductDetail.js # Product details
│   │   │   ├── Cart.js          # Shopping cart
│   │   │   └── *.css            # Page styles
│   │   ├── context/
│   │   │   ├── AuthContext.js   # Authentication context
│   │   │   └── CartContext.js   # Cart context
│   │   ├── App.js               # Main app component
│   │   ├── App.css              # App styles
│   │   └── index.js             # Entry point
│   └── package.json
└── README.md
```

##prompts used 
You are a renounced full stack developer , Help me build a E commerce website in which users are able to : - Sign up to our website (include all the necessary details to be taken for the same) - Login accordingly (Let it be through a user name and password created by the user while signing up) - They can explore products on our website - view product details - and manage a shopping cart The site should have a clean and responsive UI (create a UI similar to amazon) , lightweight backend to handle data operations and basic state management for cart functionality The tech stack preferred is frontend : React.js , React router for navigation Backend : Node.js with Express.js Database : MongoDB Analyze everything completely and start from the project structure to be created (project folder name being "Ecommerce Website") and give all the necessary codes and required directions step by step in successful completion of the project

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation & Setup

### 1. Clone or Navigate to the Project

```bash
cd "Ecommerce Website"
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend directory
# Copy the content from .env.example and update the values
# Create .env file with the following content:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/ecommerce
# JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

**Create `.env` file manually:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
JWT_SECRET=your_jwt_secret_key_here_change_in_production
```

### 3. Start MongoDB

**Local MongoDB:**
```bash
# Make sure MongoDB is running on your system
# On Windows, you can start it from services or run:
mongod
```

**MongoDB Atlas:**
- No local installation needed, just use the connection string in your `.env` file

### 4. Seed the Database (Optional)

```bash
# From the backend directory, run:
node seed.js
```

This will populate the database with sample products.

### 5. Start the Backend Server

```bash
# From the backend directory
npm start

# Or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:5000`

### 6. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. **Sign Up**: Create a new account by providing:
   - First Name, Last Name
   - Username (must be unique)
   - Email (must be unique)
   - Password (minimum 6 characters)
   - Optional: Phone number and address

2. **Login**: Use your username and password to login

3. **Browse Products**: 
   - View products on the home page
   - Use the Products page to see all products
   - Filter by category
   - Search for products

4. **View Product Details**: Click on any product to see detailed information

5. **Add to Cart**: 
   - Select quantity and click "Add to Cart"
   - Must be logged in to add items

6. **Manage Cart**:
   - View cart items
   - Update quantities
   - Remove items
   - View total price

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Products
- `GET /api/products` - Get all products (with optional query params: category, search)
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get user's cart (Protected)
- `POST /api/cart` - Add item to cart (Protected)
- `PUT /api/cart/:productId` - Update cart item quantity (Protected)
- `DELETE /api/cart/:productId` - Remove item from cart (Protected)
- `DELETE /api/cart` - Clear entire cart (Protected)

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm start  # React development server with hot reload
```

## Production Build

### Frontend
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build` folder.

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running (if using local MongoDB)
- Check your MongoDB connection string in `.env`
- Verify network connectivity (for MongoDB Atlas)

### Port Already in Use
- Change the PORT in backend `.env` file
- Update the proxy in frontend `package.json` if needed

### Authentication Issues
- Clear browser localStorage
- Check JWT_SECRET in backend `.env`
- Verify token is being sent in requests

### CORS Issues
- CORS is enabled in the backend for all origins
- If issues persist, check the CORS configuration in `server.js`

## Features to Add (Future Enhancements)

- Payment integration
- Order history
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Product images upload
- Advanced search and filters
- Pagination
- Product recommendations

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please create an issue in the repository.

---

**Happy Shopping! 🛒**


