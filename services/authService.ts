import { supabase } from '@/supabase';

export async function signInWithEmail(email: string, password: string) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return user;
}

export async function signUpWithEmail(email: string, password: string) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return user;
}

export async function signOut() {
  await supabase.auth.signOut();
}
