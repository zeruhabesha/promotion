'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const brandColor = '#0e7490';
  const blackColor = '#000000';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxValue = -scrollY * 0.2;

  return (
    <div
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      style={{
        background: `
          radial-gradient(circle at 20% 40%, #a5b4fc33 0%, transparent 60%),
          radial-gradient(circle at 80% 60%, #fca5a533 0%, transparent 60%),
          linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)
        `
      }}
    >
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1 rounded-full mb-6"
          >
            <Building className="h-4 w-4" />
            <span className="text-sm font-medium">Your Business Growth Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 max-w-3xl"
            style={{ transform: `translateY(${parallaxValue * 0.2}px)` }}
          >
            Empowering Your <span className="text-primary">Business Journey</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mb-8"
            style={{ transform: `translateY(${parallaxValue * 0.3}px)` }}
          >
            Your premier partner for seamless company registration and powerful business promotion.
            We help entrepreneurs and businesses establish, grow, and succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild style={{ backgroundColor: brandColor, color: 'white' }}>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild style={{ color: blackColor, borderColor: blackColor }}>
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}