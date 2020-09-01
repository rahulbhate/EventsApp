import 'react-native-gesture-handler';
import React from 'react';
import EventList from './src/components/EventList';
import EventForm from './src/components/EventForm';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const  MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Event List" component={EventList} />
      <Stack.Screen name="Event Form" component={EventForm} />
    </Stack.Navigator>
  );
}
const  App = () =>  {
  return (
    <>
    <NavigationContainer>
      <MyStack />
     </NavigationContainer>
     </>
  );
}
export default App;
