import React, { useState } from 'react';
import { Camera, Mic, X, Plus, Search } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Ingredient } from '../types';

const IngredientInput: React.FC = () => {
  const { 
    ingredients, 
    addIngredient, 
    removeIngredient, 
    selectedIngredients,
    searchQuery,
    setSearchQuery,
    generateRecipes
  } = useApp();
  
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showIngredientsList, setShowIngredientsList] = useState(false);

  const filteredIngredients = ingredients.filter(
    ingredient => ingredient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleScan = () => {
    setIsScanning(true);
    let progress = 0;
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      progress += 5;
      setScanProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setScanProgress(0);
        
        // Simulate detecting random ingredients
        const randomIngredients = [];
        const availableIngredients = ingredients.filter(
          ing => !selectedIngredients.some(selected => selected.id === ing.id)
        );
        
        if (availableIngredients.length > 0) {
          const count = Math.min(Math.floor(Math.random() * 3) + 1, availableIngredients.length);
          for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * availableIngredients.length);
            randomIngredients.push(availableIngredients[randomIndex]);
            availableIngredients.splice(randomIndex, 1);
          }
          
          randomIngredients.forEach(ing => addIngredient(ing));
        }
      }
    }, 50);
  };

  const handleVoiceInput = () => {
    // Simulate voice recognition
    alert('Voice recognition feature would be implemented here');
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden transition-all duration-300 transform hover:shadow-glass">
      <div className="p-6">
        <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
          What's in your kitchen?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border-0 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 transition-all"
              placeholder="Type ingredient name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowIngredientsList(true);
              }}
              onFocus={() => setShowIngredientsList(true)}
            />
            
            {showIngredientsList && searchQuery.trim() !== '' && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map(ingredient => (
                    <div 
                      key={ingredient.id}
                      className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        addIngredient(ingredient);
                        setSearchQuery('');
                        setShowIngredientsList(false);
                      }}
                    >
                      <div className="flex items-center">
                        {ingredient.imageUrl && (
                          <img 
                            src={ingredient.imageUrl} 
                            alt={ingredient.name} 
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                        )}
                        <span className="text-gray-800 dark:text-gray-200">{ingredient.name}</span>
                      </div>
                      <Plus className="w-5 h-5 text-primary-500" />
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-gray-600 dark:text-gray-400">
                    No ingredients found
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={handleScan}
              disabled={isScanning}
              className="flex items-center justify-center px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors duration-200"
            >
              <Camera className="w-5 h-5 mr-2" />
              <span>Scan</span>
            </button>
            
            <button
              onClick={handleVoiceInput}
              className="flex items-center justify-center px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors duration-200"
            >
              <Mic className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Voice</span>
            </button>
          </div>
        </div>
        
        {isScanning && (
          <div className="mb-6">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-primary-500 rounded-full transition-all duration-300"
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Scanning ingredients... {scanProgress}%
            </p>
          </div>
        )}
        
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Selected Ingredients:
          </h3>
          
          {selectedIngredients.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map(ingredient => (
                <IngredientTag 
                  key={ingredient.id} 
                  ingredient={ingredient} 
                  onRemove={() => removeIngredient(ingredient.id)} 
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 italic">
              Add ingredients to get recipe recommendations
            </p>
          )}
        </div>
        
        {selectedIngredients.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={generateRecipes}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Find Recipes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

interface IngredientTagProps {
  ingredient: Ingredient;
  onRemove: () => void;
}

const IngredientTag: React.FC<IngredientTagProps> = ({ ingredient, onRemove }) => {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full py-1 pl-3 pr-1 animate-scale-in">
      {ingredient.imageUrl && (
        <img 
          src={ingredient.imageUrl} 
          alt={ingredient.name} 
          className="w-6 h-6 rounded-full object-cover mr-2"
        />
      )}
      <span className="text-gray-800 dark:text-gray-200 text-sm mr-1">{ingredient.name}</span>
      <button
        onClick={onRemove}
        className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
      >
        <X className="w-3 h-3 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default IngredientInput;