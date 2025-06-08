'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, TrendingUp, Globe } from 'lucide-react';

export default function OurMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description: "To simplify business establishment and growth through innovative solutions and expert guidance.",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Our Vision",
      description: "To become the leading force in business registration and promotion across Africa and beyond.",
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Our Values",
      description: "Integrity, innovation, and unwavering commitment to client success guide everything we do.",
      color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Our Goals",
      description: "To continuously evolve our services while maintaining the highest standards of excellence.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    // Brand color #0e7490
    {
      icon: <Target className="h-8 w-8" />,
      title: "Brand Color",
      description: "We are proud of our unique brand color, representing trust and professionalism.",
      color: "bg-[#e0f7fa] text-[#0e7490]", // light cyan bg, brand text
    },
    // Black
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Black",
      description: "Black stands for elegance, power, and sophistication in our brand identity.",
      color: "bg-black text-white",
    },
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission & Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guided by strong principles and a clear vision, we're committed to helping businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="border-none shadow-none bg-transparent"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`
              }}
            >
              <CardContent className="pt-6">
                <div className={`${value.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-center">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}