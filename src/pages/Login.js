// src/pages/Login.js
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // Redirect user to homepage or dashboard on successful login
      window.location.href = '/movies'
    } catch (error) {
      console.error('Login error:', error.message);
      // Display error message to user
    }
  };

  return (
    <div>
      {/* <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button> */}
      <h2>Login </h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
