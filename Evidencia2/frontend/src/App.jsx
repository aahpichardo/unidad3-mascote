import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const App = () => {
  const { token } = useContext(AuthContext);

  return (
    <AuthContext.Provider>
      <Navbar />
      {!token ? <Login /> : <Dashboard />}
    </AuthContext.Provider>
  );
};

export default App;
