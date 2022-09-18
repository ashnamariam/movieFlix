import React from "react";
import './style.css';

const SearchComponent = ({ onChangeSearch }) => {
  return (
    <div className="searchContainer">
      <div class="searchInput">
        <i class="fa fa-search icon" aria-hidden="true"></i>
        <input
          className="inputContainer"
          type='text'
          placeholder='Search here...'
          onChange={(e) => {
            onChangeSearch(e.target.value);
          }}
        />
      </div>
    </div>
  )
}

export default SearchComponent;