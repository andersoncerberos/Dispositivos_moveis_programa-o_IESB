import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MegaSenaScreen from './src/screens/MegaSenaScreen';
import JogoDoBichoScreen from './src/screens/JogoDoBichoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MegaSenaScreen/>

      <JogoDoBichoScreen/>

    </View>
  );
}


