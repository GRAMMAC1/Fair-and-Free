"use client";

import { useState, useEffect } from 'react';

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function AnimatedHamburger({ isOpen, onClick, className = "" }: AnimatedHamburgerProps) {
  return (
    <button
      onClick={onClick}
      className={`relative p-2 rounded-lg bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-6 relative flex flex-col justify-center items-center">
        {/* 顶部线条 */}
        <span
          className={`absolute w-6 h-0.5 bg-[#7c49ff] transform transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
          }`}
        />
        
        {/* 中间线条 */}
        <span
          className={`absolute w-6 h-0.5 bg-[#7c49ff] transform transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* 底部线条 */}
        <span
          className={`absolute w-6 h-0.5 bg-[#7c49ff] transform transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
          }`}
        />
      </div>
    </button>
  );
}