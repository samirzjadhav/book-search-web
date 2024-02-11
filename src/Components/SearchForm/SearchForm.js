import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form action="" className="search-form">
            <div className="search-form-elem flex items-center justify-between bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="The Lost World..."
              />
              <button className="flex item-center justify-center">
                <FaSearch className="text-purple-500" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
