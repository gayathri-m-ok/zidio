import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome, Admin!</h1>
        <p style={styles.subtext}>
          Manage users, monitor data activity, control job/internship postings, and view global analytics.
        </p>

        {/* 👥 User Management */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>👥 User Management</h2>
          <p style={styles.cardText}>
            View, edit, or delete student and recruiter accounts. Monitor user activity and assign roles if needed.
          </p>
          <button style={styles.button} onClick={() => navigate("/admin/users")}>
            Manage Users
          </button>
        </div>

        {/* 📁 Uploaded Data Overview */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📁 Data Upload Monitor</h2>
          <p style={styles.cardText}>
            Track the volume of uploaded Excel files, file types, storage usage, and download frequency.
          </p>
          <button style={styles.button} onClick={() => navigate("/admin/data-usage")}>
            View Upload Stats
          </button>
        </div>

        {/* 📊 Chart History */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📊 Global Chart History</h2>
          <p style={styles.cardText}>
            Review all users' generated charts, configurations, and insights for quality monitoring.
          </p>
          <button style={styles.button} onClick={() => navigate("/admin/charts")}>
            View Chart Logs
          </button>
        </div>

        {/* 💼 Internship/Job Postings */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💼 Job/Internship Oversight</h2>
          <p style={styles.cardText}>
            Oversee all listings posted by recruiters. Approve, modify, or remove any job/internship posting.
          </p>
          <button style={styles.button} onClick={() => navigate("/admin/opportunities")}>
            Manage Listings
          </button>
        </div>

        {/* 🤖 AI Insight Reports */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🤖 AI Insights Usage (Coming Soon)</h2>
          <p style={styles.cardText}>
            Track how many users accessed AI summaries and insights, including keyword trends and report summaries.
          </p>
          <button style={styles.disabledButton} disabled>Coming Soon</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#fbe9e7",
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
    color: "#d84315",
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
    color: "#d84315",
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
    backgroundColor: "#d84315",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  disabledButton: {
    padding: "10px 20px",
    backgroundColor: "#b0b0b0",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "not-allowed",
  },
};

export default AdminDashboard;
