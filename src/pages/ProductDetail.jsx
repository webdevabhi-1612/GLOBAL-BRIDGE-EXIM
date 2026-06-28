import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import PageTransition from '../layout/PageTransition';

// Dictionary to map database keys to professional display labels based on your PDF
const specLabels = {
  purity: 'Purity',
  admixture: 'Natural Admixture',
  averageGrainLength: 'Average Grain Length',
  elongation: 'Elongation',
  moisture: 'Moisture',
  brokenGrain: 'Broken Grain',
  damageDiscolor: 'Damage / Dis-Color',
  immatureGrain: 'Immature Grain',
  whitenessLight: 'Whiteness (Light)',
  whitenessDark: 'Whiteness (Dark)',
  whiteness: 'Whiteness',
  packaging: 'Packaging Type'
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <PageTransition>
        <main className="w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white pt-32">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/product" className="text-[#FFC72C] underline hover:text-white transition-colors">
            Return to Catalogue
          </Link>
        </main>
      </PageTransition>
    );
  }

  // Get recommended products (Filter out current product, take up to 3 random items)
  const recommendations = productsData
    .filter(item => item.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans pt-28 md:pt-36 pb-24 border-t border-white/5 relative">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0C3B24]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        {/* ================= PRIMARY DETAILS CONTAINER ================= */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24 md:mb-32">
          
          {/* ================= LEFT SIDE: VISUALS ================= */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="w-full aspect-[4/5] rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-12 backdrop-blur-sm relative group">
              
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x600/111/333?text=Image+Pending" }}
              />

              {/* Floating Rating Badge */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <span className="text-[#FFC72C] text-xl font-bold">{product.rating}</span>
                <span className="text-white/70 text-base">★</span>
              </div>
            </div>
            
            <Link to="/contact" className="w-full bg-[#FFC72C] text-black font-bold py-4 rounded-full text-center hover:bg-white transition-colors shadow-lg">
              Request a Quote
            </Link>
          </div>

          {/* ================= RIGHT SIDE: DETAILS ================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <Link to="/product" className="text-gray-400 text-sm hover:text-white transition-colors mb-8 flex items-center gap-2 w-max">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Catalogue
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 tracking-tight">
              {product.title}
            </h1>
            
            <p className="text-xl text-gray-300 font-light mb-8">
              {product.shortDescription}
            </p>

            <div className="w-full h-[1px] bg-white/10 mb-8"></div>

            <h3 className="flex items-center gap-3 text-[#FFC72C] text-sm font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FFC72C]"></span>
              Product Overview
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-10">
              {product.longDescription}
            </p>

            <h3 className="flex items-center gap-3 text-[#FFC72C] text-sm font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FFC72C]"></span>
              Technical Specifications
            </h3>
            
            {/* Dynamic Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4">
              {Object.entries(product.specs).map(([key, value]) => {
                const isFullWidth = key === 'packaging';
                
                return (
                  <div 
                    key={key} 
                    className={`bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl backdrop-blur-sm transition-colors hover:bg-white/10 ${isFullWidth ? 'col-span-2 bg-[#1a1a1a]/50' : ''}`}
                  >
                    <span className="block text-[#FFC72C]/70 text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 font-bold">
                      {specLabels[key] || key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-white font-medium text-sm md:text-base block">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ================= NEW RECOMMENDED PRODUCTS SECTION ================= */}
        {recommendations.length > 0 && (
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 border-t border-white/10 pt-16 md:pt-24">
            
            {/* Title Block */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
              <div>
                <h3 className="flex items-center gap-3 text-[#FFC72C] text-xs md:text-sm font-bold uppercase tracking-widest mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC72C]"></span>
                  Our Catalogue
                </h3>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Recommended Varieties
                </h2>
              </div>
              <Link 
                to="/product" 
                className="text-sm font-bold text-[#FFC72C] hover:text-white transition-colors flex items-center gap-2 group"
              >
                View Full Catalogue
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Recommendations Grid Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recommendations.map((item) => (
                <Link 
                  to={`/product/${item.id}`}
                  key={item.id}
                  className="relative h-[440px] w-full rounded-[2rem] overflow-hidden group cursor-pointer shadow-md border border-white/5 bg-[#E9EBE5] block"
                >
                  {/* Contained Image wrapper matching card aesthetic */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6 pb-[140px]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 drop-shadow-md"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/400x600/E9EBE5/0C3B24?text=Image+Pending" }}
                    />
                  </div>

                  {/* Frosted Details Overlay Box */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-white/70 backdrop-blur-xl border-t border-white/50 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-[#0C3B24] text-lg font-bold leading-tight mb-3 tracking-wide truncate">
                      {item.title}
                    </h4>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[#0C3B24]/10">
                      <div className="flex flex-col pr-4 overflow-hidden">
                        <span className="text-[#0C3B24]/50 text-[9px] uppercase tracking-widest font-bold mb-0.5">Packaging</span>
                        <span className="text-[#0C3B24] text-xs font-bold tracking-wide truncate">
                          {item.specs.packaging}
                        </span>
                      </div>
                      <div className="w-9 h-10 shrink-0 rounded-full bg-[#0C3B24] flex items-center justify-center text-white group-hover:bg-[#FFC72C] group-hover:text-[#0C3B24] transition-colors duration-300 shadow-md">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        )}

      </main>
    </PageTransition>
  );
}