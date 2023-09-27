import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';

export const Wrapper = styled.TouchableOpacity`
  margin-right: ${Theme.spacings.base};
  border: 1px solid ${Theme.colors.primary};
  padding: 4px 8px;
  border-radius: 4px;
`;
