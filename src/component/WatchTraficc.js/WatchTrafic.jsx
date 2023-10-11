import React, { useEffect, useState } from "react";
import "./watchTraffic.css"; // Import a CSS file for additional styling

const WatchTrafic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API here
    // Replace 'YOUR_API_ENDPOINT' with your actual API URL
    fetch("http://localhost:8000/api/get-all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data); // Store the fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>All Live Traffic</h1>
      <table className="traffic-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.number}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchTrafic;
