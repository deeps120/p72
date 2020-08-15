import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadScreen extends React.Component{
  render(){
    return(
<View>
<Text style={styles.text}>read stories!</Text>
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
 }
});
