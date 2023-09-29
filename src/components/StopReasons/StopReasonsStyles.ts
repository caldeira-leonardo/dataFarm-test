import styled from 'styled-components/native';
import {StopReadonWrapperProps} from './StopReasonsTypes';
import Text from '../elements/Text/Text';
import {Theme} from '../../Theme/Theme';

export const Wrapper = styled.View`
  box-sizing: border-box;
  padding: 0 ${Theme.spacings.base}px;
  flex-direction: column;
  display: block;
`;

export const ContentWrapper = styled.View`
  padding: ${Theme.spacings.small}px 0;
  width: 100%;
  border: 2px solid ${Theme.colors.separator};
  border-radius: 6px;
  flex-grow: 1;
  overflow: hidden;
`;

export const Content = styled.ScrollView`
  padding: 0 15px;
`;

export const Line = styled.TouchableOpacity<StopReadonWrapperProps>`
  box-sizing: border-box;
  padding: 5px;
  align-items: center;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: ${props =>
    props['aria-selected'] ? Theme.colors.selectedLight : 'transparent'};
`;

export const Icon = styled.View`
  margin-right: 20px;
`;

export const Title = styled(Text)`
  margin: ${Theme.spacings.small}px 0;
  margin-left: ${Theme.spacings.small}px;
`;
