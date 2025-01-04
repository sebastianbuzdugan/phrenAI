import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-semibold">PhrenAI</span>
            </div>
            <p className="text-gray-400">
              Your AI companion for mental wellness, available 24/7.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-teal-400">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-teal-400">How It Works</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-teal-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PhrenAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}