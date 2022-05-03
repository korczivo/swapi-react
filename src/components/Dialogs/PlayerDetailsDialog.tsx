import React from 'react';

import { DialogContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {
  DialogProps,
} from '../../types/Common';

export const PlayerDetailsDialog = ({
  title,
  details,
  onConfirm,
}: DialogProps) => (
  <DialogContent>
    <div>
      <Typography
        variant="h5"
        component="div"
        color="secondary.contrastText"
        mb={5}
      >
        {title}
      </Typography>
      <div>
        {`Name: ${details?.name}`}
      </div>
      <div>
        {`Mass: ${details?.mass}`}
      </div>
      <div>
        {`Birth year: ${details?.birth_year}`}
      </div>
      <div>
        {`Gender: ${details?.gender}`}
      </div>
      <div>
        {`Height: ${details?.height}`}
      </div>
      {
        !!details?.films.length && (
          <>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              mt={2}
            >
              Films
            </Typography>
            <ul>
              {
                details.films?.map(item => <li key={item}>{item}</li>)
              }
            </ul>
          </>
        )
      }
      {
        !!details?.starships.length && (
          <>
            <Typography
              variant="h6"
              color="secondary.contrastText"
              mt={2}
            >
              Starships
            </Typography>
            <ul>
              {
                details.starships?.map(item => <li key={item}>{item}</li>)
              }
            </ul>
          </>
        )
      }
      <Button
        onClick={onConfirm}
        variant="contained"
      >
        Close
      </Button>
    </div>
  </DialogContent>
);
