import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Clock, Menu, RefreshCcw} from 'react-native-feather';
import {IconProps, TabOptionsProps} from './TabTypes';
import LogoutButton from '@src/components/elements/LogoutButton/LogoutButton';
import BackButton from '@src/components/elements/BackButton/BackButton';
import {Theme} from '@src/Theme/Theme';
import StopRecord from '@src/Pages/StopRecord/containers/StopRecord';
import HistoryActivity from '@src/Pages/HistoryActivity/containers/HistoryActivity';
import {Dimensions} from 'react-native';
import HeaderTitle from '@src/components/elements/Header/HeaderTitle';
import SyncData from '@src/Pages/SyncData/containers/SyncData';

const Tab = createBottomTabNavigator();

function handleTabOption({icon, color}: TabOptionsProps) {
  const Icon: IconProps = {
    clock: <Clock color={color} strokeWidth={3} scaleX={1.3} scaleY={1.3} />,
    refresh: (
      <RefreshCcw color={color} strokeWidth={3} scaleX={1.3} scaleY={1.3} />
    ),
    menu: <Menu color={color} strokeWidth={3} scaleX={1.3} scaleY={1.3} />,
  };

  return Icon[icon];
}

export default function LoguedTabs() {
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
          headerTitle: () => HeaderTitle('Histórico atividades'),
        }}
      />
      <Tab.Screen
        name="Registro"
        component={StopRecord}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'menu'}),
          headerTitle: () => HeaderTitle('Registro parada'),
        }}
      />
      <Tab.Screen
        name="Sincronizar"
        component={SyncData}
        options={{
          tabBarIcon: props => handleTabOption({...props, icon: 'refresh'}),
          headerTitle: ({children}) => HeaderTitle(children),
        }}
      />
    </Tab.Navigator>
  );
}
