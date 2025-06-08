'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Brain, Target, Wrench, HandshakeIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const brandColor = '#0e7490'; // Define the brand color
  const blackColor = '#000000'; // Define the black color

  const reasons = [
    {
      id: 1,
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals with deep knowledge in business services.',
      icon: <Brain className="h-10 w-10" />,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Tailored Strategies',
      description: 'We don\'t believe in one-size-fits-all solutions. Every strategy is customized to your specific needs.',
      icon: <Target className="h-10 w-10" />,
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    },
    {
      id: 3,
      title: 'Comprehensive Support',
      description: 'From initial setup to scaling operations, we offer end-to-end support for your business journey.',
      icon: <Wrench className="h-10 w-10" />,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 4,
      title: 'Client-Focused',
      description: 'Your success is our mission. We prioritize your goals and work tirelessly to achieve them.',
      icon: <HandshakeIcon className="h-10 w-10" />,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: brandColor }}>Why Choose Z-Group?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ color: blackColor }}>
            We're committed to excellence in every aspect of our service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <Card 
              key={reason.id}
              className="border-none shadow-none bg-transparent"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * reason.id}s`
              }}
            >
              <CardHeader className="pb-2">
                <div className={`${reason.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: brandColor }}>{reason.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" style={{ color: blackColor }}>{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}