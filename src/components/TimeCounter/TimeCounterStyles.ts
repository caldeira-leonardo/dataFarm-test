import styled from 'styled-components/native';
import {Theme} from '../../Theme/Theme';
import {CounterProps} from './TimeCounterTypes';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Counter = styled.View<CounterProps>`
  background-color: ${props =>
    props['aria-busy'] ? Theme.colors.error : Theme.colors.alert};
  border: 2px solid
    ${props => (props['aria-busy'] ? Theme.colors.error : Theme.colors.alert)};
  color: ${Theme.colors.light};
  flex-direction: row;
  padding: 15px;
  border-radius: 23px;
  margin: 0 ${Theme.spacings.small}px;
`;
