import React from 'react';
import Text from '../../../components/elements/Text/Text';
import * as S from './StyledHistoryActivity';
import {HystoryDataProps} from '../Types/HistoryActivityTypes';

type HistoryActivityComponentProps = {
  dataToShow: HystoryDataProps[];
};

const HistoryActivityComponent = ({
  dataToShow = [],
}: HistoryActivityComponentProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        {dataToShow?.map(() => (
          <Text>HistoryActivityComponent</Text>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default HistoryActivityComponent;
