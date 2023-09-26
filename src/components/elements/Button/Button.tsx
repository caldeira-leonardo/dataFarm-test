import React from 'react';
import {ButtonProps} from './ButtonTypes';
import * as S from './ButtonStyled';
import Text from '../Text/Text';

export default function Buttom(props: ButtonProps): JSX.Element {
  return (
    <S.Wrapper {...props} disabled={props.disabled || props.isLoading}>
      <S.Button>
        <Text color="light" bold variant="subtitle">
          {props.title.toUpperCase()}
        </Text>
      </S.Button>
    </S.Wrapper>
  );
}
