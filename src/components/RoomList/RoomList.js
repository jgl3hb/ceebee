// src/components/RoomList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomList.css';  // Import the CSS file

const rooms = {
  'A Place To Start': ['The Crash Pad', 'Coffee Katch', 'The Cafe', 'Groove Lounge'],
  'Entertainment': ['Art Chat', 'Music Talk', 'Film Buffs'],
  'Autos': ['Car Enthusiasts', 'Motorcycle Riders', 'Auto Repair'],
  'Celebrities': ['Gossip Corner', 'Fan Club', 'Latest News'],
  'Food': ['Recipe Swap', 'Cooking Tips', 'Restaurant Reviews'],
  'Games': ['Gamer Lounge', 'Strategy Talk', 'Game Night'],
  'LGBT+': ['Support Group', 'Pride Chat', 'Community Events'],
  'Health': ['Fitness Friends', 'Nutrition Tips', 'Mental Health'],
  'Sports': ['NFL', 'NBA', 'MLB', 'NCAAFB', 'NCAABB', 'NHL', 'WNBA']
};

const RoomList = ({ selectedCategory }) => {
  const navigate = useNavigate();

  const handleRoomClick = (room) => {
    navigate(`/chat/${room}`);
  };

  return (
    <div className="room-list">
      {rooms[selectedCategory]?.map((room, index) => (
        <div key={index} onClick={() => handleRoomClick(room)}>
          {room}
        </div>
      )) || <div>Select a category to view chat rooms</div>}
    </div>
  );
};

export default RoomList;
