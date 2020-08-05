import React from 'react'
import {StyleSheet, Text, View} from 'react-native';


export const NavBar = ({text}) => {
    return <View style={styles.navBar}>
        <Text style={styles.text}>{text}</Text>
    </View>
}


// ____________ styles for Header component_____________


const styles = StyleSheet.create({
    navBar: {
        width: "100%",
        height: 70,
        backgroundColor: "#069",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 20,
    }
})