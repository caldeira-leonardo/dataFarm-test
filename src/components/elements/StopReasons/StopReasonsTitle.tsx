import React from 'react';
import * as S from './StopReasonsStyles';

function StopReasonsTitle({children}: {children: React.ReactNode}) {
  return (
    <S.Title color="primary" bold>
      {children}
    </S.Title>
  );
}

export {StopReasonsTitle};
