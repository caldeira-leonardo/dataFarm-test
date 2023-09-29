import React from 'react';
import {View} from 'react-native';
import Text from '../../../components/elements/Text/Text';

type SyncDataComponentProps = {
  itens: any[];
};

const SyncDataComponent = ({itens}: SyncDataComponentProps) => {
  return (
    <View>
      {itens.map(() => (
        <Text>SyncDataComponent</Text>
      ))}
    </View>
  );
};

export default SyncDataComponent;
