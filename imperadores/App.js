import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Imperador from './componentes/Imperador.jsx';

export default function App() {
  const listaImperadores = [
    {
      nome: "julio cesar",
      idade: 40,
      inicioImperio: 28,
      imperiofinal: 36,
      imagem: "https://i.pinimg.com/236x/ed/54/ea/ed54ea1530f975381aaf785ce8eeb2e6.jpg"
    }
  ];



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Imperador

        {listaImperadores.map(
          imperador => {
            return (
              <Imperador
                nome={imperador.nome}
                idade={imperador.idade}
                numero={imperador.numero}
                imagem={imperador.imagem}
              />
            )
          }
        )
        }

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
