import * as React from 'react';
import {
  CssBaseline,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
  Typography,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
  FormHelperText
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  AccountCircle
} from '@mui/icons-material';

import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

import { CustomInput } from './CustomInput';
import RouterLink from './RouterLink';
import SocialButtons from './SocialButtons';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export default function SignIn() {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false
  });
  const [loading, setLoading] = React.useState(false);
  const { signIn } = useAuth();
  const snackbar = useAlert();

  const handleChange =
    (prop: keyof State) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    await signIn(values.email, values.password)
      .then(() => {
        snackbar.show('Welcome!', 'success');
      })
      .catch(() => {
        snackbar.show(
          'Wrong email or password, please try again',
          'error'
        );
        setLoading(false);
      });
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          sx={{ mb: 3 }}
        >
          <AccountCircle
            fontSize="large"
            color="disabled"
            sx={{ fontSize: 48 }}
          />
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Welcome! Please sign in to continue
          </Typography>
        </Stack>
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
              value={values.email}
              onChange={handleChange('email')}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="password-input">
              Password:
            </InputLabel>
            <CustomInput
              id="password-input"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ position: 'absolute', right: '16px' }}
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <Grid container>
            <Grid item xs sx={{ textAlign: 'start' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    size="small"
                  />
                }
                label="Remember me"
              />
            </Grid>
            <Grid
              item
              xs
              sx={{
                textAlign: 'end',
                alignSelf: 'center'
              }}
            >
              <Typography variant="body2">
                <RouterLink
                  label="Forgot password?"
                  to="/password-reset"
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{ mt: 2, mb: 2, px: 4, py: 1 }}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mr: 1, mb: 2 }}
              >
                {`Don't have an account? `}
                <RouterLink label="Sign Up" to="/signup" />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider>or</Divider>
        <SocialButtons />
      </Box>
    </>
  );
}
