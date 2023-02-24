import React from "react";
import logo from "../assets/webclip.PNG";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Skillchain</h2>
      </div>
      <nav className="nav-links">
        <input className="link sign-in" type="button" value="SignIn" />
        <input className="link sign-out" type="button" value="SignUp" />
      </nav>
    </header>
  );
}

export default Header;
