import React from 'react';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Search } from '../../components/Search';
import { useLoadingStatus } from '../../contexts/FetchStatus';
import { useGameManagement } from '../../contexts/GameContext/hook';

export const GameManagement = () => {
  const { isLoading } = useLoadingStatus();
  const {
    handleRoll,
    handleClearPlayers,
    handleClearGame,
    people,
  } = useGameManagement();

  return (
    (
      <>
        <Search />
        <Grid container>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pb: 5,
            pt: 5,
          }}
          >
            <Button
              onClick={handleRoll}
              disabled={isLoading}
              variant="contained"
            >
              Roll players
            </Button>
            {
              !!people.length && (
                <Button
                  onClick={handleClearPlayers}
                  disabled={isLoading}
                  variant="contained"
                >
                  Clear players
                </Button>
              )
            }
            <Button
              onClick={handleClearGame}
              disabled={isLoading}
              variant="contained"
            >
              New game
            </Button>
          </Box>
        </Grid>
      </>
    )
  );
};
