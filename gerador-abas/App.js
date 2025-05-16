import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'

import MegaSenaScreen from './src/screens/MegaSenaScreen';
import JogoDoBichoScreen from './src/screens/JogoDoBichoScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

         
          <Tab.Screen
            name='MegaSenaScreen'
            component={MegaSenaScreen}
            options={{
              title: 'Mega senna',
              tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
            }}
          />

          
          <Tab.Screen
            name='JogoDoBichoScreen'
            component={JogoDoBichoScreen}
            options={{
              title: 'jogo do bicho',
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


