import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'

import { findAll, insert } from '../database/localdb'

const ScreenA = ({dbInit}) => {
  
  const [setList, setSetList] = useState([])

  useEffect(() => {
    findAll()
      .then(res => setSetList(res))
  }, [dbInit])

  // här ska dt dekoreras lite mer och finnas en knapp som ändrar done till true.
  const _renderdItem = ({ item }) => {
    return (
      <View>
        <Text>{item.equivalent}</Text>
      </View>
    )
  }


  return (
    <View>
      <Text>Bajs</Text>
      <FlatList 
        data={setList}
        renderItem={_renderdItem}
        keyExtractor={(item, index) => index}
      />
    </View>

  )
}

export default ScreenA