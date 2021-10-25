import { styled } from '@mui/material/styles';
import { Container, Grid, Paper } from '@mui/material';

import PasswordReset from '../components/PasswordReset';

const Form = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 16
}));

export default function PasswordResetPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container justifyContent="center">
        <Form>
          <PasswordReset />
        </Form>
      </Grid>
    </Container>
  );
}
