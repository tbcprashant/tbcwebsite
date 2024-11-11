import React from 'react';

const BusinessCollective = () => {
  const stats = [
    { number: '500+', label: 'Active Members' },
    { number: '₹100Cr+', label: 'Combined Revenue' },
    { number: '15+', label: 'Industries' },
    { number: '25+', label: 'Cities' }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-6 gold-gradient">
            Get invited to The Business Collective post the retreat
          </h2>
          <p className="font-light text-xl text-gray-300 max-w-3xl mx-auto">
            Join an exclusive community of visionary entrepreneurs committed to growth, innovation, and meaningful connections
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-bold mb-2 gold-gradient">{stat.number}</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessCollective;