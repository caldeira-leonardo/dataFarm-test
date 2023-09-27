import React, {useState} from 'react';
import Text from '../elements/Text/Text';
import {MinusCircle, PlusCircle} from 'react-native-feather';
import * as S from './TimeCounterStyles';
import {Theme} from '../../Theme/Theme';

type TimeCounterProps = {};

const TimeCounter = ({}: TimeCounterProps) => {
  const [minutesCounter, setMinutesCounter] = useState(0);

  return (
    <S.Wrapper>
      <MinusCircle
        color={Theme.colors.alert}
        fontSize={20}
        onPress={() =>
          minutesCounter > 0 && setMinutesCounter(oldValue => oldValue - 5)
        }
      />
      <S.Counter>
        <Text color="light">{`${minutesCounter} min`}</Text>
      </S.Counter>
      <PlusCircle
        color={Theme.colors.alert}
        fontSize={20}
        onPress={() => setMinutesCounter(oldValue => oldValue + 5)}
      />
    </S.Wrapper>
  );
};

export default TimeCounter;
