import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useContext } from "react";
import BagContext from "../Store/Context";
import BagItem from "./BagItem";

const BagList = () => {
    const { bags } = useContext(BagContext);

    return (
        <View style={styles.container}>
            <FlatList
                data={bags}
                renderItem={({ item }) => <BagItem bagItem={item} />}
                keyExtractor={(item) => `${item.id}`}
                horizontal={true}
            />
        </View>
    );
}

export default BagList

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
});