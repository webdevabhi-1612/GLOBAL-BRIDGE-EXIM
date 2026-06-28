import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../layout/PageTransition'; 

// 1. Reusable Scroll Animation Wrapper
const FadeIn = ({ children, delay = 'delay-0', direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = 
    direction === 'up' ? 'translate-y-12' : 
    direction === 'left' ? '-translate-x-12' : 
    direction === 'right' ? 'translate-x-12' : 'translate-y-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${delay} ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${translateClass} scale-95`
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 2. Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    const end = parseInt(target, 10);
    if (end === 0) return;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// 3. Global Export Destinations Data
const countriesData = [
  { name: "Saudi Arabia", code: "sa", delay: "delay-0" },
  { name: "Iran", code: "ir", delay: "delay-100" },
  { name: "UAE", code: "ae", delay: "delay-200" },
  { name: "Malaysia", code: "my", delay: "delay-300" },
  { name: "Netherlands", code: "nl", delay: "delay-500" },
  { name: "Europe", code: "eu", delay: "delay-700" }
];

// 4. Private Labelling Data (Updated to your local folder paths)
const privateLabelData = [
  {
    title: "Designing and Packaging",
    image: "/images/We Offer/Globalbag.png",
    delay: "delay-100"
  },
  {
    title: "Dedicated Private Label Support",
    image: "/images/We Offer/Dedicated Private Label Support.png",
    delay: "delay-200"
  },
  {
    title: "Expert Variety Selection",
    image: "/images/We Offer/Expert Variety Selection.png",
    delay: "delay-300"
  },
  {
    title: "Strong Customer Relationships",
    image: "/images/We Offer/Strong Customer Relationships.png",
    delay: "delay-400"
  },
  {
    title: "Commitment Beyond Sales",
    image: "/images/We Offer/Commitment Beyond Sales.png",
    delay: "delay-500"
  }
];

// 5. Certification Logos Data 
const certLogosData = [
  { name: "APEDA", img: "/images/Certificate/unnamed.png", delay: "delay-100" },
  { name: "FDA", img: "/images/Certificate/fda.jpeg", delay: "delay-200" },
  { name: "FSSAI", img: "/images/Certificate/fssai.jpeg", delay: "delay-300" },
  { name: "MSME", img: "/images/Certificate/msme.png", delay: "delay-400" }
];

// 6. Production Media Data
const productionGalleryData = [
  { id: 1, type: "image", src: "/images/Gallary/01.jpeg", alt: "State of the art sorting" },
  { id: 2, type: "image", src: "/images/Gallary/02.jpeg", alt: "Quality Control Lab" },
  { id: 3, type: "image", src: "/images/Gallary/03.jpeg", alt: "Warehouse Storage" },
  { id: 4, type: "image", src: "/images/Gallary/04.jpeg", alt: "Ethical Sourcing" },
  { id: 5, type: "video", src: "/images/Gallary/video01.mp4", poster: "/images/Gallary/01.jpeg", alt: "Packaging Line in action" },
  { id: 6, type: "video", src: "/images/Gallary/video02.mp4", poster: "/images/Gallary/02.jpeg", alt: "Automated Dispatch" }
];


export default function Company() {
  // Lightbox & Zoom State for Production Gallery
  const [activeMedia, setActiveMedia] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Open Lightbox Handler
  const openLightbox = (index) => {
    setActiveMedia(index);
    setZoomLevel(1); 
    setIsLightboxOpen(true);
  };

  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans pt-28 md:pt-32 pb-24 border-t border-white/5 relative">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[300px] md:h-[400px] bg-[#FFC72C]/10 blur-[100px] md:blur-[120px] rounded-[100%] pointer-events-none z-0"></div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* ================= HEADER SECTION ================= */}
          <section className="flex flex-col items-center text-center mb-16 md:mb-24">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FFC72C] animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-gray-300 uppercase">Global Bridge Exim</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Architects of <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Global Trade.</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-200">
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed px-4 md:px-0">
                We are a premier export house bridging the gap between local Indian agriculture and the global marketplace. Ethically sourced, hygienically processed, and seamlessly dispatched.
              </p>
            </FadeIn>
          </section>

          {/* ================= STATS BANNER ================= */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
            <FadeIn direction="up" delay="delay-100">
              <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center h-full">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={7} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Years Ind. Exp.</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-200">
              <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center h-full">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC72C] mb-2">
                  <AnimatedCounter target={3} />
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Partner Auth.</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-300">
              <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center h-full">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={100} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Global Routes</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-400">
              <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center h-full">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter target={100} suffix="%" />
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">Quality Assured</span>
              </div>
            </FadeIn>
          </section>

          {/* ================= WE OFFER PRIVATE LABELLING ================= */}
          <section className="relative w-full mb-24 md:mb-32 flex flex-col items-center justify-center">
            
            <div className="text-center z-30 mb-12">
              <FadeIn direction="up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  We Offer Private Labelling - <span className="text-[#FFC72C]">Your Brand Your Story</span>
                </h2>
                <h3 className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
                  What We Provide
                </h3>
              </FadeIn>
            </div>

            <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl mx-auto relative z-10">
              {privateLabelData.map((item, idx) => (
                <FadeIn 
                  key={`label-${idx}`} 
                  direction="up" 
                  delay={item.delay}
                  className={`w-full sm:w-[47%] lg:w-[31%] flex`}
                >
                  <div className="relative w-full h-[300px] md:h-[350px] rounded-[2rem] overflow-hidden border border-white/10 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer">
                    
                    {/* Full Background Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.target.src = "https://via.placeholder.com/800x600/111/333?text=Image+Pending" }}
                    />

                    {/* Dark Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glassmorphic Text Box overlaid on the image */}
                    <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/20 group-hover:border-[#FFC72C]/50 shadow-xl">
                      <span className="text-base md:text-lg font-bold text-center text-white block">
                        {item.title}
                      </span>
                    </div>

                  </div>
                </FadeIn>
              ))}
            </div>

          </section>

          {/* ================= CERTIFIED EXCELLENCE LOGOS ================= */}
          <section className="relative w-full mb-24 md:mb-32 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <div className="w-full lg:w-[45%] flex flex-col items-center md:items-start text-center md:text-left z-10">
              <FadeIn direction="right">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 justify-center md:justify-start">
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                  <span className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase">Global Standards</span>
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C] md:hidden"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Certified <br className="hidden md:block" />
                  <span className="text-[#FFC72C]">Excellence</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-md mx-auto md:mx-0">
                  Our certifications reflect our unwavering commitment to quality, professionalism, and operational excellence on a global scale.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0C3B24] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:bg-[#FFC72C] hover:text-[#0C3B24] hover:scale-105 shadow-[0_0_20px_rgba(12,59,36,0.5)]">
                  Contact Us Today
                </Link>
              </FadeIn>
            </div>

            {/* Right Side: 2x2 Grid for 4 Certs */}
            <div className="w-full lg:w-[55%] grid grid-cols-2 gap-4 md:gap-6 z-10">
              {certLogosData.map((logo, idx) => (
                <FadeIn key={`certlogo-${idx}`} direction="up" delay={logo.delay} className="w-full">
                  <div 
                    className="relative w-full aspect-video flex items-center justify-center transition-all duration-700 hover:-translate-y-3 group cursor-pointer overflow-hidden"
                  >
                     <div className="absolute inset-0 bg-[#FFC72C]/0transition-colors duration-700 rounded-full blur-[30px] scale-50 group-hover:scale-110 pointer-events-none"></div>
                     <img 
                       src={logo.img} 
                       alt={logo.name} 
                       className="relative z-10 w-[55%] h-[55%] md:w-[50%] md:h-[50%] object-contain transition-transform duration-500 ease-out group-hover:scale-125 drop-shadow-2xl"
                       onError={(e) => {
                         e.target.style.display = 'none';
                       }}
                     />
                  </div>
                </FadeIn>
              ))}
            </div>

          </section>

          {/* ================= GLOBAL EXPORT DESTINATIONS ================= */}
          <section className="relative w-full mb-24 md:mb-32 flex flex-col items-center justify-center">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] h-[300px] bg-[#0C3B24]/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

            <div className="text-center z-30 mb-12 md:mb-16">
              <FadeIn direction="up">
                <h3 className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase mb-2">Our Global Reach</h3>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Export Destinations</h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto relative z-10">
              {countriesData.map((country, idx) => (
                <FadeIn key={`country-${idx}`} direction="up" delay={country.delay}>
                  <div className="flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 hover:border-[#FFC72C]/40 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] h-full">
                    
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FFC72C] group-hover:shadow-[0_0_20px_rgba(255,199,44,0.3)] transition-all duration-500 bg-black/40 overflow-hidden">
                      <img 
                        src={`https://hatscripts.github.io/circle-flags/flags/${country.code}.svg`} 
                        alt={`${country.name} flag`} 
                        className="w-[105%] h-[105%] object-cover"
                      />
                    </div>

                    <span className="text-sm md:text-lg font-bold tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors text-center">
                      {country.name}
                    </span>

                  </div>
                </FadeIn>
              ))}
            </div>

          </section>

          {/* ================= COMPANY INFO GALLERY ================= */}
          <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24 md:mb-32">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
              <FadeIn direction="right" delay="delay-100" className="w-full max-w-[380px] lg:max-w-[420px] mx-auto lg:mx-0">
                <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-[#111]">
                  <img 
                    src="/images/Companypage.png" 
                    alt="Global Bridge Facility" 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <FadeIn direction="left">
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                  <span className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase">Inside Global Bridge</span>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay="delay-100">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
                  Building a legacy of trust in the agricultural supply chain.
                </h2>
              </FadeIn>
              <FadeIn direction="left" delay="delay-200">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-4 md:mb-6">
                  For over half a decade, we have been meticulously building a network that prioritizes both the farmer and the end consumer. Our facilities employ state-of-the-art sorting, processing, and packaging techniques to ensure that every grain and product meets stringent international standards.
                </p>
              </FadeIn>
              <FadeIn direction="left" delay="delay-300">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-10">
                  We don't just export products; we export reliability. From the fields of Maharashtra to international ports, our operation is built on total transparency and an unwavering commitment to ethical trade.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay="delay-400">
                <Link to="/product" className="group inline-flex items-center gap-3 md:gap-4 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-bold transition-all hover:bg-gray-200 hover:scale-105">
                  Explore Our Infrastructure
                  <span className="bg-[#0C3B24] text-white p-1.5 md:p-2 rounded-full transition-transform group-hover:translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* ================= BENTO GRID ================= */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24 md:mb-32">
            <div className="lg:col-span-2">
              <FadeIn direction="left" delay="delay-100" className="h-full">
                <div className="h-full bg-white/5 border border-white/10 p-8 sm:p-10 md:p-12 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                  <h3 className="text-[#FFC72C] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4">Our Philosophy</h3>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Rooted in India. Reaching the World.</h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                    Global Bridge Exim was founded on a singular vision: to empower local farmers by providing them a transparent, highly efficient gateway to international markets. We handle the complexities of logistics, quality control, and compliance so that premium agricultural goods can travel across borders without friction.
                  </p>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-1">
              <FadeIn direction="right" delay="delay-200" className="h-full">
                <div className="h-full bg-white/5 border border-white/10 p-8 sm:p-10 md:p-12 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col justify-center">
                  <h3 className="text-[#FFC72C] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6">Our Core Values</h3>
                  <ul className="space-y-4 md:space-y-6">
                    <li className="flex flex-col">
                      <span className="text-lg md:text-xl font-semibold text-white">Integrity</span>
                      <span className="text-gray-500 text-xs md:text-sm mt-1">Ethical practices at every step.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-lg md:text-xl font-semibold text-white">Quality</span>
                      <span className="text-gray-500 text-xs md:text-sm mt-1">Zero-compromise standards.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-lg md:text-xl font-semibold text-white">Reliability</span>
                      <span className="text-gray-500 text-xs md:text-sm mt-1">On-time global dispatch.</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ================= STRATEGIC PARTNERSHIP SECTION ================= */}
          <section className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0C3B24] to-[#051c10] border border-white/10 px-6 py-12 sm:p-12 lg:p-20 flex flex-col items-center gap-16 mb-24 md:mb-32">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFC72C]/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-full max-w-4xl relative z-10 text-center">
              <FadeIn direction="up">
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                  <span className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase">Strategic Alliances</span>
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  The Global Bridge Ecosystem
                </h2>
                
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light mx-auto">
                  Powered by our alliances with KSR International & TraderOverseas. 
                  By combining our direct-to-farm sourcing with elite logistical networks, we guarantee a supply chain that never sleeps.
                </p>
              </FadeIn>
            </div>

            <div className="w-full max-w-5xl relative z-10">
              <FadeIn direction="up" delay="delay-300">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative">
                  
                  {/* Left Node: KSR */}
                  <div className="relative z-10 w-32 h-32 md:w-44 md:h-44 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl p-6 group hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/KSR_logo.svg" alt="KSR International" className="w-full h-full object-contain drop-shadow-md relative z-10" />
                  </div>

                  {/* Connecting Line 1 (Desktop) */}
                  <div className="hidden md:flex flex-1 h-[2px] bg-white/10 relative -mx-2 items-center justify-center overflow-hidden">
                    <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFC72C] to-transparent animate-[pulse_2s_ease-in-out_infinite] opacity-50"></div>
                  </div>

                  {/* Connecting Line (Mobile Vertical) */}
                  <div className="md:hidden w-[2px] h-10 bg-[#FFC72C]/30 relative"></div>

                  {/* Center Node: Global Bridge (The Core) */}
                  <div className="relative z-20 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#0C3B24] flex items-center justify-center shadow-[0_0_60px_rgba(255,199,44,0.15)] p-8 group md:scale-110">
                    <div className="absolute inset-[-15px] rounded-full border-2 border-[#FFC72C]/30 border-dashed animate-[spin_15s_linear_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm"></div>
                    <img src="/images/Global Logo.svg" alt="Global Bridge Exim" className="w-full h-full object-contain drop-shadow-2xl relative z-10" />
                  </div>

                  {/* Connecting Line (Mobile Vertical) */}
                  <div className="md:hidden w-[2px] h-10 bg-[#FFC72C]/30 relative"></div>

                  {/* Connecting Line 2 (Desktop) */}
                  <div className="hidden md:flex flex-1 h-[2px] bg-white/10 relative -mx-2 items-center justify-center overflow-hidden">
                    <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFC72C] to-transparent animate-[pulse_2s_ease-in-out_infinite_500ms] opacity-50"></div>
                  </div>

                  {/* Right Node: TraderOverseas */}
                  <div className="relative z-10 w-32 h-32 md:w-44 md:h-44 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl p-4 group hover:-translate-y-2 transition-transform duration-500">
                    <img src="/images/Traderoverseas.svg" alt="TraderOverseas" className="w-full h-full object-contain p-2 drop-shadow-md relative z-10" />
                  </div>

                </div>
              </FadeIn>
            </div>

          </section>

          {/* Spacer/Ambient Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* ================= PRODUCTION FACILITY GALLERY ================= */}
          <section className="relative w-full flex flex-col items-center text-center mt-32 md:mt-40 mb-24 md:mb-32">
            
            <div className="text-center z-30 mb-12">
              <FadeIn direction="up">
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                  <span className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase">Infrastructure</span>
                  <div className="h-[1px] w-8 md:w-12 bg-[#FFC72C]"></div>
                </div>
                <h2 className="text-3xl italic sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  GALLERY
                </h2>
                <h3 className="text-gray-400 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto">
                  State-of-the-art sorting, processing, and ethical packaging.
                </h3>
              </FadeIn>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto relative z-10">
              {productionGalleryData.map((media, index) => (
                <FadeIn key={`media-${index}`} direction="up" delay={`delay-${index * 100}`}>
                  <div 
                    onClick={() => openLightbox(index)}
                    className="relative group cursor-pointer aspect-[4/3] rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-lg"
                  >
                    
                    {/* Media Autoplay Video or Static Image */}
                    {media.type === 'video' ? (
                      <>
                        <video 
                          src={media.src} 
                          poster={media.poster}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        {/* Play button overlay to indicate it can be opened fullscreen */}
                        
                      </>
                    ) : (
                      <img 
                        src={media.src} 
                        alt="" 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/600x450/111/333?text=Media+Pending" }}
                      />
                    )}

                  </div>
                </FadeIn>
              ))}
            </div>

          </section>

        </div>

        {/* ================= FULL SCREEN LIGHTBOX MODAL (FOR GALLERY) ================= */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center">
            
            {/* Top Control Bar */}
            <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 z-50 bg-gradient-to-b from-black/80 to-transparent">
              
              {/* Back / Close Button */}
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="flex items-center gap-2 text-white bg-white/10 hover:bg-[#FFC72C] hover:text-black px-6 py-3 rounded-full transition-colors font-bold shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Page
              </button>

              {/* Title Placeholder */}
              <div className="hidden md:block"></div>

              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-full backdrop-blur-md shadow-lg border border-white/10">
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))} 
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FFC72C] hover:bg-white/10 rounded-full transition-colors"
                  title="Zoom Out"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
                <span className="text-[#FFC72C] text-sm font-bold w-14 text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))} 
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FFC72C] hover:bg-white/10 rounded-full transition-colors"
                  title="Zoom In"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                </button>
              </div>
            </div>

            {/* Viewport Area */}
            <div className="w-full h-full overflow-auto flex items-center justify-center pt-24 pb-12 px-4 cursor-move">
              <div 
                style={{ 
                  transform: `scale(${zoomLevel})`, 
                  transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                  transformOrigin: 'center' 
                }}
                className="relative"
              >
                {productionGalleryData[activeMedia].type === 'video' ? (
                  <video 
                    src={productionGalleryData[activeMedia].src} 
                    poster={productionGalleryData[activeMedia].poster}
                    controls 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-[90vw] max-h-[80vh] shadow-[0_0_100px_rgba(255,199,44,0.15)] bg-black rounded-lg border border-white/10"
                  />
                ) : (
                  <img 
                    src={productionGalleryData[activeMedia].src} 
                    alt=""
                    className="max-w-[90vw] max-h-[80vh] object-contain shadow-[0_0_100px_rgba(255,199,44,0.15)] bg-black/50 rounded-lg border border-white/10"
                  />
                )}
              </div>
            </div>

            {/* Next/Prev Floating Arrows */}
            <button 
              onClick={() => {
                setActiveMedia((prev) => (prev - 1 + productionGalleryData.length) % productionGalleryData.length);
                setZoomLevel(1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#FFC72C] hover:text-black text-white border border-white/20 rounded-full flex items-center justify-center transition-all backdrop-blur-md"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => {
                setActiveMedia((prev) => (prev + 1) % productionGalleryData.length);
                setZoomLevel(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/10 hover:bg-[#FFC72C] hover:text-black text-white border border-white/20 rounded-full flex items-center justify-center transition-all backdrop-blur-md"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

          </div>
        )}

      </main>
    </PageTransition>
  );
}