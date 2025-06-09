'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  FileSearch, 
  Cog, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

export default function ServiceProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'We start with a comprehensive discussion to understand your business needs, goals, and requirements.',
      icon: <MessageCircle className="h-8 w-8" />,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      id: 2,
      title: 'Analysis & Planning',
      description: 'Our experts analyze your situation and create a detailed plan tailored to your specific objectives.',
      icon: <FileSearch className="h-8 w-8" />,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed at every step of the process.',
      icon: <Cog className="h-8 w-8" />,
      color: 'bg-purple-100 text-purple-600',
    },
    {
      id: 4,
      title: 'Completion & Support',
      description: 'Upon completion, we provide ongoing support and guidance to ensure your continued success.',
      icon: <CheckCircle className="h-8 w-8" />,
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to ensure the best outcomes for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card 
                className="h-full transition-all duration-300 hover:shadow-lg"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    {step.icon}
                  </div>
                  <div className="text-sm font-medium text-[#0e7490] mb-2">Step {step.id}</div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-[#0e7490]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0e7490]/10 to-amber-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards your business success. Contact us today for a free consultation 
              and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#0e7490] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0e7490]/90 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-[#0e7490] text-[#0e7490] px-6 py-3 rounded-lg font-medium hover:bg-[#0e7490]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}