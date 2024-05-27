// src/components/RoomList.js
import React from 'react';

const rooms = {
  'A Place To Start': ['The Crash Pad', 'Coffee Katch', 'The Cafe', 'Groove Lounge'],
  'Arts and Entertainment': ['Art Chat', 'Music Talk', 'Film Buffs'],
  'Autos': ['Car Enthusiasts', 'Motorcycle Riders', 'Auto Repair'],
  'Black Voices': ['Community Talk', 'Black History', 'Cultural Exchange'],
  'Sports': ['NFL', 'NBA', 'MLB', 'NCAAFB', 'NCAABB', 'NHL', 'WNBA']
};

const RoomList = ({ selectedCategory }) => {
  return (
    <div className="room-list">
      {rooms[selectedCategory]?.map((room, index) => (
        <div key={index}>{room}</div>
      )) || <div>Select a room to chat</div>}
    </div>
  );
};

export default RoomList;
