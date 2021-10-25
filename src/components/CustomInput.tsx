import { alpha, styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const CustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2)
  },
  '& + .MuiFormHelperText-root': {
    marginBottom: theme.spacing(2),
    color: theme.palette.error.main
  },
  '&.Mui-error input': {
    borderColor: theme.palette.error.main,
    '&:focus': {
      boxShadow: `${alpha(
        theme.palette.error.main,
        0.25
      )} 0 0 0 0.2rem`,
      borderColor: theme.palette.error.main
    }
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor:
      theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    maxWidth: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow'
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(
        theme.palette.primary.main,
        0.25
      )} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main
    }
  }
}));
