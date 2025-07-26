// created snippet via rafce
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function UserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const [teamname, setTeamName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const response = await fetch("/api/home/newteam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamname, description }),
    });

    const data = await response.json();
  };

  // If user info is not present (e.g., user navigated directly), redirect to login
  React.useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  if (!user) {
    return (
      <>
        <div className="row pt-5">
          <div className="col offset-lg-2">
            <h2>Not logged in!</h2>
          </div>
        </div>
      </>
    );
  } else if (user.usertype == "admin") {
    return (
      <>
        <div className="row pt-5">
          <div className="col offset-lg-2">
            <h2>Welcome Admin</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col offset-lg-4">
            <h2>User Details</h2>
            <p>Name: {user.username || "N/A"}</p>
            <p>Email: {user.email}</p>
            {/* More fields as needed */}
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-md-4">
            <h3 className="mb-3">Create Team</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="teamName" className="form-label">
                  Team Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="teamName"
                  value={teamname}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="projDesc" className="form-label">
                  Team Description
                </label>
                <textarea
                  className="form-control"
                  id="teamDesc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary w-150">
                Create New Team
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default UserPage;
