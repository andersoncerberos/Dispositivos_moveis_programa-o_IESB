import { View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function NumerosMegaSenna() {
  const [numeros, setNumeros] = useState([])

  function gerar() {
    const novosNumeros = []

    
    while (novosNumeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1
      if (!novosNumeros.includes(numero)) {
        novosNumeros.push(numero)
      }
    }

    
    novosNumeros.sort((a, b) => a - b)

    setNumeros(novosNumeros)
  }

  return (
    <View>
      <Card style={{ margin: 15 }}>
        <Card.Content>
          <Text>GERAR NÚMEROS DA MEGA-SENA</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={gerar}>Gerar</Button>
        </Card.Actions>
      </Card>

      <Card style={{ margin: 15 }}>
        <Card.Content>
          <Text variant="titleMedium">Números gerados:</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {numeros.map((num) => (
              <View
                key={num}
                style={{
                  backgroundColor: '#4caf50',
                  padding: 10,
                  borderRadius: 20,
                  marginRight: 10,
                  marginBottom: 10,
                  width: 40,
                  alignItems: 'center'
                }}
              >
                <Text style={{ color: 'white' }}>{num}</Text>
              </View>
            ))}
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}


