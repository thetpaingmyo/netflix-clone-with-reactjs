import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
  
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>

      <img 
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" 
        alt="Netflix Logo"
      />

      <img 
        className="nav__avatar"
        src="https://occ-0-3880-64.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABUYxt92DxlQwzO2BMBExaW7pXrbSsvUzG018-xwcNxUMPktiCnjI6YPynboHr7IVwDoYxOwQ4aiP6ZfP-eZzopYnSalx.png?r=1ce" 
        alt="Netflix Logo"
      />

    </div>
  )
}

export default Nav