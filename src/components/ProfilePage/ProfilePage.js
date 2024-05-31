// src/components/Profile/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const Profile = ({ user, updateUser }) => {
  const [handle, setHandle] = useState(user.handle || '');
  const [font, setFont] = useState(user.font || '');
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('Save button clicked');
    console.log('Current handle:', handle);
    console.log('Current font:', font);

    
    const updatedUser = { ...user, handle, font };
    console.log('Updated user:', updatedUser);

    localStorage.setItem('user', JSON.stringify(updatedUser));
    updateUser(updatedUser);
    navigate(-1);
  };

  return (
    <div className="profile">
      <h2>Profile Settings</h2>
      <div className="profile-item">
        <label>Handle:</label>
        <input 
          type="text" 
          value={handle} 
          onChange={(e) => setHandle(e.target.value)} 
        />
      </div>
      <div className="profile-item">
        <label>Font:</label>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="">Default</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          {/* Add more font options as needed */}
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
