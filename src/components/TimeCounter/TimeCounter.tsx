import React from 'react';
import Text from '../elements/Text/Text';
import {MinusCircle, PlusCircle} from 'react-native-feather';
import * as S from './TimeCounterStyles';
import {Theme} from '../../Theme/Theme';
import {TimeCounterProps} from './TimeCounterTypes';

const TimeCounter = ({onPress, value, onError}: TimeCounterProps) => {
  return (
    <S.Wrapper>
      <MinusCircle
        color={Theme.colors.alert}
        fontSize={20}
        onPress={() => value > 0 && onPress(value - 5)}
      />
      <S.Counter
        style={
          onError
            ? {
                borderColor: '#0f0',
                borderWidth: 2,
              }
            : {}
        }>
        <Text color="light">{`${value} min`}</Text>
      </S.Counter>
      <PlusCircle
        color={Theme.colors.alert}
        fontSize={20}
        onPress={() => onPress(value + 5)}
      />
    </S.Wrapper>
  );
};

export default TimeCounter;
