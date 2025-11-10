const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace localhost with 127.0.0.1 to force IPv4 connection
    const mongoUri = process.env.MONGODB_URI.replace('localhost', '127.0.0.1');
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

