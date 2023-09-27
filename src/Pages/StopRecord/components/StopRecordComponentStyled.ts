import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';
import Text from '../../../components/elements/Text/Text';

export const Wrapper = styled.View`
  background-color: ${Theme.colors.light};
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Content = styled.ScrollView``;

export const NoteTitle = styled.View`
  margin-top: 10px;
  padding: 10px;
  flex-direction: row;
`;

export const NoteContent = styled.View`
  padding: 0 ${Theme.spacings.base}px;
`;

export const ButtonsWrapper = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: ${Theme.spacings.base}px;
  margin-top: 'auto';
`;

export const ButtonContent = styled.View`
  width: 50%;
`;

export const Title = styled(Text)`
  padding-left: 5px;
`;
