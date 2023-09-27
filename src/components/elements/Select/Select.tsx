import React, {useState} from 'react';
import * as S from './SelectStyled';
import {SelectProps} from './SelectTypes';
import Text from '../Text/Text';
import {ChevronDown, ChevronUp} from 'react-native-feather';
import {Theme} from '../../../Theme/Theme';

export default function Select(props: SelectProps) {
  const {errorMessage, hasError} = props;
  const [showOptions, setShowOptions] = useState(false);
  return (
    <S.Wrapper>
      <S.Content {...props}>
        <S.Select {...props} textAlignVertical="top" />
        <S.IconWrapper onPress={() => setShowOptions(oldValue => !oldValue)}>
          {!showOptions ? (
            <ChevronDown color={Theme.colors.separator} />
          ) : (
            <ChevronUp color={Theme.colors.separator} />
          )}
        </S.IconWrapper>
      </S.Content>
      {hasError ? (
        <Text color="error" bold>
          {errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </S.Wrapper>
  );
}
