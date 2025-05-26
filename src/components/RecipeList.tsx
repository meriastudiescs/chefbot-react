import React, { useState } from 'react';
import { Clock, User, ChefHat, Heart, Filter } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Recipe } from '../types';

const RecipeList: React.FC = () => {
  const { recommendedRecipes, setCurrentRecipe, toggleFavoriteRecipe, isLoading } = useApp();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [cookingTime, setCookingTime] = useState<number>(60);

  // Filter recipes based on cooking time and difficulty
  const filteredRecipes = recommendedRecipes.filter(recipe => {
    const totalTime = recipe.prepTime + recipe.cookTime;
    
    if (cookingTime < totalTime) {
      return false;
    }
    
    if (activeFilter === 'easy' && recipe.difficulty !== 'easy') {
      return false;
    }
    
    if (activeFilter === 'medium' && recipe.difficulty !== 'medium') {
      return false;
    }
    
    if (activeFilter === 'hard' && recipe.difficulty !== 'hard') {
      return false;
    }
    
    return true;
  });

  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-pulse-slow">
            <ChefHat className="h-16 w-16 text-primary-500" />
          </div>
          <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
            Finding the perfect recipes for you...
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Our AI chef is cooking up suggestions based on your ingredients
          </p>
        </div>
      </div>
    );
  }

  if (recommendedRecipes.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
          Recommended Recipes
        </h2>
        
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <div className="relative inline-block">
            <div className="flex items-center">
              <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
              <select
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Max time: {cookingTime} min</span>
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={cookingTime}
              onChange={(e) => setCookingTime(parseInt(e.target.value))}
              className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onClick={() => setCurrentRecipe(recipe)}
              onFavorite={() => toggleFavoriteRecipe(recipe.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            No recipes match your current filters. Try adjusting your filters or adding more ingredients.
          </p>
        </div>
      )}
    </div>
  );
};

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  onFavorite: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, onFavorite }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-soft overflow-hidden transition-all duration-300 transform hover:shadow-glass hover:-translate-y-1 animate-fade-in"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onFavorite();
            }}
            className={`p-2 rounded-full ${recipe.isFavorite ? 'bg-red-100 text-red-500' : 'bg-white/70 text-gray-600 hover:text-red-500'} transition-colors`}
            aria-label={recipe.isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-5 w-5 ${recipe.isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
              {recipe.tags[0]}
            </span>
            {recipe.tags.length > 1 && (
              <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                {recipe.tags[1]}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4" onClick={onClick}>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          {recipe.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.prepTime + recipe.cookTime} min</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center">
            <ChefHat className="h-4 w-4 mr-1" />
            <span className="capitalize">{recipe.difficulty}</span>
          </div>
        </div>
        
        <button
          onClick={onClick}
          className="mt-4 w-full py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 font-medium rounded-lg transition-colors duration-200 text-sm"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeList;