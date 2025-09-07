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
  const [selectedTeam, setSelectedTeam] = useState({});
  const [teamToDelete, setTeamToDelete] = useState(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/home/newteam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teamname, description }),
    });

    if (response.ok) {
      setStatus("success");

      // Optional: delay before reload for user to see message
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else {
      setStatus("error");
    }

    window.location.reload();

    const data = await response.json();
  };

  const handleTeamClick = async (teamId) => {
    try {
      const res = await fetch(`/api/home/team/${teamId}`);
      const data = await res.json();
      setSelectedTeam(data);

      const modal = new window.bootstrap.Modal(
        document.getElementById("teamModal")
      );
      modal.show();
    } catch (err) {
      console.error("Failed to load team", err);
    }
  };

  const handleDeleteTeam = async () => {
    if (!teamToDelete) return;

    try {
      const res = await fetch(`/api/home/deleteteam/${teamToDelete._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // Remove team from UI list
        setTeams((prev) => prev.filter((t) => t._id !== teamToDelete._id));
        setTeamToDelete(null);

        // Hide modal
        const modal = window.bootstrap.Modal.getInstance(
          document.getElementById("deleteModal")
        );
        //modal.hide();
        window.location.reload();
      } else {
        console.error("Failed to delete team");
      }
    } catch (err) {
      console.error("Error deleting team:", err);
    }
  };

  // If user info is not present (e.g., user navigated directly), redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
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
            <h2>Corporate Manager</h2>
            <p>
              Name: {user.username || "N/A"} <br />
              Email: {user.email} &nbsp;{" "}
              <a href="/" className="text-decoration-none">
                Logout
              </a>
            </p>
            {/* More fields as needed */}
          </div>
        </div>

        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-md-6">
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
                <h3 className="mb-3">Create Team</h3>
                {status === "success" && (
                  <div className="alert alert-success">
                    Team added successfully! Reloading...
                  </div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger">
                    Failed to add team. Please try again.
                  </div>
                )}
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
              <div
                className="tab-pane fade"
                id="manageTeam"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h2>Teams</h2>
                {teams.map((team) => (
                  <span
                    key={team._id}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleTeamClick(team._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {team.teamname} &nbsp; &nbsp;
                    <a
                      href="#"
                      className="text-danger text-decoration-none"
                      onClick={() => setTeamToDelete(team)}
                      data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                    >
                      x
                    </a>
                    <br />
                  </span>
                ))}
              </div>
              <div
                className="modal fade"
                id="teamModal"
                tabindex="-1"
                aria-labelledby="teamModalLabel"
                aria-hidden="true"
              >
                {/* Modal to manage */}
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="teamModalLabel">
                        Manage Team
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Team Name: {selectedTeam?.teamname}</strong>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p>
                            <strong>Team Description: </strong>
                            <br /> {selectedTeam?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
                {/* end of modal to manage */}
                {/* Warning modal to delete */}
                <div
                  className="modal fade"
                  id="deleteModal"
                  tabIndex="-1"
                  aria-labelledby="deleteModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-warning text-dark">
                        <h5 className="modal-title" id="deleteModalLabel">
                          Confirm Deletion
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {teamToDelete ? (
                          <p>
                            Are you sure you want to delete{" "}
                            <strong>{teamToDelete.teamname}</strong>?
                          </p>
                        ) : (
                          <p>Loading...</p>
                        )}
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                          onClick={() => window.location.reload()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleDeleteTeam}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End of modal to delete */}
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-md-4"></div>
        </div>
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-md-4"></div>
        </div>
      </>
    );
  }
}
export default UserPage;
