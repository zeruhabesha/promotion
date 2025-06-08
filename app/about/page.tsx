import { Metadata } from 'next';
import AboutHero from '@/components/about/about-hero';
import OurMission from '@/components/about/our-mission';
import OurTeam from '@/components/about/our-team';
import OurJourney from '@/components/about/our-journey';
import CallToAction from '@/components/home/call-to-action';

export const metadata: Metadata = {
  title: 'About Us - Z-Group',
  description: 'Learn about Z-Group, our mission, vision, and commitment to business excellence',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurMission />
      <OurTeam />
      <OurJourney />
      <CallToAction />
    </div>
  );
}