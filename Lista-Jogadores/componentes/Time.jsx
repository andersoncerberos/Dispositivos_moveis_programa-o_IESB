import { StyleSheet, Text, FlatList} from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import Jogador from './Jogador'
export default function Time(props) {

    const { nome, anofundacao, mascote, imagem, jogadores } = props
    return (
        <Card style={{ margin: 10 }}>
            <Card.Title title={nome} subtitle={anofundacao} />
            <Card.Content>
                <Text>mascote:{mascote}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: imagem }} />
            <Card.Actions>
            <FlatList
                horizontal
                data={jogadores}
                renderItem={({ item }) => (
                    <Jogador
                        nome={item.nome}
                        numero={item.numero}
                        imagem={item.imagem}
                    />
                )}
            />
            </Card.Actions>

        </Card>
    )
}

const styles = StyleSheet.create({})