import React, {useState} from 'react';
import {
  FarmFieldProps,
  InitialValuesProps,
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
import {ValueProps} from '../../../components/elements/Select/SelectTypes';

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

  return (
    <S.Wrapper>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validationSchema={Yup.object().shape<Shape<InitialValuesProps>>({
          machinerie: Yup.object().shape<Shape<ValueProps>>({
            key: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          farm: Yup.object().shape<Shape<ValueProps>>({
            key: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          fieldOption: Yup.object().shape<Shape<ValueProps>>({
            key: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          stopReason: Yup.object().shape<Shape<ValueProps>>({
            key: Yup.number().moreThan(0, 'Campo obrigatório'),
          }),
          stopNote: Yup.string(),
          timer: Yup.number(),
        })}
        onSubmit={values => {
          onSubmit(values);
        }}>
        {({handleSubmit, values, errors, setFieldValue, validateField}) => {
          // console.log('errors', errors); // remove logs

          return (
            <>
              <S.Content>
                <KeyboardAvoidingView>
                  <S.EquipmentContent>
                    <Text color="secondaryDark" bold variant="small">
                      Equipamento
                    </Text>
                    <Select
                      placeholder="Select"
                      value={values?.machinerie}
                      hasError={!!errors?.machinerie?.key}
                      errorMessage={errors?.machinerie && errors.machinerie.key}
                      options={machineries.map(machinerie => ({
                        value: machinerie?.name,
                        key: machinerie?.id,
                        subtitle: machinerie?.serialNumber,
                      }))}
                      onChangeValue={value => {
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
                        placeholder="Select"
                        value={values?.farm}
                        hasError={!!errors.farm}
                        errorMessage={errors.farm ? errors.farm.key : ''}
                        options={farms.map(farm => ({
                          value: farm?.name,
                          key: farm?.id,
                        }))}
                        onChangeValue={value => {
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
                        placeholder="Select"
                        value={values?.fieldOption}
                        hasError={!!errors.fieldOption}
                        errorMessage={
                          errors?.fieldOption ? errors?.fieldOption.key : ''
                        }
                        options={fieldOptions.map(fieldOption => ({
                          value: fieldOption?.name,
                          key: fieldOption?.id,
                        }))}
                        onChangeValue={value => {
                          setFieldValue('fieldOption', value);
                          validateField('fieldOption');
                        }}
                      />
                    </S.Field>
                  </S.FarmFirldGroup>
                  <StopReasons>
                    <StopReasonsTitle>Motivo da Parada</StopReasonsTitle>
                    <StopReasonsContent>
                      {reasons?.map(reason => {
                        return (
                          <StopReasonsLine
                            // adicionar um skeleton aqui Quando não possuir nada no estado
                            description={reason.name}
                            iconPath={reason.icon}
                            id={reason.id}
                            isSelected={
                              values.stopReason
                                ? reason.id === values.stopReason?.key
                                : false
                            }
                            onPress={() => {
                              setFieldValue('stopReason', {
                                description: reason.name,
                                key: reason.id,
                              });
                              validateField('stopReason');
                            }}
                          />
                        );
                      })}
                    </StopReasonsContent>
                    <>
                      {!!errors.stopReason && (
                        <Text color="error" bold>
                          <>{errors.stopReason.key}</>
                        </Text>
                      )}
                    </>
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
                    onPress={value => setFieldValue('timer', value)}
                    value={values?.timer ?? 0}
                    onError={!errors.timer}
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
    key: -1,
    value: '',
  },
  farm: {
    key: -1,
    value: '',
  },
  fieldOption: {
    key: -1,
    value: '',
  },
  stopReason: {
    key: -1,
    value: '',
  },
  stopNote: '',
};
