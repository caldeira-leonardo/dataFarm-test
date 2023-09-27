import React, {useState} from 'react';
import {ReasonsProps, StopRecordComponentProps} from '../Types/StopRecordTypes';
import * as S from './StopRecordComponentStyled';
import {
  StopReasons,
  StopReasonsTitle,
  StopReasonsLine,
  StopReasonsContent,
} from '../../../components/StopReasons/StopReasonsIndex';
import {Edit} from 'react-native-feather';
import {Theme} from '../../../Theme/Theme';
import Input from '../../../components/elements/Input/Input';
import Button from '../../../components/elements/Button/Button';
import TimeCounter from '../../../components/TimeCounter/TimeCounter';
import Text from '../../../components/elements/Text/Text';
import Select from '../../../components/elements/Select/Select';

const StopRecordComponent = ({reasons, farms}: StopRecordComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<ReasonsProps>();

  return (
    <S.Wrapper>
      <S.Content>
        <Text color="secondaryDark" bold variant="small">
          Equipamento
        </Text>
        <Select />
        <StopReasons>
          <StopReasonsTitle>Motivo da Parada</StopReasonsTitle>
          <StopReasonsContent>
            {reasons?.map(reason => (
              <StopReasonsLine
                // adicionar um skeleton aqui Quando não possuir nada no estado
                description={reason.name}
                iconPath={reason.icon}
                id={reason.id}
                isSelected={reason.id === selectedOption?.id}
                onPress={() => setSelectedOption(reason)}
              />
            ))}
          </StopReasonsContent>
        </StopReasons>

        <S.NoteContent>
          <S.NoteTitle>
            <Edit color={Theme.colors.icon} />
            <S.Title color="title">Nota de parada</S.Title>
          </S.NoteTitle>

          <Input numberOfLines={3} multiline />
        </S.NoteContent>
      </S.Content>

      <S.ButtonsWrapper>
        <S.ButtonContent>
          <TimeCounter />
        </S.ButtonContent>
        <S.ButtonContent>
          <Button onPress={() => console.log('asdasdasd')} title="salvar" />
        </S.ButtonContent>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default StopRecordComponent;
