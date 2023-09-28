import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigation from './src/Navigation/Stack/Root';
import {UserProvider} from './src/Context/userContext';
import {GeoLocaTionProvider} from './src/Context/geolocationContext';

function App(): JSX.Element {
  return (
    <UserProvider>
      <GeoLocaTionProvider>
        <NavigationContainer>
          <RootStackNavigation />
        </NavigationContainer>
      </GeoLocaTionProvider>
    </UserProvider>
  );
}

export default App;
