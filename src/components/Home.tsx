import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Home: React.FC = () => {
  const { user } = useApp();

  return (
    <div className="pb-20 pt-safe-top">
      {/* Header */}
      <header className="px-4 py-6">
        <h1 className="text-xl font-medium">
          Hola {user?.name?.split(' ')[0]},
          <br />
          <span className="text-gray-500">¿qué prepararemos hoy?</span>
        </h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca ingredientes o recetas"
            className="w-full bg-gray-100 rounded-xl py-3 pl-10 pr-4 text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Collections */}
      <section className="px-4 mb-8">
        <h2 className="text-lg font-medium mb-4">Colecciones</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <CollectionCard
            title="Pastas"
            image="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg"
          />
          <CollectionCard
            title="Ensaladas"
            image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          />
        </div>
      </section>

      {/* Ingredient Categories */}
      <section className="px-4">
        <h2 className="text-lg font-medium mb-4">Escoge tus ingredientes favoritos</h2>
        <div className="grid grid-cols-3 gap-4">
          <CategoryCard title="Frutas" emoji="🍓" bgColor="bg-red-100" />
          <CategoryCard title="Verduras" emoji="🥦" bgColor="bg-green-100" />
          <CategoryCard title="Snacks" emoji="🥨" bgColor="bg-yellow-100" />
        </div>
      </section>
    </div>
  );
};

interface CollectionCardProps {
  title: string;
  image: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, image }) => {
  return (
    <div className="flex-shrink-0 w-40 rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-24 object-cover" />
      <div className="p-2">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">Colección</p>
      </div>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  emoji: string;
  bgColor: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, emoji, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-xl p-4 text-center`}>
      <span className="text-2xl mb-2 block">{emoji}</span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default Home;