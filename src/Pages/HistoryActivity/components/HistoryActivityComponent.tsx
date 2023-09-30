import React, {Fragment} from 'react';
import Text from '../../../components/elements/Text/Text';
import * as S from './StyledHistoryActivity';
import {HistoryDataProps} from '../Types/HistoryActivityTypes';
import {Path, Svg} from 'react-native-svg';
import {Dimensions} from 'react-native';
import {Theme} from '../../../Theme/Theme';
import moment from 'moment';
import HistorySkeleton from './Skeleton/HistoryActivitySkeleton';
import uuid from 'react-native-uuid';

type HistoryActivityComponentProps = {
  dataToShow: HistoryDataProps[];
  isLoading: boolean;
};

const HistoryActivityComponent = ({
  dataToShow = [],
  isLoading,
}: HistoryActivityComponentProps) => {
  const windowWidth = Dimensions.get('window').width;
  const proportion = windowWidth / 12;
  const timerWrapperSize =
    windowWidth < 400 ? windowWidth * 0.58 : windowWidth * 0.62;

  return (
    <S.Wrapper>
      <S.Content>
        {isLoading
          ? [{}, {}, {}].map(() => (
              <Fragment key={uuid.v4().toString()}>
                <HistorySkeleton />
              </Fragment>
            ))
          : dataToShow?.map(item => {
              const formatedTime = moment(item.time).format('DD/MM/YYYY');
              const formatedHour = moment(item.time).format('h:mm a');
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
                  <S.Descriptions
                    style={{
                      width: timerWrapperSize,
                    }}>
                    <Text numberOfLines={1} color="textSecondary" bold>
                      {item.title}
                    </Text>
                    <Text color="icon" numberOfLines={1}>
                      {item.subtitle} {item.subtitle} {item.subtitle}
                    </Text>
                  </S.Descriptions>
                  <S.Time>
                    <Text variant="smallest" numberOfLines={2}>
                      {formatedTime}
                    </Text>
                    <Text variant="smallest" numberOfLines={2}>
                      {formatedHour}
                    </Text>
                  </S.Time>
                </S.ItemWrapper>
              );
            })}
      </S.Content>
    </S.Wrapper>
  );
};

export default HistoryActivityComponent;
