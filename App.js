import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Call from './Screens/Call';
import { FackCallProvider } from './Providers/FackCallMusic';







const Stack = createNativeStackNavigator();

function Test(){
  return <FackCallProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      } > 
        <Stack.Screen
          name='home'
          component={Home}
      />
      <Stack.Screen
          name='call'
          component={Call}
      />
      </Stack.Navigator>
      </NavigationContainer>
    </FackCallProvider>
}

export default Test
