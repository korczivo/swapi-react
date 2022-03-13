import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

export type LoadingStatusContextProps = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  string,
  Dispatch<SetStateAction<string>>
] | []

export const LoadingStatusContext = createContext([] as LoadingStatusContextProps);
