const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Employee = require("./model/Employee");
const connectToMongo = require("./connection");

const port = 5000;
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get("/msg", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// For login
server.post("/auth", async (req, res) => {
  const userName = req.body.fname;
  const userPassword = req.body.password;

  if (userName === "admin" && userPassword === "admin") {
    res.json({
      status: true,
      fname: "Admin",
      user: "Admin",
    });
  } else {
    const employee = await Employee.findOne({
      $and: [{ fname: userName }, { password: userPassword }],
    });
    if (employee !== null) {
      res.status(200).json({
        status: true,
        fname: employee.fname,
        user: "Employee",
        id: employee.emp_id,
      });
    } else {
      res.json({ status: false });
    }
  }
});

// Add new employee
server.post("/add", async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    dob,
    gender,
    emp_id,
    hire_date,
    job_title,
    salary,
    password,
  } = req.body;

  try {
    if (
      [
        fname,
        lname,
        email,
        phone,
        dob,
        gender,
        emp_id,
        hire_date,
        job_title,
        salary,
        password,
      ].some((field) => field === "")
    ) {
      res
        .status(400)
        .json({ status: false, error: "All Fields are required!" });
    }

    const existedEmployee = await Employee.findOne({
      $or: [{ email }],
    });

    if (existedEmployee) {
      res.status(409).json({
        status: false,
        error: "Employee with email already exists!",
      });
    }

    const employee = await Employee.create({
      emp_id,
      fname,
      lname,
      email,
      phone,
      dob,
      gender,
      hire_date,
      job_title,
      salary,
      password,
    });

    const createdEmployee = await Employee.findById(employee._id).select(
      "-password -gender"
    );

    if (employee && employee._id) {
      res.status(200).json({
        status: true,
        empData: createdEmployee,
        message: "Employee registered successfully!",
      });
    } else {
      res.status(409).json({
        status: false,
        message: "Something went wrong while registering the user",
      });
    }
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
});

// To count Employee and total salary
server.post("/countUser", async (req, res) => {
  const count = await Employee.countDocuments();
  const totalSalary = await Employee.aggregate([
    { $group: { _id: null, total_salary: { $sum: "$salary" } } },
  ]);

  const salaryCount = totalSalary[0].total_salary;
  res.status(200).json({ count: count, salary: salaryCount });
});

// To find all employees data
server.post("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

// To update employees information
server.post("/update", async (req, res) => {
  const emp_id = req.body.emp_id;
  const employee = await Employee.findOne({ emp_id: emp_id });

  if (employee !== null) {
    const data = await employee.updateOne({
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    if (data !== null) {
      res
        .status(200)
        .json({ status: true, message: "Data updated successfully!" });
    } else {
      res.status(409).json({ status: false, message: "Something went wrong!" });
    }
  } else {
    res.status(500).json({
      status: false,
      message: "Something went wrong while updating data!",
    });
  }
});

// To delete employee information
server.post("/delete", async (req, res) => {
  try {
    const emp_id = req.body.emp_id;
    const employee = await Employee.findOne({ emp_id: emp_id });

    const deletedEmployee = await employee.deleteOne();
    if (deletedEmployee._id !== "") {
      res.json({ status: true });
    } else {
      res.json({
        status: false,
        message: "Employee does not exists!",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error while deleting data!",
    });
  }
});

// To connect to mongoDB
connectToMongo()
  .then(() => {
    server.listen(port || 5000, () => {
      console.log(`Server is running on port : ${port}`);
    });
    server.on("error", (error) => {
      console.error(`Error : ${error}`);
      throw error;
    });
  })
  .catch((err) => {
    console.log(`MongoDb connection failed : ${err}`);
    throw err;
  });
