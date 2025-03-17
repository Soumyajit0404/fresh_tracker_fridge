// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Removed the useEffect timer

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <Text style={styles.toText}>To</Text>
      <Text style={styles.brandText}>
        <Text style={styles.greenText}>FRESH</Text>
        <Text style={styles.whiteText}>TRACK</Text>
      </Text>
      
      {/* Comment out the Image component until you have the asset */}
      {/* <Image 
        source={require('../assets/cart-icon.png')} 
        style={styles.icon}
        resizeMode="contain"
      /> */}
      
      {/* Added Next Button */}
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
      
      <Text style={styles.frameText}>Frame 20</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  toText: {
    fontSize: 20,
    color: 'black',
    marginVertical: 5,
  },
  brandText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  greenText: {
    color: '#2E8B57',
  },
  whiteText: {
    color: 'white',
  },
  icon: {
    width: 80,
    height: 80,
    marginVertical: 20,
  },
  // Added styles for the Next button
  nextButton: {
    backgroundColor: '#00BFFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  frameText: {
    position: 'absolute',
    bottom: 30,
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;