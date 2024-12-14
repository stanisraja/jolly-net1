import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileMenu } from './components/MobileMenu';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
        <div className="hidden lg:block fixed left-0 top-16 bottom-0">
          <Sidebar />
        </div>
        <main className="pt-16 lg:ml-64">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;