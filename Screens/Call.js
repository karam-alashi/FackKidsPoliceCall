import React from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Context } from '../Providers/FackCallMusic';



export default function Call(props){

  return(
    <Context.Consumer>
      {(dataContext) => {
        return(
          <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.image} source={require('./../assets/call.png')}>
              <TouchableOpacity style={{ marginTop: 550 }} activeOpacity={.5} onPress={() => {dataContext.music.stop();props.navigation.navigate('home')}}>
              <Image style={{ width: 120, height: 120, alignSelf: 'center', borderRadius: 80}} source={require('./../assets/endCall.png')} />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )
      }}
    </Context.Consumer>

    
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


