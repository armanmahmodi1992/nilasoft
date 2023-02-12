import React from 'react';
import { HStack, IconButton, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const CustomHeader = ({
    back,
    route,
    options,
    navigation,
}: NativeStackHeaderProps) => {
    return (
        <HStack alignItems="center" h="50px" px="4" justifyContent='flex-end'>
            {back && (
                <IconButton
                    onPress={() => navigation.goBack()}
                    icon={<Icon name="chevron-forward" size={24} />}
                />
            )}
            <Text
                fontSize={19}
                textAlign="center">
                {options?.headerTitle}
            </Text>
        </HStack>
    );
};

export default CustomHeader;
