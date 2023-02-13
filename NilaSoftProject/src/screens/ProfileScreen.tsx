import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomContainer from '~/components/atom/CustomContainer';

export default function ProfileScreen() {
    return (
        <CustomContainer>
            <Text>صفحه پروفایل</Text>
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
