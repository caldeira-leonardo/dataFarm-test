import React from 'react';
import {NavigationType} from '../../Types/types';
import {TouchableOpacity} from 'react-native';
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
