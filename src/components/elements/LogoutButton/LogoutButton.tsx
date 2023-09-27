import React from 'react';
import Text from '../Text/Text';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import * as S from './LogoutButtonStyles';

function LogoutButton() {
  const navigation = useNavigation();
  const {logout} = useUser();

  function onPress() {
    logout();
    navigation?.navigate('Login');
  }

  return (
    <S.Wrapper onPress={onPress}>
      <Text color="primary" bold>
        Logout
      </Text>
    </S.Wrapper>
  );
}

export default LogoutButton;
