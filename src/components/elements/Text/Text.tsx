import React from 'react';
import {TextStyled} from './TextStyled';
import {TextProps} from './TextTypes';

export default function Text(props: TextProps): JSX.Element {
  return <TextStyled {...props}>{props.children}</TextStyled>;
}
