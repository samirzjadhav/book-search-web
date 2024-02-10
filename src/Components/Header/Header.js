import React from "react";
import Navabr from "../Navbar/Navbar.js";
import SearchForm from "../SearchForm/SearchForm.js";

import "./Header.css";

const Header = () => {
  return (
    <div className="Holder">
      <header className="header">
        <Navabr />
        <div className="header-content flex justify-center items-center text-center text-white">
          <h2 className="header-title capitalize font-bold">
            Find your book of choice
          </h2>
          <br />
          <p className="text-[28px] font-light">
            BookSearch: Your instant portal to endless books. Explore genres,
            get personalized recommendations, and find your next favorite read
            effortlessly. Your pocket-sized library for a world of stories.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
