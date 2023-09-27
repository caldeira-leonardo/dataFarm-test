import React, {useEffect} from 'react';
import {View} from 'react-native';
import Text from '../../elements/Text/Text';
import {StopRecordComponentProps} from '../Types/StopRecordTypes';

const StopRecordComponent = ({
  isLoading,
  farms,
  machineries,
  reasons,
}: StopRecordComponentProps) => {
  useEffect(() => {
    console.log('isLoading', isLoading, farms, machineries, reasons); //TODO remove log
  }, [isLoading, farms, machineries, reasons]);

  return (
    <View>
      <Text>StopRecordComponent</Text>
    </View>
  );
};

export default StopRecordComponent;
