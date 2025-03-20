import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//componemte principal ele resto  rnara o que sera renderizado na tela
export default function App() {
  // logica do componemte principal
  const nome = "star destroyer";


  function alerta() {

    alert("voce clicou no botao")

  }

  //retorno do JSX
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.textogrande}>frota do imperio galatico</Text>

        <Button title='Enviar' onPress={alerta} />

        <Text style={styles.textogrande}>{nome}</Text>
        <Text style={styles.textogrande}>{10 + 10}</ Text>

        <Image source={require("./image/star_destroyer.png")}
          style={{
            height: 200,
            width: 200
          }}
        />
        <Image source={require("./image/imperio_galatico.png")}
          style={{
            height: 200,
            width: 200
          }} />

        <Image source={require("./image/image.png")}
          style={{
            height: 200,
            width: 200
          }} />




      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:40

  },
  textogrande: {
    backgroundColor: 'yellow',
    fontSize: 50,
    fontWeight: 100,
    fontStyle: "italic",
  }
});
