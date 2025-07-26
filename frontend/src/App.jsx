import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import HomePage from "./pages/HomePage";
import CreateUser from "./pages/CreateUser";
import UserDetails from "./pages/UserDetails";
import UserPage from "./pages/UserPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/custom.css";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark rounded">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled - 1
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/NewUser" element={<CreateUser />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
      <footer>
        <div>
          <div className="container">
            <div className="mt-5 pt-4 pb-3 mb-3 bg-dark text-white text-center position-relative rounded">
              <p className="lead">
                Copyright &copy;{" "}
                <a
                  href="https://jlkconsulting.info"
                  target="_blank"
                  className="text-decoration-none"
                >
                  <span className="link-warning">
                    2006 -{" "}
                    <script type="text/javascript">
                      //doesn't work - why? var today = new Date();
                      document.write(today.getFullYear() ); today.getFullYear();
                    </script>{" "}
                    2025 JLK Consulting
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
