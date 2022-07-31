import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/Products/Products';
import Detail from '../screens/Detail/Detail';
import React from 'react'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
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
    )
}

export default AppStack