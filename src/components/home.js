import React, { useState } from "react";
import "./home.css";

import { generateHighChartData } from "../utils/util";

const apiUrl = "http://localhost:49160/base64-report";

export function HomePage() {
  const [imageData, setImageData] = useState(null);
  const [chartType, setChartType] = useState("pie");

  const fetchChart = () => {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: generateHighChartData(chartType) }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(({ data }) => {
        setImageData(data);
      });
  };

  return (
    <div className="home-page">
      <h1>Generate Charts from server-side</h1>
      <div className="layout">
        <div className="list-section">
          <select onChange={(e) => setChartType(e.target.value)}>
            <option value="pie">Pie</option>
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="area">Area</option>
          </select>
          <button className="submit-btn" onClick={fetchChart}>
            Load Chart
          </button>
        </div>
        <div className="content-section">
          {imageData && (
            <img src={`data:image/png;base64,${imageData}`} alt="Chart" />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
