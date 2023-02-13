import React from 'react';
import { HStack, Text, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import CustomImage from '~/components/atom/CustomImage';
import images from '~/assets/images';
import { colors } from '~/styles';

const CustomHeader = ({
    back,
    route,
    options,
    navigation,
}: NativeStackHeaderProps) => {
    return (
        <HStack alignItems="center" h="70px" space='2' px="4" bgColor={colors.PRIMARY_LIGHT} >
            <IconButton
                onPress={() => { }}
                icon={<Icon name="chevron-back-outline" size={24} />}
            />
            <CustomImage imageSource={images.avatar1} local style={styles.image} />
            <Text flex={1}>Jack</Text>
            <Icon name="ellipsis-vertical" size={24} color={colors.GARY_4} />
        </HStack>
    );
};

export default CustomHeader;
const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.GARY_4,
        overflow: 'hidden'
    },
})