import React, { useState, useEffect } from "react";
import axios from "axios"; // Or use fetch API

const ViewPlaygrounds = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/circuits"); // Adjust port if needed
        setMessage(response.data.map((circuit) => circuit.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <ul>
        {message.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPlaygrounds;
