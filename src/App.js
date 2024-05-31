// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryList from './components/CategoryList/CategoryList';
import RoomList from './components/RoomList/RoomList';
import ChatRoom from './components/ChatRoom/ChatRoom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/current_user', { withCredentials: true });
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };
    fetchUser();
  }, []);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Chat Room Listings</h1>
        </header>
        <main>
          {user ? (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat/:room" element={<ChatRoom />} />
            </Routes>
          ) : (
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          )}
        </main>
      </div>
    </Router>
  );
};

export default App;