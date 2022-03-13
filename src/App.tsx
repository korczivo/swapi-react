import React, {
  useEffect,
} from 'react';

import {
  Container,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import { GameCards } from './containers/GameCards';
import { GameManagement } from './containers/GameManagement';
import { useGameManagement } from './contexts/GameContext/hook';
import { GameInfo } from './containers/GameInfo';

const App = () => {
  const {
    handleClearGame,
  } = useGameManagement();

  useEffect(() => () => handleClearGame(), []);

  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        style={{ margin: 20 }}
      >
        Star Wars Game
      </Typography>

      <GameManagement />
      <GameInfo />
      <GameCards />
    </Container>
  );
};

export default App;
