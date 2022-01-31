import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, Button } from 'react-native'
import Sound from 'react-native-sound';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Call from './Screens/Call';

const Stack = createNativeStackNavigator();

// const App = () => {
//   const [music, setMusic] = useState(null)
//   const play = () => {
//     let summer = new Sound("dd.mp3", Sound.MAIN_BUNDLE, (err) => {
//       if (err) {
//         console.log('hata', err)
//         return
//       }
//       summer.play((success) => {
//         console.log('end', success)
//       })
//     })
//     // console.log('summer', summer)
//     setMusic(summer)
//   }
//   return (
//     <View>
//       <Button title="Start" onPress={() => { play() }} />
//       <Button title="stope" onPress={() => { music.stop(); }} />
//     </View>
//   )
// }

function Test(){
  return <NavigationContainer>
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
}

export default Test
