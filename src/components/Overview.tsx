import React, { useState, useRef, useEffect } from 'react';
import { Users, Mountain, Target } from 'lucide-react';

const imageGroups = {
  vacation: [
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200", // Mysore Palace night
    "https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&q=80&w=1200", // Mysore Palace day
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1200", // Mysore architecture
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1200", // Mysore gardens
  ],
  experiences: [
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200", // Indian bonfire gathering
    "https://images.unsplash.com/photo-1562613531-a131faf45335?auto=format&fit=crop&q=80&w=1200", // Jungle safari
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200", // Evening music session
    "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200", // Outdoor activity
  ],
  solutions: [
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200", // Casual outdoor discussion
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200", // Resort discussion
    "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&q=80&w=1200", // Outdoor collaboration
  ]
};

export default function Overview() {
  const [activeCard, setActiveCard] = useState<keyof typeof imageGroups | null>(null);
  const [imageIndices, setImageIndices] = useState({
    vacation: 0,
    experiences: 0,
    solutions: 0
  });
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timersRef = useRef<{[key: string]: NodeJS.Timeout | null}>({
    vacation: null,
    experiences: null,
    solutions: null
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          Object.values(imageGroups).flat().forEach(url => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              setLoadedImages(prev => new Set(prev).add(url));
            };
          });
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(timer => {
        if (timer) clearInterval(timer);
      });
    };
  }, []);

  const handleMouseEnter = (type: keyof typeof imageGroups) => {
    setActiveCard(type);
    const timer = setInterval(() => {
      setImageIndices(prev => ({
        ...prev,
        [type]: (prev[type] + 1) % imageGroups[type].length
      }));
    }, 5000);
    timersRef.current[type] = timer;
  };

  const handleMouseLeave = (type: keyof typeof imageGroups) => {
    if (timersRef.current[type]) {
      clearInterval(timersRef.current[type]!);
      timersRef.current[type] = null;
    }
    setActiveCard(null);
    setImageIndices(prev => ({
      ...prev,
      [type]: 0
    }));
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
            A business vacation you dreamt existed!
          </span>
        </h2>
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
          <p className="font-display text-xl md:text-2xl text-gold-400/90 px-6 bg-gradient-to-b from-gray-900 to-black relative tracking-wide">
            Beyond the conventional events & conferences
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {(['vacation', 'experiences', 'solutions'] as const).map((type) => {
            const IconComponent = type === 'vacation' ? Users : type === 'experiences' ? Mountain : Target;
            const currentImage = imageGroups[type][imageIndices[type]];
            const isImageLoaded = loadedImages.has(currentImage);

            return (
              <div 
                key={type}
                className="glass-card rounded-xl hover-scale overflow-hidden border border-gold-500/20"
                onMouseEnter={() => handleMouseEnter(type)}
                onMouseLeave={() => handleMouseLeave(type)}
              >
                <div className="h-48 relative overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>

                  {isVisible && (
                    <img 
                      src={currentImage}
                      alt={`${type} experience`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        isImageLoaded 
                          ? 'opacity-100' 
                          : 'opacity-0'
                      }`}
                      style={{
                        transform: activeCard === type ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <IconComponent className="absolute bottom-4 left-4 w-12 h-12 text-gold-400" />
                </div>

                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold mb-3 text-gold-300">
                    {type === 'vacation' && "A vacation with handcurated business leaders"}
                    {type === 'experiences' && "Experiences to cherish for life"}
                    {type === 'solutions' && "Solve your biggest challenges"}
                  </h3>
                  <p className="text-gray-300 font-light">
                    {type === 'vacation' && "Connect with elite minds in a luxurious setting, complete with premium stays, gourmet dining, and curated networking."}
                    {type === 'experiences' && "From Kabini safaris to fireside chats, every moment is crafted for connection and inspiration."}
                    {type === 'solutions' && "Each day focuses on one founder's challenge, with structured discussions and AI-driven solutions from 25 elite minds."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}