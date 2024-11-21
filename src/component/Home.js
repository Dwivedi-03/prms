import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
// import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import GridViewIcon from "@mui/icons-material/GridView";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `PayrollCentral | Home`;
  });

  const handleLogout = () => {
    if (window.confirm("Are you really wanna log out ?")) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex bg-bgColor-100 text-accent-100 ">
        {/* left sidebar */}
        <div className="h-full lg:w-15% w-15% bg-bgColor-100 text-accent-200 border-r border-bgColor-300 ">
          <Link
            to="/home/"
            className="h-10% lg:p-3 p-2 flex justify-center items-center"
          >
            <GridViewIcon className="text-primary-200" fontSize="large" />
          </Link>
          <div className="h-80% lg:p-3 p-2 flex flex-col gap-4">
            <Link
              to="/home/"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <HomeIcon
                  className="text-primary-200"
                  fontSize="medium"
                ></HomeIcon>
              </div>
              <div className="lg:block hidden w-70% text-primary-200">Home</div>
            </Link>
            {/* <Link
              to="/home/summary"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <SummarizeRoundedIcon
                  className="text-primary-200"
                  fontSize="medium"
                ></SummarizeRoundedIcon>
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Summary
              </div>
            </Link> */}
            <Link
              to="/home/employee"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <PersonIcon
                  className="text-primary-200"
                  fontSize="medium"
                ></PersonIcon>
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Employees
              </div>
            </Link>
            <Link
              to="/home/payroll"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <ReceiptLongIcon
                  className="text-primary-200"
                  fontSize="medium"
                ></ReceiptLongIcon>
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Payroll
              </div>
            </Link>
            <div className="h-10% lg:p-3 p-2">
              <div
                onClick={handleLogout}
                className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded flex justify-center items-center"
              >
                <div>
                  <ExitToAppRoundedIcon
                    className="text-primary-200"
                    fontSize="medium"
                  ></ExitToAppRoundedIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right sidebar */}
        <div className="h-full w-85%">
          {/* navbar */}
          <div className="h-5% lg:h10% bg-bgColor-100 border-b border-bgColor-300 flex justify-end items-center">
            <div className="h-full w-50% lg:w-15% flex justify-center items-center">
              <h1 className="lg:text-xl my-auto capitalize text-primary-200">
                Welcome, Admin
              </h1>
            </div>
          </div>
          {/* content */}
          <div className="lg:h-90% h-95%">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
