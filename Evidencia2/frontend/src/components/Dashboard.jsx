import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { validateSession } from '../services/authService';

const Dashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos en segundos

  useEffect(() => {
    const validate = async () => {
      const { message } = await validateSession(token);
      setMessage(message);
    };

    validate();
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      logout();
      alert('Sesión expirada por inactividad');
    }
  }, [timeLeft]);

  const handleInteraction = () => {
    setTimeLeft(300); // Reinicia el contador a 5 minutos
  };

  return (
    <div onClick={handleInteraction}>
      <h1>Dashboard</h1>
      <p>{message}</p>
      <p>Tiempo restante: {timeLeft} segundos</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;