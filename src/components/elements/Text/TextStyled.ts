import styled from 'styled-components/native';
import {TextProps} from './TextTypes';
import {Theme} from '../../../Theme/Theme';

export const Text = styled.Text<TextProps>`
  color: ${props => Theme.colors[props.color ? props.color : 'textPrimary']};
  font-size: ${props => {
    return Theme.sizes[props?.variant ? props?.variant : 'normal'];
  }};
  font-weight: ${props => (props.bold ? 'bold' : 400)};
`;
