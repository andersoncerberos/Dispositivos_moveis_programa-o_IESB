import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Card, PaperProvider } from 'react-native-paper'


export default function Arenas() {

  const arenas = [
    {
      id: 1,
      nome: "Stade de France",
      cidade: "Saint-Denis",
      capacidade: 80000,
      imagem: "https://i.pinimg.com/236x/28/ae/8e/28ae8e00707d5c93b968ac95eeed29b7.jpg"
    },
    {
      id: 2,
      nome: "Paris La Défense Arena",
      cidade: "Nanterre",
      capacidade: 30000,
      imagem: "https://i.pinimg.com/236x/9d/cf/dd/9dcfdde58e9f70176b7d78d942729277.jpg"
    },
    {
      id: 3,
      nome: "Arena Bercy",
      cidade: "Paris",
      capacidade: 15000,
      imagem: "https://i.pinimg.com/736x/6c/6d/87/6c6d87ebac2c188a6f7bda2e008181f8.jpg"
    },
    {
      id: 4,
      nome: "Stade Pierre-Mauroy",
      cidade: "Lille",
      capacidade: 50000,
      imagem: "https://i.pinimg.com/236x/36/0d/43/360d4366292e0104ad5bb209252b98ab.jpg"
    },
    {
      id: 5,
      nome: "Grand Palais",
      cidade: "Paris",
      capacidade: 8000,
      imagem: "https://i.pinimg.com/236x/be/c0/76/bec076408b146e16bc9bcdf58978405d.jpg"
    }
  ];


  const ArenaCard = ({ arena }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: arena.imagem }} />
      <Card.Content>
        <Text style={styles.titulo}>{arena.nome}</Text>
        <Text>Cidade: {arena.cidade}</Text>
        <Text>Capacidade: {arena.capacidade} pessoas</Text>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FlatList
          data={arenas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ArenaCard arena={item} />}
        />
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0'
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden'
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8
  }
})