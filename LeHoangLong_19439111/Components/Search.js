import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <AntDesign name="search1" size={36} color="black" />
            </TouchableOpacity>

            <TextInput placeholder="Search" plce style={styles.input} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop:30,
    },
    input: {
        flex: 1,
        borderColor: "black",
        padding: 10,
        fontSize: 16,
    },
    btn: {
        justifyContent: "center",
        marginLeft: 20,
        paddingHorizontal: 15,
        borderRadius: 6,
        marginLeft:12
    },
})