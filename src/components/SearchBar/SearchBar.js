// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search All Chats by Topic" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
