import React from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

import { People } from '../../types';

interface PersonProps extends People {
  isWinner: boolean;
  color: string;
}

export const Person = ({
  name,
  mass,
  isWinner,
  color,
}: PersonProps) => {
  const isWinnerText = isWinner && 'Win!';

  const PersonBox = styled(Box)({
    alignItems: 'center',
    backgroundColor: color,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    justifyContent: 'center',
    padding: 25,
    textAlign: 'center',
  });

  return (
    <PersonBox>
      <Typography
        variant="h4"
        component="div"
        color="secondary.contrastText"
      >
        {name}
      </Typography>
      <Typography
        color="text.secondary"
      >
        {`Mass: ${mass}`}
      </Typography>
      <Typography
        color="text.secondary"
        variant="h6"
      >
        { isWinnerText }
      </Typography>
    </PersonBox>
  );
};
