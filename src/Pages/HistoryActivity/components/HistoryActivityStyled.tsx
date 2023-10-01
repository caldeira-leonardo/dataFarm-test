import styled from 'styled-components/native';
import {Theme} from '../../../Theme/Theme';

export const Wrapper = styled.View`
  background-color: ${Theme.colors.light};
  height: 100%;
`;

export const Content = styled.ScrollView`
  padding: ${`0 ${Theme.spacings.base}px`};
`;

export const ItemWrapper = styled.View`
  width: 100%;
  padding: 5px 0;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: ${Theme.colors.separator};
  border-style: solid;
`;

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
`;
export const Descriptions = styled.View`
  margin-left: ${Theme.spacings.small}px;
`;

export const Time = styled.View`
  margin-left: ${Theme.spacings.small}px;
  padding: 5px 0;
  right: 0;
  align-items: flex-end;
`;

export const InputWrapper = styled.View`
  background-color: ${Theme.colors.separator};
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 10px;
  padding: 0 15px;
  border-radius: 8px;
  height: 40px;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
  margin-left: 10px;
`;
