import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useLoadingStatus } from '../../contexts/FetchStatus';
import { useGameManagement } from '../../contexts/GameContext/hook';

export const GameManagement = () => {
  const { isLoading } = useLoadingStatus();
  const {
    handleRoll,
    handleClearPlayers,
    handleClearGame,
    people,
    winner,
  } = useGameManagement();

  return (
    (
      <>
        <Grid
          container
          justifyContent="center"
          spacing={3}
        >
          <Grid item>
            <Button
              onClick={handleRoll}
              disabled={isLoading}
              variant="contained"
            >
              Roll players
            </Button>
          </Grid>
          {
            !!people.length && (
              <>
                <Grid item>
                  <Button
                    onClick={handleClearPlayers}
                    disabled={isLoading}
                    variant="contained"
                  >
                    Clear players
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleClearGame}
                    disabled={isLoading}
                    variant="contained"
                  >
                    New game
                  </Button>
                </Grid>
              </>
            )
          }
        </Grid>
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          mt={2}
        >
          {
            winner && (
              <Grid
                item
                xs={4}
              >
                {
                  !winner?.name && (
                    <Typography
                      variant="h5"
                      fontWeight="bolder"
                    >
                      Game draw.
                    </Typography>
                  )
                }
              </Grid>
            )
          }
        </Grid>
      </>
    )
  );
};
