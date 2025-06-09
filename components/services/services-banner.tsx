'use client';

import { motion } from 'framer-motion';
import { Wrench, Sparkles } from 'lucide-react';

export default function ServicesBanner() {
  return (
    <div 
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `
          radial-gradient(circle at 25% 30%, #a5b4fc33 0%, transparent 50%),
          radial-gradient(circle at 75% 70%, #fca5a533 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, #34d39933 0%, transparent 60%),
          linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
        `
      }}
    >
      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-amber-500/30 rounded-lg rotate-45 animate-bounce" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-emerald-500/30 rounded-full animate-ping" />
        <div className="absolute bottom-32 right-1/3 w-14 h-14 border-2 border-purple-500/30 rounded-lg animate-pulse" />
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#6366f120_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1 rounded-full mb-6"
          >
            <Wrench className="h-4 w-4" />
            <span className="text-sm font-medium">Our Services</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Comprehensive <span className="text-primary">Business Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8"
          >
            From company registration to strategic promotion and expert consultation, 
            we provide end-to-end services to help your business thrive.
          </motion.p>

          {/* Service Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative flex items-center justify-center mt-4"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none bg-[radial-gradient(circle,#0e749033_2px,transparent_2px)] [background-size:25px_25px]" />
            <div className="relative flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-amber-500/10 text-primary px-6 py-3 rounded-lg shadow-lg">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">Excellence in Every Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}