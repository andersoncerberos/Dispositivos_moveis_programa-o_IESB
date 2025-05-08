import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function HomeScrens({ navigation, route }) {
  return (
    <View>
      <Text>HomeScrens</Text>

      <Button

        mode='contained'
        onPress={() => navigation.openDrawer()}
      >
        abrir Drawer
      </Button >

      <Button
        mode='contained'
        onPress={() => {
          navigation.openDrawer()
          setTimeout(() => {
            navigation.closeDrawer()
          }, 3000)
        }}
      >
        Abrir Drawer e Fechar
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({})