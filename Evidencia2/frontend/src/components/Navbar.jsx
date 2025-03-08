import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './navbar.css'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      {user ? (
        <button className="navbar-button" onClick={logout}>
          Logout
        </button>
      ) : (
        <span className="navbar-message">Por favor inicia sesión</span>
      )}
    </nav>
  );
};

export default Navbar;