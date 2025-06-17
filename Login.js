import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Directly navigate based on role without checking localStorage
    if (role === "student") navigate("/student");
    else if (role === "recruiter") navigate("/recruiter");
    else if (role === "admin") navigate("/admin");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.heading}>ZIDIOConnect</h1>
      </div>
      <div style={styles.formBox}>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            style={styles.input}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </select>
          <button style={styles.button} type="submit">
            Login
          </button>
        </form>

        <div style={styles.links}>
          <Link to="/forgot-password" style={styles.link}>
            Forgot Password?
          </Link>
          <br />
          <Link to="/register" style={styles.link}>
            Don’t have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#e0f7fa",
    minHeight: "100vh",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    marginBottom: "20px",
  },
  heading: {
    color: "#003366",
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    margin: 0,
  },
  formBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
  },
  title: {
    color: "#0288d1",
    textAlign: "center",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0288d1",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  links: {
    marginTop: "15px",
    textAlign: "center",
  },
  link: {
    color: "#0288d1",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Login;
