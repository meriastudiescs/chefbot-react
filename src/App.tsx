import React, { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext';
import Onboarding from './components/Onboarding';
import BottomNav from './components/BottomNav';
import Home from './components/Home';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      setIsAppReady(true);
    }, 2000);
  }, []);

  if (!isAppReady) {
    return (
      <div className="fixed inset-0 bg-primary-500 flex items-center justify-center">
        <div className="text-center text-white animate-pulse">
          <h1 className="text-4xl font-bold mb-2">ChefBot</h1>
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