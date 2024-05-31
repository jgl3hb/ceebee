// src/components/ChatRoom/ChatRoom.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoom.css';

const ChatRoom = ({ user }) => {
  const { room } = useParams();

  return (
    <div className="chat-room">
      <h2>Chat Room: {room}</h2>
      <div className="chat-window">
        <div className="user-info">
          <p>Logged in as: {user.name}</p>
        </div>
        <div className="messages">
          {}
        </div>
        <div className="input-area">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
