import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { login } from '../services/authService';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login: authLogin } = useContext(AuthContext);

  const handleLogin = async () => {
    const { token } = await login(username, password);
    if (token) {
      authLogin(token);
    }
  };

  return (
    <div className="login-container">
      <span className='spanLogin'>Usuario: usuario1 Contrasena: contrasena1</span>
      <input
        type="text"
        className="login-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Ingresar
      </button>
      <div className="login-footer">
        Angel Hernandez | Gael Flores | Javier Solis | Brandon Chacon | IDGS81N
      </div>
    </div>
  );
};

export default Login;