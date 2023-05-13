import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  let navigate = useNavigate();
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token".json.authToken);
      navigate("/login");
      props.updateAlert("User created successfully", "success");
    } else {
      props.updateAlert("User already exists", "danger");
    }
  };
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-3">
    <h2>SignUp to NotesSensei</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>

          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
            value={credentials.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
