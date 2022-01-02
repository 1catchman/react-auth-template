import * as React from 'react';
import {
  CssBaseline,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Grid,
  Button
} from '@mui/material';

import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

import { CustomInput } from './CustomInput';
import RouterLink from './RouterLink';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const { currentUser, resetPassword } = useAuth();
  const snackbar = useAlert();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      setLoading(true);
      await resetPassword(email);
      snackbar.show(
        'Check your inbox for further instructions',
        'success'
      );
    } catch {
      snackbar.show('Wrong or invalid email', 'error');
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Reset Your Accout Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="email-input">
              Email Address:
            </InputLabel>
            <CustomInput
              id="email-input"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="error"
                disabled={loading}
                sx={{ mt: 2, mb: 2, px: 4, py: 1 }}
              >
                Reset Password
              </Button>
            </Grid>
            <Grid item>
              {currentUser === null ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mr: 1, mb: 2 }}
                >
                  {`Don't have an account? `}
                  <RouterLink label="Sign Up" to="/signup" />
                </Typography>
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
