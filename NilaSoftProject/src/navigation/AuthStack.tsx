import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '~/screens';
import CustomHeader from '~/components/atom/CustomeHeader';

export type AuthStackParamList = { ProfileScreen: undefined };

export default function AuthStack() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'ProfileScreen'} component={ProfileScreen}
                    options={{
                        headerTitle: 'Profile',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader back {...{ route, options, navigation }} />
                        ),
                    }} />
            </Stack.Navigator>
        </>
    );
}