import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';

import RouterLink from '../components/RouterLink';

import SignUp from '../components/SignUp';
import Description from '../components/Description';

const Form = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 16
}));

export default function SignUpPage() {
  return (
    <>
      <Grid container justifyContent="flex-end" sx={{ mb: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mr: 1 }}
        >
          {'Already have an account? '}
          <RouterLink label="Sign In" to="/signin" />
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Description />
        </Grid>
        <Grid item xs={8}>
          <Form>
            <SignUp />
          </Form>
        </Grid>
      </Grid>
    </>
  );
}
