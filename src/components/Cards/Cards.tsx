import React from 'react';

import Box from '@mui/material/Box';

import { Person } from '../Person';
import { People } from '../../types';

export interface CardsProps {
  people?: Array<People>;
  winner: People | null;
}

export const Cards = ({
  people = [],
  winner,
}: CardsProps) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      width: 600,
    }}
    data-testid="cards-row"
  >
    {
      people.map(person => (
        <Person
          key={person.name}
          isWinner={winner?.name === person.name}
          {...person}
        />
      ))
    }
  </Box>
);
