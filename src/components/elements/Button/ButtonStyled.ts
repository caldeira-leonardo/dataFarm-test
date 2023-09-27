import styled from 'styled-components/native';
import {ButtonProps} from './ButtonTypes';
import {Theme} from '../../../Theme/Theme';
import {Text} from '../Text/TextStyled';

export const Wrapper = styled.TouchableOpacity<ButtonProps>``;

export const Button = styled.View<ButtonProps>`
  background-color: ${Theme.colors.primary};
  height: 55px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled(Text).attrs({})`
  color: ${Theme.colors.primary};
  font-weight: bold;
`;
