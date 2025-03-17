// screens/ConnectDeviceScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const ConnectDeviceScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="person-outline" size={24} color="#333" />
        </TouchableOpacity>
        
        <Text style={styles.brandText}>
          <Text style={styles.greenText}>FRESH</Text>
          <Text style={styles.whiteText}>TRACK</Text>
        </Text>
        
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Image 
          source={require('../assets/lock-icon.png')} 
          style={styles.lockIcon}
        />
        
        <Text style={styles.connectText}>
          Make sure you have connect with our devices
        </Text>
        
        <TouchableOpacity 
          style={styles.connectButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.connectButtonText}>Connect</Text>
        </TouchableOpacity>
        
        <View style={styles.scanContainer}>
          <Image 
            source={require('../assets/scan-frame.png')} 
            style={styles.scanFrame}
          />
          <Text style={styles.scanText}>Scan Device</Text>
        </View>
        
        <Text style={styles.footerText}>
          make sure both device is connected with same wifi
        </Text>
        
        <Text style={styles.copyrightText}>
          FreshTrack 2023
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  greenText: {
    color: '#2E8B57',
  },
  whiteText: {
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  lockIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  connectText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginBottom: 30,
  },
  connectButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  connectButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scanContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  scanFrame: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  scanText: {
    color: '#333',
    fontSize: 16,
  },
  footerText: {
    position: 'absolute',
    bottom: 50,
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
  },
  copyrightText: {
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
  },
});

export default ConnectDeviceScreen;