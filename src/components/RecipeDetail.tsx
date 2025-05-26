import React from 'react';
import { X, Clock, User, ChefHat, Heart, ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const RecipeDetail: React.FC = () => {
  const { currentRecipe, setCurrentRecipe, toggleFavoriteRecipe } = useApp();

  if (!currentRecipe) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-glass overflow-hidden max-h-[90vh] flex flex-col animate-scale-in">
        <div className="absolute top-4 right-4 z-10 flex space-x-2">
          <button
            onClick={() => toggleFavoriteRecipe(currentRecipe.id)}
            className={`p-2 rounded-full ${currentRecipe.isFavorite ? 'bg-red-100 text-red-500' : 'bg-white/70 text-gray-600 hover:text-red-500'} shadow-md transition-colors`}
            aria-label={currentRecipe.isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-5 w-5 ${currentRecipe.isFavorite ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => setCurrentRecipe(null)}
            className="p-2 rounded-full bg-white/70 text-gray-600 hover:text-gray-900 shadow-md transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={() => setCurrentRecipe(null)}
            className="p-2 rounded-full bg-white/70 text-gray-600 hover:text-gray-900 shadow-md transition-colors flex items-center"
            aria-label="Back"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="text-sm">Back</span>
          </button>
        </div>
        
        <div className="h-64 sm:h-80 relative">
          <img 
            src={currentRecipe.imageUrl} 
            alt={currentRecipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {currentRecipe.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {currentRecipe.title}
            </h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {currentRecipe.description}
            </p>
            
            <div className="flex flex-wrap gap-4 py-3 border-t border-b border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1 text-primary-500" />
                <div>
                  <p className="font-medium">Time</p>
                  <p>{currentRecipe.prepTime + currentRecipe.cookTime} min</p>
                </div>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-1 text-secondary-500" />
                <div>
                  <p className="font-medium">Servings</p>
                  <p>{currentRecipe.servings}</p>
                </div>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 mr-1 text-accent-500" />
                <div>
                  <p className="font-medium">Difficulty</p>
                  <p className="capitalize">{currentRecipe.difficulty}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                Ingredients
              </h2>
              <ul className="space-y-3">
                {currentRecipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {ingredient.name}
                      </span>
                      {ingredient.quantity && (
                        <span className="text-gray-600 dark:text-gray-400 text-sm ml-1">
                          ({ingredient.quantity})
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Nutrition (per serving)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Calories:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentRecipe.nutrition.calories}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Protein:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentRecipe.nutrition.protein}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Carbs:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentRecipe.nutrition.carbs}g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Fat:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentRecipe.nutrition.fat}g</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                Instructions
              </h2>
              <ol className="space-y-6">
                {currentRecipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 dark:bg-gray-850 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentRecipe(null)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
            <button
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              Start Cooking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;