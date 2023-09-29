import {ValueProps} from '../../../components/elements/Select/SelectTypes';

export type StopRecordComponentProps = {
  isLoading: boolean;
  isFetching: boolean;
  machineries: MachineriesProps[];
  farms: FarmsProps[];
  reasons: ReasonsProps[];
  submit(data: any): void;
};

export type ReasonsProps = {
  id: number;
  name: string;
  icon: string;
};

export type FarmsProps = {
  id: number;
  name: string;
  growerId: number;
  growerName: string;
  fields: FarmFieldProps[];
};

export type FarmFieldProps = {id: number; name: string};

export type MachineriesProps = {
  id: number;
  name: string;
  serialNumber?: string;
  growerId: number;
};

export type InitialValuesProps = {
  machinerie: ValueProps;
  farm: ValueProps;
  fieldOption: ValueProps;
  stopReason: ValueProps;
  stopNote?: string;
  timer?: number;
};

export type StopData = {
  uuid: string | number[];
  note?: string;
  idFarm: number;
  idField: number;
  idReason: number;
  idMachinery: number;
  minutes: number;
  longitude: number | string;
  latitude: number | string;
};
