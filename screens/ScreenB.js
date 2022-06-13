import React, { useState } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { findAll, insert } from '../database/localdb';
import Set from '../models/Set';


const ScreenB = () => {

  


  const [weight, setWeight] = useState("Weight");
  const [reps, setReps] = useState("Reps");

  const handleWeightChange = (input) => {
    setWeight(input)
  }
  const handleRepsChange = (input) => {
    setReps(input)
  }
  const handleAdd = () => {
    const tw = Number(weight)
    const tr = Number(reps);
    const gymSet = new Set(tw, tr);
    insert(gymSet)
  }


  return (
    <View>
        <Text>Just nu matar man in gymSet här men senare ska det ta in startvärden och räkna ut serier</Text>
        <TextInput 
          onChangeText={handleWeightChange} 
          value={weight}
            />
        <TextInput 
          onChangeText={handleRepsChange} 
          value={reps}
            />
        <Pressable
          onPress={handleAdd}>
          <Text>Add</Text>
        </Pressable>
    </View>
  )
}

export default ScreenB