import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import FAQSection from '@/components/contact/faq-section';

export const metadata: Metadata = {
  title: 'Contact Us - Z-Group',
  description: 'Get in touch with Z-Group for your business registration and promotion needs',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-b from-primary/10 to-background py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-center mb-8">Get In Touch</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}