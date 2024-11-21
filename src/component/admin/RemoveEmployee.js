import React, { useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import InfoIcon from "@mui/icons-material/Info";

const RemoveEmployee = ({ setEmployees }) => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [EmpId, setEmpId] = useState();
  const [EmployeeData, setEmployeeData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    emp_id: "",
    hire_date: "",
    job_title: "",
    salary: "",
    password: "",
  });

  const EmployeeIdChange = (e) => {
    setEmpId(Number(e.target.value));
  };

  const handleClick = async () => {
    if (EmpId !== undefined) {
      const response = await fetch("http://localhost:5000/employeeData", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ emp_id: EmpId }),
      });
      const data = await response.json();

      if (data) {
        setEmployeeData(data);
        setShowDetails(true);
      } else {
        alert("Employee does not exist!");
        setEmployeeData("");
        document.getElementById("addEmployeeForm").reset();
      }
    } else {
      alert("Please enter the employee id to get the employee data!");
    }
  };

  const handleCancel = () => {
    setShowDetails(false);
    setEmpId("");
    document.getElementById("addEmployeeForm").reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/delete", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ emp_id: EmpId }),
    });
    const data = await response.json();
    if (data.status) {
      alert(data.message);
      document.getElementById("addEmployeeForm").reset();
      const employeeResponse = await fetch("http://localhost:5000/delete", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ emp_id: EmpId }),
      });
      const employeeData = await employeeResponse.json();
      setEmployees(employeeData);
      setShowDetails(false);
    } else {
      alert(data.message);
    }
  };
  return (
    <>
      <main className="flex justify-evenly items-center h-full w-full text-textColor-100">
        <div className="w-95% h-95% flex justify-around items-center flex-col">
          <EmployeeNavbar />
          <div className="h-80% w-95% overflow-auto">
            <section className="w-90% mx-auto h-full">
              <h1 className="text-center lg:text-4xl text-xl h-10% mt-1 text-primary-200">
                Remove Employee
              </h1>
              <form onSubmit={handleSubmit} id="addEmployeeForm">
                <fieldset className="lg:w-70% mb-5 w-95% pb-2 mx-auto border border-bgColor-200 flex justify-evenly items-center flex-col lg:rounded-md rounded">
                  <legend className="ml-5% text-textColor-200">
                    Employee Id
                  </legend>
                  <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                    <input
                      type="number"
                      placeholder="Employee Id"
                      name="email"
                      onChange={EmployeeIdChange}
                      value={EmpId}
                      className="bg-bgColor-200 lg:w-60% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                    />
                    <button
                      type="button"
                      onClick={handleClick}
                      className="lg:w-20% w-90% bg-bgColor-200 text-base py-2 rounded shadow-md"
                    >
                      Get Data
                    </button>
                  </div>
                  <div className="text-textColor-200 flex justify-center items-center w-80%">
                    <InfoIcon fontSize="small" className="inline mr-1" />
                    <h1 className="inline lg:text-base text-xs">
                      Enter Employee Id and Get Details
                    </h1>
                  </div>
                </fieldset>

                {ShowDetails ? (
                  <>
                    <fieldset className="lg:w-70% mb-5 w-95% pb-2 mx-auto border border-bgColor-200 flex justify-start items-center flex-col lg:rounded-md rounded">
                      <legend className="ml-5% text-textColor-200">
                        Employee Details
                      </legend>
                      <table className="table-auto w-50%">
                        <tr className="table-row">
                          <td className="table-cell w-full">First Name: </td>
                          <td className="table-cell w-full capitalize">
                            {EmployeeData.fname}
                          </td>
                        </tr>
                        <tr className="table-row">
                          <td className="table-cell w-full">Last Name: </td>
                          <td className="table-cell w-full capitalize">
                            {EmployeeData.lname}
                          </td>
                        </tr>
                        <tr className="table-row">
                          <td className="table-cell w-full">Employee Id: </td>
                          <td className="table-cell w-full capitalize">
                            {EmployeeData.emp_id}
                          </td>
                        </tr>
                        <tr className="table-row">
                          <td className="table-cell">Salary: </td>
                          <td className="table-cell capitalize">
                            {EmployeeData.salary}
                          </td>
                        </tr>
                      </table>
                    </fieldset>
                    <div className="lg:w-70% w-95% my-5 mx-auto flex lg:justify-start justify-center items-center lg:flex-row-reverse flex-col p-1">
                      <button
                        type="submit"
                        className="border border-bgColor-300 bg-bgColor-200 text-primary-200 hover:text-primary-200 hover:bg-bgColor-100 hover:border-primary-200 lg:w-20% w-95% lg:text-xl p-1.5 rounded-lg"
                      >
                        Delete
                      </button>
                      <button
                        type="reset"
                        className="border border-bgColor-200 hover:text-textColor-200 lg:w-20% w-95% lg:text-xl lg:mr-5 lg:mt-0 mt-2 p-1.5 rounded-lg"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default RemoveEmployee;
