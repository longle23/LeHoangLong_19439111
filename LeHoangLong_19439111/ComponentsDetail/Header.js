import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import d1 from '../assets/img/d1.png'

const Header = () => {
    return (
        <View style={styles.container}>
            <View>
                <Feather name="menu" size={24} color="black" />
            </View>

            <View style={{ marginLeft: 250 }}>
                <Image source={d1} style={{ borderRadius: 30 }} />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: "row",
        padding: 10,
        borderRadius: 6,
    },
})