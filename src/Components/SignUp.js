import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password, selectOption);
    let data = {
      name: name,
      email: email,
      password: password,
      gender: selectOption,
    };

    const res = await axios.post("/register", data);

    if (res.status === 201) {
      console.log("User created successfully");
    } else if (res.status === 400) {
      console.log("User not created");
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setSelectOption("");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <div className="container mt-2 border rounded shadow">
          <h3 className="mt-3">Sign Up</h3>
          <form className="mb-3" onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label mt-2 fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-3"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-2 fw-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="abc@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-2 fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPasswordConfirm1"
                className="form-label mt-2 fw-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPasswordConfirm1"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="Male"
                  checked={selectOption === "Male"}
                  onChange={(e) => setSelectOption(e.target.value)}
                />
                Male
              </label>
            </div>
            <div className="form-check form-check-inline mb-2">
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="Female"
                  checked={selectOption === "Female"}
                  onChange={(e) => setSelectOption(e.target.value)}
                />
                Female
              </label>
            </div>
            <button type="submit" className="container-fluid btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
