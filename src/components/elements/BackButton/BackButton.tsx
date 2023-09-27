import React, {useEffect} from 'react';
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

  useEffect(() => {
    console.log('canGoBack', canGoBack); //TODO remove log
  }, [canGoBack]);

  useEffect(() => {
    console.log('navigation haha', navigation); //TODO remove log
  }, [navigation]);

  return (
    <S.Wrapper onPress={goBack}>
      {canGoBack ? <ArrowLeft color={Theme.colors.primary} /> : <></>}
    </S.Wrapper>
  );
};

export default BackButton;
