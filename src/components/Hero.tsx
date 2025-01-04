import React from 'react';
import { MessageSquareHeart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-teal-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <MessageSquareHeart className="h-16 w-16 mx-auto text-teal-600 mb-6" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your AI Companion for Mental Wellness
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Experience 24/7 empathetic support, personalized coping strategies, and
          confidential conversations with PhrenAI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}