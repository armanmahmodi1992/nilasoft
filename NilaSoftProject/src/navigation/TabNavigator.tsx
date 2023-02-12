import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatStack from '../navigation/ChatStack';
import HomeStack from '../navigation/HomeStack';
import { ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export type TabNavigatorStackParamList = {
    HomeScreen: any;
    ProfileScreen: any;
};
export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            backBehavior="initialRoute"
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                keyboardHidesTabBar: true,


            })}>
            <Tab.Screen
                name={'ProfileScreen'}
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'پروفایل',

                }}
            />
            <Tab.Screen
                name={'ChatStack'}
                component={ChatStack}
                options={{ tabBarLabel: 'چت' }}
            />
            <Tab.Screen
                name={'HomeStack'}
                component={HomeStack}
                options={{ tabBarLabel: 'صفحه اصلی' }}
            />
        </Tab.Navigator>
    );
}
