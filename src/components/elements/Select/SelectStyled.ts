//@ts-nocheck
import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';
import {SelectProps} from './SelectTypes';

export const Select = styled.TextInput.attrs({})<SelectProps>`
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
  position: relative;

  ${({multiline}) =>
    multiline &&
    `
    border: 2px solid ${Theme.colors.separator};
    border-radius: 6px;
    padding: 3px 5px;
  `}
`;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 5px;
`;
