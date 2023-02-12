import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../screens';

export default function MainStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
            </Stack.Navigator>
        </>
    );
}
