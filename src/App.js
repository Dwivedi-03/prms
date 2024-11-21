import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Error from "./component/Error";
import Home from "./component/Home";
import HomeContent from "./component/HomeContent";
import Employee from "./component/admin/Employee";
import AddEmployee from "./component/admin/AddEmployee";
import ModifyEmployee from "./component/admin/ModifyEmployee";
import RemoveEmployee from "./component/admin/RemoveEmployee";
import Payroll from "./component/Payroll";
// import Summary from "./component/Summary";
import ClientDashboard from "./component/client/ClientDashboard";
import Profile from "./component/client/Profile";
import Payslip from "./component/client/Payslip";
import Information from "./component/client/Information";

function App() {
  const [Session, setSession] = useState(0);
  const [Employees, setEmployees] = useState();
  const [User, setUser] = useState("");
  const [LastDate, setLastDate] = useState();
  const [UserCount, setUserCount] = useState(0);
  const [SalaryCount, setSalaryCount] = useState(0);
  const [Status, setStatus] = useState("Unpaid");

  useEffect(() => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = new Date(year, month + 1, 0);
    setLastDate(day.getDate() + "/" + (month + 1) + "/" + year);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={
              <Login
                setSession={setSession}
                setUser={setUser}
                setEmployees={setEmployees}
                Employees={Employees}
              />
            }
          />
          <Route
            path="/home"
            element={
              Session !== 0 ? (
                <Home
                  Session={Session}
                  setEmployees={setEmployees}
                  setSession={setSession}
                  User={User}
                />
              ) : (
                <Error />
              )
            }
          >
            <Route
              path=""
              element={
                <HomeContent
                  UserCount={UserCount}
                  setUserCount={setUserCount}
                  LastDate={LastDate}
                  setLastDate={setLastDate}
                  SalaryCount={SalaryCount}
                  setSalaryCount={setSalaryCount}
                />
              }
            />
            <Route
              path="employee"
              element={
                <AddEmployee
                  setEmployees={setEmployees}
                  UserCount={UserCount}
                />
              }
            />
            <Route
              path="employee/all"
              element={
                <Employee Employees={Employees} setEmployees={setEmployees} />
              }
            />
            <Route
              path="employee/modify"
              element={<ModifyEmployee setEmployees={setEmployees} />}
            />
            <Route
              path="employee/remove"
              element={<RemoveEmployee setEmployees={setEmployees} />}
            />
            <Route
              path="payroll"
              element={
                <Payroll
                  UserCount={UserCount}
                  SalaryCount={SalaryCount}
                  LastDate={LastDate}
                  Status={Status}
                  setStatus={setStatus}
                />
              }
            />
            {/* <Route path="summary" element={<Summary />} /> */}
          </Route>
          <Route
            path="/Dashboard"
            element={
              Session !== 0 ? (
                <ClientDashboard
                  Session={Session}
                  setSession={setSession}
                  User={User}
                />
              ) : (
                <Error />
              )
            }
          >
            <Route
              path=""
              element={
                <Profile
                  User={User}
                  Employees={Employees}
                  setEmployees={setEmployees}
                />
              }
            />
            <Route
              path="information"
              element={
                <Information
                  User={User}
                  Employees={Employees}
                  setEmployees={setEmployees}
                />
              }
            />
            <Route
              path="payslip"
              element={
                <Payslip
                  Employees={Employees}
                  LastDate={LastDate}
                  Status={Status}
                  setStatus={setStatus}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
