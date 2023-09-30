import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Clock, Menu, RefreshCcw} from 'react-native-feather';
import {IconProps, TabOptionsProps} from './TabTypes';
import LogoutButton from '../../components/elements/LogoutButton/LogoutButton';
import BackButton from '../../components/elements/BackButton/BackButton';
import {Theme} from '../../Theme/Theme';
import StopRecord from '../../Pages/StopRecord/containers/StopRecord';
import HistoryActivity from '../../Pages/HistoryActivity/containers/HistoryActivity';
import SyncData from '../../Pages/SyncData/containers/SyncData';
import {Dimensions} from 'react-native';
import {useUser} from '../../Context/userContext';

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
  const {testeUser} = useUser();
  const windowWidth = Dimensions.get('window').width;
  const headerTitleFontSize = windowWidth > 400 ? 24 : 20;

  return (
    <Tab.Navigator
      initialRouteName="Historico"
      backBehavior="history"
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: LogoutButton,
        headerLeft: BackButton,
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontSize: headerTitleFontSize,
        },
        tabBarActiveTintColor: Theme.colors.primary,
      }}>
      <Tab.Screen
        name="Historico"
        component={HistoryActivity}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'clock'}),
          title: 'Histórico atividades',
        }}
      />
      <Tab.Screen
        name="Registro"
        component={StopRecord}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'menu'}),
          title: 'Registro parada',
        }}
      />
      <Tab.Screen
        name="Sincronizar"
        component={SyncData}
        options={{
          tabBarBadge: testeUser ? '' : undefined,
          tabBarIcon: props => handleTabOption({...props, icon: 'refresh'}),
        }}
      />
    </Tab.Navigator>
  );
}
