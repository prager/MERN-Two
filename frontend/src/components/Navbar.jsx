import React from "react";

export const Navbar = () => {
  return (
    <>
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
    </>
  );
};
