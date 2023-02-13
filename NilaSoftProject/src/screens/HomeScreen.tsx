import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomContainer from '~/components/atom/CustomContainer';
export default function HomeScreen() {
    return (
        <CustomContainer>
            <Text>صفحه اصلی</Text>
        </CustomContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
