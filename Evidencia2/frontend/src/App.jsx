import React from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext'; // Importa AuthContext
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <AuthProvider>
      <LoginOrDashboard />
    </AuthProvider>
  );
};

// Componente hijo que consume el contexto
const LoginOrDashboard = () => {
  const { token } = React.useContext(AuthContext); // Ahora AuthContext está definido

  return (
    <>
      {!token ? <Login /> : <Dashboard />}
    </>
  );
};

export default App;
