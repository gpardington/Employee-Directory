import React from "react";

function SearchBar({ handleInputChange }) {
  return (
    <div className="container mt-5">
      <div className="row col-12 justify-content-center">
        <form className="form-inline input-group p-2 searchbar">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-success ml-2"
            type="submit"
            onClick={handleInputChange}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;