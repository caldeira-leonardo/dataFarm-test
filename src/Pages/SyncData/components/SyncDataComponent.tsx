import React from 'react';
import LottieView from 'lottie-react-native';
import * as S from './SyncDataStyles';

const SyncDataComponent = ({hasInternet}: {hasInternet: boolean}) => {
  const style = {width: 350, height: 350};
  return (
    <S.Wrapper>
      <S.Animations>
        {!hasInternet ? (
          <LottieView
            source={require('../components/Lotties/wifi-off.json')}
            autoPlay
            speed={0.5}
            resizeMode="cover"
            style={style}
          />
        ) : (
          <LottieView
            source={require('../components/Lotties/wifi-on.json')}
            autoPlay
            resizeMode="cover"
            loop={false}
            style={style}
          />
        )}
      </S.Animations>
    </S.Wrapper>
  );
};

export default SyncDataComponent;
