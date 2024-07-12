const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017/firstdb";

const connectToMongo = async () => {
  try {
    const connectionInstance = await mongoose.connect(URL);
    console.log(
      `\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MongoDB connection error : ${error}`);
    process.exit(1);
  }
};

module.exports = connectToMongo;
