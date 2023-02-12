import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ChatStack from '~/navigation/ChatStack';
import HomeStack from '~/navigation/HomeStack';
import AuthStack from '~/navigation/AuthStack';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export type TabNavigatorStackParamList = {
    HomeStack: any;
    AuthStack: any;
    ChatStack: any;
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
                tabBarIcon: ({ focused, color, size }) => {
                    var iconName: any;
                    if (route.name === 'AuthStack') {
                        iconName = focused ? 'user' : 'user';
                    } else if (route.name === 'ChatStack') {
                        iconName = focused ? 'comment' : 'comment';
                    } else if (route.name === 'HomeStack') {
                        iconName = focused ? 'home' : 'home';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen
                name={'AuthStack'}
                component={AuthStack}
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
