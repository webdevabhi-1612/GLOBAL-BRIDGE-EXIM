import React, { useEffect, useState, useRef } from 'react';
import PageTransition from '../layout/PageTransition'; // <-- Imported Transition

export default function Founder() {
  const [offset, setOffset] = useState(0);
  
  // Visibility states for different sections
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isCoFounderVisible, setIsCoFounderVisible] = useState(false);
  
  // Ref for the new Co-Founder section
  const coFounderRef = useRef(null);

  useEffect(() => {
    // 1. Trigger the Hero entrance animations immediately
    const timer = setTimeout(() => setIsHeroVisible(true), 100);

    // 2. Scroll Parallax for Hero
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Intersection Observer for the Co-Founder section slide-in animation
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCoFounderVisible(true);
      }
    }, { threshold: 0.2 }); // Triggers when 20% of the section is visible

    if (coFounderRef.current) {
      observer.observe(coFounderRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      if (coFounderRef.current) observer.disconnect();
    };
  }, []);

  return (
    <PageTransition>
      <main className="w-full bg-[#0a0a0a]">
        
        {/* =========================================
            SECTION 1: HERO PARALLAX (ROHIT) - UNTOUCHED
        ========================================= */}
        <section className="relative w-full h-[160vh] min-h-[1200px] overflow-hidden border-t border-white/5">
          
          {/* BACKGROUND TEXT */}
          <div className="absolute top-[20vh] left-1/2 -translate-x-1/2 w-full text-center z-0 flex justify-center items-center select-none pointer-events-none">
            <h2 
              className={`text-[35vw] md:text-[32vw] font-black text-white leading-none tracking-tighter whitespace-nowrap transition-all duration-1000 ease-out ${
                isHeroVisible ? 'opacity-90 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              ROHIT
            </h2>
          </div>

{/* PARALLAX IMAGE WRAPPER */}
          <div 
            className="absolute top-[15vh] sm:top-[5vh] md:top-[-5vh] lg:top-[-15vh] z-30 w-full flex justify-center pointer-events-none"
            style={{ transform: `translateY(-${offset * 0.25}px)` }} 
          >
            {/* ENTRANCE ANIMATION WRAPPER */}
            <div className={`w-full flex justify-center transition-all duration-1000 ease-out ${
              isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="relative w-[90%] max-w-[450px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1050px]">
                <img 
                  src="/images/Rohit.svg" 
                  alt="Rohit Sonawane" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* BIO TEXT */}
          <div 
            className={`absolute top-[85vh] left-6 md:left-20 z-40 max-w-[280px] md:max-w-md transition-all duration-1000 delay-300 ease-out ${
              isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-white text-lg md:text-3xl font-light leading-snug tracking-wide">
              Hi, I am Rohit Sonawane! A visionary exporter and agricultural advocate. I seek to bridge local farmers with the global market.
            </p>
            <p className="text-sm md:text-base text-gray-400 mt-4 md:mt-6 italic">
              Discover our mission at <span className="text-[#FFC72C] font-semibold not-italic">Global Bridge Exim</span>
            </p>
          </div>


          {/* SECTION FADE */}
          <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#0a0a0a] to-transparent z-50 pointer-events-none"></div>

        </section>


        {/* =========================================
            SECTION 2: CO-FOUNDER (KSR INTERNATIONAL)
        ========================================= */}
        <section ref={coFounderRef} className="relative w-full py-24 md:py-32 px-6 md:px-20 bg-[#0a0a0a] overflow-hidden z-50">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
            
            {/* Left Side: Text Details (Slides in from Left) */}
            <div className={`w-full md:w-[55%] flex flex-col items-start transition-all duration-1000 ease-out ${
              isCoFounderVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              
              <div className="flex items-center gap-3 text-[#FFC72C] font-bold text-sm tracking-widest uppercase mb-6">
                <span className="w-10 h-[2px] bg-[#FFC72C]"></span>
                Co-Founder
              </div>
              
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
                KUNAL RATHOD
              </h2>
              
              <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-10">
                Founder of <span className="text-white font-semibold">KSR International Trade</span>
              </h3>
              
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
                "KSR International Trade, a reputable import export company based in Jalna, Maharashtra, specializes in supplying high-quality food products. As a trusted partner for food manufacturers, we provide a wide range of products, from grains to spices, to cater to diverse customer needs. With our expertise and extensive network, we ensure timely and cost-effective deliveries. Trust us for your food supply chain solutions and experience seamless service!"
              </p>
              
            </div>

            {/* Right Side: Image Profile (Slides in from Right) */}
            <div className={`w-full md:w-[45%] flex justify-center md:justify-end transition-all duration-1000 delay-300 ease-out ${
              isCoFounderVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              
              <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#111] border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Replace src with your actual Co-Founder image path */}
                <img 
                  src="/images/Kunal.svg" 
                  alt="Co-Founder of KSR International" 
                  className="w-full h-full object-contain grayscale-[20%] transition-transform duration-700 group-hover:scale-105"
                  // Fallback trick: If the image doesn't exist yet, it hides the broken image icon and shows the placeholder box below
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Placeholder (Only shows if the image above fails to load) */}
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-gray-600 bg-[#0f0f0f]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="text-sm tracking-widest uppercase">Image Pending</span>
                </div>

                {/* Sleek bottom shadow gradient inside the image card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 pointer-events-none"></div>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            SECTION 3: OUR VISION 
        ========================================= */}
        <section className="relative w-full py-24 md:py-32 px-6 md:px-20 z-50 bg-[#0a0a0a]">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
            
            <div className="w-12 h-1 bg-[#FFC72C] mb-8 rounded-full"></div>
            
            <h3 className="text-[#FFC72C] text-sm md:text-base font-bold tracking-widest uppercase mb-4">
              Our Vision
            </h3>
            
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-8">
              Empowering Local Agriculture on a Global Stage.
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              At Global Bridge Exim, we believe that the highest quality agricultural products deserve a place on the world stage. By eliminating unnecessary middlemen, we ensure that farmers receive fair compensation while delivering premium, ethically sourced goods to international markets.
            </p>

            <a href="/product" className="border border-white/20 hover:border-[#FFC72C] text-white hover:text-[#FFC72C] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,199,44,0.2)]">
              Explore Our Catalogue
            </a>
            
          </div>
        </section>

      </main>
    </PageTransition>
  );
}