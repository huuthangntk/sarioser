// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://inamkefygloabnjlmwen.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYW1rZWZ5Z2xvYWJuamxtd2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MTc5OTUsImV4cCI6MjA1MjQ5Mzk5NX0.SJD-UT8qsGvG4scmS6bT6zRuB2mf9C-YjAhU8xf2X_A";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);