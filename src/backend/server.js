const express = require("express");
// const connectToMongo = require("./connection");

const port = 5000;
const server = express();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

