import { View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'



export default function Nome() {


    const [nome, setNome] = useState('WWWW')
    const [numero, setNumero] = useState(0)

    //let nome ='WWW'

    function esconde() {
        setNome('WWWW')
        setNumero(numero + 1)
        console.log(nome)
    }

    function revelar() {

        setNome('carlos')
        setNumero(numero + 1)
        console.log(nome)
    }
    return (
        <View>
            <Card>
                <Card.Content>
                    <Card.Title  title="Componente Nome"   />

                    <Card.Content>
                        <Text variant="headlineMedium">Nome:{nome}</Text>
                        <Text variant="headlineMedium">Contador de Clicks: {numero}</Text>
                    </Card.Content>

                    <Card.Actions>
                        <Button onPress={esconde}>Esconde </Button>


                        <Button onPress={revelar}>Revelar </Button>

                    </Card.Actions>
                </Card.Content>
            </Card>
        </View>
    )
}

