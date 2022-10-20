import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BagContext from "../Store/Context";
import { AntDesign } from '@expo/vector-icons';

const BagItem = ({ bagItem }) => {
  const navigation = useNavigation();
  const { bagCart, setBagCart } = useContext(BagContext);

  const handleBuyBag = () => {

    navigation.navigate("Detail");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBuyBag}>
        <View style={{ alignItems: "center" }}>
          <View>
            <AntDesign name="hearto" size={24} color="black" style={{ marginLeft: 135 }} />

            <Image source={bagItem.image} style={{ height: 170 }} />
          </View>

          <Text style={{ marginLeft: 50, fontSize: 18 ,marginTop:15}}>+ Add to cart</Text>

          <View>
            <Text style={{ marginTop: 20, fontSize: 18 }}>{bagItem.name}</Text>

            <Text style={{ fontSize: 18 }}>{bagItem.type}</Text>

            <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 12 }}>{bagItem.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BagItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginRight: 30,
  },
})