const mongoose = require("mongoose");
const URL = "mongodb://127.0.0.1:27017";

const connectToMongo = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch(() => {
      throw new Error("Could not connect to mongoDB");
    });
};

module.exports = connectToMongo;
