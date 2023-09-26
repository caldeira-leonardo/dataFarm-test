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
  padding-right: ${props =>
    props.paddingRight ? props.paddingRight : props.password ? '50px' : 0};
`;

export const Wrapper = styled.View``;

export const Content = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${Theme.colors.separator};
  border-style: solid;
  padding: 5px 0;
  margin: 0;
  height: 40px;
  position: relative;
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 5px;
`;
