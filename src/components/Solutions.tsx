import React, { useState } from 'react';
import { Crown, Users, GlassWater } from 'lucide-react';
import Logo from './Logo';

const benefits = [
  {
    icon: GlassWater,
    title: "Have access to unparalleled experiences",
    description: "From our partners from resorts to handcurated events & more",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80" // Luxury beach holiday
  },
  {
    icon: Crown,
    title: "Get invited to private dinners and gatherings",
    description: "Connect with the top business owners in exclusive settings",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&q=80" // Luxurious dinner setting
  },
  {
    icon: Users,
    title: "Become a part of Pan-India TBC network",
    description: "Giving you access to business owners from manufacturing to tech giants. You will be a message or a call away with the top business owners to help you propel your business",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80" // Casual networking drinks
  }
];

const stats = [
  { number: '500+', label: 'Active Members' },
  { number: '₹10000Cr+', label: 'Combined Revenue' },
  { number: '15+', label: 'Industries' },
  { number: '15+', label: 'Cities' }
];

export default function Solutions() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <span className="text-white">You will be invited to</span>
            <Logo variant="gold" size="lg" className="inline-block" />
          </h2>
          <p className="font-light text-xl text-gray-300 max-w-3xl mx-auto">
            Join an exclusive community of visionary entrepreneurs committed to growth, innovation, and meaningful connections
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  {/* Enhanced Animated Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/50 via-gold-300/50 to-gold-500/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500"></div>
                  
                  {/* Main Container with Glass Effect */}
                  <div className="relative flex gap-6 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 p-6 rounded-2xl border border-gold-500/10 group-hover:border-gold-500/30 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-[-2px] group-hover:shadow-lg group-hover:shadow-gold-500/10">
                    {/* Enhanced Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} blur-md transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-xl`}></div>
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-gold-500/10 group-hover:border-gold-500/30">
                        <IconComponent className="w-7 h-7 text-gold-400 transform transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="flex-1 relative">
                      {/* Subtle Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      
                      <h3 className="font-display text-xl font-semibold mb-2 bg-gradient-to-r from-gold-300 to-gold-100 bg-clip-text text-transparent transform transition-all duration-300 group-hover:translate-x-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right side - Membership Card/Images */}
          <div className="relative flex justify-center items-center py-12 px-4 lg:px-0">
            {/* Default Membership Card */}
            <div 
              className={`w-full max-w-[480px] aspect-[1.586/1] rounded-[16px] relative membership-card-content transition-all duration-500 ${
                hoveredBenefit !== null && !isMobile ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ 
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)',
                border: '1px solid rgba(191, 149, 63, 0.5)',
                background: '#111111'
              }}
            >
              <div className="absolute inset-0 rounded-[16px]" 
                   style={{
                     background: 'radial-gradient(circle at 50% -20%, rgba(191, 149, 63, 0.15), transparent 70%)'
                   }}></div>
              
              <div className="p-4 sm:p-8 relative h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4">
                    <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-[#bf953f]" />
                    <Logo variant="gold" size="md" />
                  </div>
                  <p className="text-[#bf953f] text-xs sm:text-sm tracking-[0.25em] font-display">
                    ELITE MEMBERSHIP
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#bf953f] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg sm:text-xl font-display font-bold text-black">PN</span>
                  </div>
                  <div className="flex-1 min-w-[150px]">
                    <p className="text-base sm:text-xl font-display text-white font-medium mb-1 truncate">
                      Pratibha Nayak
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <p className="text-[#bf953f] tracking-widest text-xs sm:text-sm">Founding Member</p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <p className="text-[#bf953f] font-light tracking-[0.2em] text-xs sm:text-sm whitespace-nowrap">
                      № 001 • 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit Images */}
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredBenefit === index && !isMobile ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-200 font-light">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-500/20 via-gold-300/20 to-gold-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="font-display text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-sm font-light">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}