import React from 'react';
import { Award, Sparkles } from 'lucide-react';

export default function Founders() {
  const founders = [
    {
      name: "Pratibha",
      // Replace this URL with the one you get from ImgBB
      image: "https://i.ibb.co/your-image-id/pratibha.jpg",
      role: "Founder & Community Builder",
      achievements: [
        "15+ years building & scaling businesses",
        "Community builder & strategist",
        "Expert in business transformation"
      ],
      gradient: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20"
    },
    {
      name: "Prashant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
      role: "Founder & Strategy Lead",
      achievements: [
        "Serial tech entrepreneur",
        "Innovation & strategy expert",
        "Business scaling specialist"
      ],
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              People behind TBC know how to bring people together
            </span>
          </h2>
          <p className="font-light text-xl text-gray-300 max-w-3xl mx-auto">
            By Founders, For Founders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="relative">
                {/* Animated Background */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 md:p-8 border border-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-500">
                  {/* Top Section with Image and Basic Info */}
                  <div className="flex items-center gap-6 mb-8">
                    {/* Image Container */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/50 via-gold-300/50 to-gold-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden">
                        <img 
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      </div>
                      {/* Decorative Elements */}
                      <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Name and Role */}
                    <div className="flex-1">
                      <div className="relative">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          <span className="bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent">
                            {founder.name}
                          </span>
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">{founder.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements Section */}
                  <div className="space-y-4">
                    {founder.achievements.map((achievement, i) => (
                      <div 
                        key={i} 
                        className="relative group/achievement"
                      >
                        {/* Achievement Background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${founder.gradient} rounded-lg opacity-0 group-hover/achievement:opacity-10 transition-opacity duration-300`}></div>
                        
                        {/* Achievement Content */}
                        <div className="relative flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 border border-gray-800 group-hover/achievement:border-gold-500/20 transition-colors duration-300">
                          <Award className="w-5 h-5 text-gold-500/70 group-hover/achievement:text-gold-400 transition-colors" />
                          <p className="text-gray-400 text-sm md:text-base font-light group-hover/achievement:text-gray-200 transition-colors">
                            {achievement}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}