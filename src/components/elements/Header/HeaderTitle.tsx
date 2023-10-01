import React from 'react';
import Text from '../Text/Text';
import {useUser} from '@src/Context/userContext';
import * as S from './HeaderTitleStyles';

const HeaderTitle = (children: any) => {
  const {hasInternet} = useUser();
  return (
    <S.Wrapper>
      <Text bold color="textPrimary" variant="subtitle">
        {children}
      </Text>
      {!hasInternet ? (
        <Text variant="extraSmall" color="error">
          Sem Conexão
        </Text>
      ) : (
        <></>
      )}
    </S.Wrapper>
  );
};

export default HeaderTitle;
