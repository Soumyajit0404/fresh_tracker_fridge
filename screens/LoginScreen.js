// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    navigation.navigate('ConnectDevice');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.brandText}>
          <Text style={styles.greenText}>FRESH</Text>
          <Text style={styles.whiteText}>TRACK</Text>
        </Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          
          <View style={styles.optionsContainer}>
            <TouchableOpacity>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
            
            <Text style={styles.orText}>or</Text>
            
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/facebook-icon.png')} 
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Image 
                source={require('../assets/google-icon.png')} 
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  loginContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  greenText: {
    color: '#2E8B57',
  },
  whiteText: {
    color: 'white',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    padding: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  signInText: {
    color: 'white',
    marginRight: 10,
  },
  orText: {
    color: 'white',
    marginHorizontal: 5,
  },
  forgotText: {
    color: 'white',
    marginLeft: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    marginHorizontal: 15,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
});

export default LoginScreen;