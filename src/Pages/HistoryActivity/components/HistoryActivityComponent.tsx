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
import {Clock} from 'react-native-feather';

type HistoryActivityComponentProps = {
  dataToShow: HistoryDataProps[];
  dataNotYetSent: HistoryDataProps[];
  isLoading: boolean;
};

const HistoryActivityComponent = ({
  dataToShow = [],
  dataNotYetSent = [],
  isLoading,
}: HistoryActivityComponentProps) => {
  const windowWidth = Dimensions.get('window').width;
  const proportion = windowWidth / 12;
  const timerWrapperSize =
    windowWidth < 400 ? windowWidth * 0.58 : windowWidth * 0.62;

  return (
    <S.Wrapper>
      <Text bold color="error">
        INPUT DE PESQUISA AQUI
      </Text>
      <S.Content>
        {isLoading
          ? [{}, {}, {}].map(() => (
              <Fragment key={uuid.v4().toString()}>
                <HistorySkeleton />
              </Fragment>
            ))
          : [...dataNotYetSent, ...dataToShow]?.map(item => {
              const formatedTime = item.time
                ? moment(item.time).format('DD/MM/YYYY')
                : '';
              const formatedHour = item.time
                ? moment(item.time).format('h:mm a')
                : '';
              return (
                <S.ItemWrapper key={item.id}>
                  <S.Icon>
                    {item.alreadySent ? (
                      <Svg width={proportion} height={proportion}>
                        <Path
                          scaleX={proportion / 1000}
                          scaleY={proportion / 1000}
                          d={item.iconPath}
                          fill={Theme.colors.icon}
                        />
                      </Svg>
                    ) : (
                      <Clock
                        color={Theme.colors.alertdark}
                        strokeWidth={3}
                        scaleX={1.3}
                        scaleY={1.3}
                        width={35}
                      />
                    )}
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
