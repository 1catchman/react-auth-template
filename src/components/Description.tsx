import { PersonAdd } from '@mui/icons-material';
import { Card, CardContent, Stack, Typography } from '@mui/material';

import { theme } from '../utils/theme';

export default function Description() {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        backgroundColor: theme.palette.background.default
      }}
    >
      <CardContent sx={{ pt: 0 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PersonAdd
            fontSize="large"
            color="disabled"
            sx={{ fontSize: 46 }}
          />
          <Typography variant="overline" sx={{ fontSize: 16 }}>
            Sign Up Page
          </Typography>
        </Stack>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          Personal Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Feel free to edit your basic information such as name, email
          etc.
        </Typography>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          Two Factor Authentication
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You must setup a two factor authentication to go inline with
          our security guidlines.
        </Typography>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          Connect to Social Accounts
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Merge your facebook, google, github accounts to log in
          quickly next time.
        </Typography>
      </CardContent>
      <CardContent sx={{ pt: 0 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          Notification Preferences
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Control all our newsletter and email related notification to
          your inbox.
        </Typography>
      </CardContent>
    </Card>
  );
}
