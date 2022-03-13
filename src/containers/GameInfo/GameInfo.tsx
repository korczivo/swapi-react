import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import { useGameManagement } from '../../contexts/GameContext/hook';
import { useLoadingStatus } from '../../contexts/FetchStatus';

export const GameInfo = () => {
  const {
    score,
    winner,
    people,
  } = useGameManagement();
  const { errorMessage } = useLoadingStatus();

  return (
    <>
      <Grid
        item
        xs={4}
      >
        <TableContainer>
          <Table sx={{ minWidth: 100 }}>
            <TableHead>
              <TableRow>
                <TableCell>Left player</TableCell>
                <TableCell>Right player</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{score?.left}</TableCell>
                <TableCell>{score?.right}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {
        !people?.length && (
          <Grid
            container
            marginTop={2}
            data-testid="no-players"
          >
            No players yet.
          </Grid>
        )
      }
      {
        winner && (
          <Grid
            item
            xs={4}
          >
            {
              !winner?.name && <div>Game draw.</div>
            }
          </Grid>
        )
      }
      {
        errorMessage && (
          <Grid
            container
            marginTop={2}
          >
            {errorMessage}
          </Grid>
        )
      }
    </>
  );
};
