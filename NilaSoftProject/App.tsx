import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native';
import HomeStack from '~/navigation/MainStack';
import { navigationRef } from './src/navigation/Methods';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer ref={navigationRef}>
          <HomeStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
