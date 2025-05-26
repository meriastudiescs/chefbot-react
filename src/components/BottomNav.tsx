import React from 'react';
import { Home, Search, MessageSquare, Heart, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe-bottom">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<Home size={24} />} label="Home" active />
        <NavItem icon={<Search size={24} />} label="Search" />
        <NavItem icon={<MessageSquare size={24} />} label="Chat" />
        <NavItem icon={<Heart size={24} />} label="Favorites" />
        <NavItem icon={<User size={24} />} label="Profile" />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => {
  return (
    <button 
      className={`flex flex-col items-center justify-center w-16 ${
        active ? 'text-primary-500' : 'text-gray-400'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

export default BottomNav;