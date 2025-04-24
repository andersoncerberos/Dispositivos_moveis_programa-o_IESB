import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import { Card, Text, Avatar, PaperProvider } from 'react-native-paper'

export default function Olimpiadas() {
  const olimpiadas = {
    nome: "Jogos Olímpicos de Verão de 2024",
    local: "Paris, França",
    dataInicio: "26 de julho de 2024",
    dataFim: "11 de agosto de 2024",
    organizacao: "Comitê Olímpico Internacional",
    imagem: "https://i.pinimg.com/236x/79/27/be/7927bea5c23a8b755bbde5fa8211cd89.jpg",
    edicao: 33,
    mascotes: [
      {
        id: "1",
        nome: "Phryge Olímpico",
        descricao: "Mascote dos Jogos Olímpicos",
        imagem: "https://i.pinimg.com/236x/17/82/f3/1782f3d30b0210d4f36131bf27b6bb4c.jpg"
      },
      {
        id: "2",
        nome: "Phryge Paralímpico",
        descricao: "Mascote dos Jogos Paralímpicos",
        imagem: "https://i.pinimg.com/236x/81/19/d1/8119d1ec0e8a0e30cf426b25c5dc517a.jpg"
      }
    ]
  };
  const MascoteCard = ({ mascote }) => (
    <Card style={styles.card}>
      <Card.Title
        title={mascote.nome}
        subtitle={mascote.descricao}
        left={() => <Avatar.Image size={48} source={{ uri: mascote.imagem }} />}
      />
    </Card>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>

        {/* Card com dados da Olimpíada */}
        <Card style={styles.card}>
          <Card.Cover source={{ uri: olimpiadas.imagem }} />
          <Card.Content>
            <Text style={styles.title}>{olimpiadas.nome}</Text>
            <Text>Local: {olimpiadas.local}</Text>
            <Text>Início: {olimpiadas.dataInicio}</Text>
            <Text>Fim: {olimpiadas.dataFim}</Text>
            <Text>Organização: {olimpiadas.organizacao}</Text>
            <Text>Edição: {olimpiadas.edicao}ª</Text>
          </Card.Content>
        </Card>

        {/* Lista de mascotes */}
        <Text style={styles.subtitle}>Mascotes</Text>
        <FlatList
          data={olimpiadas.mascotes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MascoteCard mascote={item} />}
        />
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f2f2f2'
  },
  card: {
    marginBottom: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  }
})