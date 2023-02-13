import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '~/screens';
import CustomHeader from '~/components/atom/CustomeHeader';

export type HomeStackParamList = { HomeScreen: undefined };

export default function HomeStack() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={'HomeScreen'} component={HomeScreen}
                    options={{
                        headerTitle: 'Home',
                        headerShown: true,
                        header: ({ route, options, navigation }: any) => (
                            <CustomHeader {...{ route, options, navigation }} />
                        ),
                    }} />
            </Stack.Navigator>
        </>
    );
}