import React from 'react';
import LottieView from 'lottie-react-native';
import Button from '../../../components/elements/Button/Button';
import * as S from './SyncDataStyles';

const SyncDataComponent = ({hasInternet}: {hasInternet: boolean}) => {
  return (
    <S.Wrapper>
      {!hasInternet ? (
        <S.Animations>
          <LottieView
            source={require('../components/Lotties/wifi-off.json')}
            autoPlay
            speed={0.5}
            resizeMode="cover"
            style={{width: 350, height: 350}}
          />
        </S.Animations>
      ) : (
        <>
          <S.Center>
            <LottieView
              source={require('../components/Lotties/wifi-on.json')}
              autoPlay
              resizeMode="cover"
              loop={false}
              style={{width: 350, height: 350}}
            />
          </S.Center>
          <Button title="Sinconizar" />
        </>
      )}
    </S.Wrapper>
  );
};

export default SyncDataComponent;
