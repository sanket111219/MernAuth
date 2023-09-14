import {React} from 'react';
import "./navbar.css";
export function Navbar() {} Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="logo">Your Logo</div>
        <div className="buttons">
          <button>Sign Up</button>
          <button>Login</button>
        </div>
      </nav>
    </div>
  );
};
