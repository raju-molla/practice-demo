// ApiForm.js
import React, { useState } from "react";
import axios from "axios";
import "./api.css";

function ApiForm() {
  const [instance, setInstance] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object with the instance and token values
    const data = {
      instance,
      token,
    };

    try {
      // Send a POST request to your server
      const response = await axios.post(
        "http://94.100.26.16:8001/api/token-instance",
        data
      );

      // Handle the response here, e.g., show a success message
      console.log("Response:", response.data);
      alert("success");
      setInstance("");
      setToken("");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Send POST Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="instance">Instance:</label>
          <input
            style={{
              width: "300px",
              padding: "10px",
              border: "2px solid #ccc;",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              outline: "none",
              margin: "20px",
            }}
            type="text"
            id="instance"
            value={instance}
            onChange={(e) => setInstance(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="token">Token:</label>
          <input
            style={{
              width: "300px",
              padding: "10px",
              border: "2px solid #ccc;",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              outline: "none",
              margin: "20px",
            }}
            type="text"
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApiForm;
