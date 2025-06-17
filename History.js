import React from "react";

const dummyHistory = [
  {
    fileName: "sales_data.xlsx",
    uploadedAt: "2025-06-14 15:32",
    chartType: "Bar Chart",
    xAxis: "Month",
    yAxis: "Revenue",
  },
  {
    fileName: "users_data.xlsx",
    uploadedAt: "2025-06-13 11:05",
    chartType: "Pie Chart",
    xAxis: "User Type",
    yAxis: "Count",
  },
];

const History = () => {
  return (
    <div style={{ backgroundColor: "#e0f7fa", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ color: "#0288d1", textAlign: "center" }}>📁 Analysis History</h1>
      <div style={{ maxWidth: "800px", margin: "0 auto", marginTop: "30px" }}>
        {dummyHistory.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#0288d1" }}>{item.fileName}</h3>
            <p><strong>Uploaded:</strong> {item.uploadedAt}</p>
            <p><strong>Chart Type:</strong> {item.chartType}</p>
            <p><strong>X-Axis:</strong> {item.xAxis}</p>
            <p><strong>Y-Axis:</strong> {item.yAxis}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
