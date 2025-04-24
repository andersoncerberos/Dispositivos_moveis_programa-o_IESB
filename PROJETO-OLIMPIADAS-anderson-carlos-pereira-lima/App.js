import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modalidades from './screens/Modalidades.jsx';
import Arenas from './screens/Arenas.jsx'
import Estatisticas from './screens/Estatisticas.jsx'
import Olimpiadas from './screens/Olimpiadas.jsx'



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name='Modalidade'
            component={Modalidades}
            options={{
              title: 'modalidade',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='alpha-m-circle' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='Arenas'
            component={Arenas}
            options={{
              title: 'arenas',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='alpha-a-circle' color={color} size={size} />
            }}
          />

          <Tab.Screen
            name='Estatisticas'
            component={Estatisticas}
            options={{
              title: 'estatiticas',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='alpha-e-circle' color={color} size={size} />
            }}
          />
          <Tab.Screen
            name='Olimpiadas'
            component={Olimpiadas}
            options={{
              title: 'olimpiadas',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'green'
              },
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='alpha-o-circle' color={color} size={size} />
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
