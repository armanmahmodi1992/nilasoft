import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatScreen } from '../screens';
export type MainStackParamList = { ChatScreen: undefined };

export default function ChatStack() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'ChatScreen'} component={ChatScreen} />
            </Stack.Navigator>
        </>
    );
}
