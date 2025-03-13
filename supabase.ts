import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wzwkacorrsvwfkexwqyp.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6d2thY29ycnN2d2ZrZXh3cXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MjYzNzAsImV4cCI6MjA1NzMwMjM3MH0.Q7Xqf854yQkEFwRJjaQYVRxV9lozQEkAmIsK-o9YZp0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
