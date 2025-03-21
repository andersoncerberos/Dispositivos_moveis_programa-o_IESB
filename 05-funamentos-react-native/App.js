import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';
import SegundoComponente from './componentes/SegundoComponente.jsx';
import JavaCript from './componentes/JavaCript.jsx';
import Perfil from './componentes/Perfil.jsx';
export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <JavaCript />

      <Perfil
        nome = "anderson"
        sobrenome = "carlos"
        idade = {15}
      />


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',


  },
});
