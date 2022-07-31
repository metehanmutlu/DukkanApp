import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Register from '../screens/Register';

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Register'
                component={Register}
            />
        </Stack.Navigator>
    )
}

export default AuthStack