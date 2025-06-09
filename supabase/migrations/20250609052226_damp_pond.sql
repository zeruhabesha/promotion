/*
  # Create promotions table

  1. New Tables
    - `promotions`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `company_id` (uuid, foreign key to companies)
      - `company_name` (text, not null)
      - `description` (text, not null)
      - `full_description` (text, not null)
      - `company_description` (text, not null)
      - `start_date` (date, not null)
      - `end_date` (date, not null)
      - `status` (text, default 'active')
      - `is_primary` (boolean, default false)
      - `link` (text, not null)
      - `created_at` (timestamp, default now)
      - `updated_at` (timestamp, default now)

  2. Security
    - Enable RLS on `promotions` table
    - Add policies for authenticated users to manage promotions
    - Add policy for public to read active promotions
*/

CREATE TABLE IF NOT EXISTS promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  company_name text NOT NULL,
  description text NOT NULL,
  full_description text NOT NULL,
  company_description text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'scheduled', 'expired')),
  is_primary boolean DEFAULT false,
  link text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE promotions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to read active promotions"
  ON promotions
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active' AND start_date <= CURRENT_DATE AND end_date >= CURRENT_DATE);

CREATE POLICY "Allow authenticated users to read all promotions"
  ON promotions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert promotions"
  ON promotions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update promotions"
  ON promotions
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete promotions"
  ON promotions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_promotions_updated_at
  BEFORE UPDATE ON promotions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create function to automatically update promotion status
CREATE OR REPLACE FUNCTION update_promotion_status()
RETURNS void AS $$
BEGIN
  UPDATE promotions 
  SET status = 'expired' 
  WHERE end_date < CURRENT_DATE AND status != 'expired';
  
  UPDATE promotions 
  SET status = 'active' 
  WHERE start_date <= CURRENT_DATE AND end_date >= CURRENT_DATE AND status = 'scheduled';
END;
$$ LANGUAGE plpgsql;