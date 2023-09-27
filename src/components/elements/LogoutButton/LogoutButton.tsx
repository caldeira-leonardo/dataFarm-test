import React from 'react';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LogOut} from 'react-native-feather';
import * as S from './LogoutButtonStyles';
import {Theme} from '../../../Theme/Theme';

function LogoutButton() {
  const navigation = useNavigation();
  const {logout} = useUser();

  function onPress() {
    logout();
    navigation?.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  return (
    <S.Wrapper onPress={onPress}>
      <S.Icon>
        <LogOut color={Theme.colors.primary} />
      </S.Icon>
    </S.Wrapper>
  );
}

export default LogoutButton;
