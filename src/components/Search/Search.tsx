import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {
  Autocomplete,
  CircularProgress,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import { useDebouncedCallback } from 'use-debounce';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import {
  People,
} from '../../types';
import {
  DEFAULT_PERSON,
} from '../../helpers/constants';
import { fetchPeopleJSON } from '../../helpers/helpers';
import { useGameManagement } from '../../contexts/GameContext/hook';
import { useLoadingStatus } from '../../contexts/FetchStatus';

export const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Array<People>>([]);
  const [currentPerson, setCurrentPerson] = useState<People>(DEFAULT_PERSON);

  const {
    people,
    setPeople,
  } = useGameManagement();

  const { isLoading } = useLoadingStatus();

  const isSearchDisabled = isLoading || people.length >= 2;

  const loading = isSearchOpen && options.length === 0;
  const isButtonDisabled = isSearchDisabled || !!people.find(person => (
    person.name === currentPerson?.name
  )) || !currentPerson?.name;

  const debouncedChange = useDebouncedCallback(
    async ({ target }: ChangeEvent<HTMLInputElement>) => {
      fetchPeopleJSON(`https://swapi.dev/api/people/?search=${target.value}`)
        .then(res => {
          setOptions(res.results);
        });
    }, 400
  );

  const handleAddPlayer = useCallback(() => {
    setPeople([...people, currentPerson]);
    setCurrentPerson(DEFAULT_PERSON);
  }, [currentPerson]);

  useEffect(() => {
    if (!isSearchOpen) {
      setOptions([]);
    }
  }, [isSearchOpen]);

  return (
    <>
      <Grid container>
        <Grid item>
          <Autocomplete
            sx={{ width: 300 }}
            open={isSearchOpen}
            onOpen={() => setIsSearchOpen(true)}
            onClose={() => setIsSearchOpen(false)}
            getOptionLabel={option => option.name}
            options={options}
            disabled={isSearchDisabled}
            onChange={(e, obj) => setCurrentPerson(obj as People)}
            renderInput={params => (
              <>
                <TextField
                  {...params}
                  onChange={debouncedChange}
                  label="Search player"
                  placeholder="Type player name"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {
                          loading && (
                            <CircularProgress
                              color="inherit"
                              size={20}
                            />
                          )
                        }
                        {
                          params.InputProps.endAdornment
                        }
                      </>
                    ),
                  }}
                />
              </>
            )}
          />
        </Grid>
        <Grid item>
          <Box sx={{ pl: 2 }}>
            <Button
              variant="contained"
              onClick={handleAddPlayer}
              disabled={isButtonDisabled}
              type="button"
            >
              Add
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
