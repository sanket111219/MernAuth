import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/navbar";
import { Navbar2 } from "./Components/navbar2";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      <br />
    </>
  );
}

export default App;
