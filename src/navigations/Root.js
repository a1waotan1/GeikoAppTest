import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import StartScreen from 'GeikoAppTest/src/screens/StartScreen.js';
// import LoginScreen from './screens/LoginScreen.js';
// import ModalScreen from './screens/BottomPopUpModal.js';

const Stack = createStackNavigator();

const AppStack = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen 
                name="Start" 
                component={StartScreen}
                options={{header: () => null}}/>
                
            </Stack.Navigator>
    );
}
 export default AppStack;
