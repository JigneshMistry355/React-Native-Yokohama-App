import 'react-native-gesture-handler'; /* Keep on top */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackBox from './components/Drawer/StackBox';

const App = () => {

  return (
    <>
      <NavigationContainer>
        <StackBox />
      </NavigationContainer>
    </> 
  );
}

export default App;