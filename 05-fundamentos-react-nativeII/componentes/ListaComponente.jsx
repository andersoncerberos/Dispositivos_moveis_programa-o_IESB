import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const listacarros = ["gol", "celta", "palio", "uno", "fiat", "punto", "corola"]

    return (
        <View style={styles.container}>

            {/* {listacarros.map(
                (carro) => <Text>{carro}</Text>
            )}

            {listacarros.map(
                carro => <Text>{carro}</Text>
            )

            }

            {listacarros.map(
                (carro) => {
                    return (
                        <View style={styles.containervermelhor}>
                            <Text>{carro}</Text>
                        </View>
                    )
                }
            )} */}

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontsize: 15,
        fontweight: 700
    },
    containervermelhor: {
        backgroundColor: 'red',
        borderWidth: 5,
        padding: 10
    }
})