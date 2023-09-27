//@ts-nocheck
import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';

export const Content = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${Theme.colors.separator};
  border-style: solid;
  margin: 0;
  height: 40px;
  position: relative;
`;
