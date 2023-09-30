//@ts-nocheck

import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';

export const Wrapper = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: ${Theme.spacings.base}px;
`;

export const Animations = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
