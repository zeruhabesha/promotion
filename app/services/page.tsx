import { Metadata } from 'next';
import ServicesBanner from '@/components/services/services-banner';
import ServicesList from '@/components/services/services-list';
import ServiceProcess from '@/components/services/service-process';
import CallToAction from '@/components/home/call-to-action';

export const metadata: Metadata = {
  title: 'Services - Z-Group',
  description: 'Explore our comprehensive business services including registration, promotion, and consultation',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesBanner />
      <ServicesList />
      <ServiceProcess />
      <CallToAction />
    </div>
  );
}