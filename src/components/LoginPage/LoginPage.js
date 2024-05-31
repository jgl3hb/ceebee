// src/components/LoginPage/LoginPage.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import './LoginPage.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginPage = ({ onLoginSuccess }) => {
  const handleLoginSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    const userObject = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    };
    console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    onLoginSuccess(userObject);
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  if (!clientId) {
    console.error('Google Client ID is not set');
    return <div>Error: Google Client ID is not set. Check your .env file.</div>;
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="login-container">
        <h2>Login</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
