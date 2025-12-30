// backend/config/database.js
const mongoose = require('mongoose');

/**
 * Connect to MongoDB with proper error handling and options
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to application termination');
      process.exit(0);
    });

    return conn;

  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    
    // Retry connection after 5 seconds
    if (process.env.NODE_ENV === 'production') {
      console.log('Retrying connection in 5 seconds...');
      setTimeout(connectDB, 5000);
    } else {
      process.exit(1);
    }
  }
};

/**
 * Get food items and categories (for legacy support)
 */
const getFoodData = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }

    const foodItems = await mongoose.connection.db
      .collection('food_items')
      .find({})
      .toArray();

    const foodCategories = await mongoose.connection.db
      .collection('food_categories')
      .find({})
      .toArray();

    return {
      food_items: foodItems,
      foodCategory: foodCategories
    };

  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
};

module.exports = { connectDB, getFoodData };