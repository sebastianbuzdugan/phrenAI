import React from 'react';
import { Clock, Shield, Brain, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Access compassionate support anytime, anywhere. PhrenAI is always here to listen and help.'
  },
  {
    icon: Brain,
    title: 'Personalized Strategies',
    description: 'Receive tailored coping mechanisms and wellness strategies based on your unique needs.'
  },
  {
    icon: HeartPulse,
    title: 'Crisis Intervention',
    description: 'Immediate support and resources during difficult moments, with direct connections to professional help.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your conversations are private and secure. We prioritize your confidentiality and data protection.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PhrenAI?</h2>
          <p className="text-xl text-gray-600">Discover how we're revolutionizing mental health support</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors">
              <feature.icon className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}