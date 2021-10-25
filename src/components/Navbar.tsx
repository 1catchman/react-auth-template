import {
  AppBar,
  Toolbar,
  TextField,
  Autocomplete,
  Box
} from '@mui/material/';
import { Link } from 'react-router-dom';

const routes = [
  { label: 'Profile', to: '/' },
  { label: 'Sign In', to: '/signin' },
  { label: 'Sign Up', to: '/signup' },
  { label: 'Password Reset', to: '/password-reset' }
];

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" sx={{ p: 2 }}>
      <Toolbar>
        <Autocomplete
          id="autocomplete"
          disableClearable
          options={routes}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Link
              key={option.label}
              to={option.to}
              style={{ textDecoration: 'none' }}
            >
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.label}
              </Box>
            </Link>
          )}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose component"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password'
              }}
            />
          )}
        />
      </Toolbar>
    </AppBar>
  );
}
