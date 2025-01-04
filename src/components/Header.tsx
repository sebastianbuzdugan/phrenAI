import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">PhrenAI</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors">How It Works</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-teal-600">How It Works</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-teal-600">About Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}