'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Megaphone, 
  BrainCircuit, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Shield,
  Users
} from 'lucide-react';

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      id: 1,
      title: 'Company Registration',
      description: 'Complete business registration services with legal compliance and fast processing.',
      icon: <FileText className="h-12 w-12" />,
      features: [
        'Legal documentation preparation',
        'Regulatory compliance assurance',
        'Tax ID and permit acquisition',
        'Board and governance setup'
      ],
      color: 'bg-[#0e7490] text-white',
      link: '/contact',
      duration: '5-15 business days',
      price: 'Starting from $299'
    },
    {
      id: 2,
      title: 'Promotion Services',
      description: 'Strategic marketing and promotion to amplify your brand reach and visibility.',
      icon: <Megaphone className="h-12 w-12" />,
      features: [
        'Digital marketing campaigns',
        'Content creation and management',
        'SEO optimization',
        'Performance analytics'
      ],
      color: 'bg-[#0e7490] text-white',
      link: '/contact',
      duration: 'Ongoing campaigns',
      price: 'Starting from $199/month'
    },
    {
      id: 3,
      title: 'Business Consultation',
      description: 'Expert guidance for strategic planning, operations, and sustainable growth.',
      icon: <BrainCircuit className="h-12 w-12" />,
      features: [
        'Strategic business planning',
        'Market analysis and insights',
        'Operational efficiency review',
        'Growth strategy development'
      ],
      color: 'bg-[#0e7490] text-white',
      link: '/contact',
      duration: 'Flexible scheduling',
      price: 'Starting from $150/hour'
    }
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Service Offerings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of business services designed to support your journey from startup to scale-up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="h-full transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/20"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.1 * index}s`
              }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0e7490] mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0e7490]">
                    <Shield className="h-4 w-4" />
                    <span>{service.price}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button asChild className="w-full" style={{ backgroundColor: '#0e7490' }}>
                  <Link href={service.link}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-[#0e7490]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. If you need a tailored approach or have specific requirements, 
              our team is ready to create a custom solution that fits your exact needs.
            </p>
            <Button asChild size="lg" style={{ backgroundColor: '#0e7490' }}>
              <Link href="/contact">
                Discuss Custom Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}