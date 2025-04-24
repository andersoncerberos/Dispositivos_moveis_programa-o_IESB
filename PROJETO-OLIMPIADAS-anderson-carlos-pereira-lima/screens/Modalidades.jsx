import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { PaperProvider, Card } from 'react-native-paper'
import React from 'react'



export default function Modalidades() {

    const modalidades = [
        {
            id: 1,
            nome: "Atletismo",
            tipo: "Individual/Coletivo",
            categoria: "Olímpica",
            local: "Stade de France",
            numeroAtletas: 2000,
            imagem: "https://i.pinimg.com/236x/cf/56/1e/cf561eefad5856c8205a34fa9dcd3677.jpg"
        },
        {
            id: 2,
            nome: "Natação",
            tipo: "Individual",
            categoria: "Olímpica",
            local: "Paris La Défense Arena",
            numeroAtletas: 1500,
            imagem: "https://i.pinimg.com/236x/e4/38/30/e4383044d0dcaf6f37a86a6600b00afe.jpg"
        },
        {
            id: 3,
            nome: "Ginástica Artística",
            tipo: "Individual",
            categoria: "Olímpica",
            local: "Arena Bercy",
            numeroAtletas: 500,
            imagem: "https://i.pinimg.com/236x/fd/40/f2/fd40f2ce36d18c4078a64b07f3a60146.jpg"
        },
        {
            id: 4,
            nome: "Vôlei",
            tipo: "Coletivo",
            categoria: "Olímpica",

            local: "Stade Pierre-Mauroy",
            numeroAtletas: 288,
            imagem: "https://i.pinimg.com/236x/fb/ee/45/fbee459fd2cbf029c89bb6a5ed27fbbf.jpg"
        },
        {
            id: 5,
            nome: "Basquete",
            tipo: "Coletivo",
            categoria: "Olímpica",
            local: "Arena Bercy",
            numeroAtletas: 288,
            imagem: "https://i.pinimg.com/236x/2e/a5/f1/2ea5f13671c34288c2c0f1adf04da63f.jpg"
        }
    ];

    const ModalidadeCard = ({ item }) => (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.imagem }} />
            <Card.Content>
                <Text style={styles.titulo}>{item.nome}</Text>
                <Text>Tipo: {item.tipo}</Text>
                <Text>Categoria: {item.categoria}</Text>
                <Text>Local: {item.local}</Text>
                <Text>Nº de Atletas: {item.numeroAtletas}</Text>
            </Card.Content>
        </Card>
    );

    return (
        <PaperProvider>
            <View style={styles.container}>
                <FlatList
                    data={modalidades}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ModalidadeCard item={item} />}
                />
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#f0f0f0',
    },
    card: {
        marginBottom: 16,
        borderRadius: 10,
        overflow: 'hidden',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    }
});