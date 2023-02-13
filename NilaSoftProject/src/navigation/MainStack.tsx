import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '~/navigation/TabNavigator';
import { ChatScreen } from '~/screens';

export type MainStackParamList = { TabNavigator: undefined, Chat: { conversationId: number; userId: number } };

export default function MainStackNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
                <Stack.Screen name={'Chat'} component={ChatScreen}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
}
