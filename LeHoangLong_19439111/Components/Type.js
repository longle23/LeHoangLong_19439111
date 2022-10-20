import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Type = () => {
  return (
    <View style={{marginTop:30, flexDirection:'row'}}>
      <TouchableOpacity>
        <View style={{borderWidth:1, borderRadius:12, width:100, height:30, justifyContent:'center',backgroundColor:'black'}}>
            <Text style={{fontWeight:'bold', textAlign:'center', fontSize:18,color:'white'}}>ALL BAGS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{borderWidth:1, borderRadius:12, width:120, height:30, justifyContent:'center', marginLeft:10}}>
            <Text style={{fontWeight:'bold', textAlign:'center', fontSize:18}}>BACKPACKS</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{borderWidth:1, borderRadius:12, width:100, height:30, justifyContent:'center', marginLeft:10}}>
            <Text style={{fontWeight:'bold', textAlign:'center', fontSize:18}}>LUGGAGES</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Type

const styles = StyleSheet.create({})