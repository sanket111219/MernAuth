import { React } from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <div>
            <img
              src="logo192.png"
              className="navbar-brand"
              alt="Your Logo"
              width="25"
              height="30"
            />
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
          </div>
          <div className="navbar-nav">
            <Link to="signin" className="btn btn-outline-light mx-2">
              Sign in
            </Link>
            <Link to="signup" className=" btn btn-outline-light mx-2">
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
