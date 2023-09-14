import React from "react";

const SignIn = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <div className="container mt-2 border rounded shadow">
          <h3 className="mt-3">Sign In</h3>
          <form className="mb-3">
            <div className="mb-3">
              <label
                for="exampleInputEmail1"
                className="form-label mt-3 fw-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              <label
                for="exampleInputPassword1"
                className="form-label mt-3 fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <button type="submit" className="container-fluid btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
