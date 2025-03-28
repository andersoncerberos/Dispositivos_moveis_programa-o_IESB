import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';
import JavaScript from './componentes/JavaScript.jsx';
import Perfil from './componentes/Perfil.jsx';
import Atleta from './componentes/Atleta.jsx';
import ListaComponente from './componentes/ListaComponente.jsx';
export default function App() {

  const listaatletasv = [
    {
      nome: "NEYMAR",
      idade: 30,
      numero: 10,
      imagem: "https://i.pinimg.com/236x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg"
    },
    {
      nome: "leo messi",
      idade: 40,
      numero: 10,
      imagem: ""
    }
  ]
  return (

    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {listaatletasv.map(
          atleta => {
            return(
              <Atleta
                nome={atleta.nome}
                idade={atleta.idade}
                numero={atleta.numero}
                imagem={atleta.imagem}
              />
            )
          }
        )
        }





      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
