import React from "react";
import UploadAndChart from "../components/UploadAndChart"; // Ensure this path is correct

const StudentDashboard = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome, Student!</h1>
        <p style={styles.subtext}>
          Upload Excel files, analyze data, and visualize insights on your personal dashboard.
        </p>

        {/* ✅ Upload Section */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📊 Upload & Visualize Excel Data</h2>
          <p style={styles.cardText}>
            Upload any Excel file (.xls or .xlsx), choose chart types like Bar, Line, Pie, 2D, and 3D,
            and generate downloadable graphs with selected X and Y axes.
          </p>
          <UploadAndChart />
        </div>

        {/* ✅ History Section */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>📁 Your Analysis History</h2>
          <p style={styles.cardText}>
            Track your previous uploads, chart configurations, and results. Your history is saved with
            timestamps and can be revisited anytime.
          </p>
          <button style={styles.button}>View History</button>
        </div>

        {/* ✅ Coming Soon */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🤖 Smart Data Insights (Coming Soon)</h2>
          <p style={styles.cardText}>
            Soon you'll get AI-powered summaries, key trends, and smart recommendations based on your
            uploaded data.
          </p>
          <button style={styles.disabledButton} disabled>Coming Soon</button>
        </div>

        {/* ✅ View Opportunities Card */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💼 View Job/Internship Opportunities</h2>
          <p style={styles.cardText}>
            Explore internships and job roles posted by recruiters. Apply and grow your career!
          </p>
          <button
            style={styles.button}
            onClick={() => window.location.href = "/student/opportunities"}
          >
            View Opportunities
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

export default StudentDashboard;
