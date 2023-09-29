import React, {useMemo} from 'react';
import Text from '../elements/Text/Text';
import {MinusCircle, PlusCircle} from 'react-native-feather';
import * as S from './TimeCounterStyles';
import {Theme} from '../../Theme/Theme';
import {TimeCounterProps} from './TimeCounterTypes';

const TimeCounter = ({onPress, value = 0, onError}: TimeCounterProps) => {
  const iconsColor = useMemo(() => {
    if (onError) {
      return Theme.colors.error;
    } else {
      return Theme.colors.alert;
    }
  }, [onError]);

  return (
    <S.Wrapper>
      <MinusCircle
        color={iconsColor}
        fontSize={20}
        onPress={() => value > 0 && onPress(value - 5)}
      />
      <S.Counter aria-busy={onError}>
        <Text color={'light'} bold>{`${value} min`}</Text>
      </S.Counter>
      <PlusCircle
        color={iconsColor}
        fontSize={20}
        onPress={() => onPress(value + 5)}
      />
    </S.Wrapper>
  );
};

export default TimeCounter;
