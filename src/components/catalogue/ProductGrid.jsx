import React from 'react';
import { productsData } from '../../data/products'; 
import GlassCard from './GlassCard';

export default function ProductGrid() {
  return (
    <div className="w-full max-w-[1200px] mx-auto z-10 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {productsData.map((product) => (
          <GlassCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}