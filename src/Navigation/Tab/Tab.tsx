import React from 'react';
import Login from '../../components/Login/containers/Login';
import TesteComponent from '../../components/Teste/Teste';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function LoguedTabs() {
  return (
    <Tab.Navigator initialRouteName="Settings">
      <Tab.Screen name="Home" component={Login} />
      <Tab.Screen name="Settings" component={TesteComponent} />
      <Tab.Screen name="Sincronizar" component={TesteComponent} />
    </Tab.Navigator>
  );
}
