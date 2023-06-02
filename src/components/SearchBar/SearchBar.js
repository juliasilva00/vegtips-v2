import React from 'react'
import './SearchBar.css';

function SearchBar({ placeholderText }) {
  return (
    <div class="wrap">
      <div class="search">
        <input type="text" class="searchTerm" placeholder={placeholderText} />
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchBar