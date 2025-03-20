import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//componemte principal ele resto  rnara o que sera renderizado na tela
export default function App() {
  // logica do componemte principal

  function alerta() {

    alert("Eu não posso fazer uma equação sem as variáveis.")

  }

  //retorno do JSX
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.textogrande}>homem de ferro</Text>

        <Text style={styles.textopequeno}>Tony Stark, um gênio bilionário e dono das Indústrias Stark,
          foi capturado por terroristas enquanto testava uma arma no Vietnã
          (na versão original) ou no Afeganistão (no cinema). Forçado a construir uma arma para seus captores, ele, em vez disso, criou uma  armadura para escapar. Esse traje inicial
          deu origem ao Homem de Ferro.</Text>


        <Image source={require("./image/image.png")}
          style={{
            height: 200,
            width: 200
          }}
        />
        <Image source={require("./image/image2.png")}
          style={{
            height: 200,
            width: 200
          }} />

        <Image source={require("./image/image3.png")}
          style={{
            height: 200,
            width: 200
          }} />

        <Image source={require("./image/image4.png")}
          style={{
            height: 200,
            width: 200
          }} />
        <Image source={require("./image/image5.png")}
          style={{
            height: 200,
            width: 200
          }} />

        <Button title='Enviar' onPress={alerta} />




      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40

  },
  textogrande: {
    color:"yellow",
    backgroundColor: 'red',
    fontSize: 50,
    fontWeight: 100,
    fontStyle: "normal",
  },
  textopequeno: {
    fontSize: 20,
    fontWeight: 20,
    fontStyle: "oblique",
  }
});
