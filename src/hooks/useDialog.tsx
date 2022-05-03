import React, { useState } from 'react';

import { createPortal } from 'react-dom';
import { Dialog } from '@mui/material';

import {
  DialogProps,
  DialogTypeEnum,
  Nullable,
} from '../types/Common';
import { PlayerDetailsDialog } from '../components/Dialogs/PlayerDetailsDialog';

export const useDialog = () => {
  const [dialogType, setDialogType] = useState<Nullable<DialogTypeEnum>>();

  const handleOpen = (data: DialogTypeEnum) => setDialogType(data);
  const handleClose = () => setDialogType(null);

  const dialogComponent = (props: DialogProps) => (
    createPortal(
      <Dialog
        open={!!dialogType}
        onClose={handleClose}
      >
        {
          dialogType === DialogTypeEnum.playerDetails && (
            <PlayerDetailsDialog {...props} />
          )
        }
      </Dialog>,
      window.document.body
    )
  );

  return {
    CustomDialog: dialogComponent,
    handleCloseDialog: handleClose,
    handleOpenDialog: handleOpen,
  };
};
