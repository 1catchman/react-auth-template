import { Stack, Button } from '@mui/material';
import {
  FacebookOutlined,
  Google,
  GitHub
} from '@mui/icons-material';

export default function SocialButtons() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Button
        variant="outlined"
        startIcon={<Google />}
        size="large"
        sx={{ px: 4 }}
      >
        Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<FacebookOutlined />}
        size="large"
        sx={{ px: 4 }}
      >
        Facebook
      </Button>
      <Button
        variant="outlined"
        startIcon={<GitHub />}
        size="large"
        sx={{ px: 4 }}
      >
        Github
      </Button>
    </Stack>
  );
}
