import { View, FlatList, StyleSheet } from 'react-native'
import { Divider } from 'native-base';
import React from 'react'
import { items } from '~/store/MessageData';
import MessageCard from '~/components/atom/MessageCard';
import { colors } from '~/styles';
import CustomContainer from '~/components/atom/CustomContainer';

const renderItem = ({ item }: { item: any }) => {
    return (
        <MessageCard item={item} />
    )
}

const itemSeparator = () => (
    <Divider m='4' />
)

export default function MessagesScreen() {
    return (
        <CustomContainer>
            <FlatList
                contentContainerStyle={styles.contentContainerStyle}
                data={items}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
            />
        </CustomContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        flexGrow: 1,
        marginHorizontal: 4,
    }
})