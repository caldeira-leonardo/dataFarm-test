import React from 'react';
import {ButtonProps} from './ButtonTypes';
import * as S from './ButtonStyled';
import Text from '@src/components/elements/Text/Text';
import {ActivityIndicator} from 'react-native';
import {Theme} from '@src/Theme/Theme';

export default function Buttom(props: ButtonProps): JSX.Element {
  return (
    <S.Wrapper {...props}>
      <S.Button aria-disabled={props.isLoading}>
        {props.isLoading ? (
          <>
            <ActivityIndicator size="large" color={Theme.colors.light} />
          </>
        ) : (
          <Text color="light" bold variant="subtitle">
            {props.title.toUpperCase()}
          </Text>
        )}
      </S.Button>
    </S.Wrapper>
  );
}
