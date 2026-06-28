import React from 'react';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#F5F7F2] py-24 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">

        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-14">

          {/* Left Header */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[#FFC72C] font-bold text-sm tracking-widest uppercase mb-4">
              {/* Decorative Left Arrow/Wing */}
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L0 0V12L10 6Z" fill="currentColor" />
                <path d="M22 6L12 0V12L22 6Z" fill="currentColor" />
                <path d="M34 6L24 0V12L34 6Z" fill="currentColor" />
              </svg>
              <span>ABOUT US</span>
              {/* Decorative Right Arrow/Wing */}
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 6L40 12V0L30 6Z" fill="currentColor" />
                <path d="M18 6L28 12V0L18 6Z" fill="currentColor" />
                <path d="M6 6L16 12V0L6 6Z" fill="currentColor" />
              </svg>
            </div>

            <h2 className="text-[#0C3B24] text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
              Trade Executed With <br className="hidden md:block" />
              Integrity And Speed
            </h2>
          </div>

          {/* Right Header */}
          <div className="max-w-sm">
            {/* Stats Row */}
            <div className="flex items-center gap-6 mb-4">
              {/* Avatars */}
              <div className="flex -space-x-3 bg-[#E9EBE5] rounded-full p-1.5 pr-4">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" alt="User 1" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="User 2" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop" alt="User 3" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-white flex items-center justify-center text-xs font-bold text-[#0C3B24] ml-1 shadow-sm">
                  2k+
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="w-[1px] h-12 bg-gray-300"></div>

              {/* Rating */}
              <div>
                <p className="text-[#0C3B24] font-bold text-xl">2000+</p>
                <p className="text-gray-600 text-[13px] font-medium">Global Partners</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-[#4A5D53] text-[13px] leading-relaxed">
              At Global Bridge, we're more than just logistics providers — we're architects of global trade. Our journey began with a simple goal: to connect markets seamlessly while maintaining absolute transparency...
            </p>
          </div>
        </div>

        {/* === BENTO GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-6 md:h-[600px]">

          {/* 1. WIDE VIDEO (Top Left, Spans 2 Columns) */}
          <div className="md:col-span-2 md:row-span-1 relative rounded-[2rem] overflow-hidden h-[300px] md:h-auto group bg-[#0a0a0a]">
            {/* Live Autoplaying Video */}
            <video
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              autoPlay
              loop
              muted
              playsInline
            >
              {/* Dummy video of rice from a reliable public CDN */}
              <source src="/video/video1.mp4" type="video/mp4" />              Your browser does not support the video tag
            </video>

            {/* Play Button Overlay */}

          </div>

          {/* 2. TALL IMAGE (Right, Spans 2 Rows) */}
          <div className="md:col-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden h-[400px] md:h-auto group">
            <img
              src="./images/rice_image.png"
              alt="Logistics Expert"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 3. DARK GREEN CARD (Bottom Left) */}
          <div className="md:col-span-1 md:row-span-1 bg-[#0C3B24] text-white rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden h-[300px] md:h-auto">
            {/* Faint Background Decorative Graphic */}
            <svg className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>

            {/* Icon */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0C3B24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>

            {/* Text Content */}
            <h3 className="text-lg font-bold mb-3 z-10">Secure & Tracked Freight</h3>
            <p className="text-[13px] text-white/80 leading-relaxed z-10">
              At Global Bridge, freight is more than just cargo it's a commitment across borders. We follow time-honored precision combined with modern tech to ensure delivery that's free from delays...
            </p>
          </div>

          {/* 4. YELLOW CARD (Bottom Middle) */}
          <div className="md:col-span-1 md:row-span-1 bg-[#FFC72C] text-[#0C3B24] rounded-[2rem] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden h-[300px] md:h-auto">
            {/* Decorative Top Left Graphic */}
            <svg className="absolute top-0 left-0 w-32 h-32 opacity-10 -translate-x-4 -translate-y-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
            </svg>

            {/* Decorative Bottom Right Graphic */}
            <svg className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>

            {/* Metric Content */}
            <h3 className="text-[4rem] font-extrabold leading-none tracking-tight mb-2 z-10">100%</h3>
            <p className="font-semibold text-[15px] z-10">On-Time Delivery Rate</p>
          </div>

        </div>
      </div>
    </section>
  );
}