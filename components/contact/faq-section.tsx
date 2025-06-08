'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What services does Z-Group offer?',
      answer: 'Z-Group offers a comprehensive range of business services, including company registration, business promotion, and expert consultation. We handle all aspects of setting up and growing your business, from legal paperwork to marketing strategies and operational advice.'
    },
    {
      question: 'How does the company registration process work?',
      answer: 'Our company registration process is streamlined and efficient. First, we\'ll have an initial consultation to understand your business needs. Then, we\'ll prepare all necessary documentation, file with relevant authorities, obtain tax IDs and permits, and set up your governance structure. Throughout the process, we\'ll keep you informed and handle all the complexities.'
    },
    {
      question: 'What promotion strategies do you use?',
      answer: 'We employ data-driven, tailored promotion strategies that may include digital marketing, content creation, social media campaigns, SEO optimization, and traditional marketing methods. Our approach is customized to your industry, target audience, and specific business goals to ensure maximum effectiveness.'
    },
    {
      question: 'How long does company registration typically take?',
      answer: 'The timeframe for company registration varies depending on the type of business and local regulations, but typically ranges from 5-15 business days. With our expedited services, we aim to complete the process as efficiently as possible while ensuring all legal requirements are properly met.'
    },
    {
      question: 'Do you offer services for international business registration?',
      answer: 'Yes, we assist with international business registration in select countries. Our network of partners allows us to facilitate cross-border business setup, while navigating different regulatory environments and compliance requirements. Contact us for specific information about the countries we service.'
    },
    {
      question: 'How can I track the progress of my company registration?',
      answer: 'Once you engage our services, you\'ll be assigned a dedicated account manager who will provide regular updates on your registration process. Additionally, our client portal allows you to track progress, view submitted documents, and communicate with our team in real-time.'
    },
    {
      question: 'What makes Z-Group different from other business service providers?',
      answer: 'Z-Group stands out due to our comprehensive approach, experienced team, and commitment to client success. We offer end-to-end solutions rather than isolated services, provide personalized strategies rather than generic packages, and maintain ongoing support relationships with our clients throughout their business journey.'
    },
    {
      question: 'How can I get started working with Z-Group?',
      answer: 'Getting started is easy! Simply contact us through our website, by phone, or email to schedule an initial consultation. During this meeting, we\'ll discuss your business needs, explain our services in detail, and develop a customized plan to help you achieve your goals.'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}