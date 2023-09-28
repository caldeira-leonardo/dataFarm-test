import React, {useState} from 'react';
import {
  FarmFieldProps,
  InitialValuesProps,
  MachineriesProps,
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
import Text from '../../../components/elements/Text/Text';
import {KeyboardAvoidingView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Shape} from '../../../components/elements/YupShape/YupShape';

const StopRecordComponent = ({
  reasons,
  farms,
  machineries,
}: StopRecordComponentProps) => {
  const [fieldOptions, setFieldOptions] = useState<FarmFieldProps[]>([]);

  function onSubmit(values: any) {
    console.log('values', values); // remove logs
  }

  function handleSelectFarm(item: any) {
    const selectedFarm = farms.filter(farm => farm.id === item.key)[0];

    setFieldOptions(selectedFarm?.fields);
  }

  function handleVerifyError(value: any) {
    if (value?.id) {
      return true;
    }
    return false;
  }

  return (
    <S.Wrapper>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={Yup.object().shape<Shape<InitialValuesProps>>({
          machinerie: Yup.object().shape<Shape<MachineriesProps>>({
            id: Yup.number().moreThan(0, 'Campo obrigatório'),
            growerId: Yup.number(),
            name: Yup.string(),
          }),
          farm: Yup.object().shape({
            id: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          fieldOption: Yup.object().shape({
            id: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          stopReason: Yup.object().shape({
            id: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          stopNote: Yup.string(),
          timer: Yup.number().required().moreThan(0, 'Campo obrigatório'),
        })}
        onSubmit={values => {
          onSubmit(values);
        }}>
        {({handleSubmit, values, errors, setFieldValue, validateField}) => {
          console.log('values', values); // remove logs

          return (
            <>
              <S.Content>
                <KeyboardAvoidingView>
                  <S.EquipmentContent>
                    <Text color="secondaryDark" bold variant="small">
                      Equipamento
                    </Text>
                    <Select
                      selectedValue={values?.machinerie?.id}
                      hasError={handleVerifyError(errors?.machinerie)}
                      errorMessage={errors?.machinerie && errors.machinerie.id}
                      options={machineries.map(machinerie => ({
                        label: machinerie?.name,
                        value: machinerie?.id,
                        key: machinerie?.id,
                      }))}
                      handleChange={value => {
                        setFieldValue('machinerie', value);
                        validateField('machinerie');
                      }}
                    />
                  </S.EquipmentContent>
                  <S.FarmFirldGroup>
                    <S.Farm>
                      <Text color="secondaryDark" bold variant="small">
                        Fazenda
                      </Text>
                      <Select
                        selectedValue={values?.farm?.name}
                        hasError={!!errors.farm}
                        errorMessage={errors.farm ? errors.farm.id : ''}
                        options={farms.map(farm => ({
                          label: farm?.name,
                          value: farm?.id,
                          key: farm?.id,
                        }))}
                        handleChange={value => {
                          setFieldValue('farm', value);
                          handleSelectFarm(value);
                          validateField('farm');
                        }}
                      />
                    </S.Farm>
                    <S.Field>
                      <Text color="secondaryDark" bold variant="small">
                        Talhão
                      </Text>
                      <Select
                        selectedValue={values?.fieldOption?.name}
                        hasError={!!errors.fieldOption}
                        errorMessage={
                          errors?.fieldOption ? errors?.fieldOption.id : ''
                        }
                        options={fieldOptions.map(fieldOption => ({
                          label: fieldOption?.name,
                          value: fieldOption?.id,
                          key: fieldOption?.id,
                        }))}
                        handleChange={value => {
                          setFieldValue('fieldOption', value);
                          validateField('fieldOption');
                        }}
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
                          isSelected={
                            values.stopReason
                              ? reason.id === values.stopReason?.id
                              : false
                          }
                          onPress={() => {
                            setFieldValue('stopReason', {
                              description: reason.name,
                              id: reason.id,
                            });
                            validateField('stopReason');
                          }}
                        />
                      ))}
                    </StopReasonsContent>
                  </StopReasons>

                  <S.NoteContent>
                    <S.NoteTitle>
                      <Edit color={Theme.colors.icon} />
                      <S.Title color="title">Nota de parada</S.Title>
                    </S.NoteTitle>

                    <Input
                      numberOfLines={3}
                      multiline
                      onChangeText={value => {
                        setFieldValue('stopNote', value);
                        validateField('stopNote');
                      }}
                    />
                  </S.NoteContent>
                </KeyboardAvoidingView>
              </S.Content>

              <S.ButtonsWrapper>
                <S.ButtonContent>
                  <TimeCounter
                    onPress={value => {
                      setFieldValue('timer', value);
                      validateField('timer');
                    }}
                    value={values?.timer ?? 0}
                    onError={!!errors.timer}
                  />
                </S.ButtonContent>
                <S.ButtonContent>
                  <Button onPress={() => handleSubmit()} title="salvar" />
                </S.ButtonContent>
              </S.ButtonsWrapper>
            </>
          );
        }}
      </Formik>
    </S.Wrapper>
  );
};

export default StopRecordComponent;

const initialValues: InitialValuesProps = {
  machinerie: {
    growerId: -1,
    id: -1,
    name: '',
  },
  farm: {
    fields: [],
    growerId: -1,
    growerName: '',
    id: -1,
    name: '',
  },
  fieldOption: {
    id: -1,
    name: '',
  },
  stopReason: {
    icon: '',
    id: -1,
    name: '',
  },
  stopNote: '',
};
