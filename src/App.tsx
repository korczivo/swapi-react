import React, {
  useEffect,
} from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

import { GameCards } from './containers/GameCards';
import { GameManagement } from './containers/GameManagement';
import { useGameManagement } from './contexts/GameContext/hook';
import { GameInfo } from './containers/GameInfo';
import { Search } from './components/Search';

const App = () => {
  const {
    handleClearGame,
  } = useGameManagement();

  useEffect(() => () => handleClearGame(), []);

  return (
    <>
      <Box p={2}>
        <Typography
          variant="h5"
          fontWeight="bolder"
        >
          Star Wars Game
        </Typography>
      </Box>

      <main>
        <Container maxWidth="md">
          <Search />
          <GameInfo />
          <GameCards />
          <GameManagement />
        </Container>
      </main>
    </>
  );
};

export default App;
