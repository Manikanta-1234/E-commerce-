# Quick Setup Guide

Follow these steps to get the E-Commerce website up and running:

## Step 1: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Step 2: Configure Backend

1. Create a `.env` file in the `backend` directory
2. Add the following content:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

**For MongoDB Atlas (Cloud):**
Replace `MONGODB_URI` with your MongoDB Atlas connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
```

## Step 3: Start MongoDB

### Option A: Local MongoDB
Make sure MongoDB is installed and running on your system.

**Windows:**
- MongoDB should start automatically as a service
- Or run: `mongod` in a terminal

**Mac/Linux:**
```bash
mongod
```

### Option B: MongoDB Atlas (Cloud)
- No local installation needed
- Just use your connection string in the `.env` file

## Step 4: Seed the Database (Optional but Recommended)

```bash
cd backend
npm run seed
```

This will add sample products to your database.

## Step 5: Start the Backend Server

```bash
cd backend
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The backend should now be running on `http://localhost:5000`

## Step 6: Start the Frontend

Open a **new terminal window**:

```bash
cd frontend
npm start
```

The frontend should now be running on `http://localhost:3000`

## Step 7: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## Testing the Application

1. **Sign Up**: Create a new account
   - Go to "Sign Up"
   - Fill in the required fields
   - Submit the form

2. **Login**: Use your credentials to login

3. **Browse Products**: 
   - View products on the home page
   - Click "Products" to see all products
   - Use search and filters

4. **Add to Cart**:
   - Click on any product
   - Select quantity
   - Click "Add to Cart"

5. **View Cart**:
   - Click the cart icon in the navbar
   - Update quantities or remove items

## Troubleshooting

### MongoDB Connection Error
- **Check if MongoDB is running**: Make sure MongoDB service is started
- **Verify connection string**: Check your `.env` file
- **Test connection**: Try connecting with MongoDB Compass or CLI

### Port Already in Use
- **Backend (5000)**: Change PORT in `.env` file
- **Frontend (3000)**: React will automatically suggest another port

### Module Not Found Errors
- **Reinstall dependencies**: Delete `node_modules` and run `npm install` again
- **Check Node version**: Ensure you're using Node.js v14 or higher

### Authentication Issues
- **Clear browser storage**: Clear localStorage in browser DevTools
- **Check JWT_SECRET**: Ensure it's set in `.env` file

### CORS Errors
- CORS is already configured in the backend
- Make sure backend is running on port 5000
- Check that frontend proxy is set correctly in `package.json`

## Common Commands

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-reload)
npm run seed       # Seed database with sample products
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
```

## Next Steps

- Customize products in the seed file
- Add your own product images
- Modify styling to match your brand
- Add more features (see README.md for suggestions)

---

**Need Help?** Check the main README.md file for more detailed information.

