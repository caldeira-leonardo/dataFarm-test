import React from 'react';
import {StopReasonsContentProps} from './StopReasonsTypes';
import * as S from './StopReasonsStyles';

const StopReasonsContent = ({children}: StopReasonsContentProps) => {
  return (
    <S.ContentWrapper>
      <S.Content>{children}</S.Content>
    </S.ContentWrapper>
  );
};

export {StopReasonsContent};
