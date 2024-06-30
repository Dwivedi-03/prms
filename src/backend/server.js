const express = require("express");
const cors = require("cors");
// const connectToMongo = require("./connection");

const port = 5000;
const server = express();

server.use(cors());

server.use(express.json())

server.get("/msg", (req, res) => {
  res.json({message : "Hello from server!"});
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});