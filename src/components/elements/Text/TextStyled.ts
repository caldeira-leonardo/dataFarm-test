import styled from 'styled-components/native';
import {TextProps} from './TextTypes';

export const TextStyled = styled.Text<TextProps>`
  color: ${props => props.color};
`;
