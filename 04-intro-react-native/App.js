import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//componemte principal ele resto  rnara o que sera renderizado na tela
export default function App() {
  // logica do componemte principal
  const nome = "joao";

  function alerta() {

    alert("voce clicou no botao")

  }

  //retorno do JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>meu aplicativo rodado</Text>
      <Text>{nome}</Text>
      <Text>{2 + 2}</ Text>
      <Button title='clicar' onPress={alerta} ></Button>

      <Image source={{ uri: "https://static.wikia.nocookie.net/ptstarwars/images/e/eb/LasercannonDSI.png/revision/latest?cb=20160421171030" }}
        style = {{
          height: 300,
          width: 300
        }}
      />
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
