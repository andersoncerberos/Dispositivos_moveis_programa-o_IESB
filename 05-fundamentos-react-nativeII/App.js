import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';
import JavaScript from './componentes/JavaScript.jsx';
import Perfil from './componentes/Perfil.jsx';
import ListaComponente from './componentes/ListaComponente.jsx';
export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />

      <ListaComponente/>

      {/* <Perfil

        nome="anderson"
        idade={15}
        telefone="123456"
        email="anderson@com"

      />

      <Perfil

        nome="eliane"
        idade={45}
        telefone="12345678"
        email="eliane@com"

      />

      <Perfil

        nome="taynara"
        idade={26}
        telefone="123456789"
        email="tay@com"

      /> */}




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
