// src/components/ChatRoom/ChatRoom.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoom.css'

const ChatRoom = () => {
  const { room } = useParams();

  return (
    <div className="chat-room">
      <h2>Chat Room: {room}</h2>
      <div className="chat-window">
        <div className="messages">
        </div>
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
