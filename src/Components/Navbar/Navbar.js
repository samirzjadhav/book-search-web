import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container flex items-center w-full">
        <div className="brand-and-toggle flex items-center justify-between w-full">
          <Link to="/" className="navbar-brand flex items-center">
            <img src={logo} alt="site logo" />
            <span className="uppercase font-bold text-[38px] tracking-[1px] ">
              bookhub
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link uppercase text-white text-[2.2rem] font-semibold tracking-[1px]"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link uppercase text-white text-[2.2rem] font-semibold tracking-[1px]"
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
