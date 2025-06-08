'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PromotionContext = createContext(null);

export function PromotionProvider({ children }) {
  const [featuredPromotion, setFeaturedPromotion] = useState(null);
  
  useEffect(() => {
    // In a real app, fetch this from your API
    // For demo purposes, we'll use mock data
    const mockPromotion = {
      id: 1,
      title: 'TechNova Solutions',
      description: 'Innovative IT services for modern businesses',
      fullDescription: 'TechNova Solutions offers cutting-edge IT services including software development, cloud migration, and digital transformation consulting. Our team of experts is dedicated to helping businesses leverage technology for growth and efficiency.',
      company: 'TechNova Solutions',
      companyDescription: 'A leading technology company specializing in software development and digital transformation services.',
      link: '/companies/technova',
      startDate: '2023-04-01',
      endDate: '2023-12-31',
      isPrimary: true
    };
    
    setFeaturedPromotion(mockPromotion);
  }, []);
  
  return (
    <PromotionContext.Provider value={{ featuredPromotion, setFeaturedPromotion }}>
      {children}
    </PromotionContext.Provider>
  );
}

export function usePromotion() {
  const context = useContext(PromotionContext);
  if (!context) {
    throw new Error('usePromotion must be used within a PromotionProvider');
  }
  return context;
}