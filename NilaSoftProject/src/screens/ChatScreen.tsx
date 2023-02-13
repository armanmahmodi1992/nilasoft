import { Box, HStack } from 'native-base';
import React, { useRef, useState } from 'react';
import { FlatList, Keyboard, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatCard from '~/components/atom/ChatCard';
import CustomContainer from '~/components/atom/CustomContainer';
import { items } from '~/store/ChatData';
import { colors } from '~/styles';
import ChatHeader from '~/components/atom/ChatHeader';

export default function ChatScreen({ route }: { route: any }) {

    const { conversationId, userId: userId2 } = route.params;

    console.log({ conversationId, userId2 })
    const [chat, setChat] = useState(items)

    const flatListRef = useRef<FlatList>()

    const renderItem = ({ item }: { item: any }) => {
        return (
            <ChatCard item={item} />
        )
    }

    const itemSeparator = () => (<Box h='6' />)

    const onPressHandler = (val: string) => {
        let temp = chat;
        temp.push({ conversationId: 1, userId: 2, message: val, imageUrl: '' })
        setChat(temp)
    }

    return (
        <CustomContainer>
            <ChatHeader back />
            <FlatList
                ref={flatListRef}
                contentContainerStyle={styles.contentContainerStyle}
                data={items}
                keyExtractor={(_, index) => `itm${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                onContentSizeChange={() => { flatListRef?.current?.scrollToEnd({ animated: true }) }}
            />
            <ChatFooter onPress={onPressHandler} />
        </CustomContainer>
    )
}

export const ChatFooter = ({ onPress }: { onPress: any }) => {

    const [text, setText] = useState('')

    const onPressHandler = () => {
        onPress?.(text)
        setText('')
        Keyboard.dismiss()
    }

    return (
        <HStack space='3' p='3' alignItems='center' bg={colors.PRIMARY_LIGHT}>
            <TouchableOpacity >
                <Icon name='md-attach' size={40} color={colors.GARY_4} />
            </TouchableOpacity>
            <TextInput
                placeholder='Message'
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <TouchableOpacity onPress={onPressHandler} >
                <Icon name='send' size={35} color={colors.LINK} />
            </TouchableOpacity>
        </HStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: colors.CHAT_BACKGROUND,
        padding: 20

    },
    input: {

        flex: 1
    }

})

