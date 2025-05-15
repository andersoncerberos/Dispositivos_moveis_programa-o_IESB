import { View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'


export default function NumeroAleatorio() {
    //LOGICA
    const[NumeroAleatorio,setNueroAleatorio] = useState(0)
    const[listadenumeros,setlistanumeros] = useState([])

    function gerar(){
        const numerogerado =( Math.round(Math.random) *101)
        setNueroAleatorio(numerogerado)
        setlistanumeros(...listadenumeros, numerogerado)
    }

    return (
        <View>
            <Card style={{ margin: 15 }}>


                <Card.Content>
                    <Text>GERADOR DE NUMERO ALEATORIO</Text>
                    <Text variant='displaymedium'> Numero:{NumeroAleatorio}</Text>

                </Card.Content>
                <Card.Actions>

                    <Button onPress={gerar}>gerar</Button>

                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    {listadenumeros.map(numero => <Text>{numero}</Text>)}
                </Card.Content>
            </Card>

        </View>
    )
}

