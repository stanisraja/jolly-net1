import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Provide a more user-friendly error message
if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase environment variables are missing. Please ensure you have set up your .env file with:\n' +
    'VITE_SUPABASE_URL=your_supabase_url\n' +
    'VITE_SUPABASE_ANON_KEY=your_supabase_anon_key'
  );
}

export const supabase = createClient(
  supabaseUrl || 'fallback_url',
  supabaseKey || 'fallback_key'
);