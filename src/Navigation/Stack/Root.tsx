import React from 'react';

import Login from '../../components/Login/containers/Login';
import LoguedTabs from '../Tab/Tab';

import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Teste"
        options={{headerShown: false}}
        component={LoguedTabs}
      />
    </Stack.Navigator>
  );
}
