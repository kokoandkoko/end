import React , {Component} from 'react';
import {View} from 'react-native'; 
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
              <Stack.Screen name="Login" component={LoginScreen}/>
              <Stack.Screen name="Main" component={MainScreen}/>      
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
export default App;