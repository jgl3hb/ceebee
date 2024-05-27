// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import RoomList from './components/RoomList';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="app">
      <header>
        <h1>Chat Room Listings</h1>
      </header>
      <main>
        <div className="main-content">
          <SearchBar />
          <div className="content">
            <CategoryList onCategoryClick={setSelectedCategory} />
            <RoomList selectedCategory={selectedCategory} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
