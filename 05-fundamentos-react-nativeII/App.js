import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';
import JavaScript from './componentes/JavaScript.jsx';
export default function App() {
  return (
   
      <View style={styles.container}>
        <StatusBar style="auto" />

     
        <JavaScript />

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
