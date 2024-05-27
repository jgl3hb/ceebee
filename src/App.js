// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryList from './components/CategoryList/CategoryList';
import RoomList from './components/RoomList/RoomList';
import ChatRoom from './components/ChatRoom/ChatRoom';
import HomePage from './components/HomePage/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">
          <h1>Chat Room Listings</h1>
          </Link>        
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat/:room" element={<ChatRoom />} />          
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
