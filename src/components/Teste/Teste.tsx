import React from 'react';
import {NavigationType} from '../../types/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../elements/Text/Text';

type TesteComponentProps = {} & NavigationType;

const TesteComponent = ({navigation}: TesteComponentProps) => {
  console.log('navigation', navigation); // remove logs
  return (
    <TouchableOpacity onPress={() => navigation?.navigate('Home')}>
      <Text color="#0f0">Aqui</Text>
    </TouchableOpacity>
  );
};

export default TesteComponent;
