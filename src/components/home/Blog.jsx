import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section id="blog" className="w-full bg-[#F5F7F2] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* === TOP HEADER ROW === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          
          {/* Left: Titles */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[#FFC72C] font-bold text-sm tracking-widest uppercase mb-4">
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L0 0V12L10 6Z" fill="currentColor"/>
                <path d="M22 6L12 0V12L22 6Z" fill="currentColor"/>
                <path d="M34 6L24 0V12L34 6Z" fill="currentColor"/>
              </svg>
              <span>OUR BLOG</span>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 6L40 12V0L30 6Z" fill="currentColor"/>
                <path d="M18 6L28 12V0L18 6Z" fill="currentColor"/>
                <path d="M6 6L16 12V0L6 6Z" fill="currentColor"/>
              </svg>
            </div>
            
            <h2 className="text-[#0C3B24] text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
              Stories Of Global <br className="hidden md:block" />
              Trade & Premium Rice
            </h2>
          </div>

          {/* Right: Description & Global Button */}
          <div className="flex flex-col justify-end items-start lg:pl-10">
            <p className="text-[#4A5D53] text-[14px] leading-relaxed mb-6 max-w-md font-medium">
              Welcome to the Global Bridge Exim Blog — your source for everything related to international logistics, premium agricultural exports, and sustainable farming practices.
            </p>
            <Link to="/blog" className="bg-[#0C3B24] text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 text-sm font-semibold hover:scale-105 transition-transform duration-300 group">
              View All Blogs
              <span className="bg-[#FFC72C] text-[#0C3B24] p-2 rounded-full transition-transform duration-300 group-hover:rotate-45">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* === BOTTOM CARDS ROW (Updated to 2 Large Equal Boxes) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* BLOG CARD 1 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer h-full">
            <div className="h-64 md:h-72 w-full overflow-hidden shrink-0">
              <img 
                src="/images/Blog02.jpg" 
                alt="Harvesting Rice" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600/E9EBE5/0C3B24?text=Image+Pending" }}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <p className="text-gray-500 text-sm font-medium mb-4">
                Jun 25, 2026 — Market Insights
              </p>
              <h3 className="text-[#0C3B24] text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
                Benefits of Partnering with Rice Exporters in India
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                India is well-known as the leading producer and exporter of rice. Discover why forming partnerships with Indian exporters will prove to be beneficial for importers and distributors globally.
              </p>
              <Link to="/blog/strategic-advantages-indian-rice-exporters" className="bg-[#0C3B24] text-white pl-6 pr-1.5 py-1.5 rounded-full flex items-center gap-4 text-sm font-semibold w-max transition-transform duration-300 hover:scale-105 group-hover:bg-[#0a2e1c]">
                Read Article
                <span className="bg-[#FFC72C] text-[#0C3B24] p-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* BLOG CARD 2 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer h-full">
            <div className="h-64 md:h-72 w-full overflow-hidden shrink-0">
              <img 
                src="/images/Blog01.jpg" 
                alt="Premium Basmati Rice" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600/E9EBE5/0C3B24?text=Image+Pending" }}
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <p className="text-gray-500 text-sm font-medium mb-4">
                Jun 20, 2026 — Supply Chain
              </p>
              <h3 className="text-[#0C3B24] text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-emerald-700 transition-colors">
                Get Premium Quality Rice from a Basmati Supplier in India
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
                Rice isn't just a food staple, it's a symbol of quality, taste and tradition. Discussing the significance of selecting the right supplier and how premium basmati rice can become a value addition for your business.
              </p>
              <Link to="/blog/sourcing-premium-basmati-supplier" className="bg-[#0C3B24] text-white pl-6 pr-1.5 py-1.5 rounded-full flex items-center gap-4 text-sm font-semibold w-max transition-transform duration-300 hover:scale-105 group-hover:bg-[#0a2e1c]">
                Read Article
                <span className="bg-[#FFC72C] text-[#0C3B24] p-2 rounded-full">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}