import React, {useState} from 'react';
import {ReasonsProps, StopRecordComponentProps} from '../Types/StopRecordTypes';
import * as S from './StopRecordComponentStyled';
import {
  StopReasons,
  StopReasonsTitle,
  StopReasonsLine,
  StopReasonsContent,
} from '../../elements/StopReasons/StopReasonsIndex';

const StopRecordComponent = ({reasons}: StopRecordComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<ReasonsProps>();

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default StopRecordComponent;
