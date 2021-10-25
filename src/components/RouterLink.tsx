import { Link as MaterialLink } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  to: string;
}

export default function RouterLink({ label, to }: Props) {
  return (
    <MaterialLink underline="hover" component={Link} to={to}>
      {label}
    </MaterialLink>
  );
}
