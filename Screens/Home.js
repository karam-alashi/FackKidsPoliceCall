import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Context } from '../Providers/FackCallMusic';




export default function Home(props){
    return(
    <Context.Consumer>
      {(dataContext) => {
        return (
          <ImageBackground resizeMode="cover" style={styles.image} source={require('./../assets/home.png')}>
            <View style={styles.container}>
              <Image style={{ width: 150, height: 150, marginTop: 130 }} source={require('./../assets/app.png')} />
              <Text style={{ marginTop: 50, fontSize: 20, textAlign: 'center', color: '#313f4f', fontWeight: 'bold' }}>مرحبا بكم في تطبيق شرطة الاطفال لاجراء المكالمة اضغط على الزر بالاسفل</Text>
              <TouchableOpacity activeOpacity={.5} onPress={() => {dataContext.music.play();props.navigation.navigate("call")}} style={{ width:170, height: 50, backgroundColor: '#40a38c', marginTop: 20, }}>
                <Text style={{ textAlign: 'center', marginTop: 14, fontSize: 20, fontWeight: 'bold', color: '#fff' }}>اتصال</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        )}
      }
    </Context.Consumer>
     
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
})