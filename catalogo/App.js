import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Filmes from './componente/Filmes.jsx';
import Series from './componente/Series.jsx';

export default function App() {

  const listaFilmes = [
    {
      "nome": "A Doce Vida",
      "ano": 1960,
      "diretor": "Federico Fellini",
      "tipo": "Drama",
      "capa": "https://i.pinimg.com/236x/f3/c6/1c/f3c61cedf30d5212ba7a6885a55c71fc.jpg"
    },
    {
      "nome": "Psicose",
      "ano": 1960,
      "diretor": "Alfred Hitchcock",
      "tipo": "Terror",
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Psycho_%281960%29_theatrical_poster_%28retouched%29.jpg/250px-Psycho_%"
    },
    {
      "nome": "O Beijo da Mulher Aranha",
      "ano": 1985,
      "diretor": "Hector Babenco",
      "tipo": "Drama",
      "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg"
    },
    {
      "nome": "Poltergeist - O Fenômeno",
      "ano": 1982,
      "diretor": "Tobe Hooper",
      "tipo": "Terror",
      "capa": "https://upload.wikimedia.org/wikipedia/pt/thumb/1/14/Poltergeist_%281982%29_-_poster.png/200px-Poltergeist_%281982%29_-_poster.p"
    }

  ]
  const listaSeries = [
    {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
    },
    {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
    },
    {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    }
  ]

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text style={styles.texto}>FILMES</Text>
        {
          listaFilmes.map(
            filmes => {
              return (
                <Filmes
                  nome={filmes.nome}
                  ano={filmes.ano}
                  diretor={filmes.diretor}
                  tipo={filmes.tipo}
                  capa={filmes.capa}
                />
              )
            }
          )
        }

        <Text style={styles.texto}>SERIES</Text>
        {
          listaSeries.map(
            series => {
              return (
                <Series
                  nome={series.nome}
                  ano={series.ano}
                  diretor={series.diretor}
                  temporadas={series.temporadas}
                  capa={series.capa}
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    borderWidth: 2,          // Largura da borda
    borderColor: 'white',    // Cor da borda
    borderRadius: 10,        // Arredondamento da borda
   
  },
  texto: {
    fontSize: 45,
    color: '',
  }
});