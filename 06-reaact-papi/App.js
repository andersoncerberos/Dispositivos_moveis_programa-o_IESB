import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Image, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider } from 'react-native-paper';


export default function App() {

  const listacarros = [
    {
      titulo: "carro 1",
      descricao: "descricao do carro 1",
      imagem: "https://i.pinimg.com/236x/13/8f/06/138f0675237eec3563d1475ec63f7262.jpg"
    },
    {
      titulo: "carro 2",
      descricao: "descricao do carro 2",
      imagem: "https://i.pinimg.com/236x/9d/8b/40/9d8b4069a1988d8a595a6d55f12f9a78.jpg"
    },
    {
      titulo: "carro 3",
      descricao: "descricao do carro 3",
      imagem: "https://i.pinimg.com/236x/ca/64/33/ca64331fdcc52074b299c577f880746c.jpg"
    },
    {
      titulo: "carro 4",
      descricao: "descricao do carro 4",
      imagem: "https://i.pinimg.com/474x/fe/62/19/fe6219b44d432bdc62aa4df12b74b6ae.jpg"
    }
  ]

  return (
    <ScrollView>
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <FlatList
          data={listacarros}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10 }}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />

        <FlatList style={{ paddingTop: 20 }}
        
          data={listacarros}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10, height: 300, }}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
                <Card.Cover source={{ uri: item.imagem }} />
              </Card.Content>
            </Card>
          )}

        />

        <FlatList
          horizontal
          data={listacarros}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: 10, height: 500 }}>
              <Card.Content>
                <Title>{item.titulo}</Title>
                <Paragraph>{item.descricao}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.imagem }} />
            </Card>
          )}
        />

      </View>

    </PaperProvider>
    </ScrollView>
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
