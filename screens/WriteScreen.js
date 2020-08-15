import React from 'react';
import { StyleSheet, Text, View ,TextInput} from 'react-native';

export default class WriteScreen extends React.Component{
  render(){
    return(
<View>
    <Text>write your own stories</Text>
<TextInput style={styles.input}
placeholder='author'></TextInput>
<TextInput style={styles.input}
placeholder='title'></TextInput>
<TextInput style={{ height:400,
      width:400,
      alignItems:'center',
      borderWidth:4 }}
      placeholder='story'></TextInput>
</View>
    );
  }
}
const styles = StyleSheet.create({
    text:{
        color:'black',
        textAlign:'center',
        fontSize:20,
        fontStyle:'oblique'
    },
    input:{
      height:50,
      width:100,
      alignItems:'center',
      borderWidth:4  ,
      margin:5
    }
   });