import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EscudoScreen from '../screens/EscudoScreen'
import JogadoresScreen from '../screens/JogadoresScreen'
import TitulosScreen from '../screens/TitulosScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'



const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (

        <Drawer.Navigator>
            <Drawer.Screen
                name='EscudoScreen'
                component={EscudoScreen}
                options={{
                    title: 'ESCUDOS',
                    headerTintColor: 'black',
                    backgroundColor: 'red',
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    drawerIcon:({color , size}) =><Feather name="shield" size={24} color="black" />
                }}
            />
            <Drawer.Screen
                name='JogadoresScreen'
                component={JogadoresScreen}
                options={{
                    title: 'JOGADORES',
                    headerTintColor: 'black',
                    backgroundColor: 'red',
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    drawerIcon:({color , size}) =><FontAwesome name="futbol-o" size={24} color="black" />

                }}
            />
            <Drawer.Screen
                name='Titulos'
                component={TitulosScreen}
                options={{
                    title: 'TITULOS',
                   
                    headerTintColor: 'black',
                    backgroundColor: 'red',
                    headerStyle: {
                        backgroundColor: 'red'
                    },
                    drawerIcon:({color , size}) =><MaterialIcons name="title" size={24} color="black" />

                }}
            />
        </Drawer.Navigator>



    )
}

