import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/Navigation/Stack/Root';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  );
}

export default App;
