import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { validateSession } from '../services/authService';
import './dashboard.css';
import perroHacker from '../assets/perrohacker.jpg'

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
    if (timeLeft === 60) {
      alert('La sesion expirará en 1 minuto');
    }
  }, [timeLeft]);

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
    <div className="dashboard-container" onClick={handleInteraction}>
      <h1 className="dashboard-title">Dashboard, para reiniciar el contador, da un clic en cualquier parte del fondo blanco </h1>
      <p className="dashboard-message">{message}</p>
      <p className="dashboard-timer">Tiempo restante: {timeLeft} segundos</p>
      <button className="dashboard-button" onClick={logout}>
        Salir
      </button>
      <div className="dashboard-status">
        <span>Estas dentro</span>
      </div>
      <div className="dashboard-image">
        <img src={perroHacker} alt="Perro Hacker" />
      </div>
    </div>
  );
};

export default Dashboard;