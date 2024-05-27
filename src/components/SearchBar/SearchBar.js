// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css'

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch}) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search All Chats by Topic" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
