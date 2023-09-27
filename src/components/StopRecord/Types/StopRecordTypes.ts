export type StopRecordComponentProps = {
  isLoading: boolean;
  machineries?: MachineriesProps[];
  farms?: FarmsProps[];
  reasons?: ReasonsProps[];
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
