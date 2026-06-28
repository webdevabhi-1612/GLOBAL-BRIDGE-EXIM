import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  
  // Dynamic Link Arrays matching your actual application routes
  const companyLinks = [
    { label: 'Company Overview', href: '/company' },
    { label: 'The Founder', href: '/founder' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const resourceLinks = [
    { label: 'Product Catalogue', href: '/product' },
    { label: 'Insights & Blog', href: '/blog' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mr-rohit-sonawane-54ba49370?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { label: 'Instagram', href: 'https://www.instagram.com/global_bridge_exim' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590605425301' }
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 px-8 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle ambient glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#FFC72C]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Top Section: Branding & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h2 className="text-[3rem] md:text-[4.5rem] leading-[0.9] font-medium tracking-tight mb-6">
              Global Bridge <br />
              <span className="font-serif italic text-white/70">Exim.</span>
            </h2>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed font-light">
              Transforming cross-border logistics and international trade with intelligent, climate-aware solutions for the modern era.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm pt-4">
            
            {/* Internal Routing: Company */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-white mb-2 uppercase tracking-widest text-[0.65rem]">Company</h4>
              {companyLinks.map(link => (
                <Link key={link.label} to={link.href} className="text-white/60 hover:text-white transition-colors duration-300 w-max font-light">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Internal Routing: Resources */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-white mb-2 uppercase tracking-widest text-[0.65rem]">Resources</h4>
              {resourceLinks.map(link => (
                <Link key={link.label} to={link.href} className="text-white/60 hover:text-white transition-colors duration-300 w-max font-light">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* External Links: Socials */}
            <div className="flex flex-col gap-5">
              <h4 className="font-semibold text-white mb-2 uppercase tracking-widest text-[0.65rem]">Socials</h4>
              {socialLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/60 hover:text-[#FFC72C] transition-all duration-300 flex items-center gap-2 group w-max font-light"
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} Global Bridge Exim. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}