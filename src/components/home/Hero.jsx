import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      
      {/* LAYER 0: Background Video (Locked to exactly 100vh) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/video/video3.mp4"
        />
      </div>

      {/* LAYER 10: Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

      {/* LAYER 20: Main Content */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 md:px-16 h-full flex flex-col justify-center pt-20 pointer-events-none">
        
        {/* Left Content Area */}
        <div className="max-w-2xl text-white pointer-events-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d2ff68]"></span>
            <span className="text-xs font-medium tracking-wide opacity-90 font-sans">
              Empowering Global Trade
            </span>
          </div>

          {/* Typography */}
          <h1 className="text-[4rem] md:text-[5.5rem] leading-[0.95] tracking-tight mb-8">
            <span className="block font-medium font-sans">Global Bridge</span>
            <span className="block font-serif italic text-white/95">Exim.</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base leading-relaxed opacity-80 max-w-md mb-10 font-sans font-light">
            Trading starts with smarter logistics. Unlock efficiency, resilience,
            and long-term sustainability in seamless cross-border solutions.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Swapped button for Link and added to="/product" */}
            <Link to="/product" className="group flex items-center gap-3 bg-[#d2ff68] text-black px-6 py-3.5 rounded-full font-medium text-sm transition-transform hover:scale-105 duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] font-sans">
              Our Products
              <span className="bg-black text-white rounded-full p-1 transition-transform group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>
            
            {/* Swapped button for Link and added to="/company" */}
            <Link to="/company" className="group flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-medium text-sm transition-transform hover:scale-105 duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] font-sans">
              Company Profile
              <span className="bg-[#0a3822] text-white rounded-full p-1 transition-transform group-hover:rotate-45">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}