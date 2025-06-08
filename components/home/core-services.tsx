'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  FileText, 
  Megaphone, 
  BrainCircuit, 
  CheckCircle2, 
  BarChart, 
  FileCheck,
  Users,
  Presentation,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const brandColor = '#0e7490';
const blackColor = '#000000';

export default function CoreServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: blackColor }}>Our Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, from establishment to growth.
          </p>
        </div>

        <Tabs defaultValue="registration" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="registration">Registration</TabsTrigger>
              <TabsTrigger value="promotion">Promotion</TabsTrigger>
              <TabsTrigger value="consultation">Consultation</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="registration" className="mt-0">
            <div 
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: blackColor }}>Company Registration</h3>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive company registration services ensure a smooth, compliant, and efficient process handled by experts who understand local requirements and regulations.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Documentation Preparation</h4>
                      <p className="text-sm text-muted-foreground">All necessary legal documents handled with precision</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Regulatory Compliance</h4>
                      <p className="text-sm text-muted-foreground">Full adherence to all local and national regulations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Fast Processing</h4>
                      <p className="text-sm text-muted-foreground">Expedited registration process saving you valuable time</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/services/registration">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <FileText className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Document Filing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Complete paperwork preparation and submission</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <FileCheck className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Legal Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Ensuring all regulatory requirements are met</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <BarChart className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Tax Registration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Complete tax ID and compliance setup</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Board Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Director appointments and governance structure</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="promotion" className="mt-0">
            <div 
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s'
              }}
            >
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <Card>
                  <CardHeader className="pb-2">
                    <Megaphone className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Digital Marketing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Strategic online presence and campaign management</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <Presentation className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Content Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Engaging materials that showcase your business</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <TrendingUp className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>SEO Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Visibility enhancement in search results</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <BarChart className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Data-driven insights to optimize campaigns</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: blackColor }}>Promotion Services</h3>
                <p className="text-muted-foreground mb-6">
                  Our data-driven promotion services help amplify your brand's reach and visibility through strategic digital marketing, content creation, and targeted campaigns.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Strategic Campaign Planning</h4>
                      <p className="text-sm text-muted-foreground">Tailored promotional strategies that align with business goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Multi-Channel Approach</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive coverage across digital platforms</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Performance Tracking</h4>
                      <p className="text-sm text-muted-foreground">Real-time monitoring and optimization of campaigns</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/services/promotion">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="consultation" className="mt-0">
            <div 
              className="grid md:grid-cols-2 gap-8 items-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s'
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: blackColor }}>Business Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Our expert business consultation services provide strategic guidance for operations, marketing, and scaling your business effectively in competitive markets.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Strategic Planning</h4>
                      <p className="text-sm text-muted-foreground">Long-term roadmaps for sustainable business growth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Operational Efficiency</h4>
                      <p className="text-sm text-muted-foreground">Process optimization to maximize productivity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5" style={{ color: brandColor, marginTop: '0.125rem' }} />
                    <div>
                      <h4 className="font-medium" style={{ color: blackColor }}>Market Analysis</h4>
                      <p className="text-sm text-muted-foreground">Insights into industry trends and competitive positioning</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild>
                  <Link href="/services/consultation">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <BrainCircuit className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Strategic Planning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Long-term business growth roadmaps</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <TrendingUp className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Market Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Competitive insights and opportunity identification</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <BarChart className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Financial Guidance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Budgeting and investment planning assistance</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8" style={{ color: brandColor }} />
                    <CardTitle className="text-base" style={{ color: blackColor }}>Team Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Organizational structure and talent strategies</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}