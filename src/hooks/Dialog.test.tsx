import React from 'react';

import {
  fireEvent,
  render,
  screen,
  within,
} from '@testing-library/react';
import Button from '@mui/material/Button';

import { useDialog } from './useDialog';
import { DialogTypeEnum } from '../types/Common';
import { People } from '../types';
import { Person } from '../components/Person';

const DEFAULT_PERSON: People = {
  birth_year: '19BBY',
  eye_color: 'blue',
  films: ['Film1', 'Film2'],
  gender: 'male',
  hair_color: 'blond',
  height: '172',
  homeworld: 'https://swapi.dev/api/planets/1/',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'fair',
  species: ['https://swapi.dev/api/species/1/'],
  starships: ['Starship1'],
  url: '',
  vehicles: ['https://swapi.dev/api/species/1/'],
};

const ModalMock = ({ details }: { details: People }) => {
  const {
    CustomDialog,
    handleOpenDialog,
  } = useDialog();

  return (
    <>
      <CustomDialog
        title="Player details"
        details={details}
      />
      <Button onClick={() => handleOpenDialog(DialogTypeEnum.playerDetails)}>Show modal</Button>
    </>
  );
};

const PlayerCardMock = ({ person }: { person: People }) => (
  <Person
    color="#000"
    isWinner
    {...person}
  />
);

const openModal = () => {
  render(<ModalMock details={DEFAULT_PERSON} />);

  fireEvent.click(screen.getByText('Show modal'));
};

describe('Modal', () => {
  it('should render the correct title of modal', () => {
    render(<PlayerCardMock person={DEFAULT_PERSON} />);

    fireEvent.click(screen.getByText('Details'));

    const dialogTitle = screen.getByText('Player details');

    expect(dialogTitle).toBeTruthy();
  });

  it('should render modal with base details', () => {
    openModal();

    const name = screen.getByText(`Name: ${DEFAULT_PERSON.name}`);
    const mass = screen.getByText(`Mass: ${DEFAULT_PERSON.mass}`);
    const birth_year = screen.getByText(`Birth year: ${DEFAULT_PERSON.birth_year}`);
    const gender = screen.getByText(`Gender: ${DEFAULT_PERSON.gender}`);
    const height = screen.getByText(`Height: ${DEFAULT_PERSON.height}`);

    expect(name).toBeInTheDocument();
    expect(mass).toBeInTheDocument();
    expect(birth_year).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
    expect(height).toBeInTheDocument();
  });

  it('should render modal with films', () => {
    openModal();

    const filmsList = screen.getAllByRole('list')[0];
    const { getAllByRole } = within(filmsList);
    const filmsItems = getAllByRole('listitem');

    expect(filmsItems.length).toBe(2);
  });

  it('should render modal with starships', () => {
    openModal();

    const starships = screen.getAllByRole('list')[1];
    const { getAllByRole } = within(starships);
    const starshipsItems = getAllByRole('listitem');

    expect(starshipsItems.length).toBe(1);
  });

  it('should open modal component', () => {
    render(<PlayerCardMock person={DEFAULT_PERSON} />);

    fireEvent.click(screen.getByText('Details'));

    const titleElement = screen.getByText('Player details');

    expect(titleElement).toBeInTheDocument();
  });

  it('should close modal component', () => {
    render(<PlayerCardMock person={DEFAULT_PERSON} />);

    fireEvent.click(screen.getByText('Details'));

    fireEvent.click(screen.getByText('Close'));

    const dialogTitle = screen.queryByText('Player details');

    expect(dialogTitle).toBeNull();
  });
});
