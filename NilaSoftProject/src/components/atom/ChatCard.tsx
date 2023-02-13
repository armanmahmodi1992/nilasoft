import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '~/styles';
import CustomImage from '~/components/atom/CustomImage';

const WIDTH = Dimensions.get('screen').width

export default function ChatCard({ item }: { item: any }) {

    const currentUser = item?.userId === 2

    return (
        <HStack w='100%' justifyContent={currentUser ? 'flex-start' : 'flex-end'}>
            {item?.imageUrl == '' ?
                <HStack maxW='85%' alignItems='center' px='4' py='2' borderRadius='20px' bg={currentUser ? colors.PRIMARY_LIGHT : colors.LINK} >
                    <Text>{item?.message}</Text>
                </HStack> :
                <VStack maxW='90%' borderRadius='10' bg={currentUser ? colors.PRIMARY_LIGHT : colors.LINK} >
                    <CustomImage local style={styles.image} imageSource={item?.imageUrl} resizeMode='cover' />
                    <HStack p='3'>
                        <Text>{item?.message}</Text>
                    </HStack>
                </VStack>
            }
        </HStack>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    image: {
        width: WIDTH - 130,
        height: 190,
        borderColor: colors.GARY_4,
    },

});

