import React from 'react';
import { Sparkles, Lock, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How PhrenAI Works</h2>
          <p className="text-xl text-gray-600">Powered by advanced AI technology for personalized support</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Sparkles className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI</h3>
            <p className="text-gray-600">
              Built on GPT-4O Mini, our AI understands context and provides meaningful, empathetic responses.
            </p>
          </div>

          <div className="text-center p-6">
            <Lock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
            <p className="text-gray-600">
              End-to-end encryption and strict privacy measures ensure your conversations remain confidential.
            </p>
          </div>

          <div className="text-center p-6">
            <MessageSquare className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Dialogue</h3>
            <p className="text-gray-600">
              Engage in natural conversations that adapt to your needs and communication style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}