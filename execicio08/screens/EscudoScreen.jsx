import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, PaperProvider } from 'react-native-paper';

export default function EscudoScreen() {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <Text variant="displayLarge" style={{ color: 'black' }}>flamengo</Text>
                <Image
                    source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
                    style={styles.escudo}
                />
            </View>
        </PaperProvider>

    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    escudo: { width: 200, height: 200 }
});