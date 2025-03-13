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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Zaloguj się</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => (emailRef.current = text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Hasło"
        placeholderTextColor="#888"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#292929',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#003391',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#0057FF',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0057FF',
  },
  forgotPassword: {
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#8AB4F8',
    fontSize: 16,
  },
});
