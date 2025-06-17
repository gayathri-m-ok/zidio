import React from "react";
import { useNavigate } from "react-router-dom";
import UploadAndChart from "../components/UploadAndChart";

const RecruiterDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome, Recruiter!</h1>
        <p style={styles.subtext}>
          Manage job/internship postings, view applicants, and analyze uploaded data — all in one place.
        </p>

        {/* 💼 Recruiter Actions */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💼 Manage Opportunities</h2>
          <p style={styles.cardText}>
            Post new internships or job openings, manage existing listings, and review student applications.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button style={styles.button} onClick={() => navigate("/recruiter/post")}>
              Post New Opportunity
            </button>
            <button style={styles.button} onClick={() => navigate("/recruiter/listings")}>
              Manage Listings
            </button>
            <button style={styles.button} onClick={() => navigate("/recruiter/applications")}>
              View Applications
            </button>
          </div>
        </div>

        {/* 📊 Upload and Chart Section */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📊 Upload & Analyze Excel</h2>
          <p style={styles.cardText}>
            Upload any Excel file (.xls or .xlsx), select X/Y columns, and choose chart types (Bar, Line, Pie, 2D, 3D).
            Download charts for further reporting or documentation.
          </p>
          <UploadAndChart />
        </div>

        {/* 📁 History */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📁 Analysis History</h2>
          <p style={styles.cardText}>
            View your previous uploads and charts. Every upload is stored with a timestamp and chart configuration.
          </p>
          <button style={styles.button} onClick={() => navigate("/recruiter/history")}>
            View History
          </button>
        </div>

        {/* 🤖 Coming Soon */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🤖 Smart Candidate Matching (Coming Soon)</h2>
          <p style={styles.cardText}>
            Soon, you’ll get AI-powered candidate recommendations based on your job descriptions and uploaded resumes.
          </p>
          <button style={styles.disabledButton} disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#e0f7fa",
    minHeight: "100vh",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    maxWidth: "900px",
  },
  header: {
    textAlign: "center",
    color: "#0288d1",
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtext: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
    fontSize: "16px",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "25px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    color: "#0288d1",
    fontSize: "20px",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0288d1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  disabledButton: {
    padding: "10px 20px",
    backgroundColor: "#9e9e9e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "not-allowed",
  },
};

export default RecruiterDashboard;
