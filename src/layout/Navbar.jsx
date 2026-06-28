import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state
  const location = useLocation();

  const isLightPage = ['/privacy-policy', '/terms-and-conditions', '/product', '/contact'].includes(location.pathname);

  // Navbar scroll logic
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setIsVisible(false);
      else if (currentScrollY < lastScrollY) setIsVisible(true);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/product' },
    { label: 'Founder', href: '/founder' },
    { label: 'Company', href: '/company' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <>
      {/* 1. LOGO */}
      <Link
        to="/"
        className={`fixed top-4 left-4 md:top-5 md:left-8 z-[60] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[250%]'}`}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-110">
          <img src="/images/Global Logo.svg" alt="Logo" className="w-full h-full object-contain p-2 drop-shadow-xl" />
        </div>
      </Link>

      {/* 2. NAVBAR PILL */}
      <div className={`fixed top-6 left-0 w-full z-[55] flex justify-center px-4 md:px-8 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[250%]'}`}>

        <nav className={`w-full max-w-[1200px] backdrop-blur-lg border rounded-full px-3 py-1.5 flex items-center justify-between shadow-2xl transition-colors duration-500 ${isLightPage
            ? 'bg-white/80 border-gray-200 shadow-gray-200/50'
            : 'bg-white/10 border-white/20'
          }`}>

          <div className="w-[40px] md:w-[100px] opacity-0 pointer-events-none"></div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className={`relative group overflow-hidden block pb-1 font-sans text-center transition-colors duration-500 ${isLightPage ? 'text-[#0C3B24]' : 'text-white'
                  }`}>
                  <span className="invisible font-semibold block">{item.label}</span>
                  <span className="absolute top-0 left-0 w-full transition-transform duration-500 group-hover:-translate-y-full font-medium">{item.label}</span>
                  <span className={`absolute top-0 left-0 w-full translate-y-full transition-transform duration-500 group-hover:translate-y-0 font-semibold ${isLightPage ? 'text-[#0C3B24]' : 'text-white'
                    }`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Action Area (Hamburger + Contact Button) */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Mobile Hamburger Button */}
            <button 
              className={`md:hidden p-2 rounded-full transition-colors ${isLightPage ? 'text-[#0C3B24] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            {/* Contact Button */}
            <Link to="/contact" className={`pl-4 pr-1 py-1 rounded-full flex items-center gap-3 text-sm font-semibold hover:scale-105 transition-all duration-500 ${isLightPage
                ? 'bg-[#0C3B24] text-white'
                : 'bg-white text-[#0C3B24]'
              }`}>
              Contact Us
              <span className={`p-1.5 rounded-full transition-transform duration-500 group-hover:rotate-45 ${isLightPage ? 'bg-white/20' : 'bg-[#0C3B24] text-white'
                }`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>

          </div>
        </nav>
      </div>

      {/* 3. MOBILE SIDEBAR OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* 4. MOBILE SIDEBAR DRAWER */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#0C3B24] z-[100] transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col p-8 shadow-2xl md:hidden border-l border-white/10 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsSidebarOpen(false)} 
          className="self-end text-white/50 hover:text-white transition-colors mb-12 p-2"
          aria-label="Close Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-8 text-white">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link 
                to={item.href} 
                className="text-2xl font-semibold tracking-wide hover:text-[#FFC72C] transition-colors block"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar when a link is clicked
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Contact Details (Optional aesthetic addition for the drawer) */}
        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-[#FFC72C] text-xs font-bold tracking-widest uppercase mb-2">Get in touch</p>
          <a href="mailto:globalbridgeexim01@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors block mb-1">
            globalbridgeexim01@gmail.com
          </a>
          <a href="tel:+919257755177" className="text-white/70 text-sm hover:text-white transition-colors block">
            +91 92577 55177
          </a>
        </div>
      </div>
    </>
  );
}