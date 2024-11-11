import React, { useState, useRef, useEffect } from 'react';
import { benefits } from '../data/whyAttendData';

export default function WhyAttend() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Image preloading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          benefits.forEach(benefit => {
            const img = new Image();
            img.src = benefit.image;
            img.onload = () => {
              setLoadedImages(prev => new Set(prev).add(benefit.image));
            };
          });
        }
      },
      { rootMargin: '50px 0px', threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mobile autoplay with pause on interaction
  useEffect(() => {
    const startAutoplay = () => {
      if (isMobile) {
        autoplayRef.current = setInterval(() => {
          setActiveIndex(prev => (prev + 1) % benefits.length);
        }, 5000);
      }
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    startAutoplay();

    return () => stopAutoplay();
  }, [isMobile]);

  // Handle touch interactions
  const handleTouchStart = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % benefits.length);
      }, 5000);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-group-of-people-having-a-business-meeting-42902-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-group-of-people-having-a-business-meeting-42902-large.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
              Why attend TBC Retreats?
            </span>
          </h2>
          <p className="font-light text-xl text-gray-300 max-w-3xl mx-auto">
            It is the only business vacation you would love to take!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel - Navigation */}
          <div className="w-full lg:w-1/3 space-y-3 md:space-y-4 order-2 lg:order-1">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              const isActive = index === activeIndex;
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    if (autoplayRef.current) {
                      clearInterval(autoplayRef.current);
                      autoplayRef.current = null;
                    }
                  }}
                  className={`w-full text-left relative group transition-all duration-500 ease-out ${
                    isActive ? 'lg:translate-x-4' : ''
                  }`}
                >
                  <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} blur-xl`}></div>
                    <div className="absolute inset-0 backdrop-blur-sm rounded-xl"></div>
                  </div>

                  <div className={`relative p-4 md:p-6 rounded-xl border transition-all duration-500 ${
                    isActive 
                      ? 'bg-gray-900/40 border-gold-500/30 transform scale-[1.02]' 
                      : 'bg-gray-900/20 border-transparent hover:bg-gray-900/30'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`relative transition-transform duration-500 ${isActive ? 'scale-110' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-xl blur transition-opacity duration-500 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}></div>
                        
                        <div className={`relative p-3 rounded-xl transition-colors duration-500 ${
                          isActive ? 'bg-gray-900/60' : 'bg-gray-900/40'
                        }`}>
                          <IconComponent className={`w-6 h-6 transition-all duration-500 ${
                            isActive ? 'text-gold-400 transform scale-110' : 'text-gray-400 group-hover:text-gold-400'
                          }`} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className={`font-display text-base md:text-lg font-semibold transition-all duration-500 ${
                          isActive 
                            ? 'text-gold-400' 
                            : 'text-gray-300 group-hover:text-gold-400'
                        }`}>
                          {benefit.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      isActive ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel - Content */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            <div 
              ref={contentRef}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < activeIndex
                        ? 'opacity-0 -translate-x-full scale-110'
                        : 'opacity-0 translate-x-full scale-110'
                  }`}
                >
                  <div className="absolute inset-0">
                    {loadedImages.has(benefit.image) && (
                      <>
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 ${
                            isHovering ? 'scale-110' : 'scale-100'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-30`}></div>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12">
                    <div className={`transform transition-all duration-1000 ${
                      index === activeIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-white drop-shadow-lg">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-100 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-light drop-shadow">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile Navigation Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 lg:hidden">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      if (autoplayRef.current) {
                        clearInterval(autoplayRef.current);
                        autoplayRef.current = null;
                      }
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-gold-400' 
                        : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}