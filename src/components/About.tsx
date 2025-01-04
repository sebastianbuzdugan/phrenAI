import React from 'react';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make mental health support accessible to everyone,
            everywhere, at any time. PhrenAI combines cutting-edge technology with
            empathy to provide reliable, consistent support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              We envision a world where quality mental health support is just a message away.
              Our team of mental health professionals, AI experts, and developers work
              together to create a platform that understands, supports, and grows with you.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-600 rounded-full mr-2"></span>
                Evidence-based approach to mental wellness
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-600 rounded-full mr-2"></span>
                Continuous learning and improvement
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-600 rounded-full mr-2"></span>
                Commitment to privacy and ethical AI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}