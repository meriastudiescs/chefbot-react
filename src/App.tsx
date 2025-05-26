import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import Onboarding from './components/Onboarding';
import BottomNav from './components/BottomNav';
import Home from './components/Home';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    // Show splash for 2 seconds then transition to onboarding
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
      <div className="min-h-screen bg-gray-50">
        {showOnboarding ? (
          <Onboarding onComplete={() => setShowOnboarding(false)} />
        ) : (
          <>
            <Home />
            <BottomNav />
          </>
        )}
      </div>
    </AppProvider>
  );
}

export default App;