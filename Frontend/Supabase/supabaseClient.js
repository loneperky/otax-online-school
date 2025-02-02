// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these values with your own Supabase project details
const SUPABASE_URL = 'https://nrzivtrvziavtmbeknby.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeml2dHJ2emlhdnRtYmVrbmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzOTY4NTcsImV4cCI6MjA1Mzk3Mjg1N30.u-RsjcWE5tq8Y8KMnaDwBGVpt3ABGMq65isOfzs7Nto';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
