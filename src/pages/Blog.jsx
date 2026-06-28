import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../layout/PageTransition'; 
import { blogPosts } from '../data/blogs';

// Reusable Scroll Animation Wrapper
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

export default function Blog() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans pt-28 md:pt-36 pb-24 border-t border-white/5">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[400px] bg-[#0C3B24]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* ================= HEADER ================= */}
          <section className="flex flex-col items-center text-center mb-16 md:mb-24">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FFC72C] animate-pulse"></span>
                <span className="text-xs md:text-sm font-medium tracking-wide text-gray-300 uppercase">Journal</span>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Our <span className="font-serif italic text-white/90">Blogs.</span>
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay="delay-200">
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Industry analysis, company news, and deep dives into the global agricultural supply chain.
              </p>
            </FadeIn>
          </section>

          {/* ================= 2-COLUMN BLOG GRID ================= */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} direction="up" delay={`delay-${(index % 2 + 1) * 100}`}>
                <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-[1.5rem] overflow-hidden hover:bg-white/10 transition-colors duration-500">
                  
                  {/* Image */}
                  <div className="w-full h-[300px] overflow-hidden bg-[#111]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                      onError={(e) => { 
                        e.target.onerror = null; // Fixes infinite loop crash
                        e.target.src = "https://via.placeholder.com/600x400/111/333?text=Image+Pending";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#FFC72C] text-xs font-bold tracking-widest uppercase">{post.category}</span>
                      <div className="w-1 h-1 rounded-full bg-white/30"></div>
                      <span className="text-gray-400 text-xs tracking-widest uppercase">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 transition-colors duration-300 group-hover:text-[#FFC72C]">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-base leading-relaxed font-light mb-8 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-2 flex items-center gap-2">
                        Read More
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                </Link>
              </FadeIn>
            ))}
          </section>

        </div>
      </main>
    </PageTransition>
  );
}