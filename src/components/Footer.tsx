import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 gold-gradient">
          The Business Collective
        </h2>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-gold-400 transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gold-400 transition">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-gold-400 transition">Contact</a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 The Business Collective. All rights reserved.
        </p>
      </div>
    </footer>
  );
}