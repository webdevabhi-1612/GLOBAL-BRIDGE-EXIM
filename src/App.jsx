import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetail from './pages/ProductDetail'; 
import Contact from './pages/Contact';
import Founder from './pages/Founder';
import Company from './pages/Company';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; // <-- IMPORTED NEW BLOG DETAIL PAGE
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsConditions from './pages/TermsConditions';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// 1. Extract routing into a child component so we can track the location[cite: 8]
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    // mode="wait" tells React Router to hold off on loading the new page until the old one finishes its exit animation[cite: 8]
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Catalogue />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/company" element={<Company />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* <-- ADDED ROUTE SWITCH FOR BLOGS */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />                 
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative w-full min-h-screen bg-[#0a0a0a] font-sans text-white antialiased flex flex-col">
        <Navbar />
        <div className="flex-grow">
          {/* 2. Render the animated routes here[cite: 8] */}
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;