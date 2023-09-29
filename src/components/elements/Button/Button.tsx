import React, {useEffect} from 'react';
import {ButtonProps} from './ButtonTypes';
import * as S from './ButtonStyled';
import Text from '../Text/Text';
import {ActivityIndicator} from 'react-native';
import {Theme} from '../../../Theme/Theme';

export default function Buttom(props: ButtonProps): JSX.Element {
  useEffect(() => {
    console.log('isLoading', props.isLoading); //TODO remove log
  }, [props.isLoading]);
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
