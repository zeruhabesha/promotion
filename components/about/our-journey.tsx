'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, Globe } from 'lucide-react';

export default function OurJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Z-Group was established with a vision to simplify business registration.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      year: "2015",
      title: "Regional Expansion",
      description: "Expanded operations across multiple regions in Ethiopia.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"
    },
    {
      year: "2018",
      title: "Service Innovation",
      description: "Launched comprehensive digital promotion services.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
    },
    {
      year: "2023",
      title: "Market Leader",
      description: "Became the leading business services provider in East Africa.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From our humble beginnings to becoming a market leader, here's how we've grown.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={milestone.year}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`
              }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${milestone.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    {milestone.icon}
                  </div>
                  <span className="text-sm text-primary font-medium mb-2">{milestone.year}</span>
                  <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}