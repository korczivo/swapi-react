import React from 'react';

import {
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import { useGameManagement } from '../../contexts/GameContext/hook';
import { useLoadingStatus } from '../../contexts/FetchStatus';
import {
  ScoreTable,
  ScoreTableCell,
  ScoreTableRow,
} from './GameInfo.styles';

export const GameInfo = () => {
  const {
    score,
  } = useGameManagement();
  const { errorMessage } = useLoadingStatus();

  return (
    <>
      <Grid
        container
        justifyContent="center"
      >
        <Grid
          item
          xs={4}
        >
          <TableContainer>
            <ScoreTable>
              <TableHead>
                <ScoreTableRow>
                  <ScoreTableCell>Left player</ScoreTableCell>
                  <ScoreTableCell>Right player</ScoreTableCell>
                </ScoreTableRow>
              </TableHead>
              <TableBody>
                <ScoreTableRow>
                  <ScoreTableCell>{score?.left}</ScoreTableCell>
                  <ScoreTableCell>{score?.right}</ScoreTableCell>
                </ScoreTableRow>
              </TableBody>
            </ScoreTable>
          </TableContainer>
        </Grid>
      </Grid>
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
