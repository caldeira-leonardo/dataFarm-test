import React, {useState} from 'react';
import * as S from './SelectStyled';
import {SelectOption, SelectProps} from './SelectTypes';
import Text from '../Text/Text';
import {Picker} from '@react-native-picker/picker';

export default function Select({
  options,
  errorMessage,
  hasError,
  handleChange,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<SelectOption>(options[0]);
  return (
    <S.Content>
      <Picker
        selectedValue={selectedValue?.value}
        style={{
          left: -12,
          right: -12,
          bottom: -8,
          position: 'absolute',
        }}
        onValueChange={(_, itemIndex) => {
          handleChange(options[itemIndex]);
          setSelectedValue(options[itemIndex]);
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
      {hasError ? (
        <Text color="error" bold>
          {errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </S.Content>
  );
}
