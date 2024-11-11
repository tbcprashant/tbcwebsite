import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'light', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  const colorClasses = {
    light: 'text-white hover:text-gold-300',
    gold: 'bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent hover:from-[#fcf6ba] hover:via-[#b38728] hover:to-[#bf953f]'
  };

  return (
    <a 
      href="/"
      className={`font-display cursor-pointer group transition-all duration-300 ${className}`}
    >
      <div className={`
        ${sizeClasses[size]} 
        ${colorClasses[variant]} 
        font-light 
        tracking-wider 
        lowercase 
        transform 
        transition-all 
        duration-300 
        group-hover:scale-110
      `}>
        tbc
      </div>
    </a>
  );
}