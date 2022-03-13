import { People } from './People';

export interface ResponseDataCustom {
  results: Array<People>;
}

export interface ResponseData extends Response {
  results: Array<People>;
}

