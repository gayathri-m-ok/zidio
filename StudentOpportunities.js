// src/pages/StudentOpportunities.js
import React, { useEffect, useState } from "react";

const StudentOpportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("opportunities") || "[]");
    setOpportunities(data);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Available Opportunities</h2>
      {opportunities.length === 0 ? (
        <p>No opportunities posted yet.</p>
      ) : (
        opportunities.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3>{item.title} @ {item.company}</h3>
            <p><strong>Location:</strong> {item.location}</p>
            <p>{item.description}</p>
            <small>Posted on: {item.date}</small>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: { padding: "40px", maxWidth: "800px", margin: "auto" },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};

export default StudentOpportunities;
