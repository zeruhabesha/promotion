'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FileText, Megaphone, BrainCircuit, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const brandColor = '#0e7490';
const blackColor = '#000000';

export default function FeaturedServices() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupService, setPopupService] = useState<typeof services[0] | null>(null);

  // Auto popup every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showPopup) {
        const randomIndex = Math.floor(Math.random() * services.length);
        setPopupService(services[randomIndex]);
        setShowPopup(true);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [showPopup]);

  const services = [
    {
      id: 1,
      title: 'Effortless Company Registration',
      description: 'Start your business journey with ease. Our expert team handles the entire registration process.',
      icon: <FileText className="h-10 w-10" />,
      color: `bg-[${brandColor}] dark:bg-blue-900/30 text-white dark:text-blue-400`,
      link: '/services/registration',
    },
    {
      id: 2,
      title: 'Powerful Promotion Services',
      description: 'Amplify your brand\'s reach and visibility with our data-driven marketing strategies.',
      icon: <Megaphone className="h-10 w-10" />,
      color: `bg-[${brandColor}] dark:bg-amber-900/30 text-white dark:text-amber-400`,
      link: '/services/promotion',
    },
    {
      id: 3,
      title: 'Expert Business Consultation',
      description: 'Get strategic insights and guidance for sustainable business growth and operations.',
      icon: <BrainCircuit className="h-10 w-10" />,
      color: `bg-[${brandColor}] dark:bg-emerald-900/30 text-white dark:text-emerald-400`,
      link: '/services/consultation',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business solutions designed to help you establish, grow, and succeed in your industry.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="p-0 h-auto group" asChild>
                    <Link href={service.link}>
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup Dialog */}
      <Dialog open={showPopup} onOpenChange={() => setShowPopup(false)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Featured Service</DialogTitle>
          </DialogHeader>
          {popupService && (
            <div className="flex flex-col items-center text-center p-4">
              {popupService.color && (
                <div className={`${popupService.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {popupService.icon}
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{popupService.title}</h3>
              <p className="text-muted-foreground mb-4">{popupService.description}</p>
              <Button asChild>
                <Link href={popupService.link}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
