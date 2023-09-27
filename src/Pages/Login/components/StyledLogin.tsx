//@ts-nocheck

import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';
import Text from '../../../components/elements/Text/Text';

export const Wrapper = styled.ScrollView`
  background-color: ${Theme.colors.light};
  padding: ${`0 ${Theme.spacings.base}px`};
`;

export const ImageStyled = styled.Image.attrs({
  resizeMode: 'center',
})`
  height: 70px;
  width: 100vw;
  margin: 70px 0;
`;

export const Content = styled.KeyboardAvoidingView`
  justify-content: center;
  flex: 1;
`;

export const Subtitle = styled(Text)`
  padding: 10px 0 20px 0;
  color: ${Theme.colors.title};
`;

export const Label = styled(Text)`
  color: ${Theme.colors.primary};
  font-weight: bold;
`;

export const Buttonwrapper = styled.View`
  margin-top: 30px;
`;
