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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            molestiae nam sapiente quidem nisi, dignissimos magni, voluptates
            laborum consequuntur accusantium eos culpa expedita doloremque
            minima. Quibusdam quam dolorum odit. Iusto tempore velit saepe
            inventore quidem.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
