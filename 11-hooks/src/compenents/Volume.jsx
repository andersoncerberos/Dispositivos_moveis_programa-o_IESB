import {View } from 'react-native'
import React, { useState } from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function Volume() {
    //logica 

    const [volume, setVolume] = useState(0)
  

    //let nome ='WWW'

    function aumentar() {
        if(volume < 10 ){
        setVolume(volume + 1)
        console.log(volume)
        
        }
    }

    function diminuir() {

        
        if(volume > 0 ){
            setVolume(volume - 1)
            console.log(volume)
            
            }
        
    }

    return (
        <View>
            <Card style={{ margin: 15 }}>
                <Card.Content>

                    <Text>COMPONENTE VOLUME</Text>
                    <Text varint='displaymedium'>VOLUME: {volume}</Text>

                </Card.Content>
                <Card.Actions>
                    <Button icon='minus' onPress={diminuir}>Menor</Button>
                    <Button icon= 'plus'onPress={aumentar}>Maior</Button>

                </Card.Actions>
            </Card>

        </View>
    )
}

