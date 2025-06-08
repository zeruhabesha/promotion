'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { usePromotion } from '@/context/promotion-context';

export default function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { featuredPromotion } = usePromotion() as { featuredPromotion: { title: string; description: string; fullDescription: string; company: string; companyDescription: string; link: string; } | null };
  
  useEffect(() => {
    // Show banner after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!featuredPromotion) return null;

  return (
    <>
      {isVisible && (
        <div className="bg-[#0e7490]/10 dark:bg-[#0e7490]/30 text-black dark:text-white py-3 px-4 relative animate-fade-in-down">
          <div className="container mx-auto flex items-center justify-center">
            <Sparkles className="h-4 w-4 mr-2 flex-shrink-0" />
            <p className="text-sm font-medium mr-4 text-center">
              <span className="font-bold">{featuredPromotion.title}</span> - {featuredPromotion.description}
            </p>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="bg-[#0e7490]/50 dark:bg-[#0e7490]/80 border-[#0e7490]/70 dark:border-[#0e7490] text-black dark:text-white hover:bg-[#0e7490]/60 dark:hover:bg-[#0e7490]/90"
                >
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-[#0e7490]" />
                    {featuredPromotion.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <p>{featuredPromotion.fullDescription}</p>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">About {featuredPromotion.company}</h4>
                    <p className="text-sm text-muted-foreground">{featuredPromotion.companyDescription}</p>
                  </div>
                  <div className="flex justify-end">
                    <Button asChild>
                      <Link href={featuredPromotion.link}>Visit Website</Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              size="sm" 
              variant="ghost" 
              className="p-0 h-6 w-6 rounded-full absolute right-2 top-1/2 transform -translate-y-1/2 text-black dark:text-white hover:bg-[#0e7490]/20 dark:hover:bg-[#0e7490]/30"
              onClick={() => setIsVisible(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}