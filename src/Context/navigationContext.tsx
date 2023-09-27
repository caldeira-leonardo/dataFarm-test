import {NavigationContext} from '@react-navigation/native';
import {useContext} from 'react';

function useNavigation() {
  const context = useContext(NavigationContext);
  return context;
}

export {useNavigation};
