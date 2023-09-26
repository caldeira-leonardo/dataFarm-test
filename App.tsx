import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/Navigation/Stack/Root';
import {UserProvider} from './src/Context/userContext';

function App(): JSX.Element {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
