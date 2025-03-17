// screens/CategoryScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  
  const dairyProducts = [
    { id: 1, name: 'Milk', icon: require('../assets/milk-icon.png') },
    { id: 2, name: 'Yogurt', icon: require('../assets/yogurt-icon.png') },
    { id: 3, name: 'Cream', icon: require('../assets/cream-icon.png') },
    { id: 4, name: 'Curd', icon: require('../assets/curd-icon.png') },
    { id: 5, name: 'Buttermilk', icon: require('../assets/buttermilk-icon.png') },
    { id: 6, name: 'Paneer', icon: require('../assets/paneer-icon.png') },
    { id: 7, name: 'Kefir', icon: require('../assets/kefir-icon.png') },
    { id: 8, name: 'All Items', icon: require('../assets/all-items-icon.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetails', { product: item.name })}
    >
      <Image source={item.icon} style={styles.productIcon} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandText}>
          <Text style={styles.greenText}>FRESH</Text>
          <Text style={styles.whiteText}>TRACK</Text>
        </Text>
      </View>
      
      <Text style={styles.categoryTitle}>{category}</Text>
      
      <FlatList
        data={dairyProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.productsContainer}
      />
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
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  },
  productsContainer: {
    padding: 10,
  },
  productItem: {
    alignItems: 'center',
    margin: 10,
    width: '30%',
  },
  productIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  productName: {
    textAlign: 'center',
    color: 'white',
  },
});

export default CategoryScreen;