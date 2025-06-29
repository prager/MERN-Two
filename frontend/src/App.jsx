import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateUser from "./pages/CreateUser";
import UserDetails from "./pages/UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/custom.css";

const App = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark rounded">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewUser" element={<CreateUser />} />
        <Route path="/UserDetails" element={<UserDetails />} />
      </Routes>
      <footer>
        <div className="mt-5 pt-4 pb-3 mb-5 bg-dark text-white text-center position-relative rounded">
          <div className="container">
            <p className="lead">
              Copyright &copy;{" "}
              <a href="#" className="text-decoration-none">
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
      </footer>
    </div>
  );
};

export default App;
