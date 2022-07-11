import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/Products/Products';
import Detail from './screens/Detail/Detail';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTransparent: false
        }}
      >
        <Stack.Screen name='Products' component={Products} options={{
          title: 'Dükkan',
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white', fontSize: 18 },
          headerShown: false
        }}
        />
        <Stack.Screen name='Detail' component={Detail}
          options={{
            title: 'Detay',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white', fontSize: 18 },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App