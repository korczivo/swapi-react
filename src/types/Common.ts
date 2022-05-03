import {
  People,
} from './People';

export interface ResponseDataCustom {
  results: Array<People>;
}

export interface ResponseData extends Response {
  title: string;
  results: Array<People>;
}

export type Nullable<T = undefined> = T | null;

export enum DialogTypeEnum {
  playerDetails = 'playerDetails',
}

export interface DialogProps {
  onConfirm?: () => void;
  title: string;
  details: People;
}

export interface Film {
  title: string;
}

export interface Starship {
  name: string;
}
