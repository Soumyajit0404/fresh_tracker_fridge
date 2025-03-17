// screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandText}>
          <Text style={styles.greenText}>FRESH</Text>
          <Text style={styles.whiteText}>TRACK</Text>
        </Text>
        <Image 
          source={require('../assets/milk-icon.png')} 
          style={styles.headerIcon}
        />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Basic Product Information</Text>
        <Text style={styles.productInfo}>• Product Name: Example - Full Cream Milk</Text>
        <Text style={styles.productInfo}>• Quantity in pack: 500ml</Text>
        <Text style={styles.productInfo}>• Manufacture Details: Amul Federation, GCMMF Ltd.</Text>
        <Text style={styles.productInfo}>• Serial/Unique Units: Example - D-MN-2023-00-25567-678902</Text>
        <Text style={styles.productInfo}>• Batch No: Example - AMN1008233</Text>
        
        <Text style={styles.sectionTitle}>Manufacturing & Expiry Details</Text>
        <Text style={styles.productInfo}>• Manufacturing Date: 03-07-2023</Text>
        <Text style={styles.productInfo}>• Expiry Date (EST): Dates: 03-12-2023</Text>
        <Text style={styles.productInfo}>• Best Before Date: Suggested period for best taste and flavor</Text>
        <Text style={styles.productInfo}>• Storage Instructions: Keep refrigerated at 20-25°C and do not freeze</Text>
        
        <Text style={styles.sectionTitle}>Nutritional Information</Text>
        <Text style={styles.productInfo}>• Energy: Total caloric value (Example - 60 kcal)</Text>
        <Text style={styles.productInfo}>• Protein Content: Essential for body growth (Example - 3.5g)</Text>
        <Text style={styles.productInfo}>• Fat Content: Varies based on milk type:</Text>
        <Text style={styles.productInfo}>  - Full Cream Milk: 3.5-4% Fat</Text>
        <Text style={styles.productInfo}>  - Toned Milk: 3% Fat</Text>
        <Text style={styles.productInfo}>  - Double Toned Milk: 1.5% Fat</Text>
        <Text style={styles.productInfo}>  - Skimmed Milk: 0-0.5% Fat</Text>
        <Text style={styles.productInfo}>• Carbohydrates: Present mainly as Lactose (Milk Sugar)</Text>
        <Text style={styles.productInfo}>• Added Vitamins: A, D</Text>
        <Text style={styles.productInfo}>• Sugar Content: Naturally occurring or added sugar (Example - 4.5g)</Text>
        
        <Text style={styles.sectionTitle}>Processing Type</Text>
        <Text style={styles.productInfo}>• Pasteurized Milk: Short Shelf life, requires refrigeration</Text>
        <Text style={styles.productInfo}>• UHT/Ultra High Temperature Milk: Long shelf life (directly consumable and opened packaging requires refrigeration)</Text>
      </ScrollView>
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
  headerIcon: {
    width: 30,
    height: 30,
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
  },
  productInfo: {
    fontSize: 14,
    color: '#333',
    marginBottom: 3,
  },
});

export default ProductDetailsScreen;