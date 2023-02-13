import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatScreen, MessagesScreen } from '~/screens';
import CustomHeader from '~/components/atom/CustomeHeader';

export type ChatStackParamList = { ChatScreen: undefined };

export default function ChatStack() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'MessagesScreen'} component={MessagesScreen}
                    options={{
                        headerTitle: 'ChatList',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }} />


            </Stack.Navigator>
        </>
    );
}
