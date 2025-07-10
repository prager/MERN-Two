import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend
    alert(
      `Registration attempted with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <h3 className="mb-3">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="registerName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="registerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="registerEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
