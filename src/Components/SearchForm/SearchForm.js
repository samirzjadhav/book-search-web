import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

import "./SearchForm.css";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
  return (
    <div className="search-form">
      <div className="container">
        <div className="search-form-content">
          <form action="" className="search-form" onClick={handleSubmit}>
            <div className="search-form-elem flex items-center justify-between bg-white">
              <input
                type="text"
                className="form-control text-black outline-none "
                placeholder="The Lost World..."
                ref={searchText}
              />
              <button
                className="flex item-center justify-center"
                onClick={handleSubmit}
              >
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
