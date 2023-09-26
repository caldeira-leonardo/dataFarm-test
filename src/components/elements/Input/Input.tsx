import React, {useState} from 'react';
import * as S from './InputStyled';
import {InputProps} from './InputTypes';
import Text from '../Text/Text';
import {Eye, EyeOff} from 'react-native-feather';
import {Theme} from '../../../Theme/Theme';

export default function Input(props: InputProps) {
  const {errorMessage, hasError} = props;
  const [showPassword, setshowPassword] = useState(props?.password);
  return (
    <S.Wrapper>
      <S.Content>
        <S.Input {...props} secureTextEntry={showPassword} />
        <S.IconWrapper onPress={() => setshowPassword(oldValue => !oldValue)}>
          {props?.password &&
            (!showPassword ? (
              <EyeOff color={Theme.colors.separator} />
            ) : (
              <Eye color={Theme.colors.separator} />
            ))}
        </S.IconWrapper>
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
