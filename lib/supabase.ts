import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Company {
  id: string;
  name: string;
  category: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  website?: string;
  is_promoted: boolean;
  registration_date: string;
  created_at: string;
  updated_at: string;
}

export interface Promotion {
  id: string;
  title: string;
  company_id?: string;
  company_name: string;
  description: string;
  full_description: string;
  company_description: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'scheduled' | 'expired';
  is_primary: boolean;
  link: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  color: string;
  icon?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to?: string;
  response?: string;
  created_at: string;
  updated_at: string;
}

// Database operations
export const db = {
  // Companies
  companies: {
    async getAll() {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Company[];
    },

    async getPromoted() {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .eq('is_promoted', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Company[];
    },

    async create(company: Omit<Company, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('companies')
        .insert(company)
        .select()
        .single();
      
      if (error) throw error;
      return data as Company;
    },

    async update(id: string, updates: Partial<Company>) {
      const { data, error } = await supabase
        .from('companies')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as Company;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('companies')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    }
  },

  // Promotions
  promotions: {
    async getAll() {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Promotion[];
    },

    async getActive() {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .eq('status', 'active')
        .lte('start_date', new Date().toISOString().split('T')[0])
        .gte('end_date', new Date().toISOString().split('T')[0])
        .order('is_primary', { ascending: false });
      
      if (error) throw error;
      return data as Promotion[];
    },

    async getFeatured() {
      const { data, error } = await supabase
        .from('promotions')
        .select('*')
        .eq('status', 'active')
        .eq('is_primary', true)
        .lte('start_date', new Date().toISOString().split('T')[0])
        .gte('end_date', new Date().toISOString().split('T')[0])
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      return data as Promotion | null;
    },

    async create(promotion: Omit<Promotion, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('promotions')
        .insert(promotion)
        .select()
        .single();
      
      if (error) throw error;
      return data as Promotion;
    },

    async update(id: string, updates: Partial<Promotion>) {
      const { data, error } = await supabase
        .from('promotions')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as Promotion;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('promotions')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    }
  },

  // Categories
  categories: {
    async getAll() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Category[];
    },

    async getActive() {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('name');
      
      if (error) throw error;
      return data as Category[];
    },

    async create(category: Omit<Category, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('categories')
        .insert(category)
        .select()
        .single();
      
      if (error) throw error;
      return data as Category;
    },

    async update(id: string, updates: Partial<Category>) {
      const { data, error } = await supabase
        .from('categories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as Category;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    }
  },

  // Feedback
  feedback: {
    async getAll() {
      const { data, error } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Feedback[];
    },

    async create(feedback: Omit<Feedback, 'id' | 'created_at' | 'updated_at' | 'status' | 'priority'>) {
      const { data, error } = await supabase
        .from('feedback')
        .insert(feedback)
        .select()
        .single();
      
      if (error) throw error;
      return data as Feedback;
    },

    async update(id: string, updates: Partial<Feedback>) {
      const { data, error } = await supabase
        .from('feedback')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data as Feedback;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('feedback')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    }
  }
};