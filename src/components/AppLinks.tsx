import React from 'react';
import { cn } from '../utils/cn';

interface AppLinksProps {
  className?: string;
}

export function AppLinks({ className }: AppLinksProps) {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a
        href="https://apps.apple.com/ca/app/jollyswipe-latest-trends/id6463115268"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
          alt="App Store"
          className="w-5 h-5"
        />
        <span>App Store</span>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.app.jollyswipe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
          alt="Play Store"
          className="w-5 h-5"
        />
        <span>Play Store</span>
      </a>
    </div>
  );
}