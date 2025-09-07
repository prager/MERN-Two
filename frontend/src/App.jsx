import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import HomePage from "./pages/HomePage";
import CreateUser from "./pages/CreateUser";
import UserDetails from "./pages/UserDetails";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
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
