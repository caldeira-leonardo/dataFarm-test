import React from 'react';
import * as S from './StopReasonsStyles';
import {StopReasonsProps} from './StopReasonsTypes';

const StopReasons = ({children}: StopReasonsProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export {StopReasons};
