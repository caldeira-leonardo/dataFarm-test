import React from 'react';
import Login from '../../components/Login/containers/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Clock, Menu, RefreshCcw} from 'react-native-feather';
import {IconProps, TabOptionsProps} from './TabTypes';
import LogoutButton from '../../components/elements/LogoutButton/LogoutButton';
import BackButton from '../../components/elements/BackButton/BackButton';
import StopRecordComponent from '../../components/StopRecord/components/StopRecordComponent';
import {useNavigation} from '../../Context/navigationContext';

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
      backBehavior="history"
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: LogoutButton,
        headerLeft: BackButton,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={StopRecordComponent}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'clock'}),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={StopRecordComponent}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'menu'}),
        }}
      />
      <Tab.Screen
        name="Sincronizar"
        component={Login}
        options={{
          tabBarBadge: '',
          tabBarIcon: props => handleTabOption({...props, icon: 'refresh'}),
        }}
      />
    </Tab.Navigator>
  );
}
