import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends React.Component{
    goToReadScreen=()=>{
        this.props.navigation.navigate('ReadScreen')
      }
      goToWriteScreen=()=>{
        this.props.navigation.navigate('WriteScreen')
      }
    render(){
        return(
            <View style={styles.textContainer}>
                <Text style={styles.head}>Welcome To StoryHub!</Text>

                <TouchableOpacity
                onPress={()=>{this.goToReadScreen()}}>
                <Text>read</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>{this.goToWriteScreen()}}>
                <Text>write</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    textContainer:{
        backgroundColor: 'aqua',
      },
      head:{
        color: 'white',
        padding: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
      }
})
export default HomeScreen;