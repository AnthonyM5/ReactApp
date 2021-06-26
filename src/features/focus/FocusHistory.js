import React from "react"
import { View, StyleSheet, FlatList, Text, SafeAreaView } 
from "react-native"

import { fontSizes } from "../../utils/Sizes"
import { RoundedButton } from "../../components/RoundedButton"

const HistoryItem = ({item, index}) => {
    return (
    <Text style={item.status > 1 ? styles.incomplete : styles.complete }>{item.subject}</Text>
    )
}


export const FocusHistory = ({focusHistory, onClear}) => {
    const clearHistory = () => {
        onClear()
    }
    return (
        <>
        <SafeAreaView style={{flex: 0.5}}>
            <Text style={styles.title}>
                FocusTime History
            </Text>
            {!!focusHistory.length && 
            <FlatList
                style={{flex: 1}}
                contentContainerStyle={{flex: 1, alignItems: 'center'}}
                data={focusHistory}
                renderItem={HistoryItem}
            />}
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: fontSizes.lg
    },
    complete: {
        color: 'green',
        fontSize: fontSizes.md
    },
    incomplete: {
        color: 'red',
        fontSize: fontSizes.md
    }
})