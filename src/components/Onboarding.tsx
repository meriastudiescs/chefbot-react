import React from 'react';
import { ChefHat } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Splash Screen */}
      <div className="fixed inset-0 bg-primary-500 flex items-center justify-center animate-fade-in">
        <div className="text-center text-white">
          <ChefHat className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Chef<span>Bot</span></h1>
          <p className="text-sm opacity-80">v1.0.1</p>
        </div>
      </div>

      {/* Onboarding Screens */}
      <div className="snap-x snap-mandatory h-screen w-screen overflow-x-auto flex">
        <div className="snap-center w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center p-8">
          <img 
            src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Cooking illustration" 
            className="w-64 h-64 object-cover rounded-full mb-8"
          />
          <h2 className="text-2xl font-bold mb-4">Convierte lo que tienes en recetas deliciosas.</h2>
          <p className="text-gray-600 text-center mb-8">Tu cocina, tus reglas. ChefBot te guía.</p>
          <button 
            onClick={onComplete}
            className="w-full max-w-xs bg-primary-500 text-white rounded-full py-3 px-6"
          >
            Comienza Ahora
          </button>
          <p className="mt-4 text-sm text-gray-500">
            ¿Ya tienes una cuenta? <a href="#" className="text-primary-500">Inicia Sesión</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;