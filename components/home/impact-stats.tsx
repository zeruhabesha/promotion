'use client';

import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Building, Users, Award, Clock } from 'lucide-react';

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // For animated counting effect
  const [counts, setCounts] = useState({
    companies: 0,
    promotions: 0,
    satisfaction: 0,
    years: 0
  });
  
  // Target values for the counters
  const targetValues = {
    companies: 500,
    promotions: 1000,
    satisfaction: 98,
    years: 15
  };
  
  // Animation duration in milliseconds
  const animationDuration = 2000;
  const frameDuration = 16;
  const totalFrames = Math.round(animationDuration / frameDuration);
  
  useEffect(() => {
    let frame = 0;
    
    // Only start animation when section is in view
    if (isInView) {
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        
        setCounts({
          companies: Math.floor(progress * targetValues.companies),
          promotions: Math.floor(progress * targetValues.promotions),
          satisfaction: Math.floor(progress * targetValues.satisfaction),
          years: Math.floor(progress * targetValues.years)
        });
        
        if (frame === totalFrames) {
          clearInterval(counter);
          // Ensure final values are exact
          setCounts(targetValues);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView]);

  const stats = [
    {
      id: 1,
      value: counts.companies,
      suffix: '+',
      label: 'Companies Registered',
      icon: <Building className="h-6 w-6" />,
      color: 'bg-[#0e7490] dark:bg-blue-900/30 text-white dark:text-blue-400',
    },
    {
      id: 2,
      value: counts.promotions,
      suffix: '+',
      label: 'Successful Promotions',
      icon: <Award className="h-6 w-6" />,
      color: 'bg-[#0e7490] dark:bg-amber-900/30 text-white dark:text-amber-400',
    },
    {
      id: 3,
      value: counts.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-[#0e7490] dark:bg-emerald-900/30 text-white dark:text-emerald-400',
    },
    {
      id: 4,
      value: counts.years,
      suffix: '+',
      label: 'Years of Experience',
      icon: <Clock className="h-6 w-6" />,
      color: 'bg-[#0e7490] dark:bg-purple-900/30 text-white dark:text-purple-400',
    },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped hundreds of businesses establish their presence and grow. Here's our track record.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * stat.id}s`
              }}
            >
              <div className={`${stat.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2" style={{ color: 'black' }}>
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-muted-foreground text-center" style={{ color: 'black' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}