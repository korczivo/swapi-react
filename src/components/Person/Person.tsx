import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { People } from '../../types';
import { useDialog } from '../../hooks/useDialog';
import {
  DialogTypeEnum,
  Film,
  Starship,
} from '../../types/Common';

interface PersonProps extends People {
  isWinner: boolean;
  color: string;
}

export const Person = ({
  name,
  mass,
  height,
  gender,
  homeworld,
  birth_year,
  starships: ownedStarships,
  films: playedFilms,
  isWinner,
  color,
}: PersonProps) => {
  const [films, setFilms] = useState<Array<string>>([]);
  const [starships, setStarships] = useState<Array<string>>([]);

  const {
    CustomDialog,
    handleCloseDialog,
    handleOpenDialog,
  } = useDialog();

  const isWinnerText = isWinner && 'Win!';

  const handlePlayerDialog = () => handleOpenDialog(DialogTypeEnum.playerDetails);

  const fetchAllAdditionalDetails = useCallback(async (urls: Array<string>) => {
    const response = await Promise.all(urls.map(url => fetch(url)));

    return Promise.all(response.map(res => res.json()));
  }, [playedFilms, ownedStarships]);

  const handleFilms = async () => {
    const fetchedFilms = await fetchAllAdditionalDetails(playedFilms)
      .then((res: Array<Film>) => res.map(item => item.title));

    setFilms(fetchedFilms);
  };

  const handleStarships = async () => {
    const fetchedStarships = await fetchAllAdditionalDetails(ownedStarships)
      .then((res: Array<Starship>) => res.map(item => item.name));

    setStarships(fetchedStarships);
  };

  useEffect(() => {
    handleFilms();
    handleStarships();
  }, []);

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
      <CustomDialog
        title="Player details"
        onConfirm={handleCloseDialog}
        details={{
          birth_year,
          films,
          gender,
          height,
          homeworld,
          mass,
          name,
          starships,
        } as People}
      />
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
      <Button
        onClick={handlePlayerDialog}
        variant="contained"
      >
        Details
      </Button>
    </PersonBox>
  );
};
