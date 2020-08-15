import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';
import HomeScreen from './screens/HomeScreen';

 class App extends React.Component{
  render(){
    return(
<View>
<AppContainer/>
</View>
    );
  }
}
const bottomTabNavigator = createBottomTabNavigator({
  home: {screen:HomeScreen},
  read: {screen: ReadScreen},
  write:{ screen: WriteScreen}
});
const AppContainer = createAppContainer(bottomTabNavigator);
export default App;