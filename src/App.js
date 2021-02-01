import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppStack from './navigations/Root';

const App = () =>{
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default App;