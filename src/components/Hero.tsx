import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ApplicationForm from './ApplicationForm';
import Logo from './Logo';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const logos = [
    { name: 'Greenpeace', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Greenpeace_logo.svg' },
    { name: 'UNICEF', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/UNICEF_Logo.png' },
    { name: 'Rakuten', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Rakuten_Global_Brand_Logo.svg' },
    { name: 'Wienerberger', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Wienerberger_2020_logo.svg' }
  ];

  return (
    <header className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-swimming-pool-aerial-view-40659-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-swimming-pool-aerial-view-40659-large.webm"
            type="video/webm"
          />
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            alt="Luxury Mysore Resort"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>

      {/* Logo - Now wrapped in a clickable div */}
      <div className="absolute top-8 left-8 cursor-pointer">
        <Logo variant="gold" size="lg" />
      </div>
      
      <div className="relative h-full flex flex-col justify-between px-4 py-8 sm:py-12">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto w-full text-center">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-delay-1 leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              The Business Collective
            </span>
            <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              Retreat- Mysore
            </span>
          </h1>

          {/* New Tagline */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in-delay-1">
            <div className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            <div className="flex gap-3 items-center">
              <span className="text-gold-400 font-display">5 nights</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
              <span className="text-gold-400 font-display">25 Founders</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50"></span>
              <span className="text-gold-400 font-display">1 Dream Vacation</span>
            </div>
            <div className="hidden md:block h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
          </div>
          
          <p className="font-light text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-delay-2 text-gray-200">
            Reflect, connect & strategize while vacationing with top business leaders
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-delay-2">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg hover:shadow-gold-500/25 w-full sm:w-auto justify-center"
            >
              Apply to get selected <ArrowRight className="w-5 h-5" />
            </button>
            <span className="font-display text-gold-300 font-medium">December 6-11, 2024</span>
          </div>

          {/* Play Button - Web */}
          <button
            onClick={() => setIsPlaying(true)}
            className="hidden md:block"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 hover:bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-white/60 text-sm whitespace-nowrap">
                Watch Invite
              </span>
            </div>
          </button>

          {/* Play Button - Mobile */}
          <button
            onClick={() => setIsPlaying(true)}
            className="md:hidden mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </button>
        </div>

        {/* Bottom Logos Section */}
        <div className="w-full max-w-4xl mx-auto">
          <p className="text-center text-gray-400 mb-4 text-xs sm:text-sm uppercase tracking-wider">
            Join the retreat with Business leaders from
          </p>
          <div className="flex justify-center items-center gap-6 sm:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                alt={logo.name}
                className="h-4 sm:h-6 w-auto filter brightness-0 invert opacity-50"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
            >
              Close
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/8Z_WrL6lCKg?autoplay=1&rel=0&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      <ApplicationForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </header>
  );
}