import { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Simple Chicken Stir-Fry',
    description: 'A quick and easy chicken stir-fry with vegetables.',
    imageUrl: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      { id: '1', name: 'Chicken Breast', quantity: '1 lb, sliced' },
      { id: '6', name: 'Onions', quantity: '1, sliced' },
      { id: '8', name: 'Bell Peppers', quantity: '1, sliced' },
      { id: '7', name: 'Garlic', quantity: '2 cloves, minced' },
      { id: '15', name: 'Olive Oil', quantity: '2 tbsp' },
      { id: '101', name: 'Soy Sauce', quantity: '2 tbsp' },
      { id: '102', name: 'Ginger', quantity: '1 tsp, grated' },
    ],
    instructions: [
      'Heat oil in a large skillet or wok over high heat.',
      'Add sliced chicken and cook until browned, about 4-5 minutes.',
      'Add garlic and ginger, cook for 30 seconds until fragrant.',
      'Add onions and bell peppers, stir-fry for 2-3 minutes until slightly softened.',
      'Pour in soy sauce and stir to combine.',
      'Cook for another 1-2 minutes until everything is well coated and chicken is cooked through.',
      'Serve hot with rice if desired.'
    ],
    tags: ['Quick', 'Asian', 'High-Protein', 'Dinner'],
    nutrition: {
      calories: 320,
      protein: 35,
      carbs: 10,
      fat: 15
    }
  },
  {
    id: '2',
    title: 'Classic Tomato Pasta',
    description: 'A simple and delicious tomato-based pasta dish.',
    imageUrl: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 5,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
      { id: '4', name: 'Pasta', quantity: '8 oz' },
      { id: '5', name: 'Tomatoes', quantity: '4, diced' },
      { id: '6', name: 'Onions', quantity: '1, chopped' },
      { id: '7', name: 'Garlic', quantity: '3 cloves, minced' },
      { id: '15', name: 'Olive Oil', quantity: '3 tbsp' },
      { id: '103', name: 'Basil', quantity: 'handful, chopped' },
      { id: '104', name: 'Salt', quantity: 'to taste' },
      { id: '105', name: 'Black Pepper', quantity: 'to taste' },
    ],
    instructions: [
      'Cook pasta according to package directions until al dente.',
      'While pasta cooks, heat olive oil in a large pan over medium heat.',
      'Add onions and cook until softened, about 3-4 minutes.',
      'Add garlic and cook for another 30 seconds until fragrant.',
      'Add diced tomatoes, salt, and pepper. Cook for 5-7 minutes until tomatoes break down.',
      'Drain pasta and add to the sauce, tossing to combine.',
      'Stir in fresh basil and serve immediately.'
    ],
    tags: ['Italian', 'Vegetarian', 'Quick', 'Dinner'],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 9
    }
  },
  {
    id: '3',
    title: 'Avocado Toast with Eggs',
    description: 'Creamy avocado toast topped with perfectly cooked eggs.',
    imageUrl: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
      { id: '2', name: 'Eggs', quantity: '2' },
      { id: '18', name: 'Avocado', quantity: '1, ripe' },
      { id: '106', name: 'Bread', quantity: '2 slices' },
      { id: '20', name: 'Lemon', quantity: '½, juiced' },
      { id: '104', name: 'Salt', quantity: 'to taste' },
      { id: '105', name: 'Black Pepper', quantity: 'to taste' },
      { id: '107', name: 'Red Pepper Flakes', quantity: 'pinch (optional)' },
    ],
    instructions: [
      'Toast bread slices until golden and crisp.',
      'While bread is toasting, mash avocado in a bowl with lemon juice, salt, and pepper.',
      'Cook eggs to your preference (fried or poached recommended).',
      'Spread mashed avocado on toast slices.',
      'Top each slice with an egg.',
      'Season with additional salt, pepper, and red pepper flakes if desired.',
      'Serve immediately.'
    ],
    tags: ['Breakfast', 'Vegetarian', 'Quick', 'High-Protein'],
    nutrition: {
      calories: 350,
      protein: 14,
      carbs: 30,
      fat: 22
    }
  },
  {
    id: '4',
    title: 'Garlic Butter Salmon',
    description: 'Perfectly cooked salmon in a rich garlic butter sauce.',
    imageUrl: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 5,
    cookTime: 15,
    servings: 2,
    difficulty: 'medium',
    ingredients: [
      { id: '17', name: 'Salmon', quantity: '2 fillets (6 oz each)' },
      { id: '14', name: 'Butter', quantity: '3 tbsp' },
      { id: '7', name: 'Garlic', quantity: '4 cloves, minced' },
      { id: '20', name: 'Lemon', quantity: '1, half juiced, half sliced' },
      { id: '108', name: 'Dill', quantity: '2 tbsp, chopped' },
      { id: '104', name: 'Salt', quantity: 'to taste' },
      { id: '105', name: 'Black Pepper', quantity: 'to taste' },
    ],
    instructions: [
      'Pat salmon fillets dry and season with salt and pepper.',
      'Melt butter in a large skillet over medium-high heat.',
      'Add garlic to the butter and cook for 1 minute until fragrant.',
      'Add salmon fillets to the pan, skin side down if they have skin.',
      'Cook for 4-5 minutes, then flip and cook for another 3-4 minutes until cooked through.',
      'Add lemon juice and dill to the pan, spooning the sauce over the salmon.',
      'Serve hot with lemon slices.'
    ],
    tags: ['Seafood', 'Dinner', 'High-Protein', 'Low-Carb'],
    nutrition: {
      calories: 380,
      protein: 34,
      carbs: 2,
      fat: 26
    }
  },
  {
    id: '5',
    title: 'Vegetarian Stir-Fried Rice',
    description: 'A quick and flavorful vegetarian fried rice packed with vegetables.',
    imageUrl: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'easy',
    ingredients: [
      { id: '3', name: 'Rice', quantity: '2 cups, cooked and cooled' },
      { id: '2', name: 'Eggs', quantity: '2, beaten' },
      { id: '6', name: 'Onions', quantity: '1, diced' },
      { id: '10', name: 'Carrots', quantity: '2, diced' },
      { id: '8', name: 'Bell Peppers', quantity: '1, diced' },
      { id: '11', name: 'Broccoli', quantity: '1 cup, small florets' },
      { id: '7', name: 'Garlic', quantity: '2 cloves, minced' },
      { id: '15', name: 'Olive Oil', quantity: '2 tbsp' },
      { id: '101', name: 'Soy Sauce', quantity: '3 tbsp' },
      { id: '109', name: 'Sesame Oil', quantity: '1 tsp' },
    ],
    instructions: [
      'Heat 1 tbsp oil in a large wok or skillet over high heat.',
      'Add beaten eggs and scramble until cooked, about 1 minute. Remove and set aside.',
      'Add remaining oil to the pan. Add onions, carrots, and bell peppers.',
      'Stir-fry for 3-4 minutes until vegetables begin to soften.',
      'Add broccoli and garlic, stir-fry for 2 more minutes.',
      'Add cooked rice, breaking up any clumps, and stir to combine with vegetables.',
      'Pour in soy sauce and sesame oil, stirring to coat everything evenly.',
      'Return scrambled eggs to the pan and mix well.',
      'Cook for another 2-3 minutes until everything is hot and well combined.',
      'Serve immediately.'
    ],
    tags: ['Vegetarian', 'Asian', 'Quick', 'Dinner'],
    nutrition: {
      calories: 290,
      protein: 8,
      carbs: 48,
      fat: 8
    }
  },
  {
    id: '6',
    title: 'Spinach and Cheese Omelette',
    description: 'A fluffy omelette filled with spinach and melted cheese.',
    imageUrl: 'https://images.pexels.com/photos/3465377/pexels-photo-3465377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 5,
    cookTime: 10,
    servings: 1,
    difficulty: 'easy',
    ingredients: [
      { id: '2', name: 'Eggs', quantity: '3, beaten' },
      { id: '19', name: 'Spinach', quantity: '1 cup, fresh' },
      { id: '12', name: 'Cheese', quantity: '1/4 cup, shredded' },
      { id: '6', name: 'Onions', quantity: '2 tbsp, finely chopped' },
      { id: '14', name: 'Butter', quantity: '1 tbsp' },
      { id: '104', name: 'Salt', quantity: 'to taste' },
      { id: '105', name: 'Black Pepper', quantity: 'to taste' },
    ],
    instructions: [
      'In a bowl, beat eggs with salt and pepper until well combined.',
      'Melt butter in a non-stick skillet over medium heat.',
      'Add chopped onions and cook until softened, about 2 minutes.',
      'Add spinach and cook until wilted, about 1 minute.',
      'Pour beaten eggs over the spinach and onions, tilting the pan to spread evenly.',
      'Cook until eggs begin to set, about 2-3 minutes.',
      'Sprinkle cheese over one half of the omelette.',
      'When eggs are mostly set but still slightly runny on top, fold the omelette in half.',
      'Cook for another minute until cheese melts and eggs are fully cooked.',
      'Slide onto a plate and serve immediately.'
    ],
    tags: ['Breakfast', 'Vegetarian', 'Quick', 'High-Protein'],
    nutrition: {
      calories: 330,
      protein: 22,
      carbs: 5,
      fat: 25
    }
  }
];