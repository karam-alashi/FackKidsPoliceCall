import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


export default function EndCallButton(){
    return <View style={styles.container}>
        <View style={styles.Button}>
        {/* <Text>jhdfgjsdghj</Text> */}
        <Image />
        </View>
    </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
      padding: 40,
      backgroundColor: 'red',
      borderRadius: 50
  }
});