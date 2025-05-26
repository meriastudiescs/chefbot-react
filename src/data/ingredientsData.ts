import { Ingredient } from '../types';

export const mockIngredients: Ingredient[] = [
  { id: '1', name: 'Chicken Breast', imageUrl: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '2', name: 'Eggs', imageUrl: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '3', name: 'Rice', imageUrl: 'https://images.pexels.com/photos/7469452/pexels-photo-7469452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '4', name: 'Pasta', imageUrl: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '5', name: 'Tomatoes', imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '6', name: 'Onions', imageUrl: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '7', name: 'Garlic', imageUrl: 'https://images.pexels.com/photos/1392585/pexels-photo-1392585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '8', name: 'Bell Peppers', imageUrl: 'https://images.pexels.com/photos/5586049/pexels-photo-5586049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '9', name: 'Potatoes', imageUrl: 'https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '10', name: 'Carrots', imageUrl: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '11', name: 'Broccoli', imageUrl: 'https://images.pexels.com/photos/6316515/pexels-photo-6316515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '12', name: 'Cheese', imageUrl: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '13', name: 'Milk', imageUrl: 'https://images.pexels.com/photos/7775670/pexels-photo-7775670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '14', name: 'Butter', imageUrl: 'https://images.pexels.com/photos/531570/pexels-photo-531570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '15', name: 'Olive Oil', imageUrl: 'https://images.pexels.com/photos/1352419/pexels-photo-1352419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '16', name: 'Ground Beef', imageUrl: 'https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '17', name: 'Salmon', imageUrl: 'https://images.pexels.com/photos/3296280/pexels-photo-3296280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '18', name: 'Avocado', imageUrl: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '19', name: 'Spinach', imageUrl: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: '20', name: 'Lemon', imageUrl: 'https://images.pexels.com/photos/952630/pexels-photo-952630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

export const dietaryOptions = [
  { id: 'vegetarian', name: 'Vegetarian', description: 'No meat or fish', icon: 'Leaf' },
  { id: 'vegan', name: 'Vegan', description: 'No animal products', icon: 'Sprout' },
  { id: 'gluten-free', name: 'Gluten Free', description: 'No gluten-containing grains', icon: 'Wheat' },
  { id: 'dairy-free', name: 'Dairy Free', description: 'No dairy products', icon: 'Milk' },
  { id: 'keto', name: 'Keto', description: 'Low carb, high fat', icon: 'Bacon' },
  { id: 'paleo', name: 'Paleo', description: 'Whole foods based diet', icon: 'Drumstick' },
];

export const cuisineTypes = [
  'Italian',
  'Mexican',
  'Chinese',
  'Japanese',
  'Indian',
  'Thai',
  'Mediterranean',
  'American',
  'French',
  'Greek',
];

export const mealTypes = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack',
  'Dessert',
  'Appetizer',
];