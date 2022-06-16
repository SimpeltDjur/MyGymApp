import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, FlatList, DeviceEventEmitter, Button, Pressable } from 'react-native'

import { findAll, insert } from '../database/localdb'

const ScreenA = ({dbInit}) => {

  useEffect(() => {
    return DeviceEventEmitter.removeAllListeners()
  }, [])
  
  const [setList, setSetList] = useState([])

  DeviceEventEmitter.addListener('addSetEvent', () => reRenderTheList())

  useEffect(() => {
    reRenderTheList()
  }, [dbInit])

  const reRenderTheList = () => {
    findAll()
      .then(res => setSetList(res))
  }

  const handleSuccess = (item) => {
    console.log("Här ska jag ändra om done till true");

  }

  // här ska dt dekoreras lite mer och finnas en knapp som ändrar done till true.
  const _renderdItem = ({ item }) => {
      return (
        <View>
          <Text>{item.weight} kg * {item.reps} reps motsvarar {item.equivalent} kg * 1 rep</Text>
          <Pressable onPress={() => handleSuccess(item)}><Text>Designa något fint här</Text></Pressable>
        </View>
      )
  }


  return (
    <View>
      <FlatList 
        data={setList}
        renderItem={_renderdItem}
        keyExtractor={(item, index) => index}
      />
    </View>

  )
}

export default ScreenA