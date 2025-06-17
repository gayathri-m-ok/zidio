import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UploadAndChart = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (evt) => {
      const workbook = XLSX.read(evt.target.result, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(sheet);
      if (json.length > 0) {
        setColumns(Object.keys(json[0]));
        setData(json);
      }
    };

    reader.readAsBinaryString(file);
  };

  const generateChart = () => {
    if (!xAxis || !yAxis) return;

    const labels = data.map((item) => item[xAxis]);
    const values = data.map((item) => parseFloat(item[yAxis]));

    setChartData({
      labels: labels,
      datasets: [
        {
          label: `${yAxis} vs ${xAxis}`,
          data: values,
          backgroundColor: "rgba(33, 150, 243, 0.6)",
        },
      ],
    });
  };

  return (
    <div style={{ background: "#f0faff", padding: "30px", borderRadius: "10px" }}>
      <h2>📂 Upload Excel & Generate Chart</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {columns.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <label>Select X-Axis:</label>
          <select onChange={(e) => setXAxis(e.target.value)} value={xAxis}>
            <option value="">--Select--</option>
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>

          <label style={{ marginLeft: "20px" }}>Select Y-Axis:</label>
          <select onChange={(e) => setYAxis(e.target.value)} value={yAxis}>
            <option value="">--Select--</option>
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>

          <button
            onClick={generateChart}
            style={{
              marginLeft: "20px",
              padding: "6px 14px",
              background: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Generate Chart
          </button>
        </div>
      )}

      {chartData && (
        <div style={{ marginTop: "40px" }}>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
};

export default UploadAndChart;
