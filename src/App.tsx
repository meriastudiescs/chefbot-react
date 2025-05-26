import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import Onboarding from './components/Onboarding';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Muestra splash por 2 segundos
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-primary-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">ChefBot</h1>
          <p className="text-sm opacity-80">v1.0.1</p>
        </div>
      </div>
    );
  }

  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Ruta para la pantalla de login */}
            <Route path="/login" element={<Login />} />
            {/* Ruta principal: muestra Onboarding si está activo, de lo contrario aplica la lógica protegida */}
            <Route
              path="/"
              element={
                showOnboarding ? (
                  <Onboarding onComplete={() => setShowOnboarding(false)} />
                ) : (
                  <ProtectedRoute>
                    <>
                      <Home />
                      <BottomNav />
                    </>
                  </ProtectedRoute>
                )
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;