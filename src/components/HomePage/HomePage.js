import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChatRoom from '../ChatRoom/ChatRoom';
import CategoryList from '../CategoryList/CategoryList';
import RoomList, { rooms } from '../RoomList/RoomList';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('')

  const handleSearch = () => {
    const results = [];
    Object.keys(rooms).forEach((category) => {
      rooms[category].forEach((room) => {
        if (category.toLowerCase().includes(searchTerm.toLowerCase()) || room.toLowerCase().includes(searchTerm.toLowerCase())) {
          results.push({ category, room})
        };
      });
    });
    setSearchResults(results);
  }

  return (
    <div className='main-content'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
      <div className='content'>
        {searchTerm ? (
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