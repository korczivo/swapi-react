import React from 'react';

import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Cards } from '../../components/Cards';
import { useLoadingStatus } from '../../contexts/FetchStatus';
import { useGameManagement } from '../../contexts/GameContext/hook';
import { CardsWrapper } from './GameCards.styles';

export const GameCards = () => {
  const {
    isLoading,
  } = useLoadingStatus();

  const {
    people,
    winner,
  } = useGameManagement();

  const isInfoText = !people?.length && !isLoading;

  return (
    <CardsWrapper
      alignItems="center"
      container
      justifyContent="center"
      spacing={2}
    >
      {
        isInfoText && (
          <Grid>
            <Typography
              variant="h3"
            >
              No players yet.
            </Typography>
          </Grid>
        )
      }
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
    </CardsWrapper>
  );
};
