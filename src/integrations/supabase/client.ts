import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://inamkefygloabnjlmwen.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYW1rZWZ5Z2xvYWJuamxtd2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0MTAsImV4cCI6MjAyNTM5ODQxMH0.0j6P0sSHxTt5uV_zQp6_0kYLOHVhpFzH_ZMmarwpZAE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    site: 'https://sarioser.xyz'
  }
});