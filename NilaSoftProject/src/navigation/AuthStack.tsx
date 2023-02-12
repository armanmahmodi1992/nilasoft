import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens';
export type AuthStackParamList = { ProfileScreen: undefined };

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
            </Stack.Navigator>
        </>
    );
}