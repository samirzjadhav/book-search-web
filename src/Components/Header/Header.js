import React from "react";
import Navabr from "../Navbar/Navbar.js";
// import SearchForm from "../SearchForm/SearchForm.js";

const Header = () => {
  return (
    <div className="Holder">
      <header className="header">
        <Navabr />
        <div className="header-content">
          <h2 className="header-title">Find your book of choice</h2>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            molestiae nam sapiente quidem nisi, dignissimos magni, voluptates
            laborum consequuntur accusantium eos culpa expedita doloremque
            minima. Quibusdam quam dolorum odit. Iusto tempore velit saepe
            inventore quidem.
           </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
