import React from 'react';
import {useUser} from '../../../Context/userContext';
import {useNavigation} from '../../../Context/navigationContext';
import {LogOut} from 'react-native-feather';
import * as S from './LogoutButtonStyles';
import {Theme} from '../../../Theme/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LogoutButton() {
  const navigation = useNavigation();
  const {logout} = useUser();

  async function onPress() {
    logout();

    AsyncStorage.setItem('keepLoguedIn', JSON.stringify(false));

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
