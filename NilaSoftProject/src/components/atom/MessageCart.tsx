import { HStack, Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import CustomImage from '~/components/atom/CustomImage';
import { colors } from '~/styles';

export default function CartCard({ items }: { items: any }) {
    console.log({ items })


    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => { }}>
                <HStack h='60' w='100%' direction='row-reverse' alignItems='center' borderWidth='1' borderRadius='10' p='2' borderColor={colors.GARY_4} >
                    <Text style={styles.description}>{items?.name}</Text>
                    {/* <CustomImage style={styles.image} imageSource={items?.avatar} resizeMode='cover' /> */}
                    <Image source={require('../../assets/images/1.jpg')} style={styles.image} />
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
        borderColor: colors.GARY_4
    },

});

