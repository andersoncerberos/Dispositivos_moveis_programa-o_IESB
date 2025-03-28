import { StyleSheet, Text, View, Image } from "react-native"

export default function Atleta(props) {

    const { nome, idade, numero, imagem } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Atleta</Text>
            <Text style={styles.texto}>nome:{nome}</Text>
            <Text style={styles.texto}>idade:{idade}</Text>
            <Text style={styles.texto}>numero:{numero}</Text>

            <Image
                source={{ uri: imagem }}
                style={{
                    height: 200,
                    width: 200
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'yellow',
        padding: 10,
        alignItems: 'center'
    },
    texto: {
        fontSize: 20,
        fontWeight: 700,
        color: 'yellow',
    }

})