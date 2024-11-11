import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Application {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  experience: string;
  expectations: string;
  challenges: string;
  status: 'pending' | 'approved' | 'rejected';
}