// src/components/ChatRoom.js
import React from 'react';
import { useParams } from 'react-router-dom'


const ChatRoom = () => {
  const { room } = useParams();
  return(
    <div>
      <h2>
        Chat Room: {room}
      </h2>
    </div>
  );
}




export default ChatRoom;