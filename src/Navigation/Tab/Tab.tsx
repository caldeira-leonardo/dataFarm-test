import React from 'react';
import Login from '../../components/Login/containers/Login';
import TesteComponent from '../../components/Teste/Teste';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Clock, Menu, RefreshCcw} from 'react-native-feather';
import {IconProps, TabOptionsProps} from './TabTypes';
import LogoutButton from '../../components/elements/LogoutButton/LogoutButton';

const Tab = createBottomTabNavigator();

function handleTabOption({icon, color}: TabOptionsProps) {
  const Icon: IconProps = {
    clock: <Clock color={color} />,
    refresh: <RefreshCcw color={color} />,
    menu: <Menu color={color} />,
  };

  return Icon[icon];
}

export default function LoguedTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: LogoutButton,
      }}>
      <Tab.Screen
        name="Home"
        component={Login}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'clock'}),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TesteComponent}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'menu'}),
        }}
      />
      <Tab.Screen
        name="Sincronizar"
        component={TesteComponent}
        options={{
          tabBarBadge: '',
          tabBarIcon: props => handleTabOption({...props, icon: 'refresh'}),
        }}
      />
    </Tab.Navigator>
  );
}
