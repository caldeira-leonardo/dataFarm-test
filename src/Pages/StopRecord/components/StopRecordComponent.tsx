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
import {KeyboardAvoidingView, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Shape} from '../../../components/elements/YupShape/YupShape';
import {ValueProps} from '../../../components/elements/Select/SelectTypes';
import {initialValues} from './StopRecordSchemas';
import {Keyboard} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

const StopRecordComponent = ({
  reasons,
  farms,
  machineries,
  submit,
  isLoading,
}: // isFetching,
StopRecordComponentProps) => {
  const [fieldOptions, setFieldOptions] = useState<FarmFieldProps[]>([]);

  function onClickSubmit(values: any) {
    submit(values);
  }

  function handleSelectFarm(item: any) {
    const selectedFarm = farms.filter(farm => farm.id === item.key)[0];

    setFieldOptions(selectedFarm?.fields);
  }

  return (
    <S.Wrapper>
      <Formik
        initialValues={initialValues}
        validateOnBlur={false}
        validateOnChange={false}
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
          timer: Yup.number().required().moreThan(0, 'Campo obrigatório'),
        })}
        onSubmit={(values, {resetForm, validateForm}) => {
          validateForm();
          console.log('passou do validate'); // remove logs
          onClickSubmit(values);
          Keyboard.dismiss();
          resetForm();
        }}>
        {({handleSubmit, values, errors, setFieldValue, setFieldError}) => {
          // console.log('values', values); // remove logs

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
                        setFieldError('machinerie', undefined);
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
                          setFieldError('farm', undefined);
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
                          setFieldError('fieldOption', undefined);
                        }}
                      />
                    </S.Field>
                  </S.FarmFirldGroup>
                  <StopReasons>
                    <StopReasonsTitle>Motivo da Parada</StopReasonsTitle>
                    <StopReasonsContent>
                      {reasons?.map(reason => {
                        return (
                          <View key={reason.icon}>
                            <StopReasonsLine
                              // adicionar um skeleton aqui Quando não possuir nada no estado
                              description={reason.name}
                              iconPath={reason.icon}
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
                                setFieldError('stopReason', undefined);
                              }}
                            />
                          </View>
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
                      value={values.stopNote}
                      onChangeText={value => {
                        setFieldValue('stopNote', value);
                        setFieldError('stopNote', undefined);
                      }}
                    />
                  </S.NoteContent>
                </KeyboardAvoidingView>
              </S.Content>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <S.ButtonsWrapper>
                  <S.ButtonContent>
                    <TimeCounter
                      onPress={value => {
                        setFieldValue('timer', value);
                        Keyboard.dismiss();
                        setFieldError('timer', undefined);
                      }}
                      value={values?.timer}
                      onError={!!errors.timer}
                    />
                  </S.ButtonContent>
                  <S.ButtonContent>
                    <Button
                      onPress={() => handleSubmit()}
                      title="salvar"
                      isLoading={isLoading}
                    />
                  </S.ButtonContent>
                </S.ButtonsWrapper>
              </TouchableWithoutFeedback>
            </>
          );
        }}
      </Formik>
    </S.Wrapper>
  );
};

export default StopRecordComponent;
