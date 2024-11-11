import React from 'react';

export default function BrandLetters() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Enhanced background with more prominent gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(191, 149, 63, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 80% 50%, rgba(191, 149, 63, 0.2) 0%, transparent 60%)
            `
          }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative">
        <div className="flex justify-between items-center gap-4 md:gap-8">
          {['t', 'b', 'c'].map((letter) => (
            <div 
              key={letter}
              className="flex-1 relative group"
            >
              {/* Enhanced glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/30 via-gold-300/30 to-gold-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
              
              {/* Letter container with improved visibility */}
              <div className="relative flex items-center justify-center">
                <span 
                  className="font-display font-light tracking-tight lowercase text-center"
                  style={{
                    fontSize: 'clamp(150px, 25vw, 300px)',
                    color: '#FFFFFF',
                    WebkitTextStroke: '1px rgba(191, 149, 63, 0.3)',
                    textShadow: `
                      0 0 40px rgba(191, 149, 63, 0.5),
                      0 0 80px rgba(191, 149, 63, 0.3)
                    `,
                    filter: 'drop-shadow(0 0 20px rgba(191, 149, 63, 0.2))'
                  }}
                >
                  {letter}
                </span>
              </div>

              {/* Decorative elements */}
              <div 
                className="absolute inset-0 opacity-75"
                style={{
                  background: `
                    linear-gradient(to bottom right, 
                      rgba(191, 149, 63, 0.1) 0%,
                      transparent 40%,
                      transparent 60%,
                      rgba(191, 149, 63, 0.1) 100%
                    )
                  `
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}