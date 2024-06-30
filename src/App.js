import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/msg")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <div className="h-16 bg-green-500 text-gray-200">
        <h1>{message}</h1>
      </div>
    </>
  );
}

export default App;
