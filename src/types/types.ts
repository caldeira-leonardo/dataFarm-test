import {NavigationProp} from '@react-navigation/native';

export type NavigationType = {
  navigation?: NavigationProp<RootStackParamList>;
};

export type RootStackParamList = {
  [name: string]: undefined;
};
