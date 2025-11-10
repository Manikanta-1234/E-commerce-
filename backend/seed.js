const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description:
      'High-quality wireless headphones with noise cancellation and long battery life.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    numReviews: 120,
    brand: 'TechSound',
  },
  {
    name: 'Smartphone 128GB',
    description:
      'Latest smartphone with advanced camera system and fast processor.',
    price: 699.99,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 30,
    rating: 4.8,
    numReviews: 250,
    brand: 'PhoneMax',
  },
  {
    name: 'Laptop 15 inch',
    description: 'Powerful laptop perfect for work and gaming.',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 20,
    rating: 4.7,
    numReviews: 180,
    brand: 'LapTopPro',
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes with excellent support.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Fashion',
    stock: 75,
    rating: 4.6,
    numReviews: 95,
    brand: 'RunFast',
  },
  {
    name: 'Casual T-Shirt',
    description: 'Soft and comfortable cotton t-shirt in various colors.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Fashion',
    stock: 100,
    rating: 4.3,
    numReviews: 200,
    brand: 'ComfortWear',
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with programmable settings.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Home & Kitchen',
    stock: 40,
    rating: 4.4,
    numReviews: 150,
    brand: 'BrewMaster',
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for comfortable exercise sessions.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/416475/pexels-photo-416475.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Sports',
    stock: 60,
    rating: 4.5,
    numReviews: 80,
    brand: 'FitLife',
  },
  {
    name: 'Backpack',
    description: 'Durable backpack with multiple compartments.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/2701782/pexels-photo-2701782.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Fashion',
    stock: 45,
    rating: 4.2,
    numReviews: 110,
    brand: 'TravelGear',
  },
  {
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Home & Kitchen',
    stock: 55,
    rating: 4.3,
    numReviews: 90,
    brand: 'BrightLight',
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with long battery life.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 80,
    rating: 4.4,
    numReviews: 140,
    brand: 'ClickTech',
  },
  {
    name: 'Water Bottle',
    description: 'Stainless steel water bottle that keeps drinks cold.',
    price: 15.99,
    image: 'https://images.pexels.com/photos/3735214/pexels-photo-3735214.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Sports',
    stock: 90,
    rating: 4.6,
    numReviews: 175,
    brand: 'HydroLife',
  },
  {
    name: 'Watch',
    description: 'Stylish watch with leather strap and water resistance.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/997910/pexels-photo-997910.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    category: 'Fashion',
    stock: 35,
    rating: 4.7,
    numReviews: 65,
    brand: 'TimeStyle',
  },
];

const seedProducts = async () => {
  try {
    // Replace localhost with 127.0.0.1 to force IPv4 connection
    const mongoUri = process.env.MONGODB_URI.replace('localhost', '127.0.0.1');
    await mongoose.connect(mongoUri);

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Seeded products successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedProducts();

