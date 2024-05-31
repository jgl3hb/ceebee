// src/components/LoginPage/LoginPage.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './LoginPage.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginPage = ({ onLoginSuccess }) => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    onLoginSuccess(credentialResponse);
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

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
