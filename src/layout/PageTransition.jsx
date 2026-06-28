import React from 'react';
import { motion } from 'framer-motion';

const barVariants = {
  // New Page Entry: Starts at center (covered), wipes to right (revealed)
  initial: { x: "0%" },
  animate: { x: "100%" },
  
  // Old Page Exit: Wipes from left to center (covers screen completely)
  exit: { x:['-100%','0%'] },
};

// Expanded to 10 color tones for a smoother gradient banding
const gradientColors = [
  "#d4f9b0", 
  "#c6f79a", 
  "#bbf585", 
  "#b3f46f", 
  "#aef359", 
  "#93c846", 
  "#79a634", 
  "#6dad35", 
  "#53912a", 
  "#3d7a1e"
];

export default function PageTransition({ children }) {
  return (
    <>
      {/* 10 Horizontal Bars creating the Left-to-Right wipe */}
      <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            variants={barVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
              delay: i * 0.05,
            }}
            style={{ backgroundColor: gradientColors[i] }}
            className="flex-1 w-full" 
          />
        ))}
      </div>

      {/* The Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // Delay content fade to ensure it stays hidden until the reveal wipe is well underway
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}