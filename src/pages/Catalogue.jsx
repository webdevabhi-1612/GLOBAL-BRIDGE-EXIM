import React from 'react';
import ProductGrid from '../components/catalogue/ProductGrid';
import PageTransition from '../layout/PageTransition'; // <-- Imported Transition

export default function Catalogue() {
  return (
    <PageTransition>
      <main className="relative w-full min-h-screen bg-white overflow-hidden pt-32 pb-24 font-sans">
        
        {/* Subtle Light Orbs for premium light-theme feel */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#FFC72C]/10 blur-[150px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0C3B24]/5 blur-[130px] pointer-events-none z-0"></div>

        {/* PAGE CONTENT */}
        <div className="relative z-10 flex flex-col items-center w-full px-6 md:px-12">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-[#0C3B24] text-[3.5rem] md:text-[5rem] font-bold leading-none tracking-tight mb-6">
              Our <span className="font-serif italic text-[#0C3B24]/90">Catalogue.</span>
            </h1>
            <p className="text-[#4A5D53] text-sm md:text-base leading-relaxed font-medium">
              Explore our comprehensive inventory of export-grade agricultural products. Sourced ethically, processed hygienically, and ready for global dispatch.
            </p>
          </div>

          {/* The Grid */}
          <ProductGrid />

        </div>
      </main>
    </PageTransition>
  );
}