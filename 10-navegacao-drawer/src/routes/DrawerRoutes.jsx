import React from 'react'
import {Ionicons} from '@expo/vector-icons'

import HomeScrens from '../screens/HomeScrens'
import ConfingScreens from '../screens/ConfingScreens'
import ProfileScreens from '../screens/ProfileScreens'
import UserScreens from '../screens/UserScreens'



import { createDrawerNavigator } from '@react-navigation/drawer'



const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (

        <Drawer.Navigator>
            <Drawer.Screen
                name='HomeScrens'
                component={HomeScrens}
                options={{
                    title: "INICIO",
                    drawerIcon:({color , size}) => <Ionicons name = 'home' color = {color} sixe = {size}/>
                }}
            />


            <Drawer.Screen name='ConfingScreens' component={ConfingScreens} />
            <Drawer.Screen name='ProfileScreens' component={ProfileScreens} />
            <Drawer.Screen name='UserScreens' component={UserScreens} />
        </Drawer.Navigator>



    )
}

