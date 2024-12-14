import React from 'react';
import { X } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { AppLinks } from './AppLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-white">
        <div className="p-4 border-b">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg float-right"
          >
            <X size={24} />
          </button>
          <AppLinks className="mt-4" />
        </div>
        <Sidebar className="mt-4" />
      </div>
    </div>
  );
}