import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '~/navigation/TabNavigator';

export type MainStackParamList = { TabNavigator: undefined };

export default function MainStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
            </Stack.Navigator>
        </>
    );
}
