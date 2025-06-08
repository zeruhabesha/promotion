'use client';

import { motion } from 'framer-motion';
import { Building, Megaphone } from 'lucide-react';

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `
          radial-gradient(circle at 20% 40%, #a5b4fc33 0%, transparent 60%),
          radial-gradient(circle at 80% 60%, #fca5a533 0%, transparent 60%),
          linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)
        `
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full mb-6"
          >
            <Building className="h-4 w-4" />
            <span className="text-sm font-medium">About Z-Group</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Your Trusted Partner in <span className="text-indigo-600">Business Growth</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mb-8"
          >
            Since 2010, we've been helping businesses establish, grow, and succeed through our comprehensive registration and promotion services.
          </motion.p>

          {/* Promotion Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex items-center justify-center mt-4"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[radial-gradient(circle,#6366f133_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="relative flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg shadow">
              <Megaphone className="h-5 w-5" />
              <span className="font-semibold">Promoting Your Success</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}