import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Imperador(props) {

    const { nome, idade, inicioImperio, imperiofinal, imagem } = props;

    return (
        <View style={styles.containe}>
            <Text style={styles.texto}>Imperador</Text>
            <Text style={styles.texto}>nome:{nome}</Text>
            <Text style={styles.texto}>idade:{idade}</Text>
            <Text style={styles.texto}>inicioImperio:{inicioImperio}</Text>
            <Text style={styles.texto}>imperiofinal:{imperiofinal}</Text>

            <Image
                source={{ uri:imagem }}
                style={{
                    height: 200,
                    width: 200
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    containe: {
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 15,
        fontWeight: 600
    }
})