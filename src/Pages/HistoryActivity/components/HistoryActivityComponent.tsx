import React from 'react';
import Text from '../../../components/elements/Text/Text';
import * as S from './StyledHistoryActivity';

type HistoryActivityComponentProps = {};

const HistoryActivityComponent = ({}: HistoryActivityComponentProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <Text>HistoryActivityComponent</Text>
      </S.Content>
    </S.Wrapper>
  );
};

export default HistoryActivityComponent;
