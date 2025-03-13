import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { supabase } from '@/supabase';

export default function SettingsScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Ustawienia</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Konto</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Edytuj profil')}>
          <Text style={styles.optionText}>Edytuj profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Zmień hasło')}>
          <Text style={styles.optionText}>Zmień hasło</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Aplikacja</Text>
        <TouchableOpacity style={styles.option} onPress={() => alert('Tryb ciemny')}>
          <Text style={styles.optionText}>Tryb ciemny</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => alert('Powiadomienia')}>
          <Text style={styles.optionText}>Powiadomienia</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Wyloguj się</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#A18AFF',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800F2F',
    marginBottom: 10,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: 16,
    color: '#57007F',
  },
  logoutButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: {
    color: '#D72638',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
