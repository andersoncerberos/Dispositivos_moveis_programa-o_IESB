import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Nome from './src/compenents/Nome';
import Volume from './src/compenents/Volume';
import NumeroAleatorio from './src/compenents/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Nome />

      <Volume />

      <NumeroAleatorio/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
