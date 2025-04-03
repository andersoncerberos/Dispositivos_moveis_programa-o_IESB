import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider } from 'react-native-paper';
import Estado from './componentes/Estado';

export default function App() {

  const listaEstadosMunicipios = [
    {
      nome: 'Rio de Janeiro',
      sigla: 'RJ',
      imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      municipios: [
        {
          nome: 'Rio de Janeiro',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Niterói',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Petrópolis',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Angra dos Reis',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Cabo Frio',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        }
      ]
    },
    {
      nome: 'São Paulo',
      sigla: 'SP',
      imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
      descricao: 'São Paulo é o estado mais populoso do Brasil, com uma economia diversificada e forte.',
      municipios: [
        {
          nome: 'São Paulo',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Campinas',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Santos',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Sorocaba',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Ribeirão Preto',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        }
      ]
    },
    {
      nome: 'Minas Gerais',
      sigla: 'MG',
      imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
      descricao: 'Minas Gerais é conhecido por sua rica história, culinária e belas paisagens.',
      municipios: [
        {
          nome: 'Belo Horizonte',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Ouro Preto',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Uberlândia',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Juiz de Fora',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        },
        {
          nome: 'Montes Claros',
          imagem: 'https://i.pinimg.com/474x/2d/17/10/2d17104202b6a27f3de15c3128df0033.jpg',
        }
      ]
    }
  ]
  return (

    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text variant="displayLarge">Lista de estados</Text>

        <FlatList
          data={listaEstadosMunicipios}
          renderItem={({ item }) => (

            <Estado
              nome={item.nome}
              sigla={item.sigla}
              imagem={item.imagem}
              descricao={item.descricao}
              municipio={item.municipios}

            />

          )}
        />

      </View>

    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
});
