import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jwycwzvkvogeavfdkbab.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3eWN3enZrdm9nZWF2ZmRrYmFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDMyNTQsImV4cCI6MjA4MDQxOTI1NH0.mBtfiydIA-0mKADF7inBX_P1GOmorrqD59GtO_vKPjI';

export const supabase = createClient(supabaseUrl, supabaseKey);
