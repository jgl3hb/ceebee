// src/components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css'

const SearchBar = ({ searchTerm, setSearchTerm}) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value)
  }
  
  
  
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search All Chats by Topic" 
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
