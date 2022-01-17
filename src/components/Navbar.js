import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();

  const isUserConnected = useSelector((state) => state.auth.value);

  const auth = getAuth();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't deconnect, please check your internet connexion and retry."
      );
    }
  };

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <div>
        <Link to="/" className="navbar-brand">
          Notes App
        </Link>
        {isUserConnected ? (
          <>
            <Link className="btn btn-secondary ms-2" to="/protected/dashboard">
              Dashboard
            </Link>

            <Link className="btn btn-secondary ms-2" to="/protected/edit">
              New Note
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {!isUserConnected ? (
          <>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>

            <Link className="btn btn-primary ms-2" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-danger ms-2" to="#" onClick={logOut}>
              Log out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
