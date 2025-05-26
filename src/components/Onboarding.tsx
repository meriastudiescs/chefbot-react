import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Convierte lo que tienes en recetas deliciosas.",
      description: "Tu cocina, tus reglas. ChefBot te guía.",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Come mejor, sin complicarte.",
      description: "Recetas fáciles, sanas y personalizadas con sólo unos ingredientes.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "El camino hacia una alimentación inteligente.",
      description: "Únete y transforma tu alimentación.",
      image: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="snap-x snap-mandatory h-screen w-screen overflow-x-auto flex">
        {steps.map((step, index) => (
          <div key={index} className="snap-center w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center p-8">
            <img 
              src={step.image}
              alt={step.title} 
              className="w-64 h-64 object-cover rounded-full mb-8"
            />
            <h2 className="text-2xl font-bold mb-4 text-center">{step.title}</h2>
            <p className="text-gray-600 text-center mb-8">{step.description}</p>
            <button 
              onClick={nextStep}
              className="w-full max-w-xs bg-primary-500 text-white rounded-full py-3 px-6"
            >
              {currentStep === steps.length - 1 ? 'Comienza Ahora' : 'Siguiente'}
            </button>
            {currentStep === steps.length - 1 && (
              <p className="mt-4 text-sm text-gray-500">
                ¿Ya tienes una cuenta? <a href="#" className="text-primary-500">Inicia Sesión</a>
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentStep === index ? 'bg-primary-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Onboarding;