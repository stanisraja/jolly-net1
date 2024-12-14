import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/logo.png" 
        alt="JollySwipe Logo" 
        className="h-8 w-auto"
      />
      <span className="text-xl font-bold">
        <span className="text-orange-500">Jolly</span>
        <span className="text-orange-500">Swipe</span>
      </span>
    </Link>
  );
}