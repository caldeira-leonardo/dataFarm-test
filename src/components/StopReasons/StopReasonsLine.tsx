import React from 'react';
import {Path, Svg} from 'react-native-svg';
import * as S from './StopReasonsStyles';
import {StopReasonsLineProps} from './StopReasonsTypes';
import Text from '../elements/Text/Text';
import {Theme} from '../../Theme/Theme';

const StopReasonsLine = ({
  description,
  iconPath,
  id,
  isSelected = false,
  onPress,
}: StopReasonsLineProps) => {
  return (
    <S.Line key={id + iconPath} aria-selected={isSelected} onPress={onPress}>
      <S.Icon>
        <Svg width={30} height={30}>
          <Path
            scaleX={0.03}
            scaleY={0.03}
            d={iconPath}
            fill={Theme.colors.icon}
          />
        </Svg>
      </S.Icon>
      <Text color="textSecondary">{description}</Text>
    </S.Line>
  );
};

export {StopReasonsLine};
