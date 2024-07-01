const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const User = require("./modal/User");
const connectToMongo = require("./connection");

const port = 5000;
const server = express();
server.use(cors());
server.use(bodyParser.json());
connectToMongo();

server.get("/msg", (req, res) => {
  res.json({ message: "Hello from server!" });
});

server.post("/auth", async (req, res) => {
  const userId = req.body.fname;
  const userPassword = req.body.password;

  if (userId === "admin" && userPassword === "admin") {
    res.json({
      status: true,
      fname: "Admin",
      user: "Admin",
    });
  } else {
    // const user = await User.findOne({})
    res.json({
      status: true,
      fname: "Employee",
      user: "Employee",
    });
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
