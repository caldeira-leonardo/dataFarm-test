import {NavigationProp} from '@react-navigation/native';

export type NavigationType = {
  navigation?: NavigationProp<RootStackParamList>;
};

export type RootStackParamList = {
  Login: undefined;
  Teste: undefined;
  Home: undefined;
  Settings: undefined;
  Sincronizar: undefined;
};
