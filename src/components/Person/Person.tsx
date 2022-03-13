import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { People } from '../../types';

interface PersonProps extends People {
  isWinner: boolean;
}

export const Person = ({
  name,
  mass,
  gender,
  height,
  birth_year,
  isWinner,
}: PersonProps) => (
  <Card
    sx={{ minWidth: 275 }}
    style={{ background: isWinner ? '#38c038' : '#fff' }}
  >
    <CardContent>
      <Typography
        color="text.secondary"
        gutterBottom
      >
        {gender}
      </Typography>
      <Typography
        variant="h5"
        component="div"
      >
        {name}
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
      >
        {`Mass: ${mass}`}
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
      >
        {`Height: ${height}`}
      </Typography>
      <Typography
        sx={{ mb: 1.5 }}
        color="text.secondary"
      >
        {`Birth year: ${birth_year}`}
      </Typography>
    </CardContent>
  </Card>
);
