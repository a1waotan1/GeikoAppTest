import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import StartScreen from 'GeikoAppTest/src/screens/StartScreen.js';
import LoginScreen from 'GeikoAppTest/src/screens/LoginScreen.js';
import SignUpScreen from 'GeikoAppTest/src/screens/SignUpScreen.js';
import SignUpScreen2 from 'GeikoAppTest/src/screens/SignUpScreen2.js';
// import ModalScreen from './screens/BottomPopUpModal.js';

const Stack = createStackNavigator();

const AppStack = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name="Start" 
                component={StartScreen}
                options={{header: () => null}}/>
                 <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                />
                <Stack.Screen 
                name="SignUp" 
                component={SignUpScreen}
                />
                <Stack.Screen
                name="SignUp2"
                component={SignUpScreen2}/>
            </Stack.Navigator>
    );
}
 export default AppStack;

 