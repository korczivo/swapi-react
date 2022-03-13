import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

import { People } from '../../types';
import { DEFAULT_COUNTER } from '../../helpers/constants';

export type GameContextTypes = [
    Array<People>,
    Dispatch<SetStateAction<Array<People>>>,
    People | null,
    Dispatch<SetStateAction<People | null>>,
    typeof DEFAULT_COUNTER,
    Dispatch<SetStateAction<typeof DEFAULT_COUNTER>>
]

export const GameContext = createContext([] as unknown as GameContextTypes);
