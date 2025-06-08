import { Building, Users, FileText, MessageCircle } from 'lucide-react';

export const mockCompanies = [
  {
    id: 1,
    name: 'TechNova Solutions',
    category: 'Technology',
    email: 'info@technova.com',
    phone: '+1-555-123-4567',
    address: '123 Tech Ave, San Francisco, CA',
    description: 'Innovative software development company specializing in cloud solutions.',
    website: 'https://technova.example.com',
    registrationDate: '2023-01-15',
    isPromoted: true
  },
  {
    id: 2,
    name: 'Green Earth Retail',
    category: 'Retail',
    email: 'contact@greenearth.com',
    phone: '+1-555-789-0123',
    address: '456 Eco St, Portland, OR',
    description: 'Sustainable retail store offering eco-friendly products.',
    website: 'https://greenearth.example.com',
    registrationDate: '2023-02-20',
    isPromoted: false
  },
  {
    id: 3,
    name: 'MediCare Plus',
    category: 'Healthcare',
    email: 'info@medicareplus.com',
    phone: '+1-555-456-7890',
    address: '789 Health Blvd, Boston, MA',
    description: 'Comprehensive healthcare services with a focus on preventive care.',
    website: 'https://medicareplus.example.com',
    registrationDate: '2023-03-10',
    isPromoted: true
  },
  {
    id: 4,
    name: 'Future Finance',
    category: 'Finance',
    email: 'contact@futurefinance.com',
    phone: '+1-555-321-6547',
    address: '321 Money Lane, New York, NY',
    description: 'Modern financial services company focused on digital banking solutions.',
    website: 'https://futurefinance.example.com',
    registrationDate: '2023-04-05',
    isPromoted: false
  },
  {
    id: 5,
    name: 'Learn Forward',
    category: 'Education',
    email: 'info@learnforward.com',
    phone: '+1-555-987-6543',
    address: '654 Knowledge Way, Austin, TX',
    description: 'Online education platform providing courses for professional development.',
    website: 'https://learnforward.example.com',
    registrationDate: '2023-05-12',
    isPromoted: false
  }
];

export const mockPromotions = [
  {
    id: 1,
    title: 'TechNova Solutions - Innovative IT Services',
    company: 'TechNova Solutions',
    description: 'Cutting-edge technology solutions for modern businesses',
    fullDescription: 'TechNova Solutions offers cutting-edge IT services including software development, cloud migration, and digital transformation consulting. Our team of experts is dedicated to helping businesses leverage technology for growth and efficiency.',
    companyDescription: 'A leading technology company specializing in software development and digital transformation services.',
    startDate: '2023-04-01',
    endDate: '2023-12-31',
    status: 'active',
    isPrimary: true,
    link: 'https://technova.example.com'
  },
  {
    id: 2,
    title: 'MediCare Plus - Healthcare Innovation',
    company: 'MediCare Plus',
    description: 'Revolutionary healthcare services for everyone',
    fullDescription: 'MediCare Plus is revolutionizing healthcare with innovative services that combine traditional care with cutting-edge technology. Our patient-centered approach ensures the highest quality care for all.',
    companyDescription: 'A healthcare provider focused on accessible, quality care through technological innovation.',
    startDate: '2023-06-15',
    endDate: '2023-12-15',
    status: 'active',
    isPrimary: false,
    link: 'https://medicareplus.example.com'
  },
  {
    id: 3,
    title: 'Future Finance - Digital Banking',
    company: 'Future Finance',
    description: 'Next-generation banking solutions',
    fullDescription: 'Future Finance is transforming the banking experience with our digital-first approach. We offer seamless, secure, and user-friendly financial services accessible from anywhere.',
    companyDescription: 'A modern financial institution focused on digital innovation and customer experience.',
    startDate: '2023-07-01',
    endDate: '2023-10-01',
    status: 'expired',
    isPrimary: false,
    link: 'https://futurefinance.example.com'
  },
  {
    id: 4,
    title: 'Green Earth Retail - Summer Collection',
    company: 'Green Earth Retail',
    description: 'Sustainable products for eco-conscious consumers',
    fullDescription: 'Introducing our summer collection of sustainable, eco-friendly products. From home goods to personal care, our items are designed with environmental responsibility in mind.',
    companyDescription: 'A retail company committed to sustainability and ethical sourcing practices.',
    startDate: '2023-11-01',
    endDate: '2024-01-31',
    status: 'scheduled',
    isPrimary: false,
    link: 'https://greenearth.example.com'
  }
];

export const mockDashboardData = {
  stats: {
    companies: 128,
    promotions: 45,
    subscriptions: 82,
    feedback: 254
  },
  chartData: [
    {
      name: 'Jan',
      companies: 5,
      promotions: 8,
    },
    {
      name: 'Feb',
      companies: 7,
      promotions: 10,
    },
    {
      name: 'Mar',
      companies: 10,
      promotions: 15,
    },
    {
      name: 'Apr',
      companies: 8,
      promotions: 12,
    },
    {
      name: 'May',
      companies: 12,
      promotions: 18,
    },
    {
      name: 'Jun',
      companies: 15,
      promotions: 20,
    },
  ],
  recentActivity: [
    {
      id: 1,
      title: 'New company registered',
      description: 'TechNova Solutions has been registered',
      time: '2 hours ago',
      icon: 'building',
      iconBg: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'New promotion created',
      description: 'MediCare Plus promotion has been published',
      time: '5 hours ago',
      icon: 'fileText',
      iconBg: 'bg-amber-500'
    },
    {
      id: 3,
      title: 'New subscription',
      description: 'Learn Forward subscribed to Premium plan',
      time: '1 day ago',
      icon: 'users',
      iconBg: 'bg-green-500'
    },
    {
      id: 4,
      title: 'New feedback received',
      description: 'Future Finance left a positive review',
      time: '2 days ago',
      icon: 'messageCircle',
      iconBg: 'bg-purple-500'
    }
  ]
};