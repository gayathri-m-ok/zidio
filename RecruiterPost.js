import React, { useState } from "react";

const RecruiterPost = () => {
  const [opportunity, setOpportunity] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setOpportunity({ ...opportunity, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    const existing = JSON.parse(localStorage.getItem("opportunities") || "[]");
    existing.push({ ...opportunity, date: new Date().toLocaleDateString() });
    localStorage.setItem("opportunities", JSON.stringify(existing));
    alert("Opportunity posted!");
    setOpportunity({ title: "", company: "", location: "", description: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Post Internship/Job</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={opportunity.title}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Company"
        name="company"
        value={opportunity.company}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={opportunity.location}
        onChange={handleChange}
        style={styles.input}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={opportunity.description}
        onChange={handleChange}
        style={styles.textarea}
      />
      <button onClick={handlePost} style={styles.button}>Post</button>
    </div>
  );
};

const styles = {
  container: { padding: "40px", maxWidth: "600px", margin: "auto" },
  input: {
    marginBottom: "15px",
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    marginBottom: "15px",
    width: "100%",
    padding: "10px",
    height: "100px",
    fontSize: "16px",
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
};

export default RecruiterPost;
