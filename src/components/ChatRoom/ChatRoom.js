// src/components/ChatRoom/ChatRoom.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoom.css';

const ChatRoom = ({ user }) => {
  const { room } = useParams();
  const [ messages, setMessages ] = useState([]);
  const[newMessage, setNewMessage] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '')
      setMessages([...messages, newMessage]);
      setNewMessage('');
  }

  return (
    <div className="chat-room">
      <h2>Chat Room: {room}</h2>
      <div className="user-info">
        <p>Logged in as: {user.name}</p>
      </div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {user.handle}: {message}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
