const Mongoose = require('mongoose');

// Connect function for connecting to the Server
const connectDB = async () => {
  try {
    // Use connect method to connect to the Server
    await Mongoose.connect(process.env.MONGO_URI), // Connection URL from environment variables
      console.log('MongoDb Connection Successful');
  } catch (error) {
    // handle errors for initial DB connection
    console.error('MongoDb Connection Error', error);
  }
};

// handle errors after initial DB connection
Mongoose.connection.on('error', (err) => {
  console.log('errors after initial DB connection', err);
});

module.exports = connectDB;
