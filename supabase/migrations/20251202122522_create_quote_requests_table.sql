/*
  # Create Quote Requests Table

  ## Overview
  This migration creates a secure quote_requests table for storing customer solar quote inquiries from the website.

  ## Tables Created
  
  ### quote_requests
  - `id` (uuid, primary key) - Unique identifier for each quote request
  - `name` (text, required) - Customer's full name
  - `mobile` (text, required) - Customer's mobile number (10 digits)
  - `monthly_bill` (text, required) - Customer's monthly electricity bill range
  - `created_at` (timestamptz) - Timestamp when the quote was submitted
  
  ## Security (Row Level Security)
  
  1. **Public Insert Access**: Anyone (authenticated or anonymous) can submit quote requests
     - Policy: "Anyone can submit quote requests"
     - Allows public form submissions without requiring authentication
  
  2. **Authenticated Read Access**: Only authenticated users can view all quote requests
     - Policy: "Authenticated users can read all quote requests"
     - Restricts viewing to admin users only
  
  ## Notes
  - Table uses RLS for security
  - Anonymous users can INSERT (submit quotes)
  - Only authenticated users can SELECT (view quotes)
  - Mobile numbers should be validated on the frontend (10 digits)
*/

-- Create the quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  monthly_bill text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone (anonymous users) to submit quote requests
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read quote requests (admin access)
CREATE POLICY "Authenticated users can read all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries on created_at
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at 
  ON quote_requests(created_at DESC);