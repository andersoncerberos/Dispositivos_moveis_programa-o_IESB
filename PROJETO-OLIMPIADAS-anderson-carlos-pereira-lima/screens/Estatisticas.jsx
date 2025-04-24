import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, PaperProvider } from 'react-native-paper'

export default function Estatisticas() {

  const estatisticas = {
    totalPaises: 206,
    totalModalidades: 32,
    totalMedalhas: 329,
    atletasFemininos: 5250,
    atletasMasculinos: 5250,
    totalArenas: 18,
    totalVoluntarios: 45000,
    orcamentoTotal: "8.8 bilhões de euros"
  };

  const totalAtletas = estatisticas.atletasFemininos + estatisticas.atletasMasculinos;

  const mediaMedalhasPorPais = (estatisticas.totalMedalhas / estatisticas.totalPaises).toFixed(2);
  const mediaVoluntariosPorArena = (estatisticas.totalVoluntarios / estatisticas.totalArenas).toFixed(2);
  const mediaAtletasPorModalidade = (totalAtletas / estatisticas.totalModalidades).toFixed(2);

  return (
    <PaperProvider>
      <View style={styles.container}>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Dados Gerais</Text>
            <Text>Total de Atletas: {totalAtletas}</Text>
            <Text>Total de Países: {estatisticas.totalPaises}</Text>
            <Text>Total de Modalidades: {estatisticas.totalModalidades}</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Médias Calculadas</Text>
            <Text>Média de Medalhas por País: {mediaMedalhasPorPais}</Text>
            <Text>Média de Voluntários por Arena: {mediaVoluntariosPorArena}</Text>
            <Text>Média de Atletas por Modalidade: {mediaAtletasPorModalidade}</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.title}>Orçamento</Text>
            <Text>Orçamento Total: {estatisticas.orcamentoTotal}</Text>
          </Card.Content>
        </Card>

      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 3
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
})
