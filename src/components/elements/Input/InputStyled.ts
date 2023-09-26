//@ts-nocheck
import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';
import {InputProps} from './InputTypes';

export const Input = styled.TextInput.attrs({})<InputProps>`
  /* height: 40px; */
  font-size: ${Theme.sizes.normal};
  font-weight: 500;
  padding: 0;
  margin: 0;
`;

export const Wrapper = styled.View``;

export const Content = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${Theme.colors.separator};
  border-style: solid;
  padding: 5px 0;
  margin: 0;
  height: 40px;
`;
