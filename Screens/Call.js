import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';



export default function Call(props){

  return(
    <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image} source={require('./../assets/call.png')}>
        <TouchableOpacity style={{ marginTop: 550 }} activeOpacity={.5} onPress={() => props.navigation.navigate('home')}>
        <Image style={{ width: 120, height: 120, alignSelf: 'center', borderRadius: 80}} source={require('./../assets/endCall.png')} />
        </TouchableOpacity>
      </ImageBackground>
  </View>
  )

  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
})