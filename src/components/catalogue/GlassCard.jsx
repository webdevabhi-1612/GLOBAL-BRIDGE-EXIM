import React from 'react';
import { Link } from 'react-router-dom';

export default function GlassCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`}
      // Added bg-[#E9EBE5] directly to the card so the background stays premium and solid behind the contained image
      className="relative h-[460px] w-full rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block bg-[#E9EBE5]"
    >
      
      {/* Image Wrapper: 
        p-6 gives it breathing room on the sides. 
        pb-[140px] pushes the image up so it never gets hidden behind the frosted glass box.
      */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 pb-[140px]">
        <img 
          src={product.image} 
          alt={product.title} 
          // Changed to object-contain so the whole image (including the label) is forced to fit without cropping
          className="w-full h-full object-cover transition-transform duration-1000 scale-120 group-hover:scale-130 drop-shadow-md"
          onError={(e) => { e.target.src = "https://via.placeholder.com/400x600/E9EBE5/0C3B24?text=Image+Pending" }}
        />
      </div>

      {/* Bottom Blurred Details Box (Light Frosted Glass) */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-white/70 backdrop-blur-xl border-t border-white/50 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        
        <h3 className="text-[#0C3B24] text-xl font-bold leading-tight mb-3 font-sans tracking-wide">
          {product.title}
        </h3>
        
        {/* Specs Box */}
        <div className="flex items-center justify-between pt-4 border-t border-[#0C3B24]/10">
          <div className="flex flex-col pr-4">
            <span className="text-[#0C3B24]/50 text-[10px] uppercase tracking-widest font-bold mb-1">Packaging</span>
            {/* Added line-clamp-1 so overly long packaging text doesn't break the UI */}
            <span className="text-[#0C3B24] text-xs font-bold tracking-wide line-clamp-1">
              {product.specs.packaging}
            </span>
          </div>
          
          {/* Action Icon */}
          <div className="w-10 h-10 shrink-0 rounded-full bg-[#0C3B24] flex items-center justify-center text-white group-hover:bg-[#FFC72C] group-hover:text-[#0C3B24] transition-colors duration-300 shadow-md">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
               <path d="M5 12h14M12 5l7 7-7 7"/>
             </svg>
          </div>
        </div>

      </div>
    </Link>
  );
}