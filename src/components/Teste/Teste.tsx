import React from 'react';
import {Text} from 'react-native';
import {NavigationType} from '../../types/types';
import {TouchableOpacity} from 'react-native-gesture-handler';

type TesteComponentProps = {} & NavigationType;

const TesteComponent = ({navigation}: TesteComponentProps) => {
  console.log('navigation', navigation); // remove logs
  return (
    <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
      <Text>LoginComponent</Text>
    </TouchableOpacity>
  );
};

export default TesteComponent;
