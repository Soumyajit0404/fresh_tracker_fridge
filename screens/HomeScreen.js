// screens/HomeScreen.js
import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, name: 'Dairy Products', icon: require('../assets/dairy-icon.png') },
    { id: 2, name: 'Meat & Poultry', icon: require('../assets/meat-icon.png') },
    { id: 3, name: 'Fruits', icon: require('../assets/fruits-icon.png') },
    { id: 4, name: 'Vegetables', icon: require('../assets/vegetables-icon.png') },
    { id: 5, name: 'Beverages', icon: require('../assets/beverages-icon.png') },
    { id: 6, name: 'Leftovers', icon: require('../assets/leftovers-icon.png') },
    { id: 7, name: 'Condiments & Sauces', icon: require('../assets/condiments-icon.png') },
    { id: 8, name: 'Frozen Foods', icon: require('../assets/frozen-icon.png') },
    { id: 9, name: 'Eggs', icon: require('../assets/eggs-icon.png') },
    { id: 10, name: 'Baked Goods', icon: require('../assets/baked-icon.png') }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandText}>
          <Text style={styles.greenText}>FRESH</Text>
          <Text style={styles.whiteText}>TRACK</Text>
        </Text>
      </View>
      
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello, User</Text>
        <Text style={styles.weatherText}>{new Date().toString()}</Text>    
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperatureText}>25°C</Text>
        </View>
      </View>
      
      <Text style={styles.categoriesTitle}>Categories</Text>
      
      <ScrollView contentContainerStyle={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity 
            key={category.id} 
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Category', { category: category.name })}
          >
            <Image source={category.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => {}}
      >
        <Text style={styles.addButtonText}>Add Category</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
  },
  header: {
    alignItems: 'center',
    padding: 15,
  },
  brandText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  greenText: {
    color: '#2E8B57',
  },
  whiteText: {
    color: 'white',
  },
  greetingContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    color: 'white',
  },
  weatherText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  temperatureContainer: {
    alignSelf: 'flex-start',
  },
  temperatureText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  categoriesTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  categoryItem: {
    width: '30%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#00BFFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;