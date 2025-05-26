// LogoutButton.tsx
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-colors duration-200"
    >
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;