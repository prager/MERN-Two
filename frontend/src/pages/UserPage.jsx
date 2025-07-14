// created snippet via rafce
import React from "react";
import { useLocation, useNavigate } from "react-router";

function UserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

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
        <div className="row pt-5">
          <div className="col offset-lg-2">
            <h2>User Details</h2>
            <p>Name: {user.username || "N/A"}</p>
            <p>Email: {user.email}</p>
            {/* More fields as needed */}
          </div>
        </div>
      </>
    );
  }
}

export default UserPage;
