import React from 'react';

import Grid from '@mui/material/Grid';

import { Person } from '../Person';
import { People } from '../../types';
import { getRandomInt } from '../../helpers/numbers';
import { CARD_COLORS } from '../../helpers/constants';

export interface CardsProps {
  people?: Array<People>;
  winner: People | null;
}

export const Cards = ({
  people = [],
  winner,
}: CardsProps) => (
  <>
    {
      people.map(person => {
        const getCardColor: string = CARD_COLORS[getRandomInt(1, CARD_COLORS.length)];

        return (
          <Grid
            item
            xs={4}
            key={person.name}
          >
            <Person
              color={getCardColor}
              isWinner={winner?.name === person.name}
              {...person}
            />
          </Grid>
        );
      })
    }
  </>
);
