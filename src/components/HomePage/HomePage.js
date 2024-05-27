import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ChatRoom from '../ChatRoom/ChatRoom';
import CategoryList from '../CategoryList/CategoryList';
import RoomList from '../RoomList/RoomList';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className='main-content'>
      <SearchBar />
      <div className='content'>
        <CategoryList onCategoryClick={setSelectedCategory} />
        <RoomList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default HomePage;