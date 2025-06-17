import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Correct default imports (no curly braces!)
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import History from "./pages/History";
import StudentOpportunities from "./pages/StudentOpportunities";
import RecruiterPost from "./pages/RecruiterPost";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/recruiter" element={<RecruiterDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/recruiter/history" element={<History />} />
          <Route path="/recruiter/post" element={<RecruiterPost />} />
    <Route path="/student/opportunities" element={<StudentOpportunities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
