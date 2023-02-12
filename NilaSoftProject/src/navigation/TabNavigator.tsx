import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen, ProfileScreen } from '../screens';
import ChatStack from '../navigation/ChatStack';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                name={'HomeScreen'}
                component={HomeScreen}
                options={{ tabBarLabel: 'صفحه اصلی' }}
            />
        </Tab.Navigator>
    );
}
