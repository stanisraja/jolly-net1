import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Film, Laugh, Brain, Quote, BookOpen, MessageSquare, Lightbulb } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  className?: string;
}

const categories = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Movies', icon: Film, path: '/movies' },
  { name: 'Memes', icon: Laugh, path: '/memes' },
  { name: 'Jokes', icon: MessageSquare, path: '/jokes' },
  { name: 'Fun Facts', icon: Lightbulb, path: '/fun-facts' },
  { name: 'Quotes', icon: Quote, path: '/quotes' },
  { name: 'Trivia', icon: Brain, path: '/trivia' },
  { name: 'Short Stories', icon: BookOpen, path: '/stories' },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 bg-white p-4", className)}>
      <div className="space-y-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <NavLink
              key={category.path}
              to={category.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-orange-50 text-orange-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500'
                }`
              }
            >
              <Icon size={20} />
              <span>{category.name}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}