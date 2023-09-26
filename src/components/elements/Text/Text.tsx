import React from 'react';
import * as S from './TextStyled';
import {TextProps} from './TextTypes';

export default function Text(props: TextProps): JSX.Element {
  return <S.Text {...props}>{props.children}</S.Text>;
}
