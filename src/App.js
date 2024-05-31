// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import HomePage from './components/HomePage/HomePage';
import ChatRoom from './components/ChatRoom/ChatRoom';
import LoginPage from './components/LoginPage/LoginPage';
import Profile from './components/ProfilePage/ProfilePage';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      const fetchUser = async () => {
        try {
          const res = await axios.get('http://localhost:3001/api/current_user', { withCredentials: true });
          setUser(res.data);
        } catch (err) {
          console.error('Error fetching user:', err);
        }
      };
      fetchUser();
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/">
            <h1>Chat Room Listings</h1>
          </Link>
          {user && (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </header>
        <main>
          {user ? (
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/chat/:room" element={<ChatRoom user={user} />} />
              <Route path="/profile" element={<Profile user={user} updateUser={setUser} />} />
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
