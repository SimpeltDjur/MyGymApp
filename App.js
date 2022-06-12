import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA  from './screens/ScreenA'
import ScreenB from './screens/ScreenB'
import Set from './models/Set'
import { useEffect, useState } from 'react';
import { findAll, initDB } from './database/localdb';

export default function App() {
  
  const [dbInit, setDbInit] = useState(false);

  const Tab = createBottomTabNavigator();

  useEffect(() => {
    initDB().then(res => {
        console.log("initres: ", res)
        setDbInit(true);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="ScreenA" 
          component={ScreenA} 
          initialParams={{dbInit: dbInit}}
          />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
