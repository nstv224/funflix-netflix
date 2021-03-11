import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="logo" />

      <img
        className="nav_avtar"
        src="https://www.thedenveregotist.com/wp-content/uploads/sites/3/2019/01/FUN_logo_socialmedia_icon.png"
        alt="logo"
      />
    </div>
  );
}

export default Nav;
