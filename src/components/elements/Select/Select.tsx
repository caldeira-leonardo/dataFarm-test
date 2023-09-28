import React, {useEffect} from 'react';
import * as S from './SelectStyled';
import {SelectProps} from './SelectTypes';
import Text from '../Text/Text';
import {Picker} from '@react-native-picker/picker';

export default function Select({
  options,
  errorMessage,
  hasError,
  handleChange,
  selectedValue = '',
}: SelectProps) {
  useEffect(() => {
    console.log('selectedValue', selectedValue); //TODO remove log
  }, [selectedValue]);
  return (
    <>
      <S.Content>
        <Picker
          selectedValue={selectedValue}
          style={{
            left: -12,
            right: -12,
            bottom: -8,
            position: 'absolute',
          }}
          onValueChange={(_, itemIndex) => {
            handleChange(options[itemIndex]);
          }}>
          {options.length > 0 ? (
            options.map(value => (
              <Picker.Item
                label={value.label}
                value={value.key}
                key={value.key}
              />
            ))
          ) : (
            <Picker.Item label="" value="0" key="0" />
          )}
        </Picker>
      </S.Content>
      {hasError ? (
        <Text color="error" bold>
          {errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </>
  );
}
