import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native';


export const AddToDo = ({onSubmit}) => {
    const [task, setTask] = useState('')


    const addTask = () => {
        onSubmit(task)
    }

    return <View style={styles.block}>
        <TextInput
            style={styles.input}
            onChangeText={text => setTask(text)}
        />
        <View style={styles.button}>
            <Button
                title={"Add"}
                onPress={addTask}
            />
        </View>
    </View>
}


// ____________ styles for addToDo component_____________


export const styles = StyleSheet.create({
    block: {
        width: "100%",
        flexDirection: 'row',
        height: 70,
        backgroundColor: "#fff",
        color: "#069",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    button: {
        width: "20%"

    },
    input: {
        width: "70%",
        height: 38,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: '#069',
        padding: 10

    }
})