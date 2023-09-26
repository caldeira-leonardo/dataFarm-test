import React from 'react';
import * as S from './InputStyled';
import {InputProps} from './InputTypes';
import Text from '../Text/Text';

export default function Input(props: InputProps) {
  const {errorMessage, hasError} = props;
  return (
    <S.Wrapper>
      <S.Content>
        <S.Input {...props} />
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
