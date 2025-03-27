import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function JavaScript() {
//logica do componente
    const nome = "JavaScript";
    const idade = 15;

    function checaridade(){
        console.log("chamou a fuinção checaridade")
        if(idade >= 18){
            return "maior de idade"
        }else{
            return "menor de idade"
        }
    }

    function alerta(){
        console.log("clicou no botao")
        alert("voce clicou no botao")
    }

//retorno com JSX
    return (
        <View style={styles.container}> 

            <Text style={styles.texto}>JavaScript</Text>
            <Text style={styles.texto}>nome:{nome}</Text>
            <Text style={styles.texto}>idade:{idade}</Text>
            <Text style={styles.texto}>idade somada com 40 :{idade+40}</Text>
            <Text style={styles.texto}>15 {checaridade()}</Text>

            <Button title='ENVIAR'onPress={alerta} color={"red"}></Button>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'yellow',
        borderWidth: 5,
        padding: 10
    },
    texto: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center"
    }
    
})