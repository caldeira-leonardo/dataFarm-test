import React from 'react';

import LoguedTabs from '../Tab/Tab';
import Login from '../../Pages/Login/containers/Login';

import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../Types/types';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={LoguedTabs}
      />
    </Stack.Navigator>
  );
}
