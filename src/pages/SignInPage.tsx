import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';

import SignIn from '../components/SignIn';

const Form = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 16
}));

export default function SingInPage() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs sx={{ maxWidth: '460px', width: '100%' }}>
        <Form>
          <SignIn />
        </Form>
      </Grid>
    </Grid>
  );
}
