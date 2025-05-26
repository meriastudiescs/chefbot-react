import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Ingredient, Recipe, User, UserPreferences } from '../types';
import { mockIngredients } from '../data/ingredientsData';
import { mockRecipes } from '../data/recipesData';

interface AppContextProps {
  ingredients: Ingredient[];
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (id: string) => void;
  selectedIngredients: Ingredient[];
  setSelectedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
  recipes: Recipe[];
  recommendedRecipes: Recipe[];
  generateRecipes: () => void;
  currentRecipe: Recipe | null;
  setCurrentRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
  user: User | null;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  toggleFavoriteRecipe: (recipeId: string) => void;
  isLoading: boolean;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const defaultUserPreferences: UserPreferences = {
  diets: [],
  allergies: [],
  dislikedIngredients: [],
  cuisinePreferences: [],
  cookingTime: 60,
};

const defaultUser: User = {
  id: '1',
  name: 'Guest User',
  email: 'guest@example.com',
  preferences: defaultUserPreferences,
  savedRecipes: [],
  cookedRecipes: [],
};

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ingredients] = useState<Ingredient[]>(mockIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [recipes] = useState<Recipe[]>(mockRecipes);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [user, setUser] = useState<User | null>(defaultUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addIngredient = (ingredient: Ingredient) => {
    if (!selectedIngredients.some(i => i.id === ingredient.id)) {
      setSelectedIngredients(prev => [...prev, ingredient]);
    }
  };

  const removeIngredient = (id: string) => {
    setSelectedIngredients(prev => prev.filter(i => i.id !== id));
  };

  const generateRecipes = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple recipe recommendation algorithm
      const recommended = recipes
        .filter(recipe => {
          // Check if the recipe has at least one ingredient from selected ingredients
          return recipe.ingredients.some(recipeIng => 
            selectedIngredients.some(selectedIng => 
              selectedIng.name.toLowerCase().includes(recipeIng.name.toLowerCase()) ||
              recipeIng.name.toLowerCase().includes(selectedIng.name.toLowerCase())
            )
          );
        })
        .map(recipe => ({
          ...recipe,
          isFavorite: user?.savedRecipes.includes(recipe.id),
        }));
      
      setRecommendedRecipes(recommended.length > 0 ? recommended : recipes.slice(0, 6));
      setIsLoading(false);
    }, 1500);
  };

  const updateUserPreferences = (preferences: Partial<UserPreferences>) => {
    if (user) {
      setUser({
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences,
        }
      });
    }
  };

  const toggleFavoriteRecipe = (recipeId: string) => {
    if (user) {
      const isFavorite = user.savedRecipes.includes(recipeId);
      const updatedSavedRecipes = isFavorite
        ? user.savedRecipes.filter(id => id !== recipeId)
        : [...user.savedRecipes, recipeId];
      
      setUser({
        ...user,
        savedRecipes: updatedSavedRecipes,
      });
      
      setRecommendedRecipes(recommendedRecipes.map(recipe => 
        recipe.id === recipeId
          ? { ...recipe, isFavorite: !isFavorite }
          : recipe
      ));
      
      if (currentRecipe?.id === recipeId) {
        setCurrentRecipe({
          ...currentRecipe,
          isFavorite: !currentRecipe.isFavorite
        });
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        ingredients,
        addIngredient,
        removeIngredient,
        selectedIngredients,
        setSelectedIngredients,
        recipes,
        recommendedRecipes,
        generateRecipes,
        currentRecipe,
        setCurrentRecipe,
        user,
        updateUserPreferences,
        toggleFavoriteRecipe,
        isLoading,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};