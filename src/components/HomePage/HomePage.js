import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChatRoom from '../ChatRoom/ChatRoom';
import CategoryList from '../CategoryList/CategoryList';
import RoomList, { rooms } from '../RoomList/RoomList';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const results = [];
      Object.keys(rooms).forEach((category) => {
        rooms[category].forEach((room) => {
          if (category.toLowerCase().includes(searchTerm.toLowerCase()) || room.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push({ category, room});
          };
        });
      });  
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }  
  }, [searchTerm]);

  return (
    <div className='main-content'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='content'>
        {searchTerm && searchTerm.length >= 3 ? (
          <div className='search-results'>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div key={index} className='search-results'>
                  {result.category}: {result.room}
                </div>
              ))
              ) : (
              <div>No results found</div>
            )};
            </div>
        ) : (
          <>
            <CategoryList onCategoryClick={setSelectedCategory} />
            <RoomList selectedCategory={selectedCategory} />
          </>
          )}
      </div>
    </div>
  );
};

export default HomePage;