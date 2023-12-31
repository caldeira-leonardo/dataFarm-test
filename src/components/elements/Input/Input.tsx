import React, {useState} from 'react';
import * as S from './InputStyled';
import {InputProps} from './InputTypes';
import Text from '../Text/Text';
import {Eye, EyeOff} from 'react-native-feather';
import {Theme} from '@src/Theme/Theme';

export default function Input(props: InputProps) {
  const {errorMessage, hasError, type = 'text', value} = props;
  const [showPassword, setShowPassword] = useState(type === 'password');
  return (
    <S.Wrapper>
      <S.Content {...props}>
        <S.Input
          {...props}
          value={value}
          secureTextEntry={showPassword}
          textAlignVertical="top"
        />
        {type === 'password' && (
          <S.IconWrapper onPress={() => setShowPassword(oldValue => !oldValue)}>
            {!showPassword ? (
              <EyeOff color={Theme.colors.separator} />
            ) : (
              <Eye color={Theme.colors.separator} />
            )}
          </S.IconWrapper>
        )}
      </S.Content>
      {hasError ? (
        <Text color="error" bold>
          {errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </S.Wrapper>
  );
}
