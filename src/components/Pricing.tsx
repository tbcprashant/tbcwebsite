import React, { useState, useEffect } from 'react';
import { Check, Crown, Users, Calendar, Star } from 'lucide-react';
import ApplicationForm from './ApplicationForm';

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const benefits = [
    { 
      icon: Crown, 
      text: 'Luxury Stay: 5 nights at a serene, comfortable resort',
      gradient: 'from-purple-500/20 via-fuchsia-500/20 to-pink-500/20'
    },
    { 
      icon: Users, 
      text: 'All Meals & Snacks: Thoughtfully prepared cuisine',
      gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20'
    },
    { 
      icon: Calendar, 
      text: 'Activities & Experiences: Safaris to bonfire gatherings',
      gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20'
    },
    { 
      icon: Star, 
      text: 'Exclusive Community Access: Lifetime membership',
      gradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/20'
    },
    { 
      icon: Check, 
      text: 'Personalized Business Solutions: 5 deep-dive sessions',
      gradient: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20'
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechVision India",
      quote: "The retreat transformed how I approach business challenges"
    },
    {
      name: "Priya Sharma",
      role: "Founder, EcoInnovate",
      quote: "A game-changing experience for any ambitious founder"
    },
    {
      name: "Amit Patel",
      role: "MD, Global Exports Ltd",
      quote: "The connections made here are truly invaluable"
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              All this at a price, you wouldn't believe is possible!
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <div className="relative group mb-16">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 via-gold-300/20 to-gold-500/20 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/95 via-black to-gray-900/95 p-8 md:p-12 rounded-2xl border border-gold-500/20">
                {/* Price Tag */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                      ₹50,000
                    </span>
                    <span className="text-gray-400 font-light">(incl. of taxes)</span>
                  </div>
                  <p className="text-gray-300 font-light mt-2">Investment in your business growth</p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-start gap-4 group/benefit"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.gradient} p-[1px] group-hover/benefit:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base group-hover/benefit:text-white transition-colors">
                          {benefit.text}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Apply Button */}
                <div className="text-center">
                  <button 
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg hover:shadow-gold-500/25 mx-auto"
                  >
                    Apply to get selected <Crown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative group bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                >
                  <div className="mb-4">
                    <Star className="w-5 h-5 text-gold-400" />
                  </div>
                  <blockquote className="text-gray-300 text-sm mb-4 font-light italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplicationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
}