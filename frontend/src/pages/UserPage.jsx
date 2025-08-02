// created snippet via rafce
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function UserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const [teamname, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [teams, setTeams] = useState([]);

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
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch("/api/home/getallteams");
        const data = await res.json();
        setTeams(data);
      } catch (err) {
        console.error("Error fetching teams:", err);
      }
    };

    fetchTeams();
  }, []);

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
            <h2>Corporate User Details v5</h2>
            <p>
              Name: {user.username || "N/A"} <br />
              Email: {user.email}
            </p>
            {/* More fields as needed */}
          </div>
        </div>

        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-md-4">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  data-bs-toggle="tab"
                  data-bs-target="#addTeam"
                  href="#"
                >
                  Add Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="tab"
                  data-bs-target="#manageTeam"
                >
                  Manage Team
                </a>
              </li>
            </ul>

            <div className="tab-content mt-3" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="addTeam"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h2 className="mb-3">Add Team</h2>
                <p className="lead">Here will be adding a team stuff.</p>
              </div>
              <div
                className="tab-pane fade"
                id="manageTeam"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h2 className="mb-3">Manage Team</h2>
                <p className="lead">
                  For adding a team members assigned to a team and other stuff
                </p>
              </div>
            </div>
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
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-md-4">
            <h2>Teams</h2>
            {teams.map((team) => (
              <li key={team._id}>
                {team._id} - {team.teamname}
              </li>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default UserPage;
