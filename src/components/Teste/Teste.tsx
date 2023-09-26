import React from 'react';
import {NavigationType} from '../../types/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../elements/Text/Text';

type TesteComponentProps = {} & NavigationType;

const TesteComponent = ({navigation}: TesteComponentProps) => {
  return (
    <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
      <Text color="alertdark">Aqui</Text>
    </TouchableOpacity>
  );
};

export default TesteComponent;
