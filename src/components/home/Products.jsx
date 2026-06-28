import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/products'; 

// Updated to match the exact new IDs from our products.js database
const top5Ids = [
  '1121-sella-basmati', 
  '1718-steam-basmati', 
  '1509-golden-sella', 
  'pb1-steam-basmati', 
  'steam-basmati-pesticide-free'      
];

// 1. Filter the exact products
let featuredProducts = productsData.filter(product => top5Ids.includes(product.id));

// 2. BULLETPROOF FALLBACK: If IDs ever mismatch in the future, just grab the first 5 items so the UI NEVER breaks.
if (featuredProducts.length === 0) {
  featuredProducts = productsData.slice(0, 5);
}

// Create the infinite loop array
const products = Array(40).fill(featuredProducts).flat();

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; 

    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 2000); 

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full min-h-screen py-32 md:py-40 bg-[#0a0a0a] overflow-hidden flex flex-col justify-center">
      
      {/* Brand-Matched Emerald Green Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-[60vh] bg-[#0C3B24]/40 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Left & Right Edge Vignettes */}
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-30 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-30 pointer-events-none"></div>

      {/* Section Header */}
      <div className="relative w-full text-center z-40 pointer-events-none mb-24 md:mb-32">
        <h2 className="text-white text-[3.5rem] md:text-[5rem] font-bold leading-none tracking-tight font-sans drop-shadow-2xl">
          Featured <span className="font-serif italic text-white/90">Exports.</span>
        </h2>
      </div>

      {/* Sliding Carousel Track */}
      <div 
        className="flex items-center gap-[32px] w-max z-10 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(calc(50vw - 160px - ${activeIndex * 352}px))` }}
      >
        {products.map((product, index) => {
          const isActive = index === activeIndex;

          return (
            <div 
              key={`${product.id}-${index}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className={`relative w-[320px] h-[480px] rounded-[1.5rem] overflow-hidden shrink-0 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isActive 
                  ? 'scale-110 opacity-100 z-20 shadow-[0_0_50px_rgba(12,59,36,0.5)]' 
                  : 'scale-[0.85] opacity-40 z-10 blur-[2px] hover:opacity-60'
              }`}
            >
              {/* Card Image */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover bg-[#111]"
                onError={(e) => { 
                  e.target.onerror = null; // CRITICAL: Kills the infinite loop crash
                  e.target.src = "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=800&auto=format&fit=crop"; 
                }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-black/10"></div>

              {/* Rating Badge */}
              <div className={`absolute top-5 right-5 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#d2ff68] text-lg font-bold">{product.rating}</span>
                <span className="text-white/70 text-sm">★</span>
              </div>

              {/* Bottom Content Area */}
              <div className={`absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                
                <h3 className="text-white text-2xl font-bold mb-1 tracking-tight font-sans">
                  {product.title}
                </h3>
                
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                  {product.shortDescription}
                </p>

                {/* Direct Link Button */}
                <Link 
                  to={`/product/${product.id}`}
                  className="w-full bg-[#d2ff68] text-black font-semibold py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 font-sans shadow-lg"
                >
                  View Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>

              </div>
            </div>
          )
        })}
      </div>

    </section>
  );
}