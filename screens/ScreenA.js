import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { findAll, insert } from '../database/localdb'

const ScreenA = ({dbInit}) => {
  
  const [setList, setSetList] = useState([])

  useEffect(() => {
    findAll()
      .then(res => console.log("findallres: ", res))
  }, [dbInit])

  const handleAdd = (gymSet) => {
    insert(gymSet)
      .then(res => console.log("insertres: ", res))
  } 


  return (
    <View>
      <Text>ScreenA</Text>
    </View>
  )
}

export default ScreenA