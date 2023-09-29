import React from 'react';
import Text from '../../../components/elements/Text/Text';
import * as S from './StyledHistoryActivity';
import {HistoryDataProps} from '../Types/HistoryActivityTypes';
import {Path, Svg} from 'react-native-svg';
import {Dimensions} from 'react-native';
import {Theme} from '../../../Theme/Theme';

type HistoryActivityComponentProps = {
  dataToShow: HistoryDataProps[];
};

const HistoryActivityComponent = ({
  dataToShow = [],
}: HistoryActivityComponentProps) => {
  const windowWidth = Dimensions.get('window').width;
  const proportion = windowWidth / 12;

  return (
    <S.Wrapper>
      <S.Content>
        {dataToShow?.map(item => {
          return (
            <S.ItemWrapper key={item.id}>
              <S.Icon>
                <Svg width={proportion} height={proportion}>
                  <Path
                    scaleX={proportion / 1000}
                    scaleY={proportion / 1000}
                    d={item.iconPath}
                    fill={Theme.colors.icon}
                  />
                </Svg>
              </S.Icon>
              <S.Descriptions style={{width: windowWidth * 0.53}}>
                <Text numberOfLines={1} color="textSecondary" bold>
                  {item.title}
                </Text>
                <Text color="icon" numberOfLines={1}>
                  {item.subtitle} {item.subtitle} {item.subtitle}
                </Text>
              </S.Descriptions>
              <S.Time>
                <Text variant="extraSmall">{item.time}</Text>
              </S.Time>
            </S.ItemWrapper>
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};

export default HistoryActivityComponent;
