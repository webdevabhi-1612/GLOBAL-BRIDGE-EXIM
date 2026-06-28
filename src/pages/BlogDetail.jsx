import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import PageTransition from '../layout/PageTransition';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find(item => item.id === id);

  // Scroll to top cleanly when loading the article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <PageTransition>
        <main className="w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white pt-32 relative z-10">
          <h1 className="text-3xl font-bold mb-4 text-[#FFC72C]">Article Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you are looking for does not exist or has been moved.</p>
          <Link to="/blog" className="bg-[#0C3B24] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FFC72C] hover:text-black transition-all">
            Return to Blogs
          </Link>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white font-sans pt-28 md:pt-36 pb-24 border-t border-white/5 relative z-10">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0C3B24]/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <article className="max-w-[800px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Back Navigation Link */}
          <Link to="/blog" className="text-gray-400 text-sm hover:text-white transition-colors mb-8 flex items-center gap-2 w-max group">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Journal
          </Link>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6">
            <span className="text-[#FFC72C] text-xs md:text-sm font-bold tracking-widest uppercase bg-[#FFC72C]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <span className="text-gray-400 text-xs md:text-sm tracking-widest uppercase">{post.date}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
            <span className="text-gray-400 text-xs md:text-sm tracking-widest uppercase">{post.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] mb-10 tracking-tight text-white">
            {post.title}
          </h1>

          {/* Featured Banner Image with Anti-Loop Protection */}
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden mb-12 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[#111]">
            <img 
              src={post.image} 
              alt=""
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; // CRITICAL: Stops the infinite looping crash
                e.target.src = "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Body Content Core Container */}
          <div 
            className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed tracking-wide
                       prose-headings:font-bold prose-headings:text-white prose-headings:mt-8 prose-headings:mb-4
                       prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-3 prose-ul:mb-6
                       prose-strong:text-[#FFC72C] prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>
      </main>
    </PageTransition>
  );
}