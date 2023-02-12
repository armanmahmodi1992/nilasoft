import { View, FlatList, StyleSheet, Text } from 'react-native'
import { Divider } from 'native-base';
import React from 'react'
import { items } from '~/store/MessageData';
import MessageCart from '~/components/atom/MessageCart';
import { colors } from '~/styles';

const renderItem = ({ item }: { item: any }) => {
    return (
        <MessageCart items={item} />
    )
}

const itemSeparator = () => (
    <Divider m='2' />
)

export default function MessagesScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={items}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        flexGrow: 1,
        marginHorizontal: 4,
        backgroundColor: colors.GARY_4
    }
})