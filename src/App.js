import React from "react";
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
import Summary from "./component/Summary";
import ClientDashboard from "./component/client/ClientDashboard";
import Profile from "./component/client/Profile";
import Payslip from "./component/client/Payslip";
import Information from "./component/client/Information";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Login /> ? <Home /> : <Error />}>
            <Route path="" element={<HomeContent />} />
            <Route path="employee" element={<AddEmployee />} />
            <Route path="employee/all" element={<Employee />} />
            <Route path="employee/modify" element={<ModifyEmployee />} />
            <Route path="employee/remove" element={<RemoveEmployee />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route path="/Dashboard" element={<ClientDashboard />}>
            <Route path="" element={<Profile />} />
            <Route path="information" element={<Information />} />
            <Route path="payslip" element={<Payslip />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
