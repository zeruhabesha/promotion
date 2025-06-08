import Hero from '@/components/home/hero';
import FeaturedServices from '@/components/home/featured-services';
import ImpactStats from '@/components/home/impact-stats';
import CoreServices from '@/components/home/core-services';
import WhyChooseUs from '@/components/home/why-choose-us';
import Testimonials from '@/components/home/testimonials';
import CallToAction from '@/components/home/call-to-action';
import PromotionBanner from '@/components/home/promotion-banner';

export default function Home() {
  return (
    <div className="flex flex-col">
      <PromotionBanner />
      <Hero />
      <FeaturedServices />
      <CoreServices />
      <ImpactStats />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}