import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import GridViewIcon from "@mui/icons-material/GridView";
// import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";

const ClientDashboard = ({ setEmployees, setSession, User }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (window.confirm("Are you really wanna log out ?")) {
      setSession(0);
      navigate("/");
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-bgColor-100 text-accent-100 flex">
        {/* sidebar */}
        <div className="border-r border-bgColor-300 bg-bgColor-100 lg:w-15% w-15% text-accent-200 h-full">
          {/* sidebar upper */}
          <Link
            to="/Dashboard/"
            className="h-10% lg:p-3 p-2 flex justify-center items-center"
          >
            <GridViewIcon className="text-primary-200" fontSize="large" />
          </Link>
          {/* sidebar middle */}
          <div className="h-80% lg:p-3 p-2 flex flex-col gap-4">
            <Link
              to="/Dashboard/"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded  flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <HomeIcon className="text-primary-200" fontSize="medium" />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Profile
              </div>
            </Link>
            {/* <Link
              to="/Dashboard/summary"
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <SummarizeRoundedIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Summary
              </div>
            </Link> */}
            <Link
              to="/Dashboard/information"
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <PersonIcon className="text-primary-200" fontSize="medium" />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Information
              </div>
            </Link>
            <Link
              to="/Dashboard/payslip"
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center"
            >
              <div className="lg:w-15%">
                <ReceiptLongIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Payslip
              </div>
            </Link>
          </div>
          {/* sidebar bottom */}
          <div className="h-10% lg:p-3 p-2">
            <div
              onClick={handleLogOut}
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded flex justify-center items-center"
            >
              <div className="">
                <ExitToAppRoundedIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden text-lg w-70% pl-2 text-primary-200">
                Log out
              </div>
            </div>
          </div>
        </div>
        {/* navbar and content */}
        <div className="lg:w-85% w-85% h-full">
          {/* navbar */}
          <div className="lg:h-10% h-5% bg-bgColor-100 border-b border-bgColor-300 flex justify-end items-center">
            <div className="h-full lg:w-15% w-50% flex justify-center items-center">
              <h1 className="lg:text-xl my-auto capitalize text-primary-200">
                Welcome, {User}
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
};

export default ClientDashboard;
