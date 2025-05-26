export interface Ingredient {
  id: string;
  name: string;
  quantity?: string;
  imageUrl?: string;
}

export interface Diet {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  instructions: string[];
  tags: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  isFavorite?: boolean;
}

export interface UserPreferences {
  diets: string[];
  allergies: string[];
  dislikedIngredients: string[];
  cuisinePreferences: string[];
  cookingTime: number; // Maximum cooking time in minutes
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  savedRecipes: string[];
  cookedRecipes: string[];
}