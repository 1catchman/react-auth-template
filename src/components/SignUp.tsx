import * as React from 'react';
import {
  CssBaseline,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
  FormHelperText
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';

import { validationSchema } from '../utils/validationSchema';
import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

import { CustomInput } from './CustomInput';
import SocialButtons from './SocialButtons';

export default function SignUn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { signUp } = useAuth();
  const snackbar = useAlert();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      await signUp(values.email, values.password)
        .then(() =>
          snackbar.show('User created successfully', 'success')
        )
        .catch((e) => {
          if (e.code === 'auth/email-already-in-use') {
            snackbar.show('Account already exist', 'error');
          } else {
            snackbar.show('Failed to create an account', 'error');
          }
        });
      setLoading(false);
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
          Create your account
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
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
              name="email"
              value={formik.values.email}
              error={
                formik.touched.email && Boolean(formik.errors.email)
              }
              onChange={formik.handleChange}
            />
            <FormHelperText>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="password-input">
              Password:
            </InputLabel>
            <CustomInput
              id="password-input"
              name="password"
              placeholder="8 character minimum"
              value={formik.values.password}
              error={
                formik.touched.password &&
                Boolean(formik.errors.password)
              }
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
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
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="password-confirm-input">
              Password Confirmation:
            </InputLabel>
            <CustomInput
              id="password-confirm-input"
              name="passwordConfirmation"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.passwordConfirmation}
              error={
                formik.touched.passwordConfirmation &&
                Boolean(formik.errors.passwordConfirmation)
              }
              onChange={formik.handleChange}
            />
            <FormHelperText>
              {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation}
            </FormHelperText>
          </FormControl>
          <Grid container direction="column" spacing={1}>
            <Grid item xs sx={{ textAlign: 'start' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    size="small"
                  />
                }
                label="Get updates and notifications about our product"
              />
            </Grid>
            <Grid item xs sx={{ textAlign: 'start' }}>
              <Typography variant="caption">
                {'By signing up to site you agree to our '}
                <Link href="#" variant="caption" underline="hover">
                  Terms of Service
                </Link>
                {' and '}
                <Link href="#" variant="caption" underline="hover">
                  Privacy Policy.
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            disabled={loading}
            sx={{ mt: 3, mb: 2, py: 1, width: '25ch' }}
          >
            Create account
          </Button>
        </Box>
        <Divider>or</Divider>
        <SocialButtons />
      </Box>
    </>
  );
}
