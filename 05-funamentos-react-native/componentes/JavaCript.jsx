import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaCript() {

    const nome  ="anderson";
    const idade = 15;

    function exibirNome(){
        return nome
    }

    function checarIdade(){
        if(idade >= 18){
            return "maior de idade"
        }else{
            return "menor de idade"
        }
    }

    return (
        <View>
            <Text>JavaCript</Text>
            <Text>nome:{nome}</Text>
            <Text>idade:{idade}</Text>
            <Text>nome:{exibirNome()}</Text>
            <Text>resultado:{25+21}</Text>
            <Text>idade:{idade + 20}</Text>
            <Text>checarIdade:{checarIdade()}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {


    }
)