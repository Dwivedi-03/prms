import React, { useEffect } from "react";

const Summary = () => {
  useEffect(() => {
    document.title = `PayrollCentral | Summary`;
  });
  return (
    <>
      <div>
        <h1>Summary Page</h1>
      </div>
    </>
  );
};

export default Summary;
