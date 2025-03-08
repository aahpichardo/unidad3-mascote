import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <span>Por favor inicia sesión</span>
      )}
    </nav>
  );
};

export default Navbar;