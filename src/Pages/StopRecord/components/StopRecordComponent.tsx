import React, {useState} from 'react';
import {
  FarmFieldProps,
  ReasonsProps,
  StopRecordComponentProps,
} from '../Types/StopRecordTypes';
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
import Select from '../../../components/elements/Select/Select';
import {SelectOption} from '../../../components/elements/Select/SelectTypes';
import Text from '../../../components/elements/Text/Text';
import {KeyboardAvoidingView} from 'react-native';

const StopRecordComponent = ({
  reasons,
  farms,
  machineries,
}: StopRecordComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<ReasonsProps>();
  const [fieldOptions, setFieldOptions] = useState<FarmFieldProps[]>([]);

  function handleSelectMachinery(item: SelectOption) {
    console.log('value handleSelectMachinery', item); // remove logs
  }

  function handleSelectFarm(item: SelectOption) {
    console.log('value', item); // remove logs
    const selectedFarm = farms.filter(farm => farm.id === item.key)[0];

    setFieldOptions(selectedFarm?.fields);
  }

  function handleSelectField(item: SelectOption) {
    console.log('value handleSelectField', item); // remove logs
  }

  return (
    <S.Wrapper>
      <S.Content>
        <KeyboardAvoidingView>
          <S.EquipmentContent>
            <Text color="secondaryDark" bold variant="small">
              Equipamento
            </Text>
            <Select
              options={machineries.map(machinerie => ({
                label: machinerie.name,
                value: machinerie.id,
                key: machinerie.id,
              }))}
              handleChange={handleSelectMachinery}
            />
          </S.EquipmentContent>
          <S.FarmFirldGroup>
            <S.Farm>
              <Text color="secondaryDark" bold variant="small">
                Fazenda
              </Text>
              <Select
                options={farms.map(farm => ({
                  label: farm.name,
                  value: farm.id,
                  key: farm.id,
                }))}
                handleChange={handleSelectFarm}
              />
            </S.Farm>
            <S.Field>
              <Text color="secondaryDark" bold variant="small">
                Talhão
              </Text>
              <Select
                options={fieldOptions.map(fieldOption => ({
                  label: fieldOption.name,
                  value: fieldOption.id,
                  key: fieldOption.id,
                }))}
                handleChange={handleSelectField}
              />
            </S.Field>
          </S.FarmFirldGroup>
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
        </KeyboardAvoidingView>
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
