import React, {Fragment, useState, useMemo} from 'react';
import Text from '../../../components/elements/Text/Text';
import * as S from './HistoryActivityStyled';
import {HistoryDataProps} from '../Types/HistoryActivityTypes';
import {Path, Svg} from 'react-native-svg';
import {Dimensions} from 'react-native';
import {Theme} from '../../../Theme/Theme';
import moment from 'moment';
import HistorySkeleton from './Skeleton/HistoryActivitySkeleton';
import uuid from 'react-native-uuid';
import {Clock, Search} from 'react-native-feather';
import {filterData} from '../../../Utils/HistoryInputFilter';

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
  const [inputValue, setInputValue] = useState('');
  const windowWidth = useMemo(() => {
    return Dimensions.get('window').width;
  }, []);

  const proportion = useMemo(() => {
    return windowWidth / 12;
  }, [windowWidth]);

  const timerWrapperSize = useMemo(() => {
    return windowWidth < 400 ? windowWidth * 0.58 : windowWidth * 0.62;
  }, [windowWidth]);

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <Search color={Theme.colors.disabled} />
        <S.SearchInput
          value={inputValue}
          onChangeText={value => setInputValue(value)}
        />
      </S.InputWrapper>
      <S.Content>
        {isLoading
          ? [{}, {}, {}].map(() => (
              <Fragment key={uuid.v4().toString()}>
                <HistorySkeleton />
              </Fragment>
            ))
          : filterData([...dataNotYetSent, ...dataToShow], inputValue)?.map(
              item => {
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
              },
            )}
      </S.Content>
    </S.Wrapper>
  );
};

export default HistoryActivityComponent;
