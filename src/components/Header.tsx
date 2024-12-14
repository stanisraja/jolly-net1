import React from 'react';
import { Menu } from 'lucide-react';
import { AppLinks } from './AppLinks';
import { Logo } from './Logo';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <Logo />
        </div>
        <AppLinks className="hidden md:flex" />
      </div>
    </header>
  );
}