import React from 'react';
import { ChevronDown, ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-400 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-400 dark:bg-secondary-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent-300 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Food illustrations floating */}
      <div className="absolute top-1/4 left-1/5 animate-float animation-delay-1000">
        <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300&dpr=1" alt="Ingredient" className="w-20 h-20 rounded-full object-cover shadow-lg opacity-80" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float animation-delay-3000">
        <img src="https://images.pexels.com/photos/4464803/pexels-photo-4464803.jpeg?auto=compress&cs=tinysrgb&w=300&dpr=1" alt="Ingredient" className="w-16 h-16 rounded-full object-cover shadow-lg opacity-80" />
      </div>
      <div className="absolute top-1/3 right-1/5 animate-float animation-delay-2000">
        <img src="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=300&dpr=1" alt="Ingredient" className="w-24 h-24 rounded-full object-cover shadow-lg opacity-80" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-soft">
              <ChefHat className="h-12 w-12 text-primary-500" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Turn Your Ingredients Into <span className="text-primary-500">Delicious Meals</span>
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up animation-delay-200">
            ChefBot helps you create personalized recipes with the ingredients you already have, reducing food waste and making cooking easier.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-300">
            <a 
              href="#ingredients" 
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Get Started
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-3 bg-transparent border-2 border-gray-400 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-full transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
            >
              How It Works
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-500">
            <FeatureCard 
              title="AI-Powered Recommendations" 
              description="Get recipe suggestions based on what you already have in your kitchen."
            />
            <FeatureCard 
              title="Reduce Food Waste" 
              description="Use ingredients before they expire and save money on groceries."
            />
            <FeatureCard 
              title="Dietary Preferences" 
              description="Filter recipes based on your dietary needs and restrictions."
            />
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#ingredients" aria-label="Scroll down">
            <ChevronDown className="w-10 h-10 text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-glass transition-all duration-300">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Hero;