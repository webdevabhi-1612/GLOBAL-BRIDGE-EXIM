import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Products from '../components/home/Products';
import Blog from '../components/home/Blog';
import WhatsAppButton from '../components/home/WhatsAppButton';
import PageTransition from '../layout/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#0a0a0a] overflow-hidden relative">
        <Hero />
        <About />
        <Products />
        <Blog />
        <WhatsAppButton />
      </main>
    </PageTransition>
  );
}