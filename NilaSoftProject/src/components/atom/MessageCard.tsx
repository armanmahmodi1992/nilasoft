import { HStack, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomImage from '~/components/atom/CustomImage';
import { navigate } from '~/navigation/Methods';
import { colors } from '~/styles';

export default function MessageCard({ item }: { item: any }) {

    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => navigate('Chat', { conversationId: 1, userId: 2 })}>
                <HStack h='60' w='100%' direction='row-reverse' alignItems='center' borderRadius='10' p='2' >
                    <Text style={styles.description}>{item?.name}</Text>
                    <CustomImage local style={styles.image} imageSource={item?.avatar} resizeMode='cover' />
                </HStack>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    description: {
        fontSize: 12,
        textAlignVertical: 'center',
        flex: 1

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.GARY_4,
        overflow: 'hidden'
    },

});

