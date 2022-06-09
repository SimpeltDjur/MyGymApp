import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ScreenA  from './screens/ScreenA'
import ScreenB from './screens/ScreenB'

export default function App() {
  
  const Tab = createBottomTabNavigator();
  


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ScreenA" component={ScreenA} />
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
