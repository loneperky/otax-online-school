// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace these values with your own Supabase project details
const SUPABASE_URL = 'https://dqycypwesfbwulnigbah.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxeWN5cHdlc2Zid3VsbmlnYmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0ODE5OTEsImV4cCI6MjA1NDA1Nzk5MX0.ZwW_YXcsCekFdpkRGzs2Pklpqv6_Qb-lk7wSg7901MY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
