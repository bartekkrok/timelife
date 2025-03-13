import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmail, signUpWithEmail } from '@/services/authService';

export default function AuthScreen() {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleLogin = async () => {
    try {
      await signInWithEmail(emailRef.current, passwordRef.current);
      Alert.alert('Zalogowano pomyślnie!');
    } catch (error) {
      Alert.alert('Błąd logowania', error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await signUpWithEmail(emailRef.current, passwordRef.current);
      Alert.alert('Konto utworzone. Sprawdź e-mail!');
    } catch (error) {
      Alert.alert('Błąd rejestracji', error.message);
    }
  };

  return (
    <LinearGradient colors={['#57007F', '#800F2F']} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Zaloguj się</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#DDD"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => (emailRef.current = text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hasło"
        placeholderTextColor="#DDD"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => (passwordRef.current = text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Zaloguj się</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={handleSignUp}>
        <Text style={styles.secondaryButtonText}>Utwórz konto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword} onPress={() => alert('Resetowanie hasła')}>
        <Text style={styles.forgotPasswordText}>Nie pamiętasz hasła?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 16,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#A18AFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#A18AFF',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#A18AFF',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A18AFF',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#FFD1DC',
    fontSize: 16,
  },
});
