/*
  # Create categories table

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique, not null)
      - `description` (text)
      - `color` (text, default '#0e7490')
      - `icon` (text)
      - `is_active` (boolean, default true)
      - `created_at` (timestamp, default now)
      - `updated_at` (timestamp, default now)

  2. Security
    - Enable RLS on `categories` table
    - Add policies for public to read active categories
    - Add policies for authenticated users to manage categories
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  color text DEFAULT '#0e7490',
  icon text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read active categories"
  ON categories
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow authenticated users to read all categories"
  ON categories
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert categories"
  ON categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update categories"
  ON categories
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete categories"
  ON categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert default categories
INSERT INTO categories (name, description, icon) VALUES
  ('Technology', 'Software, IT services, and tech companies', 'laptop'),
  ('Retail', 'Stores, e-commerce, and consumer goods', 'shopping-bag'),
  ('Healthcare', 'Medical services, clinics, and health products', 'heart'),
  ('Finance', 'Banking, insurance, and financial services', 'dollar-sign'),
  ('Education', 'Schools, training, and educational services', 'graduation-cap'),
  ('Manufacturing', 'Production, industrial, and manufacturing companies', 'factory'),
  ('Consulting', 'Professional services and consulting firms', 'briefcase'),
  ('Other', 'Companies that don\'t fit other categories', 'building')
ON CONFLICT (name) DO NOTHING;