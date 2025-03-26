import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PrimeiroComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>PrimeiroComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'yellow',
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 700,
        color: 'yellow'
    }
})