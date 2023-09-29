//@ts-nocheck

import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';

export const Wrapper = styled.View`
  background-color: ${Theme.colors.light};
  height: 100%;
`;

export const Content = styled.ScrollView`
  padding: ${`0 ${Theme.spacings.base}px`};
`;
