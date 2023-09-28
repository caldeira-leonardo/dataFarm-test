import styled from 'styled-components/native';
import {Theme} from '../../Theme/Theme';

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Counter = styled.View`
  background-color: ${Theme.colors.alert};
  border: 2px solid ${Theme.colors.alert};
  color: ${Theme.colors.light};
  flex-direction: row;
  padding: 15px;
  border-radius: 23px;
  margin: 0 10px;
`;
