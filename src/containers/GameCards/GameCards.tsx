import React from 'react';

import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';

import { Cards } from '../../components/Cards';
import { useLoadingStatus } from '../../contexts/FetchStatus';
import { useGameManagement } from '../../contexts/GameContext/hook';

export const GameCards = () => {
  const {
    isLoading,
  } = useLoadingStatus();

  const {
    people,
    winner,
  } = useGameManagement();

  return (
    <Grid
      container
      mt={5}
    >
      {
        isLoading && <CircularProgress />
      }
      {
        !isLoading && (
          <Cards
            people={people}
            winner={winner}
          />
        )
      }
    </Grid>
  );
};
