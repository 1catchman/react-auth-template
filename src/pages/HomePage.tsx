import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Paper,
  CssBaseline,
  Box,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

const Form = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 16
}));

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { currentUser, logOut, deleteCurrentUser } = useAuth();
  const snackbar = useAlert();

  React.useEffect(() => {
    if (currentUser === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await logOut();
    } catch {
      snackbar.show('Something goes wrong', 'error');
      setLoading(false);
    }
    setLoading(false);
  };

  const onApplyToDelete = async () => {
    try {
      setLoading(true);
      await deleteCurrentUser();
      snackbar.show('Acccount deleted successfully', 'success');
      setOpen(false);
    } catch {
      snackbar.show('Something goes wrong', 'error');
      setLoading(false);
    }
    setOpen(false);
    setLoading(true);
  };

  return (
    <Grid container justifyContent="center">
      <Form>
        <CssBaseline />
        <Box
          sx={{
            width: '460px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper'
            }}
          >
            <ListItem>
              <ListItemText
                primary="Email"
                secondary={currentUser?.email || ''}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Registration date"
                secondary={currentUser?.metadata.creationTime || ''}
              />
            </ListItem>
          </List>
          <Stack spacing={2} direction="column">
            <Button
              variant="contained"
              disabled={loading}
              onClick={handleLogOut}
            >
              Log out
            </Button>
            <Button
              color="error"
              variant="outlined"
              onClick={handleClickOpen}
              disabled={loading}
            >
              Delete account
            </Button>
          </Stack>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Are you sure?'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This operation cannot be undone, are you sure you want
                to delete your account?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onApplyToDelete} autoFocus>
                Success
              </Button>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Form>
    </Grid>
  );
}
