import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Type from '../Components/Type'
import BagList from '../Components/BagList'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />

            <Text style={{ fontWeight: 'bold', fontSize: 28, textAlign: 'center', marginTop: 30 }}>Get your Favorite Bag!</Text>

            <Search />

            <Type />

            <BagList />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
})