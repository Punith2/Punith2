// Authentication.js
import React, { useState } from 'react';

const Authentication = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('User logged in:', { loginEmail, loginPassword });
  };

  return (
    <div>
      <h2>User Authentication</h2>
      <form>
        <label>
          Email:
          <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Authentication;
