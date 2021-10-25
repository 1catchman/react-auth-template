import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useAlert } from '../context/AlertContext';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return (
      <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    );
  }
);

export default function CustomAlert() {
  const { alert, hide } = useAlert();

  const handleClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    hide();
  };

  if (!alert.visible) return null;

  return (
    <Snackbar
      open={alert.visible}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={alert.type}
        sx={{ width: '100%' }}
      >
        {alert.text}
      </Alert>
    </Snackbar>
  );
}
