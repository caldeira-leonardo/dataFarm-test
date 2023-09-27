import React from 'react';
import {
  //   BatteryCharging,
  //   Coffee,
  //   CloudLightning,
  //   Tool,
  //   Clipboard,
  //   Edit,
  ArrowLeft,
} from 'react-native-feather';
import {Theme} from '../../../Theme/Theme';
import * as S from './BackButtonStyles';
import {useNavigation} from '../../../Context/navigationContext';

type BackButtonProps = {};

const BackButton = ({}: BackButtonProps) => {
  const navigation = useNavigation();
  const canGoBack = navigation?.canGoBack();

  function goBack() {
    if (canGoBack) {
      navigation?.goBack();
    }
  }

  return (
    <S.Wrapper onPress={goBack}>
      {canGoBack ? <ArrowLeft color={Theme.colors.primary} /> : <></>}
    </S.Wrapper>
  );
};

export default BackButton;
