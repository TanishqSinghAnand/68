import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Iframe from 'react-iframe';
import {Header} from 'react-native-elements'

export default class Insta extends React.Component {
  render(){
  return( 
    <View>
      <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Instagram',
              style: { color: '#fff', fontSize: 20 },
            }}
      />
      <Text style={styles.t1}>HI Welcome to Instagram</Text>
    </View>
  );
  
  }
}


const styles = StyleSheet.create({
  t1:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center",
    textAlign:"center",
    marginTop:252,
  }
});