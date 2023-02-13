import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '~/styles';

export default function CustomContainer(props: {
    children: any;
    isLoading?: boolean;
    style?: ViewStyle;
    backgroundColor?: string;
}) {

    const {
        style,
        children,
        isLoading = false,
        backgroundColor = colors.CHAT_BACKGROUND,
    } = props



    return (
        <View style={[styles.safeArea, style, { backgroundColor: backgroundColor }]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
});