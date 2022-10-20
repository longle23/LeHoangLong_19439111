import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../ComponentsDetail/Header'
import b4 from '../assets/img/b4.png'
import d3 from '../assets/img/d3.png'
import { AntDesign } from '@expo/vector-icons';
import b1 from '../assets/img/b1.png'


const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={{ fontSize: 22, marginTop: 30, marginLeft: 15 }}>Ad-Lib Shoulder Bag. Classic</Text>

      <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 50 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>4.9</Text>

        <Text style={{ fontSize: 22, textAlign: 'center', marginLeft: 20 }}>1k+ Review</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Image source={b4} style={{ marginLeft: 20 }} />

        <Image source={d3} style={{ marginLeft: 30 }} />

        <AntDesign name="hearto" size={30} color="black" style={{ marginLeft: 180 }} />
      </View>

      <Image source={b1} style={{ marginTop: 30, alignSelf: 'center', width: 230, height: 230 }} />

      <Text>__________________________________________________</Text>

      <Text style={{ fontSize: 18 }}>WHAT WERE MADE OF                          +</Text>

      <Text>__________________________________________________</Text>

      <Text style={{ fontSize: 18 }}>SHPPING                                                   +</Text>

      <Text>__________________________________________________</Text>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 22 }}>$905</Text>

        <TouchableOpacity>
          <View style={{ backgroundColor: 'gray', borderRadius: 10, width: 220, height: 35, justifyContent: 'center', marginLeft: 45 }}>
            <Text style={{ fontSize: 22, textAlign: 'center', color: 'white' }}>+ Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
})