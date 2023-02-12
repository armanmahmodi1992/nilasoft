import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen, ProfileScreen } from '../screens';
import ChatStack from '../navigation/ChatStack';

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
            <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
            <Tab.Screen name={'ChatStack'} component={ChatStack} />
            <Tab.Screen name={'ProfileScreen'} component={ProfileScreen} />
        </Tab.Navigator>
    );
}
