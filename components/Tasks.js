import React from 'react'
import {StyleSheet, Text, View} from 'react-native';


export const Task = ({task}) => {
    return <View style={styles.container}>
        <Text
            style={styles.text}
        >
            {task}</Text>
    </View>
}

// ____________ styles for Tasks component_____________

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingLeft: 30,
        justifyContent: 'flex-start',
    },
    text: {
        color: "#069",
        fontSize: 20,
    }
});