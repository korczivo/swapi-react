import {
  ReactNode,
  useState,
} from 'react';

import { GameContext } from './context';
import { People } from '../../types';
import { DEFAULT_COUNTER } from '../../helpers/constants';

interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [people, setPeople] = useState<Array<People>>([]);
  const [winner, setWinner] = useState<People | null>(null);
  const [score, setScore] = useState<typeof DEFAULT_COUNTER>(DEFAULT_COUNTER);

  return (
    <GameContext.Provider value={[
      people,
      setPeople,
      winner,
      setWinner,
      score,
      setScore,
    ]}
    >
      {children}
    </GameContext.Provider>
  );
};
