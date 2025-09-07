import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/home/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Save token or user data as needed (e.g., localStorage)
      localStorage.setItem("token", data.token);

      // Redirect to UserDetails page
      //navigate('/userdetails');
      //alert(`Login OK with\nEmail: ${email}\nPassword: ${password}`);
      navigate("/userpage", { state: { user: data.user } });
    } else {
      alert(`Invalid credentials: ${email} Password: ${password}`);
    }

    //alert(`Login attempted with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="row justify-content-center mt-5 mb-3">
      <div className="col-md-4">
        <h3 className="mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
